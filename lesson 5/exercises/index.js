const root = document.querySelector("#root");
const section = document.querySelector("#section");

const products = [
  { title: "product 1", alt: "image-1" },
  { title: "product 1", alt: "image-1" },
  { title: "product 1", alt: "image-1" },
  { title: "product 1", alt: "image-1" },
  { title: "product 1", alt: "image-1" },
  { title: "product 1", alt: "image-1" },
];

const categores = [{ name: "category 1 " }];

function Card(props) {
  return React.createElement("div", { className: "shoping-item" }, [
    React.createElement("h3", null, ["Product 1"]),
    React.createElement("img", {
      src: "https://source.unsplash.com/random/200x300",
      alt: "image 1",
    }),
    React.createElement("div", { className: "description" }, [
      React.createElement("span", null, "In Stuck"),
      React.createElement("span", null, "3.5/5"),
    ]),
    React.createElement("div", { className: "badges" }, [
      React.createElement("span", { className: "badge-1" }, "sport"),
      React.createElement("span", { className: "badge-2" }, "lifeStye"),
    ]),
    React.createElement("button", { className: "btn" }, "Add To Cart"),
  ]);
}

function App() {
  return React.createElement(
    "main",
    { className: "container" },
    ...products.map((product) => React.createElement(Card, product))
  );
}

function Card2(props) {
  return React.createElement("div", { className: "block-listing" }, [
    React.createElement("span", { className: "badge-1" }, "Category 1"),
    React.createElement("span", { className: "badge-2" }, "Category 2"),
    React.createElement("span", { className: "badge-3" }, "Category 3"),
    React.createElement("span", { className: "badge-4" }, "Category 4"),
  ]);
}

function App2() {
  return React.createElement(
    "section",
    { className: "container" },
    ...categores.map((category) => React.createElement(Card2, category))
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(React.createElement(App2), document.getElementById("section"));
