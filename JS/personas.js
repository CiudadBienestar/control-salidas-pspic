const personas = [
  { nombre:"Adriana Elizabeth Llorente Pianda", cedula:"1085332333", perfil:"Tecnóloga en promoción de la salud", telefono:"3153894786"},
  { nombre:"Adriana Guicella Rivas Burbano", cedula:"59311558", perfil:"Tecnóloga en promoción de la salud", telefono:"3242654545"},
  { nombre:"Adriana Sofia Isandara Nupan", cedula:"1193265360", perfil:"Tecnóloga en promoción de la salud", telefono:"3186479077"},
  { nombre:"Alejandra Basante Mora", cedula:"1085312866", perfil:"Profesional en Comunicación Social", telefono:"3113018578"},
  { nombre:"Alex Martin Bastidas Patiño", cedula:"989393970", perfil:"Licenciado en Artes Visuales", telefono:"3188269411"},
  { nombre:"Alex Ferney Maigual Botina", cedula:"5207190", perfil:"Comunicador Social ", telefono:"3162838654"},
  { nombre:"Alexandra Milena Guerra Rosero", cedula:"1085318152", perfil:"Tecnóloga en promoción de la salud", telefono:"3102068002"},
  { nombre:"Amanda Zoraida Andrade", cedula:"59818886", perfil:"Psicóloga", telefono:"3206662578"},
  { nombre:"Anderson Schneider Vidal Ceballos", cedula:"1085245340", perfil:"Ingeniero Agroforestal", telefono:"3146286462"},
  { nombre:"Andrés Bastidas Ruales", cedula:"1144206777", perfil:"Tecnólogo en promoción de la salud", telefono:"3208042287"},
  { nombre:"Angela Gabriela Medina Trejo", cedula:"1085272953", perfil:"Tecnóloga en promoción de la salud", telefono:"3215285375"},
  { nombre:"Angie Sofia Enriquez Pérez", cedula:"1085341162", perfil:"Tecnóloga en promoción de la salud", telefono:"3185751468"},
  { nombre:"Armando David Gustin Obando", cedula:"1193522335", perfil:"Tecnólogo en promoción de la salud", telefono:"3167835421"},
  { nombre:"Aylin Ibeth Cuastumal Rodríguez", cedula:"1193029598", perfil:"Tecnóloga en promoción de la salud", telefono:"3162490189"},
  { nombre:"Carol Viviana Rodriguez Cardenas", cedula:"59314601", perfil:"Auxiliar de enfermería", telefono:"3158667303"},
  { nombre:"Claudia Nathali Castro Zambrano", cedula:"1085261901", perfil:"Psicóloga", telefono:"3177580569"},
  { nombre:"Cristina Geraldine Ordoñez Solarte", cedula:"1085335336", perfil:"Tecnóloga en promoción de la salud", telefono:"3167701112"},
  { nombre:"Daneira Maribel Narvaez Melo", cedula:"1086135386", perfil:"Tecnóloga en promoción de la salud", telefono:"3162353709"},
  { nombre:"Daniela Nathali Peñafiel Morán", cedula:"1085303596", perfil:"Diseñadora gráfica", telefono:"3007981182"},
  { nombre:"David Alexander Revelo Yaqueno", cedula:"1085264502", perfil:"Tecnólogo en promoción de la salud", telefono:"3185198565"},
  { nombre:"David Andres Cabrera Vallejos", cedula:"1193292399", perfil:"Tecnólogo en promoción de la salud", telefono:"3173941401"},
  { nombre:"Diana Sofía Albornoz Marín", cedula:"1085287262", perfil:"Comunicadora Social", telefono:"3176997324"},
  { nombre:"Diana Marcela Melo Eraso", cedula:"1233188873", perfil:"Psicóloga", telefono:"3176535477"},
  { nombre:"Diana Obeida Rosero Tello", cedula:"1089196659", perfil:"Psicóloga", telefono:"3164631214"},
  { nombre:"Diego Alejandro Córdoba Rosero", cedula:"1085287990", perfil:"Diseñador gráfico", telefono:"3137451522"},
  { nombre:"Diego Armando Benavides Obando", cedula:"1085310456", perfil:"Licenciado en artes visuales", telefono:"3127833153"},
  { nombre:"Elizabeth Natalia Huertas Moreno", cedula:"36754932", perfil:"Tecnóloga en promoción de la salud", telefono:"3113786634"},
  { nombre:"Enrique Armando Cabrera Jurado", cedula:"12981279", perfil:"Licenciado en Artes", telefono:"3002756212"},
  { nombre:"Esteban Francisco Pérez Portilla", cedula:"98399579", perfil:"Licenciado en artes visuales", telefono:"3187276358"},
  { nombre:"Estefany Sofía Munares Ceballos", cedula:"1193271904", perfil:"Profesional en administración de servicios de salud", telefono:"3157023947"},
  { nombre:"Everth Alexander Benavides Arroyo", cedula:"1004564305", perfil:"Tecnólogo en promoción de la salud", telefono:"3164699605"},
  { nombre:"Gerardo Andres Orozco Ruiz", cedula:"1010034489", perfil:"Tecnólogo en promoción de la salud", telefono:"3128836036"},
  { nombre:"Gina Elizabeth López Obando", cedula:"27093909", perfil:"Tecnóloga en promoción de la salud", telefono:"3177271783"},
  { nombre:"Gina Katherine Giraldo Rojas", cedula:"1085341352", perfil:"Tecnóloga en promoción de la salud", telefono:"3155069354"},
  { nombre:"Ginna Marcela Farinango Riascos", cedula:"1085276680", perfil:"Enfermera", telefono:"3176148223"},
  { nombre:"Gloria Amparo Riascos Alvarado", cedula:"36952808", perfil:"Tecnóloga en promoción de la salud", telefono:"3173159712"},
  { nombre:"Guissett Fernanda Jiménez Romero", cedula:"1085270920", perfil:"Socióloga", telefono:"3155761683"},
  { nombre:"Ivan Camilo Ladino Parra", cedula:"1018514862", perfil:"Sociólogo", telefono:"3229031210"},
  { nombre:"Jeferson Fabian Salazar Duarte", cedula:"1085339919", perfil:"Sociólogo", telefono:"3164054809"},
  { nombre:"Jennifer Katerine Guerrero Belalcazar", cedula:"1089479893", perfil:"fisioterapeuta", telefono:"3106304109"},
  { nombre:"Jessica Fernanda Lagos David", cedula:"1004135064", perfil:"Tecnóloga en promoción de la salud", telefono:"3003565835"},
  { nombre:"Johana Andrea Rosas Tonguino", cedula:"1233192289", perfil:"Tecnóloga en promoción de la salud", telefono:"3145407706"},
  { nombre:"John Edisson Bravo Botina", cedula:"1085279124", perfil:"Tecnólogo en promoción de la salud", telefono:"3015332010"},
  { nombre:"Juan Carlos Prado Benavides", cedula:"1085250756", perfil:"Diseñador gráfico", telefono:"3152222145"},
  { nombre:"Julixa Alejandra Pérez Mera", cedula:"1004624750", perfil:"Tecnóloga en promoción de la salud", telefono:"3182402625"},
  { nombre:"Karen Yurani Melo Domínguez", cedula:"1193385491", perfil:"Nutricionista Dietista", telefono:"3209677211"},
  { nombre:"Karla Estefanía Ruíz Castrillon", cedula:"1004577775", perfil:"Tecnóloga en promoción de la salud", telefono:"3024605721"},
  { nombre:"Katherine Andrea Torres Gómez", cedula:"1085275802", perfil:"Trabajadora Social", telefono:"3022561729"},
  { nombre:"Laura Fernanda Pulzara Villota", cedula:"1192405577", perfil:"Tecnóloga en promoción de la salud", telefono:"3126594907"},
  { nombre:"Legny Molina Ordoñez", cedula:"37083634", perfil:"Tecnóloga en promoción de la salud", telefono:"3178101981"},
  { nombre:"Lesly Fabiana Romero Cabrera", cedula:"1004235951", perfil:"Tecnóloga en promoción de la salud", telefono:"3166157750"},
  { nombre:"Lesly Nathalia Maigual Jurado", cedula:"1085337465", perfil:"Tecnóloga en promoción de la salud", telefono:"3145141364"},
  { nombre:"Leydi Vanessa Palacios Delgado", cedula:"1085336859", perfil:"Psicóloga", telefono:"3106867972"},
  { nombre:"Liceth Paola León Torijano", cedula:"1086137336", perfil:"Psicóloga", telefono:"3126127566"},
  { nombre:"Luis Sebastián Yepes Caicedo", cedula:"1085285463", perfil:"Comunicador Social", telefono:"3126865216"},
  { nombre:"Luz Marina Benavides Bastidas", cedula:"1085330237", perfil:"Tecnólogo en promoción de la salud", telefono:"3135919153"},
  { nombre:"María Alejandra de los Rios Eraso", cedula:"1004131509", perfil:"Terapeuta Ocupacional", telefono:"3126016729"},
  { nombre:"María Guadalupe Gelpud Carpio", cedula:"1004410787", perfil:"Tecnóloga en promoción de la salud", telefono:"3015426949"},
  { nombre:"María Paula Pachajoa De La Rosa", cedula:"1085339053", perfil:"Tecnóloga en promoción de la salud", telefono:"3012016616"},
  { nombre:"María Sofia España Rosero", cedula:"1085301015", perfil:"Tecnóloga en promoción de la salud", telefono:"3506801369"},
  { nombre:"Maritza Mercedes Sarralde Pereira", cedula:"59312209", perfil:"Tecnóloga en promoción de la salud", telefono:"3183979935"},
  { nombre:"Mary Yesenia Solarte Romo", cedula:"1085318412", perfil:"Comunicadora Social", telefono:"3104748964"},
  { nombre:"Mayra Alejandra Cabrera Quintana", cedula:"1085336581", perfil:"Tecnóloga en promoción de la salud", telefono:"3186236455"},
  { nombre:"Natalia Catalina Benitez Yepez", cedula:"1018428049", perfil:"Comunicadora Social", telefono:"3003793220"},
  { nombre:"Norida Yulieth Tobar Arteaga", cedula:"1004726758", perfil:"Tecnóloga en promoción de la salud", telefono:"3233158303"},
  { nombre:"Paola Andrea Rosero Arenas", cedula:"1085302127", perfil:"Psicóloga", telefono:"3188726597"},
  { nombre:"Paola Andrea Suesca Buitrago", cedula:"52963413", perfil:"Productora Audiovisual", telefono:"3127217936"},
  { nombre:"Paola Bárcenas Portillo", cedula:"1085284434", perfil:"Psicóloga", telefono:"3186519830"},
  { nombre:"Paula Isabel Monar Canal", cedula:"1085338322", perfil:"Tecnóloga en promoción de la salud", telefono:"3182647188"},
  { nombre:"Paulo Alejandro Hernández Lagos", cedula:"1085311191", perfil:"Sociólogo", telefono:"3172508601"},
  { nombre:"Rolando Palacios Delgado", cedula:"87246930", perfil:"Maestro en Artes Plásticas", telefono:"3217650906"},
  { nombre:"Ronald Pasichaná Cañar", cedula:"1086017189", perfil:"Comunicador Social", telefono:"3104740797"},
  { nombre:"Rosario Nataly Villacorte Zura", cedula:"1085268417", perfil:"Enfermera", telefono:"3152197817"},
  { nombre:"Sahara Valentina Cerón Ruiz", cedula:"1004508314", perfil:"Psicóloga", telefono:"3176864379"},
  { nombre:"Verónica Roxana Moran Villota", cedula:"1085296353", perfil:"Auxiliar de enfermería", telefono:"3164339430"},
  { nombre:"Victor Mauricio Rodriguez Guerreo", cedula:"1085298993", perfil:"Tecnóloga en promoción de la salud", telefono:"3164485869"},
  { nombre:"Ximena Andrea Ordoñez Ordoñez", cedula:"1085247120", perfil:"Tecnico en lengua de señas colombiana", telefono:"3217780016"},
  { nombre:"Ximena Stephania Lucero Constain", cedula:"1085344726", perfil:"Tecnóloga en promoción de la salud", telefono:"3157136367"},
  { nombre:"Yana Stefhania Carlosama Ruales", cedula:"1085257630", perfil:"Socióloga", telefono:"3136601924"},
  { nombre:"Yanira del Rosario Lopez Basante", cedula:"36757298", perfil:"Tecnóloga en promoción de la salud", telefono:"3153737369"},
  { nombre:"Yesica Stefania Jurado Martínez", cedula:"1085319775", perfil:"Psicóloga", telefono:"3209930297"},
  { nombre:"Yoli Elizabeth Galvis Barrera", cedula:"1085303056", perfil:"Tecnóloga en promoción de la salud", telefono:"3213823317"},
  { nombre:"Yury Alexandra Bravo García", cedula:"10852328611", perfil:"Psicóloga", telefono:"3178944330"},
  { nombre:"Zulma Victoria Zambrano Segura", cedula:"27359486", perfil:"Geógrafa", telefono:"3012502691"}
];

