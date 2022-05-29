import { Layout } from "../layout/Layout";
import CardList from "./CardList";
import NavBar from "./navBar";
import SpeakersToolbar from "./SpeakersToolBar";

export default function App() {
  return (
    <Layout themeColour="light">
      <NavBar />
      <SpeakersToolbar />
      <CardList />
    </Layout>
  );
}
