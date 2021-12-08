/*
//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let button = document.getElementById('btn');

button.onclick = function () {
    let userName1 = document.forms.form1.user_name1.value;
    let userAge1 = document.forms.form1.user_age1.value;
    let userName2 = document.forms.form2.user_name2.value;
    let userAge2 = document.forms.form2.user_age2.value;

    console.log(userName1, userAge1, userName2, userAge2);
}

//------------------------------------------------------------------------


//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form = document.forms.table;

form.onsubmit = function (e) {
    e.preventDefault();

    let rows = form.rows.value;
    let cols = form.cols.value;
    let content = form.content.value;
    console.log(rows, cols, content);

    let table = document.createElement('table');
    table.style.border = '1px solid black';

    for (let i = 0; i < rows; i++){
        let tr = document.createElement('tr');
        tr.style.border = '1px solid black';

        for (let j = 0; j < cols; j++){
            let td = document.createElement('td');
            td.innerText = content;
            td.style.border = '1px solid black';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    document.body.appendChild(table);
}

//------------------------------------------------------------------------

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let shitArr = ['Fuck', 'Damn', 'Bitch', 'Noob', 'Loser'];

let button = document.getElementById('button');

button.onclick = function () {
    let bad = document.getElementById('bad').value;

    for (let i = 0; i < shitArr.length; i++) {
        if(shitArr[i] === bad){
            alert('Не матюкайся');
        }
    }
}

//------------------------------------------------------------------------


//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let shitArr = ['Fuck', 'Damn', 'Bitch', 'Noob', 'Loser'];

let button = document.getElementById('button');

button.onclick = function () {
    let bad = document.getElementById('bad').value;

    for (let i = 0; i < shitArr.length; i++) {
        if(bad.includes(shitArr[i])){
            alert('Містить погане слово');
        }
    }
}*/