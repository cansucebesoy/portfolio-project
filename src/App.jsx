import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import ModeSwitch from "./components/modeSwitch";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Skills from "./components/skills";
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
