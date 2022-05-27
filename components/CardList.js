import { useState, useEffect } from "react";
import { data } from "../SpeakerData";
import Card from "../sharedcom/Card";

export default function CardList({ showSessions, theme }) {
  const [speakerData, setSpeakerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [PageErorr, setError] = useState("");

  useEffect(() => {
    try {
      setSpeakerData(data);
      setIsLoading(false);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
      setError(e);
    }
  });

  if (isError === true) {
    return <>there Is an Error : {PageErorr}</>;
  }
  return (
    <div className="container-fluied">
      <div className="row row-cols-1 row-cols-sm-3 ">
        {speakerData.map((speaker) => (
          <Card
            Key={speaker.id}
            data={speaker}
            showSessions={showSessions}
            theme={theme}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
}
