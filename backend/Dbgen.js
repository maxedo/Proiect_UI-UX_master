const Data=require("./Data/Data");
const db=Data.getInstance();

  

async function createTable(){
try{
    await db.query
    ("CREATE TABLE IF NOT EXISTS Users (Id INT AUTO_INCREMENT PRIMARY KEY,   Email VARCHAR(250), DOB DATE,   Password VARCHAR(250))");
    await db.query
    ("CREATE TABLE IF NOT EXISTS GAMES (Id INT AUTO_INCREMENT PRIMARY KEY, NAME VARCHAR(250), IMAGE VARCHAR(250), DESCRIPTION VARCHAR(500), CATEGORY VARCHAR(250) )");
    await db.query
    ("CREATE TABLE IF NOT EXISTS REVIEWS(Id INT AUTO_INCREMENT PRIMARY KEY, USER_ID INT, COMMENT VARCHAR(500), RATING INT)");

    await db.end();
}catch(err){
    console.log(err);
}
}
createTable();
console.log("Baza de date este generata!");

