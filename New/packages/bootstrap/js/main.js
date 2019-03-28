let ru = ['Московская область', 'Астраханская область', 'Краснодарский край', 'Город Великия Луки', 'Город Мышкин',
          'Республика Карелия', 'Тверская область', 'Феропантов монастырь'],
    gr = ['Остров Крит'],
    bol = ['Свети-Влас', 'Несебыр'],
    chern = ['Герцен-Нови'],
    bel = ['Курган Славы'],
    ua = ['Музей народной архитектуры и быта'],
    viet = ['Курорт Муйне'];


function showNames(v) {
    let mas = eval(v);
    let el = document.getElementById('places');

    while (el.childNodes.length > 0) {
        el.removeChild(el.childNodes[el.childNodes.length - 1]);
    }

    for (let i = 0; i < mas.length; i++) {
        let opt = document.createElement("option");

        opt.innerHTML = mas[i];
        el.appendChild(opt);
    }
};