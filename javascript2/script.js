let box = document.getElementById('box'),
  btn = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  heart = document.querySelectorAll('.heart'),
  oneheart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');



box.style.backgroundColor = "#9557FF";
btn[1].style.borderRadius = '25px';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = "#FFFF0B";
circle[2].style.backgroundColor = "green";

// for (let i = 0; i < heart.length; i++) {
//   heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function (item, i, hearts) {
//   item.style.backgroundColor = 'green';
// });

let div = document.createElement('div'),
  text = document.createTextNode('Привет!');

div.classList.add('black');

// div.innerHTML = "<h1>Привет!</h1>";
div.textContent = 'Привет!)';

// document.body.appendChild(div);
// wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);


document.body.replaceChild(btn[2], circle[1]);
