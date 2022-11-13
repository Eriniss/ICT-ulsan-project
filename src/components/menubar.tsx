import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuLogo from "../logos/list.svg";
import HomeLogo from "../logos/house.svg";

const Container = styled.div`
  @media (max-width: 768px) {
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: left;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 70px;
    font-weight: bold;
    text-align: center;
    align-items: center;
    z-index: 1;
    border: 1px solid black;
    padding: 20px;
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 70px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    align-items: center;
    z-index: 1;
    border: 1px solid black;
    padding: 20px;
  }
`

const MenuList = styled.ul`
    display: inline;
    margin: 4px;
    text-decoration: none;

    @media (min-width: 768px) {
      display: inline;
      margin: 4px;
      text-decoration: none;
    }

    @media (min-width: 1024px) {
      display: inline;
      margin: 34px;
      text-decoration: none;
    }

    @media (min-width: 1440px) {
      display: inline;
      margin: 88px;
      text-decoration: none;
    }

    @media (min-width: 1920px) {
      display: inline;
      margin: 148px;
      text-decoration: none;
    }
`

const HomeLogoImg = styled.img`
  width: 30px;
  height: 30px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Login = styled.div`
  display: inline;
  min-width: 5em;
  margin: 0 1em;
  text-decoration: none;
  float: right;
`

const MenuLogoImg = styled.img`
  width: 25px;
  height: 25px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Menubar = () => {
  
  return (
    <Container>
      <ul>
        <Link to="/"><HomeLogoImg src={HomeLogo} /></Link>
        <MenuList><Link style={{textDecoration: 'none', color: 'black'}} to="/intro">프로젝트 소개글</Link></MenuList>
        <MenuList><Link style={{textDecoration: "none", color: "#000"}} to="/library">라이브러리</Link></MenuList>
        <MenuList><Link style={{textDecoration: "none", color: "#000"}} to="/review">독서감상문</Link></MenuList>
        <MenuList><Link style={{textDecoration: "none", color: "#000"}} to="/*">커뮤니티</Link></MenuList>
        <MenuLogoImg src={MenuLogo} />
        <Login><Link style={{textDecoration: "none", color: "#000"}} to="login">로그인</Link></Login>
        </ul>
    </Container>
  )
}

export default Menubar;