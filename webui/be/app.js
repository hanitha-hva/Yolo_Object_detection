const exp=require('express')
const axios=require('axios')
const app=exp()
const cors=require('cors')
app.use(cors())
app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/api/test',(req,res)=>{
    res.send('gg server')
})
app.get('/api/django',(req,res)=>{
    axios.get('http://127.0.0.1:8000/')
    .then((r)=>res.send(r.data))
})
app.listen(3000,()=>{
    console.log('serever started')
})