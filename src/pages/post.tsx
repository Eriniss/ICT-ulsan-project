import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  width: 60%;
  height: 100%;
  margin: 10px auto 10px auto;
  padding: 0;
  background-color: #fff;
`

const Title = styled.input`
  width: 80%;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #bbbbbb;
  background-color: #fff;
  font-size: 30px;
`

const Body = styled.textarea`
  width: 80%;
  height: 300px;
  margin: 10px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #bbbbbb;
  background-color: #fff;
  font-size: 20px;
`

const PostButton = styled.button`
  width: 80%;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #bbbbbb;
  background-color: slateblue;
  font-size: 15px;
  text-align: left;
  color: #fff;
  border-radius: 15px;
  text-align: center;
  font-weight: bold;
  vertical-align: center;
`;

const Post = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const navigate = useNavigate();

  const handleClickPost = () => {
    axios
      .post("http://localhost:4000/post", {
        title: title,
        body: body,
      })
      .then((res) => {
        navigate("/library");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Title
        placeholder="제목을 입력하세요"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Body
        placeholder="내용을 입력하세요"
        onChange={(e) => setBody(e.target.value)}
      />
      <PostButton onClick={handleClickPost} >작성하기</PostButton>
    </Container>
  );
};

export default Post;