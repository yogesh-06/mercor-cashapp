import Hero from "./sections/Hero";
import "./App.css";
import Payment from "./sections/Payment";
import ThemeConfig from "./theme";
function App() {
  return (
    <>
      <ThemeConfig>
        <Hero />
        <Payment />
      </ThemeConfig>
    </>
  );
}

export default App;
