import React from "react";
import Span from "../component/Span";
import Banner from "../component/Banner";

function Section(props) {
  return (
    <section className="container">
      <div className="block-listing">
        <Span />
      </div>
      <Banner />
    </section>
  );
}

export default Section;
