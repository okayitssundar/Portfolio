import { theme } from "../assets/theme/colors";
import { Button } from "solid-bootstrap";
function Home({ data }) {
  return (
    <section
      id="Home"
      class="d-flex align-items-center justify-content-center flex-column"
    >
      <img
        width="120"
        height="120"
        alt="Sundar Prakash Profile Picture"
        onerror="this.parentNode.removeChild(this)"
        class="avatar fadeTransition"
        src={data().Home.Avatar}
      />
      <p class="py-3 opacity-4 accent">{data().Home.Greetings}</p>
      <h2
        data-aos="fade-up"
        data-aos-duration="1500"
        style={{
          width: "80vw",

          background: `linear-gradient(150deg,  ${theme().accent} 38%, ${
            theme().secondary
          } 100%)`,
        }}
        class="py-1 accent text-fill-transparent text-center"
      >
        {data().Home.Description}
      </h2>
      <Button
        onClick={() => (location.hash = "#About")}
        class="mt-4 primaryButton"
        size="lg"
      >
        {data().Home.ButtonText}
      </Button>
    </section>
  );
}
export default Home;
