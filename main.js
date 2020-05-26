const firstName = 'Mateo';
const age = 32;

console.log(`siema jestem  ${firstName}  i mam ${age} lata`);
console.log(age);
const dupa = document.querySelector('.omnnie_descryption');
dupa.innerHTML = `siema jestem ${firstName}  i mam ${age} lata`;
const pusta = document.querySelector('.pusta');
pusta.innerHTML = `to jeste tajemna notatka`;

function calculate(myNumber){
    console.log('Dostalem')
    myNumber = myNumber * 2;
    return myNumber;
}
calculate(1);
const myResult =calculate(age);
console.log(myResult);

function greet(age, firstName){
    console.log(
        `Witaj Kolego, nazywam sie ${firstName} i mam ${age}
lat`);
    
}


function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;


}
createContent('.omnnie__title','hello world');