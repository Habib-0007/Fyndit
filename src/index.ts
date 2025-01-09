import express, { Request, Response, NextFunction } from "express";
import path from "path";
import dotenv from "dotenv";
import queryRoute from "./routes/queryRoute";
import noCache from "./middleware/noCache";

dotenv.config();

const app = express();

// Middleware
app.use(noCache);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const PORT: number = Number(process.env.PORT) || 5000;

// Routes
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", queryRoute);

// 404 Error Handling
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("404: File Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Application starts on PORT ${PORT}`);
});

export default app;
