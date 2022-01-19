//hjelpe funksjoner

//select element funksjon. funksjon som bruker til å hente html-elementer som at man ikke trenger å document.getElementById() eller document.querySelector()
function id(select){
    const element = document.getElementById(select);
    if(element){
        return element;
    }
    throw new Error(`${select} does not exist.`);
}

//create element funksjon
function create(html){
    const crt = document.createElement(html);
    return crt;
}
//oppgave 1

//hente knapp
const btn1 = id('remove-btn');
//hente p-tag som skal fjernes
const p1 = id('remove');

//fjerne lytter for knapp1
btn1.addEventListener('click', function(){
    //fjern med remove(), innbygd funksjon i javascript.
    p1.remove();
   
});

//oppgave 2

//hente knapp og p-tag
const btn2 = id('change-btn');
const p2 = id('change');

//endtre text innhold
btn2.addEventListener('click', ()=>{
    p2.innerText = 'Teksten er forandret nå';
});

//oppgave 3
//source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

//hente input og p-tag
const input = id('input');
const p3 = id('input-text');


//koble input og p-tag sammen
input.addEventListener('input', function(){
    p3.innerHTML = input.value;
});

//oppgave 4
//resource: https://www.youtube.com/watch?v=80KX6aD9R7M&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&ab_channel=CodingAddict

//hente knappe og ul-tag
const ul = id('ul');
const btn3 = id('write-list');

btn3.addEventListener('click', ()=>{
    //list array for <li>-tag
    let myList = ["item one", "item two", "item three"];
    
    //map array som retunerer <li>-tagger med innhold som array items fra myList array, alle 4 verdier.
    let li = myList.map((list)=>{
        return `<li>${list}</li>`;
    });
    //skrive ut <li>-taggene i ul-tag
    ul.innerHTML = li.join('');
});

//oppgave 5
//source: https://www.w3schools.com/jsref/prop_element_children.asp
//selectedIndex: https://www.javascripttutorial.net/javascript-dom/javascript-select-box/
//html elements
//lage ny element i denne div
const div = id('placeholder');

//select html-tag
const select = id('select');
//knapp
const btn4 = id('create');
//input
const iinput = id('text');
/* console.log(select.lastElementChild);
console.log(select.lastElementChild); */
/* console.log(select.childElementCount); */
/* console.log(select.children); */
/* console.log(select.children[0]); */



//lytter for å skrive ut html-elementer
btn4.addEventListener('click', (e)=>{
    e.preventDefault();
    if(select.selectedIndex === 0){
        //create h2-tag, sett tekst innhold til h2 lik tekst verdier som blir skrevet i input feltet.
        const h2 = create('h2');
        const value = `<h2>${iinput.value}</h2>`;
        h2.innerHTML = value;
        
        div.appendChild(h2);
        /* console.log(`<h2>${iinput.value}</h2>`); */
    }
    /* console.log(select.selectedIndex); */
    if(select.selectedIndex === 1){
        const h3 = create('h3');
        const value1 = `<h3>${iinput.value}</h3>`;
        h3.innerHTML = value1;

        div.appendChild(h3);
    }
    if(select.selectedIndex === 2){
        const span = create('span');
        const value2 = `<span>${iinput.value}</span>`;
        span.innerHTML = value2;

        div.appendChild(span);
    }
    if(select.selectedIndex === 3){
        const pp = create('p');
        const value3 = `<p>${iinput.value}</p>`;
        pp.innerHTML = value3;

        div.appendChild(pp);
    }
   
});

//oppgave 6

//hente html elementer


