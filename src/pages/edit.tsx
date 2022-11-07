import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  width: 60%;
  height: 100%;
  margin: 10px auto 10px auto;
  padding: 0;
  background-color: #fff;
`

const EditTitle = styled.input`
width: 80%;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #bbbbbb;
  background-color: #fff;
  font-size: 30px;
`

const EditBody = styled.textarea`
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

const Edit = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const navigate = useNavigate();
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/post/${id}`)
      .then((res) => {
        setTitle(res?.data.title);
        setBody(res?.data.body);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const bodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const updateButton = () => {
    try {
      axios.patch(`http://localhost:4000/post/${id}`, {
        title,
        body,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <EditTitle value={title} onChange={titleChange} />
      <EditBody value={body} onChange={bodyChange} />
      <PostButton
        onClick={() => {
          navigate("/library");
          updateButton();
        }}
      >
        수정
      </PostButton>
    </Container>
  );
}

export default Edit;