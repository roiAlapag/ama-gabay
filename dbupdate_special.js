const pool = require("./db");

const sql = 'UPDATE ama.specialization SET specialization_name = $1 WHERE specialization_id = 1 RETURNING *';
const data = ['Endocrinologists']

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();