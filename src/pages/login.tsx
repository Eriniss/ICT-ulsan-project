import axios from "axios";
import styled from "styled-components"
import LoginImg from "../logos/send.svg";

const Container = styled.div`
  width: 80%;
  height: 100px;
  margin: 10px auto 20px auto;
  padding: 0;
`

const LoginLogo = styled.img`
  width: 25px;
  height: 25px;
`

const LoginText = styled.h3`
  text-align: center;
  margin: 50px 0 10px 0;
  padding: 0;
`

const LoginBox = styled.div`
  width: 25%;
  height: 250px;
  padding: 10px;
  border-radius: 10px;
  background-color: #e5ffe5;
  position: absolute;
  left: 37.5%;
`

const LoginInput = styled.input`
  width: 90%;
  height: 30px;
  margin: 0 0 10px 0;
  border-radius: 5px;
  border: 1px solid #000;
`

const BoxText = styled.div`
  text-align: left;
  margin: 0 5px 5px 0;
  padding: 0 0 0 15px;
`

const LoginButton = styled.button`
  width: 90%;
  height: 30px;
  border: 1.5px solid #000;
  background-color: #00ca00;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
`

const Login = () => {
  axios
  .get("http://localhost:4000/login")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  }
  );

  return (
    <Container>
      <LoginText><LoginLogo src={LoginImg} /> 로그인</LoginText>
      <LoginBox>
        <BoxText>아이디</BoxText>
        <LoginInput />
        <BoxText style={{marginTop: "10px"}}>비밀번호</BoxText>
        <LoginInput />
        <LoginButton>로그인</LoginButton>
        <p>회원가입</p>
      </LoginBox>
    </Container>
  )
}

export default Login;