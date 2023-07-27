const {promisifyQuery} = require('../utils/util')

const add = async (value) => {
   try{
      const values=value;
      const query = 'INSERT INTO user_table (user_user_name, user_email, user_phone_no, user_password) VALUES ($1,$2,$3,$4)';
      let result = await promisifyQuery(query,values);
      const queryResult = {
        status: 200,
        statusDescription: "Successfully Executed",
        data: result
      };
      return queryResult;
   } 
   catch(err) {
    console.log(err,"error in signUp dao");
    throw err;
   }
}

module.exports = {
  add
}