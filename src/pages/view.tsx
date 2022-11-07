import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 60%;
  height: 100%;
  margin: 10px auto 10px auto;
  padding: 0;
  background-color: #fff;
  text-align: left;
`

const ViewTitle = styled.div`
width: 80%;
  height: 100px;
  margin: 40px 10px 10px 10px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #bbbbbb;
  background-color: #fff;
  font-size: 50px;
  font-weight: bold;
`

const ViewBody = styled.div`
  width: 80%;
  height: 500px;
  margin: 40px 10px 10px 10px;
  padding: 10px;
  background-color: #fff;
  font-size: 20px;
`

const Buttons = styled.button`
  width: 80px;
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

const View = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const navigate = useNavigate();

  let { id } = useParams();
  console.log(id);

  const handleClickEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleClickDelete = () => {
    axios
      .delete(`http://localhost:4000/post/${id}`)
      .then((res) => {
        navigate("/library");
        alert("삭제되었습니다.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/post/${id}`)
      .then((res) => {
        setTitle(res?.data.title);
        setBody(res?.data.body);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      <ViewTitle>{title}</ViewTitle>
      <ViewBody>{body}</ViewBody>
      <Buttons onClick={handleClickEdit}>수정</Buttons>
      <Buttons onClick={handleClickDelete}>삭제</Buttons>
    </Container>
  );
}

export default View;