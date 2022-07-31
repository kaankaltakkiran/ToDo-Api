//Modülleri Dahil Ettim
const express = require("express")
const app = express()
//Env Görmesi İçin
 require("dotenv").config()
//Veritabanı İmport
 require("./src/config/databaseConnection") 

//Env içinde 5000 i okuyamazsa 5001 den başlat
const port = process.env.PORT || 5001

//Router Dosyası İmport
 const todoRouter = require("./src/routers/todoRouter") 
 
//Bodyden Gelen Verileri Okumak İçin
  app.use(express.json()) 

//Başlarına Api Yazcak
app.use("/api", todoRouter) 

//Ana Sayfa
app.get("/", (req, res) => {
    res.send("Hoş Geldiniz ...")
})
 
//Sunucu Başlatma
app.listen(port, () => {
    console.log(`Server ${port} Portundan Başlatıldı ...` );
})