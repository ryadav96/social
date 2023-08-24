import "./App.css";
import GreetingWidget from "./components/GreetingWidget";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div
        style={{ display: "inline-block" }}
        data-ignore="used only for top most containter width"
      >
        <Routes>
          <Route path="/" element={<GreetingWidget />} />
          <Route path="timeline" element={<GreetingWidget />} />
          <Route path="signup" element={<GreetingWidget />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
