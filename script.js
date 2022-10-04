// variaveis globais
const principal = document.getElementById('color-palette');
const palleta = document.getElementsByClassName('color');


// funções
function randomCollors(){
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    return `rgb(${a}, ${b}, ${c})`;
}


function createOptionsColor(){
    principal.style.display = 'flex';

    for (let index = 0; index < 4; index += 1) {
        const createDiv = document.createElement('div');
        createDiv.style.marginTop = '50px';
        createDiv.style.width = '50px';
        createDiv.style.height = '50px';
        createDiv.style.border = 'solid 1px black';
        createDiv.className = 'color';
        createDiv.style.backgroundColor = randomCollors();
        principal.appendChild(createDiv);
        
    }    
    
}







function createButton(){
    const criaBotao = document.createElement('button')
    criaBotao.id = 'button-random-color';
    criaBotao.style.marginTop = '50px';
    criaBotao.innerHTML = 'Cores aleatórias';
    principal.appendChild(criaBotao);
    palleta[0].style.backgroundColor = 'black';  
    criaBotao.addEventListener('click', function colorPallet(){
          
        for (let index = 1; index < 4; index += 1) {
            palleta[index].style.backgroundColor = randomCollors();           
        }
    
    })
}












// executa funções
createOptionsColor();
createButton();