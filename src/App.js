import "./css/style.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Task13 from "./pages/Task13";
import Task14 from "./pages/Task14";
import Task16 from "./pages/Task16";
import {useEffect} from "react";


function App() {
    useEffect(function () {

    });
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/task13" element={<Task13/>}/>
                <Route path="/task14" element={<Task14/>}/>
                <Route path="/task16" element={<Task16/>}/>
            </Routes>
        </Router>
    )
}

export default App;
