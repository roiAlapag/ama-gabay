const pool = require("./db");

const sql = 'INSERT INTO ama.specialization(specialization_name) VALUES ($1) RETURNING *';
const data = ['Cardiologists']

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();