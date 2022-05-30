import { useState } from "react";

export default function useGetSpeakerFiltter() {
  const [showSessions, setShowSessions] = useState(true);
  const [eventYear, setEventYear] = useState("2019");
  const [SearchQuery, setSearchQuery] = useState("");

  const EVENT_YEARS = [
    2008, 2009, 2010, 2011, 20123, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 20222,
  ];
  return {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    SearchQuery,
    setSearchQuery,
    EVENT_YEARS,
  };
}
