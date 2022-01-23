//Hjelpe funksjoner

//selektor funksjon
const id = (select)=>{
  const element = document.querySelector(select);
  if(element){
    return element;
  }
  throw new Error(`This element: "$${select}" does not exist`);
}
const create = (html)=>{
  return document.createElement(html);
}
const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

// TODO: Hent HTML #id med getElementById
const userUl = id("#users");
//hente inputer og knapp
const userName = id('#name'); //navn søk input
const userAge = id('#age'); //user alder input
const filterBtn = id('#filter'); //filter knapp




// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere

//fra hjelp fil: user funksjon som lager html elementer fra 'users' array.
const createTableUI = (users) => {
  //ul innerHTML blir satt null sånn at det ingen i der
  userUl.innerHTML = null;
  //først raden blir satt 'users' array med template literals.
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  //for of løkke som lager li elementene. Den plusser ny li uten å fjerne den første som har veridene id, navn og alder.
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const ageSearch = userAge.value
console.log(ageSearch);
const search = ()=>{
  const searchName = userName.value;
  
  
  if(searchName){
   
    /* userUl.innerHTML = `${searchName}`; */
    users.find((item)=>{
      if(item.name === searchName){
        userUl.innerHTML = `<li><span>${item.id}</span><span>${item.name}</span><span>${item.age}</span><li>`;
      } else {
        console.log('hi');
      }
    })

  }
}

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const filterSearch = ()=>{
  search()
  userName.addEventListener('keyup', search);

}
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
/* userName.addEventListener('keyup', search); */
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterBtn.addEventListener('click', filterSearch);

const main = () => {
  createTableUI(users);
};

main();
