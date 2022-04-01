import "./nightlife.css";
import { nightlife } from "../../data/nightlife";
import Collection from "../common/collection";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";

const collectionList = [
  {
    id: "1",
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    place: "6 Places",
  },
];

const nightFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
    title: "Pro Offers",
  },
  {
    id: 3,
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    title: "Distance",
  },
  {
    id: 4,
    title: "Rating: 4.0+",
  },
  {
    id: 5,
    title: "Pubs & Bars",
  },
];

const nightlifeList = nightlife;

const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filtersList={nightFilters} />
      </div>
      <ExploreSection
        list={nightlifeList}
        collectionName="Nightlife Restaurants in Awadhpuri,Bhopal"
      />
    </div>
  );
};

export default Nightlife;
