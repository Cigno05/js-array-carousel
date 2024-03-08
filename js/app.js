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
    // console.log(slidesArray[index]); 
    

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



//recupero il pulsante next per scorrere le slides verso giù
const next = document.querySelector('.next');

//aggiungo il click al pulsante

next.addEventListener('click', function (){
    //console.log('prova click')

   //eliminare classe "visual" dall'elemento che si vede adesso
   divItem[itemVisualindex].classList.remove('visual');

   //incremento di 1 il valore a "itemVisualIndex"
   itemVisualindex += 1;

   //assegno la classe "visual" all'elemento successivo
   divItem[itemVisualindex].classList.add('visual')
   console.log(itemVisualindex)
})

//recupero il pulsante precedent per scorrere le slides verso giù
const precedent = document.querySelector('.precedent');

//aggiungo il click al pulsante

precedent.addEventListener('click', function (){
    //console.log('prova click')

   //eliminare classe "visual" dall'elemento che si vede adesso
   divItem[itemVisualindex].classList.remove('visual');

   //incremento di 1 il valore a "itemVisualIndex"
   itemVisualindex -= 1;

   //assegno la classe "visual" all'elemento successivo
   divItem[itemVisualindex].classList.add('visual')
   console.log(itemVisualindex)
})

































































