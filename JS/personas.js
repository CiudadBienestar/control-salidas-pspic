const empleados = [
    {
        id: 1,
        nombre: "Maria García López",
        cedula: "1023456789",
        cargo: "Coordinadora de Proyectos",
        telefono: "6012345678"
    },
    {
        id: 2,
        nombre: "Juan Pérez Martínez",
        cedula: "9876543210",
        cargo: "Promotor de Salud",
        telefono: "6023456789"
    }
    // Agrega más empleados según sea necesario
];

function initSelectEmpleados() {
    const selectNombre = document.getElementById('nombre');
    if (!selectNombre) return;

    // Llenar dropdown
    selectNombre.innerHTML = '<option value="">Seleccione su nombre</option>';
    empleados.forEach(empleado => {
        const option = document.createElement('option');
        option.value = empleado.id;
        option.textContent = empleado.nombre;
        selectNombre.appendChild(option);
    });

    // Autocompletar campos al seleccionar
    selectNombre.addEventListener('change', function() {
        const empleado = empleados.find(e => e.id == this.value);
        if (empleado) {
            document.getElementById('cedula').value = empleado.cedula;
            document.getElementById('cargo').value = empleado.cargo;
            document.getElementById('telefono').value = empleado.telefono;
        }
    });
}

document.addEventListener('DOMContentLoaded', initSelectEmpleados);
