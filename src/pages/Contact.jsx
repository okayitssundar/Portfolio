import { Button, Form } from "solid-bootstrap";
import { Show, createEffect, createSignal } from "solid-js";

function About() {
  const [isChecked, setIsChecked] = createSignal(false);
  const [num1, setNum1] = createSignal(0);
  const [num2, setNum2] = createSignal(0);
  const [formInput, setFormInput] = createSignal({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = createSignal(0);
  const [puzzleInput, setpuzzleInput] = createSignal("");
  const [msg, setMsg] = createSignal({ color: "", msg: "" });
  const [isSolved, setIsSolved] = createSignal(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked());
    generateNumbers();
  };

  // Generate random numbers for the captcha
  const generateNumbers = () => {
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    setNum1(number1);
    setNum2(number2);
    setResult(number1 + number2);
    setpuzzleInput("");
    setIsSolved(false);
  };

  // Check if the user's input matches the expected result
  const checkResult = () => {
    const input = parseInt(puzzleInput(), 10);
    if (input === result()) {
      setIsSolved(true);
      setMsg({ color: "text-info", msg: "Verified Successfully" });
    } else {
      setMsg({
        color: "text-danger",
        msg: "Incorrect result. Please try again.",
      });
      generateNumbers();
    }
  };
  function handleSubmit(event) {
    const { name, email, message } = formInput();
    console.log(name + ": " + email + ": " + message);
    event.preventDefault();
    if (name === "" || email === "" || message === "") {
      setMsg({ color: "text-danger", msg: "Please fill all fields" });
    } else {
      setMsg({
        color: "text-success",
        msg: "Submitted Successfully, Thanks for your feedback",
      });
      setFormInput({
        name: "",
        email: "",
        message: "",
      });
      setIsSolved(false);
      handleCheckboxChange();
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormInput({
      ...formInput(),
      [name]: value,
    });
  };

  return (
    <section id="Contact" class="my-5">
      <h2 class="text-center">
        <span class="active">Contact</span>
      </h2>
      <Form
        onsubmit={handleSubmit}
        class="brightborder brightbackground p-4 w-100 w-lg-50 my-5"
      >
        <Form.Group data-aos="flip-up" data-aos-duration="1000" class="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={handleInputChange}
            value={formInput().name}
            name="name"
            autocomplete="off"
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Form.Group class="mb-3" data-aos-duration="1000" data-aos="flip-up">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            value={formInput().email}
            name="email"
            type="email"
            autocomplete="off"
            placeholder="Enter email"
          />
          <Form.Text class="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group data-aos="flip-up" data-aos-duration="1000" class="mb-3">
          <Form.Label>Message</Form.Label>
          <textarea
            onChange={handleInputChange}
            value={formInput().message}
            class="form-control"
            name="message"
            rows="3"
          ></textarea>
        </Form.Group>

        <Form.Group
          class="mb-3"
          data-aos="flip-up"
          data-aos-duration="1000"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            checked={isChecked()}
            onChange={handleCheckboxChange}
            label="I'm not a Robot"
          />
          <Show when={isChecked()}>
            <div data-aos="flip-down" data-aos-duration="700">
              <label>
                What is {num1()} + {num2()}?
              </label>

              <Form.Group class="input-group">
                <Form.Control
                  type="number"
                  value={puzzleInput()}
                  onInput={(e) => setpuzzleInput(e.target.value)}
                />
                <Button
                  class="input-group-append"
                  disabled={isSolved()}
                  onClick={checkResult}
                >
                  Submit
                </Button>
              </Form.Group>
            </div>
          </Show>
          <Show when={msg()}>
            <p class={msg().color}>{msg().msg}</p>
          </Show>
        </Form.Group>

        <Button variant="primary" disabled={!isSolved()} type="submit">
          {!isSolved() ? "Verify yourself" : "Say Hi 👋"}
        </Button>
      </Form>
    </section>
  );
}
export default About;
