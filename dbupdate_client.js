const pool = require("./db");

const sql = 'UPDATE ama.client SET first_name = $1 WHERE client_id = 1 RETURNING *';
const data = ['Adrian']

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();