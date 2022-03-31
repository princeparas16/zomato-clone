import Filters from "../common/filters";
import "./delivery.css";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./topBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    title: "Delivery Time",
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Great Offers",
  },
  {
    id: 5,
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
    title: "Cuisines",
  },
  {
    id: 6,
    title: "Pure Veg",
  },
];

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filtersList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands/>
    </div>
  );
};

export default Delivery;
