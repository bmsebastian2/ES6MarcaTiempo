import * as url from 'url';
import express from 'express';
import path from 'path';
//-------------------------------------------------------------
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
//-------------------------------------------------------------
console.log('ES6MarcaTiempo')

const app = express()
app.use(express.static(path.join( __dirname + '/style')))
const PORT  = process.env.PORT ?? 8080

app.get('/',(req,res)=>{
    res.sendFile( path.join(__dirname+'views/index.html') )
})

app.listen(PORT,()=>console.log(`Puerto Activo: ${PORT}`))


