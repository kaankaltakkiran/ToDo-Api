//VeriTabanı Bağlantıları
//Modülleri İmport Etme
const mongoose = require("mongoose")

//Hangi Veritabanına Bağlancığına
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Veritabanına Başarıyla Bağlandı");
    })
    .catch((err) => {
        console.log("Veritabanına Bağlanılamadı : " + err);
    })