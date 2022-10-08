// variaveis globais
const principal = document.getElementById('color-palette');
const palleta = document.getElementsByClassName('color');
principal.style.display = 'flex';
const sectionPixelBoard = document.getElementById('pixel-board')


const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const l4 = document.getElementById('l4');
const l5 = document.getElementById('l5');

// funções
function randomCollors(){
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    return `rgb(${a}, ${b}, ${c})`;
}

function createOptionsColor(){  

    for (let index = 0; index < 4; index += 1) {
        const createDiv = document.createElement('div');
        createDiv.style.marginTop = '50px';
        createDiv.style.marginBlockEnd = '10px'
        createDiv.style.width = '50px';
        createDiv.style.height = '50px';
        createDiv.style.border = 'solid 1px black';
        createDiv.className = 'color';        
        createDiv.style.backgroundColor = randomCollors();
        principal.appendChild(createDiv);
    } 
    palleta[0].style.backgroundColor = 'rgb(00, 00, 00)';
}

function createButton(){

    const criaBotao = document.createElement('button')
    criaBotao.id = 'button-random-color';
    criaBotao.style.marginTop = '50px';
    criaBotao.style.marginBlockEnd = '10px'
    criaBotao.innerHTML = 'Cores aleatórias';
    principal.appendChild(criaBotao);
    
    criaBotao.addEventListener('click', function colorPallet(){
        let value = []; 
        for (let index = 1; index < 4; index += 1) {
            palleta[index].style.backgroundColor = randomCollors(); 
            value.push(palleta[index].style.backgroundColor) ;           
            localStorage.setItem('colorPalette', JSON.stringify(palleta[1].style.backgroundColor));         
            localStorage.setItem('corEscolhidas2', JSON.stringify(palleta[2].style.backgroundColor));         
            localStorage.setItem('corEscolhidas3', JSON.stringify(palleta[3].style.backgroundColor));
            
                                 
        }
        
    })
}

// function returnStorage (){
//     if (localStorage.getintem(corEscolhidas1) === null) {
//         localStorage.setItem('corEscolhidas', coresEscolhidas)
//         localStorage.setItem('corEscolhidas2', coresEscolhidas)
//         localStorage.setItem('corEscolhidas3', coresEscolhidas)
//     } else {
//     palleta[1].style.backgroundColor = JSON.parse(coresEscolhidas[0]);
//     palleta[2].style.backgroundColor = JSON.parse(coresEscolhidas[1]);
//     palleta[3].style.backgroundColor = JSON.parse(coresEscolhidas[2]);
//     }

         
// }

function createPixelBoard(param1){ 
           
    for (let index = 0; index < 5; index += 1) {
            const createDiv = document.createElement('div');
            createDiv.style.border = 'solid 1px black';
            createDiv.style.backgroundColor = 'white';
            createDiv.id = 'pixel-board';
            createDiv.className = 'pixel';
            param1.appendChild(createDiv);
        
    }    
    
}

function checkKey() {

    if (localStorage.getItem('colorPalette') === null){ 
        localStorage.setItem('colorPalette', ''); 
        localStorage.setItem('corEscolhidas2', ''); 
        localStorage.setItem('corEscolhidas3', ''); 
    } else{
        for (let index = 0; index < 3; index += 1) {
            palleta[1].style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'));
            palleta[2].style.backgroundColor = JSON.parse(localStorage.getItem('corEscolhidas2'));
            palleta[3].style.backgroundColor = JSON.parse(localStorage.getItem('corEscolhidas3'));
        }
        
    }
}

//Executa Funções
createOptionsColor();
createButton();
checkKey();
createPixelBoard(l1);
createPixelBoard(l2);
createPixelBoard(l3);
createPixelBoard(l4);
createPixelBoard(l5);
