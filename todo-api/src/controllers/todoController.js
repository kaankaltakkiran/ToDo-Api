//Modelimi İmport Etme Verileri Kaydetmek İçin
const todo = require("../models/todoModel")

//Aynı İsimde Kayıt Varsa Hata Çıkar
const todoAdd = async (req, res) => {
    try {
        const _todo = await todo.findOne({name: req.body.name})
        if (_todo) {
            return res.status(400).json({
                success: false,
                message: "Bu isimde kayıt mevcut"
            })
        }
     //Veritabanına Kayıt İçin
        const todoAdd = new todo(req.body)
     
        await todoAdd.save()
            .then(() => {
              /*   Verileri Başarılı İse Verileri Döndür */
                return res.status(201).json(todoAdd)
            })
            .catch((err) => {
                return res.status(400).json({
                    success: false,
                    message: "Kayıt Oluşturulurken Hata Çıktı : " + err
                })
            })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Kayıt Oluşturulamadı !"
        })
    }
}

//Tüm Verileri Getirme
const todoGetAll = async (req, res) => {
    const { page } = req.query
    const limit = 2
    const skip = Number(page - 1) * limit
    try {
        const todoGetAll = await todo.find({}).limit(limit).skip(skip)
        return res.status(200).json({
            success: true,
            data: todoGetAll
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Kayıt Getirilemedi !" 
        })
    }
}

//Verileri Update Etme
const todoUpdate = async (req, res) => {
    const { id } = req.params
    try {
        const todoUpdate = await todo.findByIdAndUpdate(id, req.body)
        if (todoUpdate) {
            return res.status(200).json({
                success: true,
                message: "Güncelleme Başarılı"
            })
        }
        else return res.status(400).json({
            success: false,
            message: "Kayıt Güncellenemedi !"
        })

    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: "Kayıt Güncellenemedi !"
        })
    }
}

//Silme İşlemi
const todoDelete = async (req, res) => {
    const { id } = req.params
    
    try {
        const todoDelete = await todo.findByIdAndDelete(id)
        if (todoDelete) {
            return res.status(200).json({
                success: true,
                message: "Kayıt Başarıyla Silindi"
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Kayıt Silinemedi"
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Kayıt Silinemedi : " + error
        })
    }


}
//Deaylı Veri İşlemi
const todoGet = async (req, res) => {
    const { id } = req.params

    const todoGet = await todo.findById(id)
    if (todoGet) {
        return res.status(200).json(todoGet)
    }
    else {
        return res.status(404).json({
            success: false,
            message: "Kayıt Bulunamadı !"
        })
    }
}

//Dışarı Export Etme
module.exports = {
    todoAdd,
    todoGetAll,
    todoUpdate,
    todoDelete,
    todoGet
}