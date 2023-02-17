import Slider from "react-slick";
import { TestimonialDetail } from "../../TralioAPI/Testimonial";
import Testimonial from "../Testimonial/Testimonial";
import Container from "@mui/material/Container";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover:true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const propsTestimonial = TestimonialDetail.map(
    ({ avtar, description, name, designation }, index) => {
      return (
        <Testimonial
          key={"Carousel " + index}
          avtar={avtar}
          description={description}
          name={name}
          designation={designation}
        />
      );
    }
  );

  return (
    <Container >
      <Slider {...settings}>{propsTestimonial}</Slider>
    </Container>
  );
}

export default Carousel;
