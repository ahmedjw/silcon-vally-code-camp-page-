import { useState, useEffect } from "react";
import { data } from "../../SpeakerData";

const useGetSpeakerRequests = () => {
  const axios = require("axios");
  const [speakerData, setSpeakerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [PageErorr, setError] = useState("");

  useEffect(() => {
    try {
      axios.get("http://localhost:3000/api/speakers");
      setSpeakerData(data);
      setIsLoading(false);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
      setError(e);
    }
  });
  return { speakerData, isLoading, isError, PageErorr };
};
export default useGetSpeakerRequests;
