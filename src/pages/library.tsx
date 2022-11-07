import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 70%;
    height: 100px;
    margin: 20px auto 20px auto;
    padding: 0;
    background-color: #fff;
`;

const AccessPost = styled.button`
  width: 80px;
  height: 30px;
  border: 1.5px solid #000;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`
const PostListTitle = styled.div`
  width: 100%;
  height: 80px;
  margin: 0;
  padding: 0px;
  border: none;
  border-bottom: 1px solid #eeeeee;
  background-color: #fff;
  font-size: 20px;
  vertical-align: center;
  text-align: left;
`

interface PostListProps {
  data: {
    _id: any;
    title: string;
    body: string;
  };
}

const PostList = ({data}: PostListProps) => {
  const navigate = useNavigate();

  const handleClickView = () => {
    navigate(`/view/${data._id}`);
  };

  return (
    <Container>
      <PostListTitle onClick={handleClickView}>{data?.title}
      </PostListTitle>
    </Container>
  )
}

const Library = () => {
  const [postList, setPostList] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/post")
      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <AccessPost onClick={() => navigate("/post")}>새 글 작성</AccessPost>
      {postList.map((post) => (
        <PostList data={post} />
      ))}
    </Container>
  );
};

export default Library;