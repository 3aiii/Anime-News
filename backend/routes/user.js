const router = require('express').Router()
const conn = require('../server/conn')

router.post('/create', async(req,res)=>{
    const {username,user_password,user_firstname,user_lastname,user_email,user_status} = req.body
    let sql = `INSERT INTO user(username,user_password,user_firstname,user_lastname,user_email,user_status)
                VALUES(?,?,?,?,?,?)`
    let parameter = [username,user_password,user_firstname,user_lastname,user_email,user_status]
    
    try {
        conn.query(
            sql,
            parameter,
            (err,result,field)=>{
                if(err){
                    res.status(401).json("Something went wrong " + err)
                }else{
                    res.status(200).json(result)
                }
            }
        )
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router