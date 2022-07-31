//Paket İmport
const mongoose = require("mongoose")

//Veritabanı Şema Oluşturma
const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    complated: {
        type: Boolean,
        default: false
    }
    //Update Bilgileri Tutmak için
},{collection: "Todo", timestamps: true})

//Dışarıya Export Etme
const todo = mongoose.model("Todo", todoSchema)

module.exports = todo