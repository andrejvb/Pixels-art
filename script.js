// variaveis globais
const principal = document.getElementById('color-palette');













// funções
function createOptionsColor(){
    principal.style.display = 'flex';

    for (let index = 0; index < 4; index += 1) {
        const createDiv = document.createElement('div');
        createDiv.style.marginTop = '50px';
        createDiv.style.width = '50px';
        createDiv.style.height = '50px';
        createDiv.style.border = 'solid 1px black';
        createDiv.className = 'color';
        principal.appendChild(createDiv);
        
    }
    
  
    return principal
}




function colorPallet(){
    const palleta = document.getElementsByClassName('color');
    palleta[0].style.backgroundColor = 'black';
    palleta[1].style.backgroundColor = 'red';
    palleta[2].style.backgroundColor = 'green';
    palleta[3].style.backgroundColor = 'RebeccaPurple';
    
    
    

}














// executa funções
createOptionsColor();
colorPallet();