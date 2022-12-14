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
      <BannerTitle>π μ΄μ£Όμ λμ</BannerTitle>
      <BannerItem>
        <BookImg src={BookImg1}/>
        <BannerBody>λλ λλ‘ μ΄κΈ°λ‘ νλ€</BannerBody>
      </BannerItem>
      <BannerItem>
        <BookImg src={BookImg2}/>
        <BannerBody>μ§μ  λνλ₯Ό μν λκ³  μμ μ§μ</BannerBody>
      </BannerItem>
      <BannerItem>
        <BookImg src={BookImg3}/>
        <BannerBody>λ¬λ¬κ΅¬νΈ κΏλ°±νμ </BannerBody>
      </BannerItem>
      <BannerItem>
          <BookImg src={BookImg4}/>
          <BannerBody>λΆνΈν νΈμμ </BannerBody>
      </BannerItem>
      <BannerItem>
        <BookImg src={BookImg5}/>
        <BannerBody>μΈμ΄μ μ¨λ</BannerBody>
      </BannerItem>
    </Container>
  );
}

export default WeeklyBooks;