// ── Buscador: toda la lógica vive aquí, sin depender de funciones externas ───
document.addEventListener("DOMContentLoaded", function () {

  var searchInput = document.getElementById("nombreSearch");
  var hiddenInput = document.getElementById("nombre");
  var dropdown    = document.getElementById("nombreDropdown");
  var wrapper     = document.getElementById("nombreSelectWrapper");

  if (!searchInput || !hiddenInput || !dropdown || !wrapper) return;

  function highlight(text, query) {
    if (!query) return text;
    var esc = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp("(" + esc + ")", "gi"), "<mark>$1</mark>");
  }

  function renderOptions(filter) {
    var q = (filter || "").trim().toLowerCase();
    var filtered = personas.filter(function (p) {
      return p.nombre.toLowerCase().indexOf(q) !== -1;
    });
    dropdown.innerHTML = "";
    if (filtered.length === 0) {
      dropdown.innerHTML = '<div class="dropdown-item no-results">Sin resultados</div>';
      return;
    }
    filtered.forEach(function (p) {
      var item = document.createElement("div");
      item.className = "dropdown-item";
      item.innerHTML = highlight(p.nombre, filter);
      item.addEventListener("mousedown", function (e) {
        e.preventDefault();
        searchInput.value = p.nombre;
        hiddenInput.value = p.nombre;
        searchInput.classList.add("has-value");
        searchInput.classList.remove("input-error");
        dropdown.classList.remove("open");
        wrapper.classList.remove("open");
        var cel = document.getElementById("cedula");
        var per = document.getElementById("perfil");
        var tel = document.getElementById("telefono");
        if (cel) cel.value = p.cedula   || "";
        if (per) per.value = p.perfil   || "";
        if (tel) tel.value = p.telefono || "";
      });
      dropdown.appendChild(item);
    });
  }

  searchInput.addEventListener("focus", function () {
    renderOptions(searchInput.value);
    dropdown.classList.add("open");
    wrapper.classList.add("open");
  });

  searchInput.addEventListener("input", function () {
    hiddenInput.value = "";
    searchInput.classList.remove("has-value");
    renderOptions(searchInput.value);
    dropdown.classList.add("open");
    wrapper.classList.add("open");
  });

  searchInput.addEventListener("blur", function () {
    setTimeout(function () {
      dropdown.classList.remove("open");
      wrapper.classList.remove("open");
      var match = personas.find(function (p) {
        return p.nombre.toLowerCase() === searchInput.value.trim().toLowerCase();
      });
      if (!match) {
        hiddenInput.value = "";
        searchInput.classList.remove("has-value");
      }
    }, 200);
  });

  searchInput.addEventListener("keydown", function (e) {
    var items   = dropdown.querySelectorAll(".dropdown-item:not(.no-results)");
    var current = dropdown.querySelector(".dropdown-item.highlighted");
    var idx     = Array.prototype.indexOf.call(items, current);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      idx = idx < items.length - 1 ? idx + 1 : 0;
      items.forEach(function (i) { i.classList.remove("highlighted"); });
      if (items[idx]) { items[idx].classList.add("highlighted"); items[idx].scrollIntoView({ block: "nearest" }); }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      idx = idx > 0 ? idx - 1 : items.length - 1;
      items.forEach(function (i) { i.classList.remove("highlighted"); });
      if (items[idx]) { items[idx].classList.add("highlighted"); items[idx].scrollIntoView({ block: "nearest" }); }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (current) current.dispatchEvent(new MouseEvent("mousedown"));
    } else if (e.key === "Escape") {
      dropdown.classList.remove("open");
      wrapper.classList.remove("open");
      searchInput.blur();
    }
  });

});
