import { Show } from "solid-js";
import "./TimelineStyle.css";
function TimelineContainer(props) {
  return (
    <section class="timeline-section">
      <div class="timeline-items">{props.children}</div>
    </section>
  );
}
function TimelineItem(props) {
  const { header, title, description } = props?.data;
  return (
    <Show when={props?.data}>
      <div
        data-aos={props?.dataAos}
        data-aos-duration="1000"
        class="timeline-item"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-date">{header}</div>
        <div class="timeline-content brightborder brightbackground">
          <h3 class="secondary">{title}</h3>
          <p class="accent">{description}</p>
        </div>
      </div>
    </Show>
  );
}
export { TimelineItem, TimelineContainer };
