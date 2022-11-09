import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination"

const Container = styled.div`
    width: 70%;
    height: 100px;
    margin: 10px auto 20px auto;
    padding: 0;
`;

const ButtonAlign = styled.div`
  text-align: right;
`;

const PaginationAlign = styled.div`
  display: inline-block;
  text-align: center;
  margin-bottom: 30px;
`;

const AccessPost = styled.button`
  width: 80px;
  height: 30px;
  border: 1.5px solid #000;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  background-color: #fff;
`
const PostListTitle = styled.div`
  width: 100%;
  height: 70px;
  margin: 0;
  padding-top: 20px;
  border: none;
  font-size: 20px;
  vertical-align: center;
  text-align: left;
  border-bottom: 1px solid #bbbbbb;
`

const CreatedAt = styled.div`
  text-align: left;
  font-size: 16px;
`

interface PostListProps {
  data: {
    _id: any;
    title: string;
    body: string;
    createdAt: string;
  };
}

const PostList = ({data}: PostListProps) => {
  const navigate = useNavigate();
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const date = new Date(data.createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    setDate(`${year}년 ${month}월 ${day}일`);
  }, [data.createdAt]);

  const handleClickView = () => {
    navigate(`/view/${data._id}`);
  };

  return (
    <Container>
      <PostListTitle onClick={handleClickView}>{data?.title}</PostListTitle>
      <CreatedAt>{date}</CreatedAt>
    </Container>
  )
}

const Library = () => {
  const [postList, setPostList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/api/posts?page=${currentPage}`)
      .then((res) => {
        setPostList(res.data.data);
        setTotalPage(res.data.totalPage);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [currentPage]);

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
      <ButtonAlign><AccessPost onClick={() => navigate("/post")}>새 글 작성</AccessPost></ButtonAlign>
      {postList.map((post) => (
        <PostList data={post} />
      ))}
      <PaginationAlign><Pagination
        color="primary"
        count={totalPage}
        page={currentPage}
        onChange={handlePageChange}
      /></PaginationAlign>
    </Container>
  );
};

export default Library;