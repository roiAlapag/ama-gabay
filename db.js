const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "oodhcxawarneng",
    password: "de547974fb01efce2400f828d48652f73e849ee87ed897e3f45b682a85f4ebfe",
    host: "ec2-52-87-123-108.compute-1.amazonaws.com",
    port: 5432,
    database: "d9t4i62q2j12td"
});

module.exports = pool; 