import { Container } from "solid-bootstrap";
import { TimelineItem, TimelineContainer } from "../components/TimelineItem";
import { For } from "solid-js";

function About({ data }) {
  return (
    <div id="About" class="my-5">
      <h1 class="text-center" data-aos="fade-up" data-aos-duration="1000">
        <span class="active">About</span>
      </h1>
      <Container class="my-5 p-3 " fluid>
        <h4 class="accent" data-aos="zoom-out-up" data-aos-duration="1000">
          {data().About.Description}
        </h4>
      </Container>
      <div>
        <TimelineContainer>
          <For each={data().About.Timeline}>
            {(item, i) => (
              <TimelineItem
                dataAos={"fade-up"}
                data={{
                  header: item.Time,
                  title: item.Title,
                  description: item.Description,
                }}
              />
            )}
          </For>
        </TimelineContainer>
      </div>
    </div>
  );
}
export default About;
