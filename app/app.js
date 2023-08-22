console.log('app anexado')
let data = ''
let button = document.getElementById('fetch')
let sistema = document.getElementById('sistema')
let URLactual = window.location;
button.addEventListener('click',()=>{
    buscardatos(sistema)
    //(data===''?'loading':'full')
})

async function buscardatos(elemento){
    
    try {
        let data = await fetch('/sistema')
        let resp = await data.json()
        console.log(resp)
        elemento.innerText=resp.sistema
    } catch (error) {
        
    }
}