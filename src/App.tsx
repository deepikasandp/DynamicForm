import "./styles/styles.css";
import DynamicForm from "./components/DynamicForm/DynamicForm";
import configuration from "./data/configurationToImplement.json";
import { getData } from "./components/utils";

export default function App() {
  return (
    <div className="App" style={{ backgroundColor: "grey" }}>
      <h1>Dynamic Form Renderer</h1>
      <DynamicForm config={configuration} object={getData()} />
    </div>
  );
}
