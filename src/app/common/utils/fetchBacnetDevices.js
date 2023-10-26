import { useEffect, useState } from "react";

function FetchBacnetDevices() {
  const [bacnetData, setBacnetData] = useState({});
  const serverEndpoint = process.env.REACT_APP_SERVER_ENDPOINT;

  useEffect(() => {
    fetch(`${serverEndpoint}/fetch_bacnet_objects_properties`)
      .then((response) => response.json())
      .then((data) => {
        setBacnetData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [serverEndpoint]);

  return bacnetData;
}

export default FetchBacnetDevices;
