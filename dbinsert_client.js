const pool = require("./db");

const sql = 'INSERT INTO ama.client(first_name, last_name, email, phone_number, gender) VALUES ($1, $2, $3, $4, $5) RETURNING *';
const data = ['Roi','Alapag','roialapag@gmail.com','09091231234','m']

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();