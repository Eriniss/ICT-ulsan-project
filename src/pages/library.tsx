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

  const handleClickView = () => {
    navigate(`/view/${data._id}`);
  };

  return (
    <Container>
      <PostListTitle onClick={handleClickView}>{data?.title}</PostListTitle>
    </Container>
  )
}

const Library = () => {
  const [postList, setPostList] = useState<any[]>([]);
  const [countPerPage, setCountPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const navigate = useNavigate();

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/posts?_page=${currentPage}&_limit=${countPerPage}`)
      .then((res: any) => {
        setPostList(res.data);
        setTotalPage(Math.ceil(res.headers['x-total-count'] / countPerPage));
      })
      .catch((err) => {
        console.log(err);
      })
  }, [currentPage, countPerPage]);

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
      <PaginationAlign>
        <Pagination count={totalPage} page={currentPage} onChange={handlePageChange} color="primary" showFirstButton showLastButton />
      </PaginationAlign>
    </Container>
  );
};

export default Library;