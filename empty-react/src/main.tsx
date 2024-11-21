import { createRoot } from "react-dom/client";
import "./index.css";
import "./mock/index.ts";
import App from "./App.tsx";

const root = document.getElementById("root");
const app = createRoot(root!);
app.render(<App />);
