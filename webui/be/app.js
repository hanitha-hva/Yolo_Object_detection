const exp=require('express')
const app=exp()
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(3000,()=>{
    console.log('serever started')
})