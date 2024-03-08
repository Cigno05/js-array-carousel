console.log('JS funziona');

const slidesArray = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
];
// console.log(slides)
//recuperare contenitore dove inserire le slide dell'array
slidesConteinerElement = document.getElementById('slides-container');
// console.log(slidesConteinerElement)

//recupero le singole immagini dall'array
let slideItem = ''; //variabile fuori al for

for (let index = 0; index < slidesArray.length; index++) {
    //console.log(slidesArray[index]);

    const slideSrc = slidesArray[index];

    const itemHTML = `
    <div class="item">
      <img src="${slideSrc}">
    </div>
    `;
    //console.log(itemHTML);

    slideItem += itemHTML;
}

slidesConteinerElement.innerHTML = slideItem;

//recupero i div che contengono le immagini dalla classe come fossero array
const divItem = document.getElementsByClassName('item'); //array
//console.log(divItem)

let itemVisualindex = 0; //variabile per il cambio valore del numero indice dell'array
//recupero primo elemento
const firstItemElement = divItem[itemVisualindex]; //element
// console.log(firstItemElement);

//aggiungo la classe "visual" all'elemento che voglio visualizzare
divItem[itemVisualindex].classList.add('visual')


































































