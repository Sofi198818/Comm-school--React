import React from "react";
import Card from "../component/Card";


const products = [
  { title: "Product 1", alt: "Image-1" },
  { title: "Product 2", alt: "Image-1" },
  { title: "Product 3", alt: "Image-1" },
  { title: "Product 4", alt: "Image-1" },
  { title: "Product 5", alt: "Image-1" },
  { title: "Product 6", alt: "Image-1" },
];

function App() {
  return (
    <main className="container">
      {products.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          src="https://source.unsplash.com/random/200x300"
          alt={item.alt}
        />
      ))}
    </main>
  );
}

export default App;
