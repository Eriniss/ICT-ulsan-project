import { Link } from "react-router-dom";
import MenuLogo from "../logos/list.svg";
import HomeLogo from "../logos/house.svg";

export default function Header() {
  
  return (
    <div>
      <ul className="nav">
        <img className="logoImg" src={HomeLogo} alt="logo" />
        <li><Link className="menuText" to="/TestPage">소개글</Link></li>
        <li><Link className="menuText" to="/TestPage">창작마당</Link></li>
        <li><Link className="menuText" to="/TestPage">건의게시판</Link></li>
        <li><Link className="menuText" to="/TestPage">자유게시판</Link></li>

        <ul className="login">
          <li><Link className="menuText" to="/LoginPage">로그인</Link></li>
          <li><Link className="menuText" to="/LoginPage">회원가입</Link></li>
        </ul>
        <img src={MenuLogo} className="menuLogo" alt="menu" />
      </ul>
    </div>
  )
}