const pool = require("./db");

const sql = 'UPDATE ama.type_appointment SET appointment_name = $1 WHERE tp_appointment_id = 2 RETURNING *';
const data = ['clinic']

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();