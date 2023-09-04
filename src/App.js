import "./App.css";
import ThemeConfig from "./theme";
import Hero from "./sections/Hero";
import Payment from "./sections/Payment";
import Footer from "./components/Footer";

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
