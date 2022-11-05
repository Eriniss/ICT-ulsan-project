import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from './components/globalStyle';
import Menubar from "./components/menubar";
import './App.css';
import Main from "./pages/main";
import Intro from "./pages/intro";
import Library from "./pages/library";
import Review from "./pages/review";
import Community from "./pages/community";
import Login from "./pages/login";

const App = () => {
  return (
    <div className="App">
      <header>
        <GlobalStyle />
      </header>

      <body>
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/library" element={<Library />} />
          <Route path="/review" element={<Review />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </body>

      <footer>

      </footer>
    </div>
  );
}

export default App;
