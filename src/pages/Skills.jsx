import { For } from "solid-js";
import Cards from "../components/Cards";

function Skills({ data }) {
  return (
    <div id="Skills" class="my-5">
      <h1 class="text-center my-5">
        <span class="active">Skills</span>
      </h1>
      <div class="d-flex flex-row align-items-center justify-content-center flex-wrap">
        <For each={data().Skills}>
          {(item, i) => (
            <Cards
              data={item}
              dataAos={i() % 2 == 0 ? "zoom-out-up" : "fade-up"}
              class="fadeTransition my-3 mx-2 p-2 brightborder brightbackground"
              style={{ width: "18rem" }}
            />
          )}
        </For>
      </div>
    </div>
  );
}

export default Skills;
