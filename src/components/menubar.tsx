import { Link } from "react-router-dom";
import MenuLogo from "../logos/list.svg";
import HomeLogo from "../logos/house.svg";

const Menubar = () => {
  return (
    <div>
      <ul className="nav">
        <Link to="/"><img className="logoImg" src={HomeLogo} alt="logo" /></Link>
        <li><Link className="menuText" to="/intro">소개글</Link></li>
        <li><Link className="menuText" to="/library">라이브러리</Link></li>
        <li><Link className="menuText" to="/review">독서감상문</Link></li>
        <li><Link className="menuText" to="/community">커뮤니티</Link></li>

        <ul className="login">
          <li><Link className="menuText" to="/login">로그인</Link></li>
          <li><Link className="menuText" to="/login">회원가입</Link></li>
        </ul>
        <img src={MenuLogo} className="menuLogo" alt="menu" />
      </ul>
    </div>
  )
}

export default Menubar;