const personas = [
    {
        id: 1,
        nombre: "Adriana Guicella Rivas Burbano",
        cedula: "59,311,558",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3242654545"
    },
    {
        id: 2,
        nombre: "Adriana Sofía Isandara Nupan",
        cedula: "1,193,265,360",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3186479077"
    },
    {
        id: 3,
        nombre: "Alex Ferney Maigual Botina",
        cedula: "5,207,190",
        cargo: "Cominicadora Social",
        telefono: "3162838654"
    },
    {
        id: 4,
        nombre: "Alex Martin Bastidas Patiño",
        cedula: "98,393,970",
        cargo: "Licenciado en Artes Visuales",
        telefono: "3188269411"
    },
    {
        id: 5,
        nombre: "Alexandra Milena Guerra Rosero",
        cedula: "1,085,318,152",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3102068002"
    },
    {
        id: 6,
        nombre: "Amanda Zoraida Andrade",
        cedula: "59,818,886",
        cargo: "Psicóloga",
        telefono: "3206662578"
    },
    {
        id: 7,
        nombre: "Anderson Schneider Vidal Ceballos",
        cedula: "1,085,245,340",
        cargo: "Ingeniero Agroforestal",
        telefono: "3146286462"
    },
    {
        id: 8,
        nombre: "Ángela Gabriela Medina Trejo",
        cedula: "1,085,272,953",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3215285375"
    },
    {
        id: 9,
        nombre: "Angela Mabel Rodríguez Timaran",
        cedula: "36,750,556",
        cargo: "Profesional con Especialización en SST",
        telefono: "36750556"
    },
    {
        id: 10,
        nombre: "Angie Cecilia Ramirez Ortiz",
        cedula: "1,087,210,899",
        cargo: "Socióloga",
        telefono: "3188810821"
    },
    {
        id: 11,
        nombre: "Angie Sofía Enriquez Pérez",
        cedula: "1,085,341,162",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3185751468"
    },
    {
        id: 12,
        nombre: "Armando David Gustin Obando",
        cedula: "1,193,522,335",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3167835421"
    },
    {
        id: 13,
        nombre: "Aylin Ibeth Cuastumal Rodriguez",
        cedula: "1,193,029,598",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3162490189"
    },
    {
        id: 14,
        nombre: "Bernardita Lucia Vela Aguilera",
        cedula: "30,735,749",
        cargo: "Odontóloga",
        telefono: "3206037510"
    },
    {
        id: 15,
        nombre: "Carol Viviana Rodríguez Cárdenas",
        cedula: "59,314,601",
        cargo: "Auxliar de Enfermería",
        telefono: "3158667303"
    },
    {
        id: 16,
        nombre: "Daneira Maribel Narvaez Melo",
        cedula: "1,086,135,386",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3162353709"
    },
    {
        id: 17,
        nombre: "David Alexander Revelo Yaqueno",
        cedula: "1,085,264,502",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3185198565"
    },
    {
        id: 18,
        nombre: "Denny Liceth Hernández Osejo",
        cedula: "59,651,730",
        cargo: "Técnico en Salud Ocupacional",
        telefono: "3174108740"
    },
    {
        id: 19,
        nombre: "Diana Carolina Benavides",
        cedula: "1,085,285,155",
        cargo: "Auxliar de Enfermería",
        telefono: "3169954322"
    },
    {
        id: 20,
        nombre: "Diana Marcela Melo Eraso",
        cedula: "1,233,188,873",
        cargo: "Psicóloga",
        telefono: "3176535477"
    },
    {
        id: 21,
        nombre: "Diana Obeida Rosero Tello",
        cedula: "1,089,196,659",
        cargo: "Psicóloga",
        telefono: "3164631214"
    },
    {
        id: 22,
        nombre: "Diana Sofia Albornoz Marin",
        cedula: "1,085,287,262",
        cargo: "Cominicadora Social",
        telefono: "3176997324"
    },
    {
        id: 23,
        nombre: "Diego Alejandro Cordoba Rosero",
        cedula: "1,085,287,990",
        cargo: "Diseñador Gráfico",
        telefono: "3137451522"
    },
    {
        id: 24,
        nombre: "Diego Armando Benavides Obando",
        cedula: "1,085,310,456",
        cargo: "Licenciada en Artes Visuales",
        telefono: "3127833153"
    },
    {
        id: 25,
        nombre: "Elizabeth Natalia Huertas Moreno",
        cedula: "36,745,932",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3113786634"
    },
    {
        id: 26,
        nombre: "Enrique Armando Cabrera Jurado",
        cedula: "12,981,279",
        cargo: "Licenciado en Artes Visuales",
        telefono: "3002756212"
    },
    {
        id: 27,
        nombre: "Estefany Sofía Munares Ceballos",
        cedula: "1,193,271,904",
        cargo: "Admnistradora en Servicios de Salud",
        telefono: "3157023947"
    },
    {
        id: 28,
        nombre: "Gerardo Andres Orozco Ruiz",
        cedula: "1,010,034,489",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3128836036"
    },
    {
        id: 29,
        nombre: "Gina Elizabeth López Obando",
        cedula: "27,093,909",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3177271783"
    },
    {
        id: 30,
        nombre: "Guissett Fernanda Jiménez Romero",
        cedula: "1,085,270,920",
        cargo: "Socióloga",
        telefono: "3155761683"
    },
    {
        id: 31,
        nombre: "Jenhifer Alejandra Basante Mora",
        cedula: "1,085,312,866",
        cargo: "Cominicadora Social",
        telefono: "3113018578"
    },
    {
        id: 32,
        nombre: "Jessica Stefanny Franco Eraso",
        cedula: "1,085,272,491",
        cargo: "Enfermera",
        telefono: "3215538024"
    },
    {
        id: 33,
        nombre: "John Edisson Bravo Botina",
        cedula: "1,085,279,124",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3015332010"
    },
    {
        id: 34,
        nombre: "Jorge Alfonso Álava Jarrín",
        cedula: "98,137,664",
        cargo: "Líder Grupos Etnicos",
        telefono: "3155271677"
    },
    {
        id: 35,
        nombre: "José David Usama Taticuan",
        cedula: "1,085,275,452",
        cargo: "Sociólogo",
        telefono: "3045989573"
    },
    {
        id: 36,
        nombre: "Juan Carlos Prado Benavides",
        cedula: "1,085,250,756",
        cargo: "Diseñador Gráfico",
        telefono: "3152222145"
    },
    {
        id: 37,
        nombre: "Julixa Alejandra Perez Mera",
        cedula: "1,004,624,750",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3182402625"
    },
    {
        id: 38,
        nombre: "Karen Yurani Melo Domínguez",
        cedula: "1,193,385,491",
        cargo: "Nutricionista",
        telefono: "3209677211"
    },
    {
        id: 39,
        nombre: "Katherine Andrea Torres Gomez",
        cedula: "1,085,275,802",
        cargo: "Trabajadora Social",
        telefono: "3022561729"
    },
    {
        id: 40,
        nombre: "Laura Fernanda Pulzara Villota",
        cedula: "1,193,405,577",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3126594907"
    },
    {
        id: 41,
        nombre: "Legny Molina Ordóñez",
        cedula: "37,083,634",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3178101981"
    },
    {
        id: 42,
        nombre: "Leydi Vanessa Palacios Delgado",
        cedula: "1,085,336,859",
        cargo: "Psicóloga",
        telefono: "3106867972"
    },
    {
        id: 43,
        nombre: "Luis Sebastián Yepes Caicedo",
        cedula: "1,085,285,463",
        cargo: "Cominicador Social",
        telefono: "3126865216"
    },
    {
        id: 44,
        nombre: "Marco Andrés Tovar Mejía",
        cedula: "13,071,542",
        cargo: "Sociólogo",
        telefono: "3146005128"
    },
    {
        id: 45,
        nombre: "María Fernanda Martinez Arellano",
        cedula: "1,085,321,868",
        cargo: "Licenciada en Artes Visuales",
        telefono: "3164852323"
    },
    {
        id: 46,
        nombre: "María Fernanda Ortega Sarria",
        cedula: "1,085,245,666",
        cargo: "Trabajadora Social",
        telefono: "3136624129"
    },
    {
        id: 47,
        nombre: "María Guadalupe Gelpud Carpio",
        cedula: "1,004,410,787",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3015426949"
    },
    {
        id: 48,
        nombre: "Maritza Mercedes Sarralde Pereira",
        cedula: "59,312,209",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3183979935"
    },
    {
        id: 49,
        nombre: "Mary Yesenia Solarte Romo",
        cedula: "1,085,318,412",
        cargo: "Cominicadora Social",
        telefono: "3104748964"
    },
    {
        id: 50,
        nombre: "Mayra Alejandra Cabrera Quintana",
        cedula: "1,085,336,581",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3186236455"
    },
    {
        id: 51,
        nombre: "Natalia Catalina Benitez Yepez",
        cedula: "1,018,428,049",
        cargo: "Cominicadora Social",
        telefono: "3003793220"
    },
    {
        id: 52,
        nombre: "Norida Yulieth Tobar Arteaga",
        cedula: "1,004,726,758",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3233158303"
    },
    {
        id: 53,
        nombre: "Paola Andrea Suesca Buitrago",
        cedula: "52,963,413",
        cargo: "Productora Audiovisual",
        telefono: "3127217936"
    },
    {
        id: 54,
        nombre: "Paola Bárcenas Portillo",
        cedula: "1,085,284,434",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3186519830"
    },
    {
        id: 55,
        nombre: "Rolando Palacios Delgado",
        cedula: "87,246,930",
        cargo: "Licenciado en Artes Plásticas",
        telefono: "3217650906"
    },
    {
        id: 56,
        nombre: "Rosario Nataly Villacorte Zura",
        cedula: "1,085,268,417",
        cargo: "Enfermera",
        telefono: "3152197817"
    },
    {
        id: 57,
        nombre: "Sonia Johana Estrella Estrella",
        cedula: "1,086,921,875",
        cargo: "Ingeniera Ambiental",
        telefono: "3128552690"
    },
    {
        id: 58,
        nombre: "Veronica Roxana Moran Villota",
        cedula: "1,085,296,353",
        cargo: "Auxliar de Enfermería",
        telefono: "3164339430"
    },
    {
        id: 59,
        nombre: "Ximena Andrea Ordoñez Ordoñez",
        cedula: "1,085,247,120",
        cargo: "Técnico Lenguaje de Señas",
        telefono: "3217780016"
    },
    {
        id: 60,
        nombre: "Yanira Del Rosario López Basante",
        cedula: "36,757,298",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3153737369"
    },
    {
        id: 61,
        nombre: "Yemmi Andrea Díaz Curarán",
        cedula: "36,759,324",
        cargo: "Axiliar de Salud Oral",
        telefono: "3183284003"
    },
    {
        id: 62,
        nombre: "Yesica Stefania Jurado Martínez",
        cedula: "1,085,319,775",
        cargo: "Psicóloga",
        telefono: "3209930297"
    },
    {
        id: 63,
        nombre: "Yoli Elizabeth Galvis Barrera",
        cedula: "1,085,303,056",
        cargo: "Tecnólogo(a) en Promoción de la Salud",
        telefono: "3213823317"
    },
    {
        id: 64,
        nombre: "Yury Alexandra Bravo Garcia",
        cedula: "1,085,328,611",
        cargo: "Psicóloga",
        telefono: "3178944330"
    },
    {
        id: 65,
        nombre: "Zulma Victoria Zambrano Segura",
        cedula: "27,359,486",
        cargo: "Geógrafa",
        telefono: "3012502691"
    }
];

function initSelectPersonas() {
    const selectNombre = document.getElementById('nombre');
    if (!selectNombre) return;

    // Llenar dropdown
    selectNombre.innerHTML = '<option value="">Seleccione su nombre</option>';
    personas.forEach(empleado => {
        const option = document.createElement('option');
        option.value = empleado.id;
        option.textContent = empleado.nombre;
        selectNombre.appendChild(option);
    });

    // Autocompletar campos al seleccionar
    selectNombre.addEventListener('change', function() {
        const empleado = personas.find(e => e.id == this.value);
        if (empleado) {
            document.getElementById('cedula').value = empleado.cedula;
            document.getElementById('cargo').value = empleado.cargo;
            document.getElementById('telefono').value = empleado.telefono;
        }
    });
}

document.addEventListener('DOMContentLoaded', initSelectPersonas);
