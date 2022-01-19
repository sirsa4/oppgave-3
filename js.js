//hjelpe funksjon
function id(select){
    const element = document.getElementById(select);
    if(element){
        return element;
    }
    throw new Error(`${select} does not exist.`);
}

//oppgave 1

//hente knapp
const btn1 = id('remove-btn');
//hente p-tag som skal fjernes
const p1 = id('remove');

//fjerne lytter for knapp1
btn1.addEventListener('click', function(){
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
console.log(input,p3);

//koble input og p-tag sammen
input.addEventListener('input', function(){
    p3.innerHTML = input.value;
});
//resten av oppgaver her