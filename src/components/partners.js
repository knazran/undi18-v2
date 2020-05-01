import React from "react";
import architects from "../images/architects.png";
import ctg from "../images/ctg.png";
import jci from "../images/jci.png";
import tfm from "../images/tfm.png";
import unicef from "../images/unicef.png";
import embassy from "../images/us-embassy.jpg";
import yseali from "../images/yseali.png";
import mari from "../images/mari.png";
import mindef from "../images/mindef.png";
import kbs from "../images/kbs.png";

const Partners = () => {
  const partnerLogos = [mindef, kbs, unicef, embassy, architects, ctg, jci, tfm,  yseali, mari];

  return (
    <div className="my-6 w-full">
      <div className="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
      <h3 className="text-2xl font-semibold tracking-wider mb-4">
        Our Partners & Clients
      </h3>
      <div className="flex flex-wrap justify-center">
        {partnerLogos.map((logo, idx) => (
          <div key={idx} className="w-1/2 md:w-1/4 lg:w-1/4 p-4">
            <img className="lg:h-32 lg:object-contain w-auto" src={logo} alt="Partners" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
