const pool = require("./db");

const sql = 'UPDATE ama.type_sickness SET sickness_name = $1 WHERE tp_sickness_id = 1 RETURNING *';
const data = ['cold']

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();