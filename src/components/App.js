import Layout from "../layout/Layout";
import NavBar from "./navBar";
import { SpeakerProvider } from "../context/SpeakerProvider";
import Speakers from "./Speakers";

export default function App() {
  return (
    <Layout themeColour="light">
      <NavBar />
      <Speakers />
    </Layout>
  );
}
