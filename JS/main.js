async function enviarDatos(formData) {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzszh5XxIDcZruOF3SZLvUAPGKNzj6W0ShI6W37QQEH69gzXR2U4avH1NukkHYMV0u5/exec";
    
    try {
        console.log("Enviando:", formData); // Para debug
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return await response.json();
        
    } catch (error) {
        console.error("Error en enviarDatos:", error);
        throw new Error("No se pudo conectar al servidor. Verifica tu conexión.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Generar opciones de horas
    function generarHoras(selectId) {
        const select = document.getElementById(selectId);
        for (let h = 8; h <= 18; h++) {
            for (let m = 0; m < 60; m += 30) {
                const hora = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
                const option = document.createElement('option');
                option.value = hora;
                option.textContent = hora;
                select.appendChild(option);
            }
        }
    }
    
    generarHoras('horaSalida');
    generarHoras('horaLlegada');
    generarHoras('horaRetorno');

    // Mostrar campo "Placa" si es vehicular
    document.getElementById('transporte').addEventListener('change', function() {
        const vehiculos = ['Motocicleta', 'Vehículo institucional', 'Vehículo particular'];
        document.getElementById('placaGroup').classList.toggle('hidden', !vehiculos.includes(this.value));
    });

    // Envío del formulario
    document.getElementById('salidaForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const loadingOverlay = document.getElementById('loadingOverlay');
        const successNotification = document.getElementById('successNotification');
        const errorNotification = document.getElementById('errorNotification');
        
        loadingOverlay.classList.remove('hidden');
        
        try {
            // Objeto COMPLETO con todos los campos
            const formData = {
                fecha: document.getElementById('fecha').value,
                lugarSalida: document.getElementById('lugarSalida').value,
                actividad: document.getElementById('actividad').value,
                lugarActividad: document.getElementById('lugarActividad').value,
                horaSalida: document.getElementById('horaSalida').value,
                horaLlegada: document.getElementById('horaLlegada').value,
                horaRetorno: document.getElementById('horaRetorno').value,
                nombre: document.getElementById('nombre').value,
                cedula: document.getElementById('cedula').value,
                cargo: document.getElementById('cargo').value,
                telefono: document.getElementById('telefono').value,
                telContacto: document.getElementById('telContacto').value,
                transporte: document.getElementById('transporte').value,
                placa: document.getElementById('placa').value || 'N/A'
            };
            
            console.log("Datos a enviar:", formData); // Debug
            
            const resultado = await enviarDatos(formData);
            console.log("Respuesta:", resultado); // Debug
            
            successNotification.classList.remove('hidden');
            setTimeout(() => successNotification.classList.add('hidden'), 5000);
            this.reset();
            
        } catch (error) {
            console.error("Error completo:", error); // Debug
            document.getElementById('errorMessage').textContent = error.message;
            errorNotification.classList.remove('hidden');
            setTimeout(() => errorNotification.classList.add('hidden'), 5000);
            
        } finally {
            loadingOverlay.classList.add('hidden');
        }
    });
    
    // Botón de reset
    document.getElementById('resetBtn').addEventListener('click', function() {
        document.getElementById('salidaForm').reset();
        document.querySelectorAll('.hidden').forEach(el => el.classList.add('hidden'));
    });
});
