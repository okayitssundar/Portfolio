import { Button } from "solid-bootstrap";
import { createSignal, onCleanup, onMount } from "solid-js";
import { ArrowUp, CustomIcon } from "./Icons";
import { randomizeColor } from "../assets/theme/colors";

function FloatingActionButton({ data }) {
  const [isVisible, setIsVisible] = createSignal(false);
  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 100);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  onMount(() => {
    window.addEventListener("scroll", handleScroll);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });
  return (
    <div class="floating-action-buttons">
      <Button
        class=" btn-lg my-1 rounded-circle primaryButton"
        onClick={randomizeColor}
      >
        <CustomIcon
          url="https://svgshare.com/i/11du.svg"
          title="Change theme"
        />
      </Button>
      <Button
        class=" btn-lg my-1 rounded-circle primaryButton"
        onClick={() => {
          console.log(data().Drawer.ResumeLink);
          window.open(data().Drawer.ResumeLink, "_blank");
        }}
      >
        <CustomIcon
          title="Download Resume"
          url="https://svgshare.com/i/11fn.svg"
        />
      </Button>
      {isVisible() && (
        <Button
          class=" btn-lg my-1 rounded-circle primaryButton"
          onClick={scrollToTop}
        >
          <ArrowUp />
        </Button>
      )}
    </div>
  );
}

function initScrollspy() {
  onMount(() => {
    const App = document.getElementById("App");
    const scrollSpy = new bootstrap.ScrollSpy(App, {
      target: ".drawer",
      offset: 0,
    });
    // Update the activeItem signal when ScrollSpy activates a new item
    document.body.addEventListener(
      "activate.bs.scrollspy",
      (event) => {
        const { relatedTarget } = event;
        const targetId = relatedTarget.getAttribute("href").slice(1);
        // Update hash route manually
        window.history.pushState(null, null, `#${targetId}`);
      },
      { capture: false }
    );

    onCleanup(() => {
      // Dispose the ScrollSpy instance and remove event listeners
      scrollSpy.dispose();
      document.body.removeEventListener("activate.bs.scrollspy");
    });
  });
}
function addProtocol(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "http://" + url;
  }
  return url;
}
function setFavicon(url) {
  const link =
    document.querySelector('link[rel="icon"]') ||
    document.createElement("link");
  link.rel = "icon";
  link.href = url;

  // Append the link tag to the document head
  document.head.appendChild(link);

  // Clean up the link tag when the component unmounts
  onCleanup(() => {
    document.head.removeChild(link);
  });
}

export { FloatingActionButton, initScrollspy, addProtocol, setFavicon };
