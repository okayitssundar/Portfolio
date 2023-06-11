import { createSignal, createResource } from "solid-js";

function FetchData(props) {
  const url =
    "https://gist.githubusercontent.com/okayitssundar/d18907e6f64f2de1ab716a42d51400b8/raw/";

  const FetchDatafromURL = async () => (await fetch(url)).json();

  const [JsonData] = createResource(FetchDatafromURL);
  return [JsonData];
}
export default FetchData;
