const Data=require("./Data/DbConnection");
const db=Data.getInstance();

  

async function createTable(){
try{
    await db.query(`
    CREATE TABLE IF NOT EXISTS USERS (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Nickname VARCHAR(250) UNIQUE,
        Email VARCHAR(250),
        DOB DATE,
        Password VARCHAR(250)
    );
`);

await db.query(`
    CREATE TABLE IF NOT EXISTS GAMES (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        NAME VARCHAR(250),
        IMAGE VARCHAR(250),
        DESCRIPTION VARCHAR(500),
        CATEGORY VARCHAR(250)
    );
`);

await db.query(`
    CREATE TABLE IF NOT EXISTS REVIEWS (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        USER_ID INT,
        IdGame INT,
        COMMENT VARCHAR(500),
        RATING INT,
        FOREIGN KEY(USER_ID) REFERENCES USERS(Id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY(IdGame) REFERENCES GAMES(Id) ON DELETE CASCADE ON UPDATE CASCADE
    );
`);

await db.query(`
    CREATE TABLE IF NOT EXISTS PROFILE (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        USER_ID INT,
        ABOUT_ME VARCHAR(500),
        PHOTO VARCHAR(250),
        FOREIGN KEY(USER_ID) REFERENCES USERS(Id) ON DELETE CASCADE ON UPDATE CASCADE
    );
`);

await db.query(`
    CREATE TABLE IF NOT EXISTS GAME_LIST (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        USER_ID INT,
        GAME_ID INT,
        FOREIGN KEY(USER_ID) REFERENCES USERS(Id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY(GAME_ID) REFERENCES GAMES(Id) ON DELETE CASCADE ON UPDATE CASCADE
    );
`);

await db.end();

}catch(err){
    console.log(err);
}
}
createTable();
console.log("Baza de date este generata!");

