import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from './components/globalStyle';
import Menubar from "./components/menubar";
import './App.css';
import Main from "./pages/main";
import Intro from "./pages/intro";
import Library from "./pages/library";
import Review from "./pages/reviews";
import Community from "./pages/community";
import Login from "./pages/login";
import Post from "./pages/post";
import Edit from "./pages/edit";
import View from "./pages/view";

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
          <Route path="/post" element={<Post />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
