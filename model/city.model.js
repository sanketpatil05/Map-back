const { default: mongoose } = require("mongoose");

const userschema = mongoose.Schema({
city: { type: String, required: true },
country: { type: String, required: true },
lat:{type:Number, required:true},
lng:{type:Number, required:true},
population:{type:Number, required:true},
population_proper:{type:Number, required:true},
iso2: { type: String, required: true },
admin_name: { type: String, required: true },
capital: { type: String, required: true },

});


const City = mongoose.model("city", userschema);

module.exports =  City  ;


// "city": "Kolkāta", 
//     "lat": "22.5411", 
//     "lng": "88.3378", 
//     "country": "India", 
//     "iso2": "IN", 
//     "admin_name": "West Bengal", 
//     "capital": "admin", 
//     "population": "17560000", 
//     "population_proper": "4496694"