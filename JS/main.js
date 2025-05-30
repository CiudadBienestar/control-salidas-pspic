// === CONFIGURACIÓN GLOBAL ===
const CONFIG = {
  GOOGLE_SCRIPT_URL:
    "https://script.google.com/macros/s/AKfycbyEc3gEUOpPTAm4kbOelUL-IqLT1mOAW8TpJahsafz7knyHoP7rMZMNS0ITY0krKjA/exec",
  HORAS: { inicio: 8, fin: 18, intervalo: 30 },
};

// === UTILIDADES ===
const Utils = {
  generarHoras: (selectId) => {
    const select = document.getElementById(selectId);
    const { inicio, fin, intervalo } = CONFIG.HORAS;

    select.innerHTML = '<option value="">Seleccione hora</option>';
    for (let h = inicio; h <= fin; h++) {
      for (let m = 0; m < 60; m += intervalo) {
        const hora = `${h.toString().padStart(2, "0")}:${m
          .toString()
          .padStart(2, "0")}`;
        const option = document.createElement("option");
        option.value = hora;
        option.textContent = hora;
        select.appendChild(option);
      }
    }
  },

  mostrarElemento: (id, mostrar) => {
    const el = document.getElementById(id);
    el.classList.toggle("hidden", !mostrar);
  },

  mostrarNotificacion: (tipo) => {
    Utils.mostrarElemento("successNotification", tipo === "success");
    Utils.mostrarElemento("errorNotification", tipo === "error");
  },

  mostrarCargando: (mostrar) => {
    Utils.mostrarElemento("loadingOverlay", mostrar);
  },
};

// === FUNCIÓN PRINCIPAL ===
function initFormulario() {
  // Generar select de horas
  Utils.generarHoras("horaSalida");
  Utils.generarHoras("horaLlegada");
  Utils.generarHoras("horaRetorno");

  // Mostrar campo "Otro" si se selecciona "Otro" en reunión
  const reunionCon = document.getElementById("reunionCon");
  reunionCon.addEventListener("change", () => {
    Utils.mostrarElemento("otroReunionGroup", reunionCon.value === "Otro");
  });

  // Mostrar campo de placa si el transporte requiere
  const transporte = document.getElementById("transporte");
  transporte.addEventListener("change", () => {
    const requierePlaca = transporte.value.includes("Vehículo");
    Utils.mostrarElemento("placaGroup", requierePlaca);
  });

  // Limpiar formulario
  document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("salidaForm").reset();
    Utils.mostrarElemento("otroReunionGroup", false);
    Utils.mostrarElemento("placaGroup", false);
    Utils.mostrarNotificacion(null);
  });

  // Enviar formulario
  document
    .getElementById("salidaForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();
      Utils.mostrarCargando(true);
      Utils.mostrarNotificacion(null);

      const form = e.target;
      const data = Object.fromEntries(new FormData(form));

      try {
        const response = await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify(data),
        });

        const text = await response.text();
        let result;

        try {
          result = JSON.parse(text);
        } catch (e) {
          throw new Error(
            "La respuesta del servidor no es un JSON válido: " + text
          );
        }

        Utils.mostrarCargando(false);

        if (result.result === "success") {
          Utils.mostrarNotificacion("success");
          form.reset();
          Utils.mostrarElemento("otroReunionGroup", false);
          Utils.mostrarElemento("placaGroup", false);
        } else {
          throw new Error(result.message || "Error al enviar los datos.");
        }
      } catch (error) {
        Utils.mostrarCargando(false);
        Utils.mostrarNotificacion("error");
        document.getElementById("errorMessage").textContent = error.message;
      }
    });
}

// === INICIALIZACIÓN ===
document.addEventListener("DOMContentLoaded", initFormulario);
