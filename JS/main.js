document.addEventListener("DOMContentLoaded", () => {

  // ------------- Referencias al DOM -------------
  const cedulaInput       = document.getElementById("cedula");
  const perfilInput       = document.getElementById("perfil");
  const telefonoInput     = document.getElementById("telefono");
  const reunionConSelect  = document.getElementById("reunionCon");
  const otroReunionGroup  = document.getElementById("otroReunionGroup");
  const transporteSelect  = document.getElementById("transporte");
  const placaGroup        = document.getElementById("placaGroup");

  const horaSalidaSelect  = document.getElementById("horaSalida");
  const horaLlegadaSelect = document.getElementById("horaLlegada");
  const horaRetornoSelect = document.getElementById("horaRetorno");

  const form                  = document.getElementById("salidaForm");
  const loadingOverlay        = document.getElementById("loadingOverlay");
  const successNotification   = document.getElementById("successNotification");
  const errorNotification     = document.getElementById("errorNotification");
  const errorMessage          = document.getElementById("errorMessage");

  // ------------- Población de selects de horas -------------
  function cargarHoras(selectElement) {
    for (let h = 6; h <= 22; h++) {
      for (let m = 0; m < 60; m += 15) {
        const date = new Date();
        date.setHours(h, m, 0, 0);

        const horaAMPM = date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        const value = date.toTimeString().slice(0, 5);
        const option = document.createElement("option");
        option.value = value;
        option.textContent = horaAMPM;
        selectElement.appendChild(option);
      }
    }
  }

  cargarHoras(horaSalidaSelect);
  cargarHoras(horaLlegadaSelect);
  cargarHoras(horaRetornoSelect);

  // ------------- Mostrar/ocultar "Especifique con quién" -------------
  reunionConSelect.addEventListener("change", () => {
    if (reunionConSelect.value === "Otro") {
      otroReunionGroup.classList.remove("hidden");
      document.getElementById("otroReunion").setAttribute("required", "required");
    } else {
      otroReunionGroup.classList.add("hidden");
      document.getElementById("otroReunion").removeAttribute("required");
      document.getElementById("otroReunion").value = "";
    }
  });

  // ------------- Mostrar/ocultar campo placa -------------
  transporteSelect.addEventListener("change", () => {
    const valor = transporteSelect.value;
    if (valor === "Motocicleta" || valor === "Vehículo particular") {
      placaGroup.classList.remove("hidden");
      document.getElementById("placa").setAttribute("required", "required");
    } else {
      placaGroup.classList.add("hidden");
      document.getElementById("placa").removeAttribute("required");
      document.getElementById("placa").value = "";
    }
  });

  // ------------- Botón limpiar formulario -------------
  document.getElementById("resetBtn").addEventListener("click", () => {
    form.reset();

    // Limpiar campos readonly
    cedulaInput.value   = "";
    perfilInput.value   = "";
    telefonoInput.value = "";

    // Limpiar searchable select
    const searchInput = document.getElementById("nombreSearch");
    const hiddenInput = document.getElementById("nombre");
    if (searchInput) {
      searchInput.value = "";
      searchInput.classList.remove("has-value", "input-error");
    }
    if (hiddenInput) hiddenInput.value = "";

    // Ocultar grupos opcionales
    otroReunionGroup.classList.add("hidden");
    placaGroup.classList.add("hidden");

    hideNotification();
  });

  // ------------- Notificaciones -------------
  function hideNotification() {
    loadingOverlay.classList.add("hidden");
    successNotification.classList.add("hidden");
    errorNotification.classList.add("hidden");
  }

  function showLoading() {
    hideNotification();
    loadingOverlay.classList.remove("hidden");
  }

  function showSuccess() {
    hideNotification();
    successNotification.classList.remove("hidden");
    setTimeout(() => successNotification.classList.add("hidden"), 5000);
  }

  function showError(msg) {
    hideNotification();
    errorMessage.textContent = msg || "Ha ocurrido un error. Inténtelo nuevamente.";
    errorNotification.classList.remove("hidden");
  }

  // ------------- Envío del formulario a Firebase -------------
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validar que se haya seleccionado un nombre del buscador
    const nombreHidden = document.getElementById("nombre");
    if (!nombreHidden.value) {
      const searchInput = document.getElementById("nombreSearch");
      searchInput.classList.add("input-error");
      searchInput.focus();
      searchInput.setAttribute("title", "Seleccione un nombre de la lista");
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    showLoading();

    const fechaActual = new Date(form.fecha.value);
    const fechaISO    = fechaActual.toISOString();

    const formData = {
      fecha:          form.fecha.value,
      fechaISO:       fechaISO,
      lugarSalida:    form.lugarSalida.value,
      actividad:      form.actividad.value,
      lugarActividad: form.lugarActividad.value,
      horaSalida:     form.horaSalida.value,
      horaLlegada:    form.horaLlegada.value,
      horaRetorno:    form.horaRetorno.value,
      programada:     form.programada.value,
      reunionCon:     form.reunionCon.value,
      otroReunion:    form.otroReunion.value || "",
      nombre:         nombreHidden.value,
      cedula:         cedulaInput.value,
      perfil:         perfilInput.value,
      telefono:       telefonoInput.value,
      telContacto:    form.telContacto.value,
      carne:          form.carne.value,
      transporte:     form.transporte.value,
      placa:          form.placa ? form.placa.value || "" : "",
    };

    // Referencia a Firebase Realtime Database
    const dbRef = firebase.database().ref("formularios/salidas");

    dbRef.push(formData)
      .then(() => {
        showSuccess();
        form.reset();

        // Limpiar campos readonly
        cedulaInput.value   = "";
        perfilInput.value   = "";
        telefonoInput.value = "";

        // Limpiar searchable select
        const searchInput = document.getElementById("nombreSearch");
        const hiddenInput = document.getElementById("nombre");
        if (searchInput) {
          searchInput.value = "";
          searchInput.classList.remove("has-value", "input-error");
        }
        if (hiddenInput) hiddenInput.value = "";

        otroReunionGroup.classList.add("hidden");
        placaGroup.classList.add("hidden");
      })
      .catch((error) => {
        showError(error.message);
      });
  });

});
