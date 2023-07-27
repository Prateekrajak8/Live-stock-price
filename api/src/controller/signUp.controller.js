const signUpService= require('../services/signUp.service')
const {responseForward }= require('../utils/util')
const addUser = async (req,res)=>{
  const data = await signUpService.addUser(req.body);
  return responseForward(data,'success',res);
}

module.exports = {
  addUser
}