import { Carousel } from 'react-bootstrap';
import Img1 from '../images/img1.png';
import Img2 from '../images/img2.png';
import Img3 from '../images/img3.png';
import Img4 from '../images/img4.png';

function BannerCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>라이브러리</h3>
          <p>라이브러리에서 책의 간략한 줄거리와 평점을 확인하세요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>독서감상문</h3>
          <p>나만의 독서감상문을 작성하고 이를 다른사람과 공유해 보세요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>커뮤니티</h3>
          <p>책을 읽으며 느낀점을 다른사람과 공유하고 토론해보세요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img4}
          alt="Forth slide"
        />

        <Carousel.Caption>
          <h3>독서경연대회</h3>
          <p>총 상금 x,000,000원의 독서 경연대회가 열립니다. 여러분의 솜씨를 마음껏 뽐내 주세요!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;