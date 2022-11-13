import axios from "axios";
import styled from "styled-components";
import { Pagination } from "@mui/material";
const data = require("../data/reviews.json");

const Container = styled.div`
  width: 80%;
  height: 100px;
  margin: 10px auto 20px auto;
  padding: 0;
  display: inline-block;
`;

const ReviewBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 10px 0 0;
  padding: 10px;
  border-radius: 10px;
  margin: 20px 10px 20px 10px;
  background-color: #f6f4f0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: table;
`

const ReviewTitle = styled.h4`
  text-align: left;
  border-bottom: 1px solid #bbbbbb;
`

const ReviewBody = styled.div`
  text-align: left;
`

const PaginationAlign = styled.div`
  display: inline-block;
  text-align: center;
  margin-bottom: 30px;
`;

const Review = () => {
  axios
  .get("http://localhost:4000/review")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  }
  );

  return (
    <Container>
      <ReviewBox>
        <ReviewTitle>{data.first.title}</ReviewTitle>
        <ReviewBody>{data.first.body}</ReviewBody>
      </ReviewBox>
      <ReviewBox>
        <ReviewTitle>{data.second.title}</ReviewTitle>
        <ReviewBody>{data.second.body}</ReviewBody>
      </ReviewBox>
      <ReviewBox>
        <ReviewTitle>{data.third.title}</ReviewTitle>
        <ReviewBody>{data.third.body}</ReviewBody>
      </ReviewBox>
      <ReviewBox>
        <ReviewTitle>{data.fourth.title}</ReviewTitle>
        <ReviewBody>{data.fourth.body}</ReviewBody>
      </ReviewBox>
      <PaginationAlign>
        <Pagination count={5} color="standard" />
      </PaginationAlign>
    </Container>
  )
}

export default Review;