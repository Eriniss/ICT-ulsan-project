import axios from "axios";

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
    <div>
      <h1>로그인/회원가입 페이지</h1>
    </div>
  )
}

export default Login;