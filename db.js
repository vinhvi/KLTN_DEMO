import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "vinh123",
  database: "demo_kltn",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});
