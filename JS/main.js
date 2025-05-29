document.addEventListener('DOMContentLoaded', function() {
    // Generar opciones de horas (ej. 08:00 - 18:00)
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

    // Mostrar campo "Placa" si el transporte es vehicular
    document.getElementById('transporte').addEventListener('change', function() {
        const vehiculos = ['Motocicleta', 'Vehículo institucional', 'Vehículo particular'];
        document.getElementById('placaGroup').classList.toggle('hidden', !vehiculos.includes(this.value));
    });

    // Validación y envío del formulario
    document.getElementById('salidaForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const loadingOverlay = document.getElementById('loadingOverlay');
        const successNotification = document.getElementById('successNotification');
        const errorNotification = document.getElementById('errorNotification');
        
        loadingOverlay.classList.remove('hidden');
        
        try {
            const formData = {
                fecha: document.getElementById('fecha').value,
                nombre: document.getElementById('nombre').options[document.getElementById('nombre').selectedIndex].text,
                // Agrega todos los campos necesarios...
            };
            
            // Enviar a Google Apps Script o guardar local
            const resultado = await enviarDatos(formData);
            guardarRegistroLocal(formData);
            
            successNotification.classList.remove('hidden');
            setTimeout(() => successNotification.classList.add('hidden'), 5000);
            this.reset();
            
        } catch (error) {
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

async function enviarDatos(formData) {
    // 1. Reemplaza esta URL con la de TU Google Apps Script (la que copiaste al desplegarlo)
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzszh5XxIDcZruOF3SZLvUAPGKNzj6W0ShI6W37QQEH69gzXR2U4avH1NukkHYMV0u5/exec"; // ← Pega tu URL aquí

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) throw new Error('Error al enviar los datos');
        return await response.json();

    } catch (error) {
        throw new Error(`No se pudo conectar al servidor: ${error.message}`);
    }
}

// Función para guardar localmente (opcional)
function guardarRegistroLocal(registro) {
    console.log("Registro guardado localmente:", registro); // Solo para pruebas
    // Si quieres guardar en el navegador:
    // localStorage.setItem('ultimoRegistro', JSON.stringify(registro));
}

});