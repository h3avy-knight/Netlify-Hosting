import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Image src="/assets/logo.png" width={100} height={100} />
        </div>
        <div className="col-md-6 text-white">
          <h6 className="mt-4">Contact US</h6>
          <p className="d-flex align-items-center">
            <FaLocationDot />
            2nd floor, NS Complex, Nelamangala Bangalore - 562123
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p className="text-white">
            The TaskPulse empowers SMBs with tailored solutions and expert
            services to drive success and innovation.
          </p>
        </div>
        <div className="col-md-6 text-white">
          <p className="d-flex align-items-center">
            <MdMailOutline />
            support@taskpules.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
