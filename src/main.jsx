import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(<App />);
