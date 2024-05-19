import app from "./app.js";
import { db } from "./db.js";

db();
app.listen(process.env.PORT, () => {
    console.log("server conectado en el puerto " + process.env.PORT);
})