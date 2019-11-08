const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const Hooked = require("./hooked.js");

const Counter = Hooked(({useState}) => {
  var [count, setCount] = useState(0);
  return h("div", {onClick: () => setCount(count + 1)}, "[click-count: " + count + "]");
});

window.onload = () => {
  render(
    h("div", {}, [
      h(Counter),
      h(Counter),
      h(Counter)
    ]),
    document.getElementById("main"));
};
