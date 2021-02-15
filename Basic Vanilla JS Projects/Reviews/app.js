const reviews = [
  {
    id: 1,
    name: 'Lionel Messi',
    designation: 'Football Player',
    img:
      'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564',
    text:
      "Messi has been awarded both FIFA's Player of the Year and the European Golden Shoe for top scorer on the continent a record six times.His current Barcelona contract is through 2020-21 and pays him over $80 million annually. He also has a lifelong deal with Adidas.",
  },
  {
    id: 2,
    name: 'Christiano Ronaldo',
    designation: 'Another Football player',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg',
    text:
      'Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time.',
  },
  {
    id: 3,
    name: 'Nikola Tesla',
    designation: 'Inventor',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG',
    text:
      'Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system. Tesla set up laboratories in New York to develop electrical devices.',
  },
  {
    id: 4,
    name: 'Henry Ford',
    designation: 'Industrialist',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Henry_ford_1919.jpg',
    text:
      'Henry Ford was an American industrialist, founder of the Ford Motor Company, and chief developer of the assembly line technique of mass production. He created the first automobile that middle-class Americans could afford.',
  },
];
// Selelctors
const person_img = document.querySelector('#person_img');
const name = document.querySelector('#name');
const designation = document.querySelector('#designation');
const text = document.querySelector('#text');
const prev_btn = document.querySelector('#prev_btn');
const nxt_btn = document.querySelector('#nxt_btn');
const surp_btn = document.querySelector('.sme');

let presentItem = 0;
// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(presentItem);
});
function showPerson(person) {
  const item = reviews[person];
  person_img.src = item.img;
  name.textContent = item.name;
  designation.textContent = item.designation;
  text.textContent = item.text;
}

// next button
nxt_btn.addEventListener('click', function () {
  presentItem++;
  if (presentItem > reviews.length - 1) {
    presentItem = 0;
  }
  showPerson(presentItem);
});
prev_btn.addEventListener('click', function () {
  presentItem--;
  if (presentItem < 0) {
    presentItem = reviews.length - 1;
  }
  showPerson(presentItem);
});
surp_btn.addEventListener('click', function () {
  presentItem = Math.round(Math.random() * (reviews.length - 1));
  showPerson(presentItem);
});
