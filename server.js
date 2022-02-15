const express = require('express')
const nunjucks = require('nunjucks')
const {user,findUser} = require('./user.js')
const app = express()
const session = {}


app.use(express.urlencoded({extended:true,}))

app.set('view engine','html')
nunjucks.configure('views',{express:app,})


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',(req,res)=>{
    let {userid, userpw} = req.body
    if(findUser(userid,userpw)){
        const privatekey = parseInt(Math.random()*1000000)
        let useritem
        for(let i=0; i<user.length; i++){
            if(user[i].userid == userid){
                useritem={...user[i]}
                // useritem.push(user[i])
                
            }
        }
        session[privatekey]={
            userid:useritem.userid,
            username:useritem.username
        }
        res.setHeader("Set-Cookie",`connect.id=${privatekey}; path=/`)
        res.redirect('/')
    }
})

app.listen(3000,()=>{
    console.log('server start')
})