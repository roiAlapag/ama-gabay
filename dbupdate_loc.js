const pool = require("./db");

const sql = 'UPDATE ama.location SET location_name = $1 WHERE location_id = 1 RETURNING *';
const data = ['Matina']

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();