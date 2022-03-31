import Slider from "react-slick/lib/slider";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./topBrands.css";

const topBrandsList = [
  {
    id: 1,
    time: "20 min",
    title: "Sagar Gaire Fast Food - Awadhpuri",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/f8eeab5b2de60c8b2f19c9d1015e32f9_1617972403.png",
  },
  {
    id: 2,
    time: "36 min",
    title: "Sharma And Vishnu Fast Food - Indrapuri",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/aaa86c706fe235dd78dec0dd32d43d6b_1550745886.png",
  },
  {
    id: 3,
    time: "26 min",
    title: "New Zam Zam",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/b54a6fab11bc1009c3cdf5db5ed78764_1611286285.png",
  },
  {
    id: 4,
    time: "41 min",
    title: "Manohar Dairy And Restaurant",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/304f7e8f12ed82f7aa1e23f076a43e65_1617972508.png",
  },
  {
    id: 5,
    time: "30 min",
    title: "Domino's Pizza",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806747.png",
  },
  {
    id: 6,
    time: "40 min",
    title: "KFC",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589432952.png",
  },
  {
    id: 7,
    time: "40 min",
    title: "Pizza Hut",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => {
          return (
            <div className="cur-po">
              <div className="top-brands-cover absolute-center">
                <img
                  src={brand.cover}
                  alt={brand.title}
                  className="top-brands-image"
                />
              </div>
              <div className="top-brands-title">{brand.title}</div>
              <div className="top-brands-time">{brand.time}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
