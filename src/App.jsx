import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModeSwitch from "./components/ModeSwitch";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <ModeSwitch />
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
