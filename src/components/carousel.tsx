import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Img1 from '../images/img1.png';
import Img2 from '../images/img2.png';
import Img3 from '../images/img3.png';
import Img4 from '../images/img4.png';

const BannerTitle = styled.h3`
  color: #fff;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
`;

function BannerCarousel() {
  return (
    <Container>
    <Carousel style={{marginTop: "20px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
          style={{borderRadius: "15px"}}
        />
        <Carousel.Caption>
          <Link style={{textDecoration: "none"}} to="/library"><BannerTitle>라이브러리</BannerTitle></Link>
          <p>라이브러리에서 책의 간략한 줄거리와 평점을 확인하세요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
          style={{borderRadius: "15px"}}
        />

        <Carousel.Caption>
          <Link style={{textDecoration: "none"}} to="/review"><BannerTitle>독서감상문</BannerTitle></Link>
          <p>나만의 독서감상문을 작성하고 이를 다른사람과 공유해 보세요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
          style={{borderRadius: "15px"}}
        />

        <Carousel.Caption>
          <Link style={{textDecoration: "none"}} to="/community"><BannerTitle>커뮤니티</BannerTitle></Link>
          <p>책을 읽으며 느낀점을 다른사람과 공유하고 토론해보세요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img4}
          alt="Forth slide"
          style={{borderRadius: "15px"}}
        />

        <Carousel.Caption>
          <Link style={{textDecoration: "none"}} to="/"><BannerTitle>독서경연대회</BannerTitle></Link>
          <p>총 상금 x,000,000원의 독서 경연대회가 열립니다. 여러분의 솜씨를 마음껏 뽐내 주세요!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default BannerCarousel;