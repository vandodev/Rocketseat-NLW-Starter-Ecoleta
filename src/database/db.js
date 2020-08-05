//Dependencia sqlite
const sqlite3 = require("sqlite3").verbose()

//iniciando objeto de banco de dados
const db = new sqlite3.Database("./src/database/databasedb")

db.serialize(() =>{

//Cria tabela
db.run(`
    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
`)

//Inseri dados
const query = `
INSERT INTO places (
    image,
    name,
    address,
    address2,
    state,
    city,
    items
) VALUES (?,?,?,?,?,?,?);   
`

const values =  [
    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",

    "Colectoria",
    "Sete de setembro, Centro",
    "Numero 287",
    "São Paulo",
    "Morro Agudo",
    "Resíduos eletronicos, lâmpada"
]


    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

//Não podemos utilizar arrow function por causa do this
//db.run(query,values, err =>{
//db.run(query, values, afterInsertData)

//Buscando dados
db.all(`SELECT name FROM places`,function(err, row){
//db.all(`SELECT * FROM places`,function(err, row){

    if(err) {
        return console.log(err)
    }

    console.log("Aqui estão seus registros")
    console.log(row)
})

//Deletando dados
//db.run(`DELETE FROM places`)//Deleta todos os dados

db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    if(err) {
        return console.log(err)
    }

    console.log("Registro deletado com sucesso")
})

})