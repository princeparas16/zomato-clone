import { useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import Nightlife from "../../components/nightlife";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Nightlife");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "DiningOut":
      return <DiningOut />;
    case "Nightlife":
      return <Nightlife />;

    default:
      return <Delivery />;
  }
};

export default Home;
