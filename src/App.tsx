import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./assets/Layout/Layout";
import Mainpage from "./assets/Pages/mainpage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
