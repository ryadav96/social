import "./App.css";
import GreetingWidget from "./components/GreetingWidget";

function App() {
  return (
    <>
      <div
        style={{ display: "inline-block" }}
        data-ignore="used only for top most containter width"
      >
        <GreetingWidget />
      </div>
    </>
  );
}

export default App;
