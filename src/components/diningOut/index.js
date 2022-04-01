import Collection from "../common/collection";
import { diningOut } from "../../data/diningOut";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import "./diningOut.css";

const collectionList = [
  {
    id: "1",
    title: "Best of Bhopal",
    cover:
      "https://b.zmtcdn.com/data/collections/c39bc802885e52c736d1505a02dc0967_1625829391.jpg",
    place: "12 Places",
  },
  {
    id: "2",
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    place: "26 Places",
  },
  {
    id: "3",
    title: "Must-Visit Restaurants in Bhopal",
    cover:
      "https://b.zmtcdn.com/data/collections/e5bf9af49aff07b0b0e99aa09113541d_1528720123.jpg",
    place: "22 Places",
  },
  {
    id: "4",
    title: "Rooftops",
    cover:
      "https://b.zmtcdn.com/data/collections/ac5ed5f18d3632a65f2848872aad3f98_1619176684.jpg",
    place: "9 Places",
  },
  {
    id: "5",
    title: "Sweet Tooth",
    cover:
      "https://b.zmtcdn.com/data/collections/e662922172f1042adf4243624911f634_1625830568.jpg",
    place: "13 Places",
  },
  {
    id: "6",
    title: "Pocket Friendly",
    cover:
      "https://b.zmtcdn.com/data/collections/cb7d5338a51c863879f5d87d1470f2b1_1619502910.jpg",
    place: "20 Places",
  },
  {
    id: "7",
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    place: "6 Places",
  },
  {
    id: "8",
    title: "Terrific Thalis",
    cover:
      "https://b.zmtcdn.com/data/collections/6c6f8aad7e158e0ca86a328507a7e5c0_1619503209.jpg",
    place: "12 Places",
  },
];

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
    title: "Pro Offers",
  },
  {
    id: 4,
    title: "Outdoor Seating",
  },
  {
    id: 5,
    title: "Serves Alcohol",
  },
  {
    id: 6,
    title: "Open Now",
  },
];

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filtersList={diningFilters} />
      </div>
      <ExploreSection
        list={diningList}
        collectionName="Dine-Out Restaurants in Awadhpuri,Bhopal"
      />
    </div>
  );
};

export default DiningOut;
