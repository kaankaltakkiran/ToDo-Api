//Modülleri İmport Etme
const router = require("express").Router()
//Controller Dahil Etme
const todoController = require("../controllers/todoController")

//Kayıt Eklemek için Post Yönlendirilmesi
router.post("/todo", todoController.todoAdd)
//Hepsini Getir
 router.get("/todo", todoController.todoGetAll)
//Verileri Update Etme
router.put("/todo/:id", todoController.todoUpdate)
//Silme İşlemi
router.delete("/todo/:id", todoController.todoDelete)
//Id ye Göre Veri Görütüleme
router.get("/todo/:id", todoController.todoGet)
 
//Dışarı Export Etme
module.exports = router