import React from "react";
import { createContext } from "react";
import useGetSpeakerFiltter from "../hooks/useGetSpeakerFiltter";

export const SpeakerContext = createContext();

export function SpeakerProvider({ children }) {
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    SearchQuery,
    setSearchQuery,
    EVENT_YEARS,
  } = useGetSpeakerFiltter();
  return (
    <SpeakerContext.Provider
      value={{
        showSessions,
        setShowSessions,
        eventYear,
        setEventYear,
        SearchQuery,
        setSearchQuery,
        EVENT_YEARS,
      }}
    >
      {children}
    </SpeakerContext.Provider>
  );
}
