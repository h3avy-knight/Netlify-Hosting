import Image from "next/image";
import React from "react";

const Properties = () => {
  return (
    <div className="my-5 bg-secondary-emphasis">
      <div className="d-flex justify-content-center">
        <h1 style={{ borderBottom: "4px solid #7b1798" }}>WHY CHOOSE US ?</h1>
      </div>
      <div className="row my-4">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h1>Why we are diffrent</h1>
          <ul>
            <li className="lh-lg">
              Our company stands apart by integrating innovation with
              sustainability, ensuring every product is crafted with the future
              in mind.
            </li>
            <li className="lh-lg">
              We value transparency, openly sharing our processes, progress, and
              setbacks with our community.
            </li>
            <li className="lh-lg">
              Unlike others, we prioritize human connection in every
              interaction, creating authentic relationships with both clients
              and employees.
            </li>
            <li className="lh-lg">
              We set ourselves apart by blending cutting-edge technology with a
              human-centered approach, delivering results that matter
            </li>
            <li className="lh-lg">
              We are driven by purpose, committed to making a meaningful impact
              beyond just profits.
            </li>
            <li className="lh-lg">
              What makes us unique is our commitment to continuous learning,
              allowing us to constantly improve and innovate in our field.
            </li>
            <li className="lh-lg">
              Our company differs by focusing on collaboration over competition,
              fostering a culture where everyone thrives together.
            </li>
            <li className="lh-lg">
              We redefine excellence by consistently exceeding expectations,
              delivering high-quality services that inspire trust.
            </li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <Image src="/assets/network.png" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Properties;
