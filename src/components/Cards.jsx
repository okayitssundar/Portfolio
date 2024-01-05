import { Card, Button, Placeholder } from "solid-bootstrap";
import { Show } from "solid-js";
import { addProtocol } from "./Utils";

export default function Cards(props) {
  const { Description, Title, ImageUrl, ButtonText, ButtonLink } = props?.data;
  return (
    <Card
      data-aos-duration="1000"
      data-aos={props.dataAos}
      class={`primarybg  ${props.class ? props.class : ""}`}
      style={props.style ? props.style : ""}
    >
      <Show when={ImageUrl}>
        <img
          alt={Title}
          class="card-img fit-contain"
          variant="top"
          height="60px"
          width="60px"
          onerror="this.parentNode.removeChild(this)"
          src={ImageUrl}
        />
      </Show>

      <Card.Body>
        <Show
          when={Title}
          fallback={
            <Placeholder animation="wave" as={Card.Title}>
              <Placeholder xs={6} />
            </Placeholder>
          }
        >
          <Card.Title class="accent">{Title}</Card.Title>
        </Show>
        <Show
          when={Description}
          fallback={
            <Placeholder animation="wave" as={Card.Text}>
              <Placeholder xs={7} animation="wave" />{" "}
              <Placeholder xs={4} animation="wave" />{" "}
              <Placeholder xs={4} animation="wave" />{" "}
              <Placeholder xs={6} animation="wave" />{" "}
              <Placeholder xs={8} animation="wave" />
            </Placeholder>
          }
        >
          <Card.Text class="accent">{Description}</Card.Text>
        </Show>
        <Show when={ButtonText}>
          <Button
            onClick={() => {
              window.open(addProtocol(ButtonLink), "_blank");
            }}
            class="primaryButton"
          >
            {ButtonText}
          </Button>
        </Show>
      </Card.Body>
    </Card>
  );
}
