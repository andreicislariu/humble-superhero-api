import express from "express";
import cors from "cors";
import superheroRoutes from "./routes/superhero.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/superheroes", superheroRoutes);

export default app;
