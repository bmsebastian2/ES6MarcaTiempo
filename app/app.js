console.log('app anexado')
let data = ''
let button = document.getElementById('fetch')
let sistema = document.getElementById('sistema')
button.addEventListener('click',()=>{
    buscardatos(sistema)
    //(data===''?'loading':'full')
})

async function buscardatos(elemento){
    
    try {
        let data = await fetch('https://curly-dollop-q49q6jw4p5pf6797-8080.app.github.dev/sistema')
        let resp = await data.json()
        console.log(resp)
        elemento.innerText=resp.sistema
    } catch (error) {
        
    }
}