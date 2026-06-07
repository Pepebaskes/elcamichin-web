
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

document.title = 'El Cami "Chin"';

createRoot(document.getElementById("root")!).render(<App />);
  
