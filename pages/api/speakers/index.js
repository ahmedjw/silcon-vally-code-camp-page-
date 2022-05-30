import { data } from "../../../SpeakerData";
export default async function index(res) {
  res.status(200).send(JSON.stringify(data, null, 1));
}
