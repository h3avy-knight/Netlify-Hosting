import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="my-5">
      <div className="d-flex justify-content-center">
        <h1 style={{ borderBottom: "4px solid #7b1798" }}>What we do ?</h1>
      </div>
      <div className="row my-4">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/assets/service1.png"
            width={100}
            height={100}
            className="my-3"
          />
          <h2>CREATIVITY</h2>
          <p>
            Creativity drives our approach to developing unique and effective
            solutions. We harness imaginative thinking to deliver innovative
            strategies and breakthrough results.
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/assets/service2.png"
            width={100}
            height={100}
            className="my-3"
          />
          <h2>Superiority</h2>
          <p>
            Superiority reflects our commitment to delivering exceptional
            standards and outstanding results. We ensure that every solution and
            service we provide stands out in quality and effectiveness.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/assets/service3.png"
            width={100}
            height={100}
            className="my-3"
          />
          <h2>Coordination</h2>
          <p>
            Coordination underscores our focus on seamless teamwork and
            effective integration. We work closely with our clients to ensure
            that every project achieves optimal results through
            well-orchestrated efforts.
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/assets/service1.png"
            width={100}
            height={100}
            className="my-3"
          />
          <h2>Adaptable Partnerships</h2>
          <p>
            Adaptable Partnerships emphasize our commitment to tailoring our
            services to meet diverse client needs. We adjust our approach to
            ensure flexibility and responsiveness in every engagement.
          </p>
        </div>
      </div>
      <div className=" d-flex flex-column justify-content-center align-items-center">
        <button className="services-button">All Services</button>
      </div>
    </div>
  );
};

export default Services;
