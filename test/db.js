import mongoose from "mongoose";

const URI = "mongodb+srv://federicosegu:Abeyp231@cluster0.gjwkb4d.mongodb.net/ProyectoFinaltest?retryWrites=true&w=majority"

mongoose
    .connect(URI)
    .then(() => console.log("Conectado a la DB Test"))
    .catch((error) => console.log(error));