import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "666666",
  database: "demo_kltn",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});
