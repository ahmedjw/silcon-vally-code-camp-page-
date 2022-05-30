import CardList from "./CardList";
import { createContext } from "react";
import useGetSpeakerFiltter from "../hooks/useGetSpeakerFiltter";
import SpeakersToolbar from "./SpeakersToolBar";
import { SpeakerProvider } from "../context/SpeakerProvider";

function Speakers() {
  return (
    <SpeakerProvider>
      <SpeakersToolbar />
      <CardList />
    </SpeakerProvider>
  );
}

export default Speakers;
