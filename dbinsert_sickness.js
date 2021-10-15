const pool = require("./db");

const sql = 'INSERT INTO ama.type_sickness(sickness_name) VALUES ($1) RETURNING *';
const data = ['diarhea']

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();