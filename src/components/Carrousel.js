import img1 from "../assets/first.jpg";
import img2 from "../assets/second.jpg";
//import img3 from "../assets/third.jpg";
import { Carousel } from "react-bootstrap";

function Carrousel() {
  return (
    <div>
      <Carousel controls={false}>
        <Carousel.Item>
          <img
            className="carousel d-block w-100"
            src={img1}
            alt="First slide"
            style={{ width: "500px", height: "500px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel d-block w-100"
            src={img2}
            alt="Second slide"
            style={{ width: "500px", height: "500px" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Carrousel;
