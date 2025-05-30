// === CONFIGURACIÓN GLOBAL ===
const CONFIG = {
  GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyktxkWnR-VLzt0ZB9nExv2gsz0qO2kx5Iu6lb7-DQSPmu2itjv9MzxmifcqNbBKF7m/exec",
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
        const hora = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
        const option = document.createElement("option");
        option.value = hora;
        option.textContent = hora;
        select.appendChild(option);
      }
    }
  },

  mostrarElemento: (id, mostrar) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.toggle("hidden", !mostrar);
    }
  },

  mostrarNotificacion: (tipo) => {
    Utils.mostrarElemento("successNotification", tipo === "success");
    Utils.mostrarElemento("errorNotification", tipo === "error");
  },

  mostrarCargando: (mostrar) => {
    Utils.mostrarElemento("loadingOverlay", mostrar);
  },

  // Función mejorada para enviar datos con mejor manejo de CORS
  enviarDatos: async (data) => {
    const options = {
      method: "POST",
      mode: 'cors', // Explícitamente usar CORS
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(CONFIG.GOOGLE_SCRIPT_URL, options);
      
      // Verificar si la respuesta es OK
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }

      const text = await response.text();
      
      // Intentar parsear como JSON
      try {
        return JSON.parse(text);
      } catch (parseError) {
        // Si no es JSON válido, verificar si contiene HTML (página de error)
        if (text.includes('<html>') || text.includes('<!DOCTYPE')) {
          throw new Error('Google Apps Script no está configurado correctamente o no está desplegado');
        }
        throw new Error(`Respuesta no válida del servidor: ${text.substring(0, 100)}...`);
      }
    } catch (fetchError) {
      if (fetchError.name === 'TypeError' && fetchError.message.includes('CORS')) {
        throw new Error('Error de CORS: Verifica que el Google Apps Script esté configurado correctamente');
      }
      throw fetchError;
    }
  }
};

// === FUNCIÓN PRINCIPAL ===
function initFormulario() {
  // Generar select de horas
  Utils.generarHoras("horaSalida");
  Utils.generarHoras("horaLlegada");
  Utils.generarHoras("horaRetorno");

  // Mostrar campo "Otro" si se selecciona "Otro" en reunión
  const reunionCon = document.getElementById("reunionCon");
  if (reunionCon) {
    reunionCon.addEventListener("change", () => {
      Utils.mostrarElemento("otroReunionGroup", reunionCon.value === "Otro");
    });
  }

  // Mostrar campo de placa si el transporte requiere
  const transporte = document.getElementById("transporte");
  if (transporte) {
    transporte.addEventListener("change", () => {
      const requierePlaca = transporte.value.includes("Vehículo");
      Utils.mostrarElemento("placaGroup", requierePlaca);
    });
  }

  // Limpiar formulario
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      document.getElementById("salidaForm").reset();
      Utils.mostrarElemento("otroReunionGroup", false);
      Utils.mostrarElemento("placaGroup", false);
      Utils.mostrarNotificacion(null);
    });
  }

  // Enviar formulario
  const salidaForm = document.getElementById("salidaForm");
  if (salidaForm) {
    salidaForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      
      Utils.mostrarCargando(true);
      Utils.mostrarNotificacion(null);

      const form = e.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Validación básica
      const requiredFields = ['fecha', 'lugarSalida', 'actividad', 'lugarActividad', 'horaSalida', 'horaLlegada', 'horaRetorno', 'nombre', 'telContacto'];
      const missingFields = requiredFields.filter(field => !data[field]);
      
      if (missingFields.length > 0) {
        Utils.mostrarCargando(false);
        Utils.mostrarNotificacion("error");
        document.getElementById("errorMessage").textContent = `Faltan campos obligatorios: ${missingFields.join(', ')}`;
        return;
      }

      try {
        console.log('Enviando datos:', data); // Para debugging
        
        const result = await Utils.enviarDatos(data);
        
        Utils.mostrarCargando(false);
        
        if (result.result === "success") {
          Utils.mostrarNotificacion("success");
          form.reset();
          Utils.mostrarElemento("otroReunionGroup", false);
          Utils.mostrarElemento("placaGroup", false);
        } else {
          throw new Error(result.message || "Error desconocido al procesar los datos");
        }
      } catch (error) {
        console.error('Error completo:', error); // Para debugging
        Utils.mostrarCargando(false);
        Utils.mostrarNotificacion("error");
        
        const errorMessage = document.getElementById("errorMessage");
        if (errorMessage) {
          errorMessage.textContent = error.message || "Error desconocido. Inténtelo nuevamente.";
        }
      }
    });
  }
}

// === INICIALIZACIÓN ===
document.addEventListener("DOMContentLoaded", initFormulario);
