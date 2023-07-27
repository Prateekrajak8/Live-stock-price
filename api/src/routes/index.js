const express = require('express');
const singUp= require('../routes/singUp.route')

const router = express.Router();
 
const defaultRoutes =[
    {
        path:'/signUp',
        route: singUp,
    },
]

defaultRoutes.forEach(r=>{
    router.use(r.path,r.route)
})
module.exports =router;
