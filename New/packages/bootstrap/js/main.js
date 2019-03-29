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

function f() {
    let b = null;
    document.body.addEventListener('scroll', gotoScroll, false);  // если у html и body высота равна 100%
    function gotoScroll() {
        if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
            let Sa = getComputedStyle(goto, ''), s = '';
            for (let i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя
                if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                    s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                }
            }
            b = document.createElement('div');  // создать потомка
            b.style.cssText = s + ' box-sizing: border-box; width: ' + goto.offsetWidth + 'px;';
            goto.insertBefore(b, goto.firstChild);  // поместить потомка в цепляющийся блок первым
            let l = goto.childNodes.length;
            for (let i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
                b.appendChild(goto.childNodes[1]);
            }
            goto.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
            goto.style.padding = '0';
            goto.style.border = '0';  // если элементу присвоен padding или border
        }
        if (goto.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
            b.className = 'sticky';
        } else {
            b.className = '';
        }
        window.addEventListener('resize', function() {
            goto.children[0].style.width = getComputedStyle(goto, '').width
        }, false);  // если изменить размер окна браузера, измениться ширина элемента
    }
}