import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.jpg";

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const imgArr = [banner1, banner2];

  const carouselItems = imgArr.map((slide, idx) => (
    <Carousel.Item key={idx}>
      <img
        src={slide}
      />
    </Carousel.Item>
  ));

  return (
    <div className="xl:mx-24">
      <Carousel interval={1000}>
        {carouselItems}
      </Carousel>
    </div>
  );
}

export default App;
