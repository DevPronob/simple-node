const express =require('express')
const app =express()
const cors =require('cors')
const port =7000;
app.get('/',(req,res) =>{
    res.send('Hello ddddddddllk World!')
})
app.use(cors())
app.use(express.json())
const data =[
    {id:1,name:"sabana",number:"0-3333-3-3344040"},
    {id:2,name:"subnur",number:"0-3849404440344040"},
    {id:3,name:"mithila",number:"0-34i40444044940400"},
    {id:4,name:"mithila",number:"0-9r9rrrr99rr9rr9r949440"},
    {id:5,name:"sucharita",number:"0-irrrr994949494040"},
]
app.get('/users',(req,res) =>{
    console.log(req.query)
    if(req.query.name){
        const filterName =data.filter(item=>item.name.includes(req.query.name))
        console.log(filterName)
        res.send(filterName)
    }else{
        res.send(data)
    }
    
    
})
app.post('/user',(req,res) =>{
    console.log(req.body)
    const user =req.body;
    user.id =data.length +1;
    data.push(user)
    res.send(user)
})
app.get('/user/:id',(req,res) =>{
    console.log(req.params);
    const id =req.params.id;
    const all =data.find(u=>u.id === JSON.parse(id))
    res.send(all)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })