/* МАССИВ ДЛЯ ЗНАЧЕНИЙ СПИСКА ВЫБОРА МЕСТА */

let ru = ['Московская область', 'Астраханская область', 'Краснодарский край', 'Город Великия Луки', 'Город Мышкин',
        'Республика Карелия', 'Тверская область', 'Феропантов монастырь', 'Вытегра'],
    gr = ['Остров Крит'],
    bol = ['Свети-Влас', 'Несебыр'],
    chern = ['Герцен-Нови'],
    bel = ['Курган Славы'],
    ua = ['Музей народной архитектуры и быта'],
    viet = ['Курорт Муйне'];

/* МАССИВ ДЛЯ ЗНАЧЕНИЙ ССЫЛОК-ЯКОРЕЙ */

let ruId = ['mos', 'astr', 'kras', 'luki', 'mysh', 'karel', 'tver', 'feropant', 'vytegr'],
    grId = ['krit'],
    bolId = ['svet', 'neseb'],
    chernId = ['gerts'],
    belId = ['kurgan'],
    uaId = ['muzey'],
    vietId = ['kurort'];

let goto = document.getElementById('go');

function showNames(v1) {
    let mas1 = eval(v1);
    let mas2 = eval(v1 + "Id");
    let el = document.getElementById('places');

    while (el.childNodes.length > 0) {
        el.removeChild(el.childNodes[el.childNodes.length - 1]);
    }

    for (let i = 0; i < mas1.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = mas1[i];
        opt.setAttribute('value', mas2[i]);
        el.appendChild(opt);
    }
}

function go() {
    let id = '#';
    id += document.getElementById('places').value;
    goto.setAttribute('href', id);
}

/* ПРИЛЕПАНИЕ БЛОКА НАВИГАЦИИ */

$("#sticky").stick_in_parent();

/* ОТКРЫТИЕ ПАНОРАМЫ В МОДУЛЬНОМ ОКНЕ */

let main = document.getElementsByTagName("main")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let close = document.getElementsByClassName("close")[0];
let popup = document.getElementsByClassName("popup")[0];

function show() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  //  overlay.style.overflow = 'auto';
}

function hide() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

main.addEventListener('click', function (event) {
    let target = event.target;
    let panoSrc;
    if (target.tagName === "IMG") {
        panoSrc = target.getAttribute("alt");
        if (document.documentElement.clientWidth >= 1200) {
            show();
  /*          let pano = document.createElement("iframe");
            pano.setAttribute("src", panoSrc);
            popup.appendChild(pano);  */
            //Вставка панорамы в модальное окно
        } else {
            // Открытие на новой вкладке
            alert('new');
        }
    }
});

close.addEventListener('click', hide);