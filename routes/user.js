const express = require('express')
const router = express.Router()
const app =express()
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

let data ='No chat History'
router.get('/user',(req,res,next)=>{
    res.send(`<html><body>
        <form action='/login' method='POST'
         onSubmit="localStorage.setItem('username',document.getElementById('username').value)">
            <input type='text' name='userName' id='username'/>
            <button type='submit'>Send</button>
            </form></body></html>`)
})

router.post('/login',(req, res,next)=>{
    
    res.redirect('/')
 
})

router.get('/',(req,res,next)=>{``
    res.write(`<html><body>
        <h1>Chat App</h1>
        <br/>
        ${flag ? fs.readFileSync('./chat.text'):data}
        <br/>
        <form action='/' method='POST' onSubmit= "document.getElementById('username').value = localStorage.getItem('username')">
        <input name='chat' type='text' id='chat'/>
        <input type='hidden' name='username' id='username'/>
        <button type='submit'>Send</button>
        </form>
        </body></html>`)
        return res.end()
    })
    // console.log(userName)
let flag = false
router.post('/',(req,res,next)=>{
    // console.log(req.body)
    fs.appendFile('chat.text', `${req.body.username} : ${req.body.chat} , `,((err)=>{
        // if(data.length<1){
        //     data = 'No Chat History'
        // }else{
        //     // if(flag==false){
        //     //     data =''
        //     // }
        //     flag = true
        // //     let sms = `${req.body.username} : ${req.body.chat} , `
        // //   data += sms
        // }
        flag = true
        return
    }))
    res.redirect('/')
})

module.exports = router