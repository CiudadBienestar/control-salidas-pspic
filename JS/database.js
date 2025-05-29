// Simulación de base de datos local (opcional)
let registrosSalidas = [];

// Función para enviar datos a Google Apps Script
async function enviarDatos(formData) {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) throw new Error('Error en la respuesta del servidor');
        return await response.json();
        
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Guardar en localStorage (como backup)
function guardarRegistroLocal(registro) {
    registrosSalidas.push(registro);
    localStorage.setItem('registrosSalidas', JSON.stringify(registrosSalidas));
}