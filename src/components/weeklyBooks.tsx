import styled from "styled-components";
import BookImg1 from "../images/book1.png";
import BookImg2 from "../images/book2.png";
import BookImg3 from "../images/book3.png";
import BookImg4 from "../images/book4.png";
import BookImg5 from "../images/book5.png";

const Container = styled.div`
  width: 80%;
  height: 100%;
  background-color: #f5f5f5;
  margin-top: 50px;
  border-radius: 15px;
  padding: 10px;
  align-items: left;
  display: block;
`;

const BannerTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 50px 0 50px 0;
  text-align: center;
  width: 100%;
`;

const BannerItem = styled.div`
  width: 25%;
  padding: 10px;
  margin: 0px;
  display: inline-block;
  vertical-align: top;
  text-align: center;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 20%;
  }
`;

const BannerBody = styled.p`
  font-size: 15px;
  font-weight: 700;
`

const BookImg = styled.img`
  width: 100px;
  height: 120px;
  margin: 0 20px 20px 20px;
`;

function WeeklyBooks() {
  return (
    <Container>
      <BannerTitle>📖 이주의 도서</BannerTitle>
      <BannerItem>
        <BookImg src={BookImg1}/>
        <BannerBody>나는 나로 살기로 했다</BannerBody>
      </BannerItem>
      <BannerItem>
        <BookImg src={BookImg2}/>
        <BannerBody>지적 대화를 위한 넓고 얕은 지식</BannerBody>
      </BannerItem>
      <BannerItem>
        <BookImg src={BookImg3}/>
        <BannerBody>달러구트 꿈백화점</BannerBody>
      </BannerItem>
      <BannerItem>
          <BookImg src={BookImg4}/>
          <BannerBody>불편한 편의점</BannerBody>
      </BannerItem>
      <BannerItem>
        <BookImg src={BookImg5}/>
        <BannerBody>언어의 온도</BannerBody>
      </BannerItem>
    </Container>
  );
}

export default WeeklyBooks;