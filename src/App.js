import { Route, Routes } from "react-router-dom";
import OpenSourceProject from "./Components/OpenSource/OpenSourceProject";
import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";

function App() {
    return (
        <Routes>
            <Route path="/open-source-projects" element={<OpenSourceProject/>} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}

export default App;
