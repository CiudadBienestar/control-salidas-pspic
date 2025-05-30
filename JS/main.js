// main.js

document.addEventListener("DOMContentLoaded", () => {
  const nombreSelect = document.getElementById("nombre");
  const cedulaInput = document.getElementById("cedula");
  const perfilInput = document.getElementById("perfil");
  const telefonoInput = document.getElementById("telefono");
  const reunionConSelect = document.getElementById("reunionCon");
  const otroReunionGroup = document.getElementById("otroReunionGroup");
  const transporteSelect = document.getElementById("transporte");
  const placaGroup = document.getElementById("placaGroup");

  const horaSalidaSelect = document.getElementById("horaSalida");
  const horaLlegadaSelect = document.getElementById("horaLlegada");
  const horaRetornoSelect = document.getElementById("horaRetorno");

  const form = document.getElementById("salidaForm");
  const loadingOverlay = document.getElementById("loadingOverlay");
  const successNotification = document.getElementById("successNotification");
  const errorNotification = document.getElementById("errorNotification");
  const errorMessage = document.getElementById("errorMessage");

  // ------------- Población de select horas -------------
  function cargarHoras(selectElement) {
    for (let h = 6; h <= 22; h++) {
      // horas de 6am a 10pm
      for (let m = 0; m < 60; m += 15) {
        const date = new Date();
        date.setHours(h);
        date.setMinutes(m);

        const horaAMPM = date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        const value = date.toTimeString().slice(0, 5); // Formato HH:MM en 24h como valor
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

  // ------------- Población del select nombre con personas -------------
  function cargarNombres() {
    personas.forEach((persona) => {
      const option = document.createElement("option");
      option.value = persona.nombre;
      option.textContent = persona.nombre;
      nombreSelect.appendChild(option);
    });
  }
  cargarNombres();

  // ------------- Al cambiar nombre, mostrar datos asociados -------------
  nombreSelect.addEventListener("change", () => {
    const seleccionado = personas.find((p) => p.nombre === nombreSelect.value);
    if (seleccionado) {
      cedulaInput.value = seleccionado.cedula;
      perfilInput.value = seleccionado.perfil;
      telefonoInput.value = seleccionado.telefono;
    } else {
      cedulaInput.value = "";
      perfilInput.value = "";
      telefonoInput.value = "";
    }
  });

  // ------------- Mostrar/ocultar campo "Especifique con quién" -------------
  reunionConSelect.addEventListener("change", () => {
    if (reunionConSelect.value === "Otro") {
      otroReunionGroup.classList.remove("hidden");
      document
        .getElementById("otroReunion")
        .setAttribute("required", "required");
    } else {
      otroReunionGroup.classList.add("hidden");
      document.getElementById("otroReunion").removeAttribute("required");
      document.getElementById("otroReunion").value = "";
    }
  });

  // ------------- Mostrar/ocultar campo placa según transporte -------------
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
    cedulaInput.value = "";
    perfilInput.value = "";
    telefonoInput.value = "";
    otroReunionGroup.classList.add("hidden");
    placaGroup.classList.add("hidden");
    hideNotification();
  });

  // ------------- Mostrar y ocultar notificaciones -------------
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
  }

  function showError(msg) {
    hideNotification();
    errorMessage.textContent =
      msg || "Ha ocurrido un error. Inténtelo nuevamente.";
    errorNotification.classList.remove("hidden");
  }

  // ------------- Envío del formulario a Firebase Realtime Database -------------
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    showLoading();

    const formData = {
      fecha: form.fecha.value,
      lugarSalida: form.lugarSalida.value,
      actividad: form.actividad.value,
      lugarActividad: form.lugarActividad.value,
      horaSalida: form.horaSalida.value,
      horaLlegada: form.horaLlegada.value,
      horaRetorno: form.horaRetorno.value,
      programada: form.programada.value,
      reunionCon: form.reunionCon.value,
      otroReunion: form.otroReunion.value || "",
      nombre: form.nombre.value,
      cedula: form.cedula.value,
      perfil: form.perfil.value,
      telefono: form.telefono.value,
      telContacto: form.telContacto.value,
      carne: form.carne.value,
      transporte: form.transporte.value,
      placa: form.placa.value || "",
    };
    const ordenCampos = [
      "fecha",
      "nombre",
      "cedula",
      "perfil",
      "telefono",
      "telContacto",
      "carne",
      "actividad",
      "programada",
      "lugarSalida",
      "lugarActividad",
      "horaSalida",
      "horaLlegada",
      "horaRetorno",
      "reunionCon",
      "otroReunion",
      "transporte",
      "placa",
    ];

    console.log("---- Registro ordenado ----");
    ordenCampos.forEach((campo) => {
      console.log(`${campo}: ${formData[campo] || ""}`);
    });

    // Referencia a Firebase Realtime Database
    const dbRef = firebase.database().ref("formularios/salidas");

    // Push datos
    dbRef
      .push(formData)
      .then(() => {
        showSuccess();
        form.reset();
        cedulaInput.value = "";
        perfilInput.value = "";
        telefonoInput.value = "";
        otroReunionGroup.classList.add("hidden");
        placaGroup.classList.add("hidden");
      })
      .catch((error) => {
        showError(error.message);
      });
  });
});
