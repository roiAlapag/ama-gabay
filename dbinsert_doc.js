const pool = require("./db");

const sql = 'INSERT INTO ama.doctor(first_name, last_name, email, phone_number, gender, location_id, specialization_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
const data = ['Aatrox','Vi','aavi@gmail.com','m',1,1]

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();