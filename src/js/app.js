import express from "express"
import userRouter from "./routes/UserRoutes.js";
import sessionRouter from "./routes/SessionRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", sessionRouter);
app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
