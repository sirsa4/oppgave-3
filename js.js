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
const searchInput = id("#name");
const filterInput = id("#age");
const filterButton = id("#filter");

const userUl = id("#users");

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {
  // TODO: Hent ut verdien fra søke input feltet
  const searchName = searchInput.value;
  // TODO: Sjekk om searchName ekisterer(i liste)
  if (searchName) {
   
    // TODO: Bruk .find for å finne navnet til den brukeren som matcher søkeordet
/*     const searchResult = users.find(user =>{

      if(searchName.toLowerCase() === user.name.toLowerCase()){
        console.log(`${user.name}`);
        userUl.innerHTML = `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
      } */
      const searchResult = users.find((user) => {
        // TODO: Sjekk som resultatet eksisterer
    if (searchName.toLowerCase() === user.name.toLowerCase()){
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket
      console.log(user.age);
      userUl.innerHTML = `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;

    }   
      });
    

  /*   // TODO: Sjekk som resultatet eksisterer
    if ("") {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
    } */
  } 
    // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI
    
   else {
    createTableUI(users);
    console.log('wrong');
   
  }
};

const handleFilter = () => {
  // TODO: Hent ut verdien fra filter input feltet
  let filterValue = filterInput.value;
  // TODO: Sjekk om filterVerdien ekisterer og er et tall
  if (filterValue) {
    
    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien
    const filterResult = users.filter((user)=>{
      return user.age <= filterValue;
    });
    
    // TODO: Sjekk om det er noe resultat og at legnden er større enn null
    if (filterResult) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret
   const newFilter = filterResult.map((user)=>{
    return `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
   });
   userUl.innerHTML = newFilter.join(' ');
   filterInput.value = '';
      
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
      
    }
  } else {
    // TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI
    createTableUI(users);
  }
};

const main = () => {
  createTableUI(users);
};

main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
searchInput.addEventListener('keyup', handleSearch);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterButton.addEventListener('click', handleFilter);
