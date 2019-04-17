const ul = document.querySelector('.bgcLetters ul')
let i=0;
let liTags = []
let word = []
const words = [
    'Home',
    'Offer',
    'Informations',
    'Contact',
]


const changeLetters = ()=>{
    li.forEach(li => li.classList.remove('active'))
}

const addMakeUp = () => {
    makeUpWords();
}

const makeUpWords = ()=>{
    word = [];
    ul.innerHTML = ' ';
    liTags = [];
    for(let j = 0;j<words[i].length;j++){
        word[j] = words[i][j];
    }
    word.map(li=>{
            liTags.push(`<li>${li}</li>`)
    })
    ul.innerHTML = `${liTags.join("")}`
    li = document.querySelectorAll('li')
    li.forEach(li =>li.style.transition = `0.${Math.floor(Math.random()*8+2)}s`)
    li.forEach(li=> li.classList.add('active'));
}
