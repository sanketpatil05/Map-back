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


