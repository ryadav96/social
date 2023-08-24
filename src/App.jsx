import "./App.css";
import GreetingWidget from "./components/GreetingWidget";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./pages/Login";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <div
        style={{ display: "inline-block" }}
        className="bg-[#131319]  w-[100vw] h-[100VH]  flex justify-center items-center box-border"
      >
        <div>
          <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="/timeline" element={<GreetingWidget />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login" element={<AuthForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
