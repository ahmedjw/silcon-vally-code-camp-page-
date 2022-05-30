import { React, useContext } from "react";
import useGetSpeakerRequests from "../hooks/useGetSpeakerRequests";
import Card from "../sharedcom/Card";
import { mainContext } from "../context/ThemeProvider";

export default function CardList() {
  const { theme } = useContext(mainContext);
  const { speakerData, isLoading, isError, PageErorr } =
    useGetSpeakerRequests();

  if (isError === true) {
    return <>there Is an Error : {PageErorr}</>;
  }
  return (
    <div className="container-fluied">
      <div className="row row-cols-1 row-cols-sm-3 ">
        {speakerData.map((speaker) => (
          <Card Key={speaker.id} data={speaker} isLoading={isLoading} />
        ))}
      </div>
    </div>
  );
}
