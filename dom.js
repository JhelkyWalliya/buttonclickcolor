const generateRandomColor = () => {
    const r = Math.floor(Math.random () * 256);
    const g = Math.floor(Math.random () * 256); 
    const b = Math.floor(Math.random () * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons){
    button.addEventListener('click', ()=> {
        button.style.backgroundColor = generateRandomColor();
        button.style.color = generateRandomColor();
        
    });
}