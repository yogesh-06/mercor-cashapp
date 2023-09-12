import "./App.css";
import ThemeConfig from "./theme";
import Hero from "./sections/Hero";
import Payment from "./sections/Payment";
import Banking from "./sections/Banking";
import Cashcard from "./sections/Cashcard";
import Investing from "./sections/Investing";

function App() {
  return (
    <ThemeConfig>
      <Hero />
      <Payment />
      <Banking />
      <Cashcard />
      <Investing />
    </ThemeConfig>
  );
}

export default App;
