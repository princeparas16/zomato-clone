const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <button onClick={() => setActiveTab("Nightlife")}>Click</button>
    </div>
  );
};

export default TabOptions;
