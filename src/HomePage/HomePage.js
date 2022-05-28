import "./homePage.css";
import Header from "./component/Header";
import Main from "./component/Main";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";

const HomePage = () => {

  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default HomePage;
