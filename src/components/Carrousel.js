import img1 from "../assets/first.jpg";
import img2 from "../assets/second.jpg";
import img3 from "../assets/third.jpg";
import { Carousel } from "react-bootstrap";

function Carrousel() {
  return (
    <div className="carousel">
      <Carousel fade controls={true}>
        <Carousel.Item>
          <img className="d-block w-50 c " src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-50 c" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-50 c" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;
