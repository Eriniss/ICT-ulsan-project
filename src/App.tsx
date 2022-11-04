import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from './components/globalStyle';
import Menubar from "./components/menubar";
import './App.css';
import Main from "./pages/main";

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
        </Routes>
      </BrowserRouter>
      </body>

      <footer>

      </footer>
    </div>
  );
}

export default App;
