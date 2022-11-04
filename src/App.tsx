import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from './components/globalStyle';
import Menubar from "./components/menubar";
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Menubar />
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
