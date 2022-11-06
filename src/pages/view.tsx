import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  height: 500px;
  margin: 10px auto 10px auto;
  padding: 0;
  background-color: #fff;
`

const ViewTitle = styled.h3`
  width: 80%;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid #bbbbbb;
  background-color: #fff;
  font-size: 30px;
  text-align: left;
`

const ViewBody = styled.p`
  width: 80%;
  height: 500px;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid #bbbbbb;
  background-color: #fff;
  font-size: 20px;
  text-align: left;
`

const Buttons = styled.button`
  width: 70px;
  height: 30px;
  border: 1.5px solid #000;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 0 10px 0 10px;
`;

const View = () => {
  const [post, setPost] = useState<any>({});
  const navigate = useNavigate();

  const handleClickEdit = () => {
    navigate(`/edit/${post._id}`);
    alert("수정되었습니다");
  }

  const handleClickDelete = () => {
    axios
      .delete(`http://localhost:4000/post/${post._id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      })
      alert("삭제되었습니다");
  }

  useEffect(() => {
    axios
      .get(`http://localhost:4000/post/${post._id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [post._id])

  return (
    <Container>
      <ViewTitle>{post?.title}</ViewTitle>
      <ViewBody>{post?.body}</ViewBody>
      <Buttons onClick={handleClickEdit}>수정</Buttons>
      <Buttons onClick={handleClickDelete}>삭제</Buttons>
    </Container>
  )
}

export default View;