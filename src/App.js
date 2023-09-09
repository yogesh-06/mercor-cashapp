import "./App.css";
import ThemeConfig from "./theme";
import Hero from "./sections/Hero";
import Payment from "./sections/Payment";
import Footer from "./components/Footer";
import Banking from "./sections/Banking";

function App() {
  return (
    <>
      <ThemeConfig>
        <Hero />
        {/* <Payment />
        <Banking /> */}
      </ThemeConfig>
    </>
  );
}

export default App;
