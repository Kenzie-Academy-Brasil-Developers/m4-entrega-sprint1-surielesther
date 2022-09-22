import express from "express";
import usersRoutes from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);

const PORT = 3000;

app.listen(PORT);

export default app;
