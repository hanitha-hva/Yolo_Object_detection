const exp=require('express')
const axios=require('axios')
const path=require('path')
const app=exp()

const cors=require('cors')
app.use(cors())
const config = {
    headers: {
      'x-api-key': 'dknk339fbbb',
    },
  };
  
app.get('/api/test',(req,res)=>{
    res.send('gg server')
})
app.get('/api/django',(req,res)=>{
    axios.get('http://127.0.0.1:8000/',config)
    .then((r)=>res.send(r.data))
})
app.use(exp.static(path.join(__dirname, '../fe/dist_prod')));
app.listen(3000,()=>{
    console.log('serever started')
})