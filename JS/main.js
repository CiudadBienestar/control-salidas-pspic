// Configuración global
const CONFIG = {
    GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzszh5XxlDcZruOF3SZLVUAPGKNzj6W0ShI6W37QQEH69g2XR2U4avH1NukkHYMV0u5/exec",
    HORAS: { inicio: 8, fin: 18, intervalo: 30 }
};

// Utilidades
const Utils = {
    generarHoras: (selectId) => {
        const select = document.getElementById(selectId);
        const { inicio, fin, intervalo } = CONFIG.HORAS;

        // Limpiar select primero
        select.innerHTML = '<option value="">Seleccione hora</option>';

        for (let h = inicio; h <= fin; h++) {
            for (let m = 0; m < 60; m += intervalo) {
                const hora = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
                const option = document.createElement('option');
                option.value = hora;
                option.textContent = hora;
                select.appendChild(option);
            }
        }
    },

    toggleElement: (elementId, show) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.toggle('hidden', !show);
        }
    },

    mostrarNotificacion: (type, message = '', duration = 5000) => {
        const notification = document.getElementById(`${type}Notification`);
        if (message && type === 'error') {
            document.getElementById('errorMessage').textContent = message;
        }
        notification.classList.remove('hidden');
        setTimeout(() => notification.classList.add('hidden'), duration);
    }
};

// Funciones principales
async function enviarDatos(formData) {
    try {
        console.log("Enviando:", formData);
        const response = await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Error HTTP: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en enviarDatos:", error);
        throw error;
    }
}

function setupFormulario() {
    // Generar horas para los selects
    ['horaSalida', 'horaLlegada', 'horaRetorno'].forEach(selectId => {
        Utils.generarHoras(selectId);
    });

    // Mostrar campo placa si es vehículo
    document.getElementById('transporte').addEventListener('change', function() {
        const vehiculos = ['Motocicleta', 'Vehículo institucional', 'Vehículo particular'];
        Utils.toggleElement('placaGroup', vehiculos.includes(this.value));
    });

    // Mostrar campo "otro" en reunión
    document.getElementById('reunionCon').addEventListener('change', function() {
        Utils.toggleElement('otroReunionGroup', this.value === 'Otro');
    });

    // Envío del formulario
    document.getElementById('salidaForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        Utils.toggleElement('loadingOverlay', true);

        try {
            const formData = {
                fecha: document.getElementById('fecha').value,
                lugarSalida: document.getElementById('lugarSalida').value,
                actividad: document.getElementById('actividad').value,
                lugarActividad: document.getElementById('lugarActividad').value,
                horaSalida: document.getElementById('horaSalida').value,
                horaLlegada: document.getElementById('horaLlegada').value,
                horaRetorno: document.getElementById('horaRetorno').value,
                programada: document.getElementById('programada').value,
                reunionCon: document.getElementById('reunionCon').value === 'Otro' 
                    ? document.getElementById('otroReunion').value 
                    : document.getElementById('reunionCon').value,
                nombre: document.getElementById('nombre').value,
                cedula: document.getElementById('cedula').value,
                cargo: document.getElementById('cargo').value,
                telefono: document.getElementById('telefono').value,
                telContacto: document.getElementById('telContacto').value,
                carne: document.getElementById('carne').value,
                transporte: document.getElementById('transporte').value,
                placa: document.getElementById('placa').value || 'N/A'
            };

            const resultado = await enviarDatos(formData);
            console.log("Respuesta:", resultado);
            Utils.mostrarNotificacion('success');
            this.reset();
        } catch (error) {
            console.error("Error completo:", error);
            Utils.mostrarNotificacion('error', error.message);
        } finally {
            Utils.toggleElement('loadingOverlay', false);
        }
    });

    // Botón de reset
    document.getElementById('resetBtn').addEventListener('click', function() {
        document.getElementById('salidaForm').reset();
        document.querySelectorAll('.notification').forEach(el => el.classList.add('hidden'));
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', setupFormulario);
