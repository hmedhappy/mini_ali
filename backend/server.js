const cors = require('cors');
const bodyParser=require('body-parser');
const app = require('express')();
const PORT= 5000 ;
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT,()=>console.log(`Server Running at ${PORT}`));

const users = [
    {name:"Hmid",prenom:"ferah",password:"58411214"},
    {name:"Yasmine",prenom:"Gaubi",password:"12345678"},
    {name:"Lina",prenom:"Ferah",password:"20287018"},
]

const posts = [ 
    {name:"Hmid",description:"this a post"},
    {name:"Yasmine",description:"this a post"},
    {name:"Lina",description:"this a post"}
]

app.get('/users',(req,res)=>{
    res.json(users);
})
app.get('/posts',(req,res)=>{
    res.json(posts);
});

app.post('/signin',(req,res)=>{
    const { login , password } = req.body ;
    var foundPassword = false ;
    var foundPassword = false ;
    var found = false ;
    users.map(user=>{
        if (user.name.trim().toLowerCase()==login.trim().toLowerCase() && user.password.trim().toLowerCase() == password.trim().toLowerCase()) found = true ;
    })
                 found? res.json({ login , password ,auth:true })
                    : res.json({ login , password ,errorLogin : true})
})


app.get('/',(req,res)=>res.send('Welcome to the server'))
