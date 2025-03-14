let button = document.querySelector('.start')
let boutton = document.querySelector('.stop')

let intervalId

function couleurAleatoire(){ 
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
        
            let valeur = `rgb(${r}, ${g}, ${b})`;
            document.body.style.backgroundColor = valeur;
        
            let code = document.getElementById('rgb');
            code.textContent = "" + valeur; 
        }
        intervalId =  setInterval(couleurAleatoire, 1000);  

button.addEventListener("click", (e) => {
    if (!intervalId){
        intervalId =  setInterval(couleurAleatoire, 1000);
    }
})

boutton.addEventListener("click", (e) => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    
})



