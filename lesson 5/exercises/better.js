const root = document.querySelector("#root");

const products = [
  {
    title: "Product 1",
    alt: "Image-1",
    description: ["In Stock", "3.7/5"],
    badges: ["sport", "lifestyle"],
  },
  {
    title: "Product 2",
    alt: "Image-1",
    description: ["In Stock", "3.5/5"],
    badges: ["sport", "lifestyle"],
  },
  {
    title: "Product 3",
    alt: "Image-1",
    description: ["In Stock", "3.5/5"],
    badges: ["sport", "lifestyle"],
  },
  {
    title: "Product 4",
    alt: "Image-1",
    description: ["In Stock", "3.5/5"],
    badges: ["sport"],
  },
  {
    title: "Product 5",
    alt: "Image-1",
    description: ["In Stock", "4/5"],
    badges: ["sport", "lifestyle"],
  },
  {
    title: "Product 6",
    alt: "Image-1",
    description: ["In Stock", "5/5"],
    badges: ["sport"],
  },
];

function Button() {
  return React.createElement("button", null, "Add To Cart");
}

function Badges(props) {
  return React.createElement("div", { className: "badges" }, [
    ...props.badges.map((item, i) =>
      React.createElement(
        "span",
        {
          className: `badge-${i + 1}`,
        },
        item
      )
    ),
  ]);
}

function Description(props) {
  return React.createElement("div", { className: "description" }, [
    ...props.description.map((item) => React.createElement("span", null, item)),
  ]);
}

function Card(props) {
  return React.createElement("div", { className: "shopping-item" }, [
    React.createElement("h1", null, [props.title]),
    React.createElement("img", {
      src: "https://source.unsplash.com/random/200x300",
      alt: props.alt,
    }),
    React.createElement(Description, { description: props.description }),
    React.createElement(Badges, { badges: props.badges }),
    React.createElement(Button),
  ]);
}

function Main() {
  return React.createElement("main", { className: "container" }, [
    ...products.map((product) => React.createElement(Card, product)),
  ]);
}

function BottomSection() {
  return React.createElement("section", { className: "container" }, [
    React.createElement("div", { className: "block-listing" }, [
      React.createElement("span", { className: "badge-1" }, "Category 1"),
      React.createElement("span", { className: "badge-2" }, "Category 2"),
      React.createElement("span", { className: "badge-3" }, "Category 3"),
      React.createElement("span", { className: "badge-4" }, "Category 4"),
    ]),
    React.createElement("div", { className: "banner" }),
  ]);
}

function App() {
  return React.createElement("div", null, [
    React.createElement(Main),
    React.createElement(BottomSection),
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));