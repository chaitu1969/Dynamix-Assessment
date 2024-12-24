import express from "express";
import { fetchData } from "./fetch.js";
import { checklist } from "./checklist.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/checklist", async (req, res) => {
  try {
    const data = await fetchData();

    const result = checklist(data);

    res.status(200).json({ Result: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
