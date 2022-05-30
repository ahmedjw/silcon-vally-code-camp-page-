import { React, useContext } from "react";
import { SpeakerContext } from "../context/SpeakerProvider";
import useGetSpeakerRequests from "../hooks/useGetSpeakerRequests";
import Card from "../sharedcom/Card";

export default function CardList() {
  const { speakerData, isLoading, isError, PageErorr } =
    useGetSpeakerRequests();
  const { SearchQuery } = useContext(SpeakerContext);
  if (isError === true) {
    return <>there Is an Error : {PageErorr}</>;
  }

  return (
    <div className="container-fluied">
      <div className="row row-cols-1 row-cols-sm-3 ">
        {SearchQuery === ""
          ? speakerData.map((speaker) => (
              <Card Key={speaker.id} data={speaker} isLoading={isLoading} />
            ))
          : speakerData
              .filter((speaker) => {
                return (
                  speaker.first
                    .toLowerCase()
                    .includes(SearchQuery.toLowerCase()) ||
                  speaker.last.toLowerCase().includes(SearchQuery.toLowerCase())
                );
              })
              .map((speaker) => (
                <Card Key={speaker.id} data={speaker} isLoading={isLoading} />
              ))}
      </div>
    </div>
  );
}
