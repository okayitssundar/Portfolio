import { For, Show } from "solid-js";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  Whatsapp,
} from "./Icons";
import { addProtocol } from "./Utils";

function renderDynamicComponent(componentName) {
  const componentMap = {
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    Youtube,
    Github,
    Whatsapp,
  };

  const Component = componentMap[componentName] || null;

  return <div>{Component && <Component />}</div>;
}

function Footer({ data }) {
  return (
    <footer class="nb-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="about">
              <Show when={true}>
                <img
                  src={data().Footer.ImageUrl}
                  onerror="this.parentNode.removeChild(this)"
                  width="100"
                  height="100"
                  class="rounded-circle img-responsive center-block"
                  alt="s"
                />
              </Show>
              <p>
                <span>
                  This design is inspired from&nbsp;
                  <a href="https://dribbble.com/shots/20753864-kawsar-design">
                    kawsar-design
                  </a>
                  <br />
                </span>
                {data().Footer.Description}
              </p>

              <div class="social-media">
                <ul class="list-inline d-flex justify-content-evenly">
                  <For each={data().Footer.SocialMedia}>
                    {(item, i) => (
                      <li>
                        <a
                          href={addProtocol(item.Link)}
                          target="_blank"
                          title=""
                        >
                          {renderDynamicComponent(item.Title)}
                        </a>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="copyright">
        <div class="container text-center">
          <p>
            Copyright © {new Date().getFullYear()}. {data().Footer.Copyright}
          </p>
        </div>
      </section>
    </footer>
  );
}
export default Footer;
