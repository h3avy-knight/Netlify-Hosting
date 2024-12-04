import Image from "next/image";
import React from "react";

const Feedback = () => {
  return (
    <div className="my-5 bg-secondary-emphasis">
      <div className="d-flex justify-content-center mx-9">
        <h1 style={{ borderBottom: "4px solid #7b1798" }}>
          WHAT CLIENTS SAY ?
        </h1>
      </div>
      <div className="row my-4">
        <div className="col-md-6" style={{ borderLeft: "4px solid #7b1798" }}>
          <p>
            TaskPulse streamlined our task management and client
            communication—simple, efficient, and highly effective!
          </p>
          <div className="d-flex align-items-center">
            <Image
              style={{ borderRadius: "50%" }}
              src="/assets/user1.jpg"
              width={100}
              height={100}
            />
            <h6 className="mx-2">Agelina</h6>
          </div>
        </div>
        <div className="col-md-6" style={{ borderLeft: "4px solid #7b1798" }}>
          <p>
            TaskPulse transformed our task tracking and client updates—smooth,
            reliable, and incredibly efficient!
          </p>
          <div className="d-flex align-items-center">
            <Image
              style={{ borderRadius: "50%" }}
              src="/assets/user2.jpg"
              width={100}
              height={100}
            />
            <h6 className="mx-2">John Dow</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
