import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./progressbar";

function App() {
    return (
        <div className="App">
            <ProgressBar percentage={-50} value={-500} maxValue={1000} />
        </div>
    );
}

export default App;
