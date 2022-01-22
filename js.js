//Gruppe: yahye, mostafa, jørgen, ferat, tomine.
//Hjelpe funksjoner

//selektor funksjon for å unngå å skrive document.get/query hver gang man henter html element.
const id = (select)=>{
  const element = document.querySelector(select);
  if(element){
    return element;
  }
  //error for når html element ikke finnes
  throw new Error(`The element:"${select} does not exist"`);
}
//create funksjon
const create = (html)=>{
  const crt = document.createElement(html)
  return crt;
}
//hente html element, div boks med ID "app"
const div = id('div');

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";


const longestWord = () => {
  // TODO: Gjør om text til array eks. ['Baby', 'cliche']

  //variabel som lagrer tekst fra variabel 'text' i array format.
  let array = text.split(' ')

  //variabel som lagrer første ord i array
    let holder = array[0];

    const newArray = array.map(function(elemnt){});
  //teller variabel
    let count = 1;
  // TODO: Velg første ord så du har noe å sammenlikne med
  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
  /* 
    * 1: i if test som skjekker om variabel "holder" length er mindre enn array variabel "array" sin neste item sin length. Når løkket kjører gjennom hele array og gir variabelen "holder" nye verdier og når den havner på lengste ordet og ikke finner større item i array enn 'verylongwordthatislong', da skrives skrives i variabel 'div' med innerText lengest ordet i arrayet
  */

 //med forEach() metode
/*   array.forEach( word => {
    if (holder.length < word.length) {
      holder = word;
      div.innerText = holder;
      console.log(holder);
    }
}); */

//med for of loop
for(let word of array){
  //if statement check som kjører gjennom hele array
  if(holder.length < word.length){
    //holder verdi blir byttet verdiene som loopet kjører gjennom
    holder = word;
    //skrives ut i DOM med med innerText
    div.innerText = holder;
    console.log(holder);
  }
}

}
//kjøre funksjon
longestWord();