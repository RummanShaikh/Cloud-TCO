import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Dashboard from "./components/Dashboard";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
