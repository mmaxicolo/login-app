import express  from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.routes.js";
import ingredientesRouter from "./routes/ingredientes.routes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser());

app.use('/api' ,authRouter);
app.use('/ingredientes',ingredientesRouter);

export default app;