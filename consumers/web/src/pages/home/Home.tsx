import React from "react";
import Map from "pages/common/Map";
import Loader from "pages/common/loader";
import Header from "pages/common/navbar";

const Home = ({
  isLoading = false,
  items,
  location,
  submitFilter,
  wholeLocation,
  closeFilter,
}: any) => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      {isLoading && <Loader />}
      <Header
        locationDetails={wholeLocation}
        submitFilter={submitFilter}
        closeFilter={closeFilter}
      />
      <Map items={items} location={location} />
    </div>
  );
};

export default Home;
