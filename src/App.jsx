import { Show, createEffect, createSignal, onMount } from "solid-js";
import { randomizeColor, theme } from "./assets/theme/colors";
import Drawer from "./components/Drawer";
import { About, Contact, Home, Skills } from "./pages";
import {
  FloatingActionButton,
  addProtocol,
  initScrollspy,
  setFavicon,
} from "./components/Utils";
import Footer from "./components/Footer";
import FetchData from "./assets/FetchData";
import "aos/dist/aos.css";
import aos from "aos";

function App() {
  const [data] = FetchData();
  createEffect(() => {
    let title = data()?.Header?.Title ? data()?.Header?.Title : "Loading...";
    document.title = title;
    setFavicon(data()?.Header?.Favicon);
  });
  onMount(() => {
    aos.init();
    randomizeColor();

    // Listen for scroll events
  });
  createEffect(() => {
    // Effect code
    if (data()) initScrollspy();
  });

  createEffect(() => {
    var r = document.querySelector(":root");
    r.style.setProperty("--primary", theme().primary);
    r.style.setProperty("--secondary", theme().secondary);
    r.style.setProperty("--primaryButton", theme().primaryButton);
    r.style.setProperty("--secondaryButton", theme().secondaryButton);
    r.style.setProperty("--accent", theme().accent);
  });

  return (
    <>
      <Show
        when={data()}
        fallback={
          <div class="loading-screen">
            <div class="spinner"></div>
          </div>
        }
      >
        <Drawer data={data} />
        <FloatingActionButton data={data} />
        <div
          data-bs-spy="scroll"
          data-bs-offset="0"
          tabindex="0"
          data-bs-target=".drawer"
          id="App"
        >
          <main>
            <Home data={data} />
            <About data={data} />
            <Skills data={data} />
            <Contact data={data} />
          </main>
        </div>
        <Footer data={data} />
      </Show>
    </>
  );
}

export default App;
