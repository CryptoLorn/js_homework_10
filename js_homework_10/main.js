/*
//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let text = document.getElementById('text');
let button = document.getElementById('button');
button.onclick = () => {
    text.style.display = 'none';
}

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let button = document.getElementById('button');
button.onclick = () => {
    button.style.display = 'none';
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let button = document.getElementById('button1');

button.onclick = () => {
    let age = document.getElementById('age').value;

    if(age < 18){
        alert('Вам меньше 18 років!');
    }
    else{
        alert('Вам більше 18 років!');
    }
}

//- Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementsByClassName('menu')[0];

menu.onclick = function() {
    this.classList.toggle('collapse');
}

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let commentArr = [
    {title : 'Comment1', body:'Hi! This nice game'},
    {title : 'Comment2', body:'It`s really worked?'},
    {title : 'Comment3', body:'What is the price?'},
    {title : 'Comment4', body:'My favourite game'}
]

for (let i = 0; i < commentArr.length; i++){
    let div = document.createElement('div');
    div.classList.add('comment');

    let title = document.createElement('h3');
    title.innerText = commentArr[i].title;

    let body = document.createElement('div');
    body.innerText = commentArr[i].body;
    body.classList.add('body_comment');

    let button = document.createElement('button');
    button.innerText = 'Згорнути';

    button.onclick = function () {
        body.classList.toggle('hide_body');
    }

    div.append(title, body, button);
    document.body.appendChild(div);
}*/
