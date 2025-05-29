// Datos de empleados (ejemplo)
const empleados = [
    {
        id: 1,
        nombre: "María García López",
        cedula: "1023456789",
        cargo: "Coordinadora de Proyectos",
        telefono: "6012345678"
    },
    {
        id: 2,
        nombre: "Carlos Rodríguez Pérez",
        cedula: "9876543210",
        cargo: "Supervisor de Campo",
        telefono: "6023456789"
    },
    // Agrega más empleados según necesites
];

// Llenar el dropdown de nombres
document.addEventListener('DOMContentLoaded', function() {
    const selectNombre = document.getElementById('nombre');
    
    empleados.forEach(empleado => {
        const option = document.createElement('option');
        option.value = empleado.id;
        option.textContent = empleado.nombre;
        selectNombre.appendChild(option);
    });
    
    // Autocompletar datos al seleccionar un nombre
    selectNombre.addEventListener('change', function() {
        const empleadoSeleccionado = empleados.find(e => e.id == this.value);
        if (empleadoSeleccionado) {
            document.getElementById('cedula').value = empleadoSeleccionado.cedula;
            document.getElementById('cargo').value = empleadoSeleccionado.cargo;
            document.getElementById('telefono').value = empleadoSeleccionado.telefono;
        }
    });
});