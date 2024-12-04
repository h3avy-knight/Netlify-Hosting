import Image from "next/image";
import React from "react";

const Task = () => {
  return (
    <div className="my-5 bg-secondary-emphasis">
      <div className="d-flex justify-content-center">
        <h1 style={{ borderBottom: "4px solid #7b1798" }}>HERE IS TASK</h1>
      </div>
      <div className="row my-4">
        <div className="col-md-6 card d-flex flex-column justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-4  d-flex flex-column justify-content-center align-items-center">
              <Image width={100} height={100} src="/assets/tasklist1.jpeg" />
            </div>
            <div className="col-md-8 p-2">
              <h2>Data Scraping</h2>
              <p>
                Basic requirements - 20+ age, Good typing skills, Basic English,
                Android mobile required with good internet connectivity.
              </p>
              <p>Earning potential: 40000/-</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 card d-flex flex-column justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-4  d-flex flex-column justify-content-center align-items-center">
              <Image width={100} height={100} src="/assets/tasklist2.jpeg" />
            </div>
            <div className="col-md-8 p-2">
              <h2>Store near me</h2>
              <p>
                Basic requirements - 20+ age, Good typing skills, good knowledge
                of ChatGPT, Quick learner, Android mobile required with good
                internet connectivity.
              </p>
              <p>Earning potential: 30000/-</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 card d-flex flex-column justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-4  d-flex flex-column justify-content-center align-items-center">
              <Image width={100} height={100} src="/assets/tasklist3.jpeg" />
            </div>
            <div className="col-md-8 p-2">
              <h2>Prompt Pairing</h2>
              <p>Basic Requirements: 18+ Age, Good Communication.</p>
              <p>Earning potential: 30000/-</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 card d-flex flex-column justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-4  d-flex flex-column justify-content-center align-items-center">
              <Image width={100} height={100} src="/assets/tasklist4.jpeg" />
            </div>
            <div className="col-md-8 p-2">
              <h2>Profile Creation</h2>
              <p>Basic Requirements: 18+ Age, Computer knowledge.</p>
              <p>Earning potential: 30000/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
