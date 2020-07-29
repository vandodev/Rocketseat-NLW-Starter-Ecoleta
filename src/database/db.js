//Dependencia sqlite
const sqlite3 = require("sqlite3").verbose()

//iniciando objeto de banco de dados
const db = new sqlite3.Database("./src/database/databasedb")