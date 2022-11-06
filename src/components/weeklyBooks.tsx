import { Container } from "react-bootstrap";
import styled from "styled-components";
import BannerCarousel from "./carousel";
import BookImg1 from "../images/book1.png";
import BookImg2 from "../images/book2.png";
import BookImg3 from "../images/book3.png";
import BookImg4 from "../images/book4.png";
import BookImg5 from "../images/book5.png";

const Banner = styled.div`
  width: 90%;
  height: 400px;
  background-color: #f5f5f5;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
  width: 100%;
`;

const BannerItem = styled.div`
  width: 20%;
  height: 30%;
  background-color: #f5f5f5;
  padding: 0;
  margin: 60px 0px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  float: left;
`;

const  BannerBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 0;
  margin: 0;
`;

const BookImg = styled.img`
  width: 40%;
  height: 100%;
  margin-bottom: 20px;
`;

function WeeklyBooks() {
  return (
      <Banner>
        <Title>이주의 도서</Title>
        <BannerItem>
          <BannerBox>
            <BookImg src={BookImg1}/>
            <h5>나는 나로 살기로 했다</h5>
            <p>★★★☆☆</p>
          </ BannerBox>
        </BannerItem>
        <BannerItem>
          <BannerBox>
            <BookImg src={BookImg2}/>
            <h5>지적 대화를 위한 넓고 얕은 지식</h5>
            <p>★★★★★</p>
          </ BannerBox>
        </BannerItem>
        <BannerItem>
          <BannerBox>
            <BookImg src={BookImg3}/>
            <h5>달러구트 꿈백화점</h5>
            <p>★★★★☆</p>
          </ BannerBox>
        </BannerItem>
        <BannerItem>
          <BannerBox>
            <BookImg src={BookImg4}/>
            <h5>불편한 편의점</h5>
            <p>★★★☆☆</p>
          </ BannerBox>
        </BannerItem>
        <BannerItem>
          <BannerBox>
            <BookImg src={BookImg5}/>
            <h5>언어의 온도</h5>
            <p>★★★★☆</p>
          </ BannerBox>
        </BannerItem>
      </Banner>
  );
}

export default WeeklyBooks;