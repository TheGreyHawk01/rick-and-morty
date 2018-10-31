console.log('sanity check');
const theBtn = document.querySelector('#button');
let result = document.querySelector('#result');
let input = document.querySelector('#inputHere');
let submit = input.value;
theBtn.addEventListener('click', function(){
    console.log(theBtn.value);
})

axios
.get("https://rickandmortyapi.com/api/character")
.then(function(result){
console.log('result', result);
})

.map(character => {
return
`
<div>Characters Of Rick And Morty:${name}</div>
<div>Their New Edgy Name:${name}</div>
<div>Which Of Gods Mistakes They Are:${species}</div>
<div>What They're Doing If Not Dead:${status}</div>
`
})
name.innerHTML=character;
console.log('name', name);
species.innerHTML = species;
console.log('species', species)