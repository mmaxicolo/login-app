import app from "./app.js";
import { db } from "./db.js";

const port = 3000;

db();
app.listen(port, () => {
    console.log("server conectado en el puerto" + port);
})