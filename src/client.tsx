import { h } from "pl-vue";
import { App } from "./app";
import app from "./main";

const node = app.render(<App />);
const root = document.getElementById('root');
root.innerHTML = '';
root.appendChild(node);
