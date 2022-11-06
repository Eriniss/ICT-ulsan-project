import axios from "axios";
import styled from "styled-components";
import StarWale from "../images/starwale.png";
import Github from "../logos/github.svg";
import Velog from "../logos/blog.svg";
import Email from "../logos/email.svg";
const content = require('../content/intro.json');

interface dataType {
  _id: any;
  title: string;
  body: string;
}

const introTitle: string = content.title;

const introBody: string = content.body.split("\n").map((line: string) => {
  return <p>{line}</p>;
});

const address: any = content.address;

const Container = styled.div`
  width: 60%;
  margin: 30px auto;
  text-align: left;
  font-family: 'Nanum Gothic', sans-serif;
`

const MyIntro = styled.div`
  font-size: 26px;
  font-weight: bold;
  border-bottom: 2px solid #707070;
`

const IntroImg = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${StarWale});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`

const Body = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 10px;
  font-family: sans-serif, 'Nanum Gothic';
`

const Address = styled.a`
  font-size: 15px;
  text-decoration: none;
  color: #707070;
  margin-right: 30px;
`
const LogoImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`

const Intro = () => {
    axios
    .get("http://localhost:4000/intro")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    }
    );

    return (
      <Container>
        <IntroImg />
        <MyIntro>{introTitle}</MyIntro>
        <Body>{introBody}</Body>
        <Address href={address.github} target="_blank"><LogoImg src={Github} />깃허브</Address>
        <Address href={address.velog} target="_blank"><LogoImg src={Velog} />벨로그</Address>
        <Address href={address.email} target="_blank"><LogoImg src={Email} />이메일</Address>
      </Container>
    )
}

export default Intro;