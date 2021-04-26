import React, { useEffect } from "react";
import { toast } from "react-toastify";
import LocationServices from "services/LocationService";
import Home from "./Home";

const Index = () => {
  const locationService = new LocationServices();

  const [locationDetails, setLocationDetails]: any = React.useState([]);
  const [isLoading, setIsLoading]: any = React.useState(false);

  const getLocations = async (props: any) => {
    setIsLoading(true);
    const { success, data } = await locationService.getLocation(props);
     if (!success) {
       toast.error("Something went wrong. Please refresh the page");
    } else {
       toast.success("Map successfully loaded", {position: "bottom-right"});
    }
    setIsLoading(false);
    setLocationDetails(data);
  };

  useEffect(() => {
    getLocations({});
  }, []);

  const submitFilter = (props: any) => {
    console.log(props)
    getLocations(props)
  };

  const closeFilter = (props: any) => {
    getLocations({props})
  };

  const mapProps = {
    isLoading,
    items: locationDetails,
    location: locationDetails[1]?.location,
    wholeLocation: locationDetails,
    submitFilter,
    closeFilter,
  };
  return <Home {...mapProps} />;
};

export default Index;
