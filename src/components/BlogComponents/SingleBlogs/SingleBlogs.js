import React from "react";
import { useState } from "react";

export default function SingleBlogs() {
  const [set, se] = useState([]);
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        {/* Items container */}

        <div className=" flex justify-center">
          <div className="w-[60rem] ">
            <p className="text-start p-2 text-lg text-gray-400 my-5 leading-9">
              <sapn className="text-xl mt-6 text-dark font-bold">A</sapn>{" "}
              cardiologist can carry out tests for a heart murmur or an abnormal
              heart rhythm.They often treat patients who have had a heart
              attack, heart failure, or other heart problems. They help make
              decisions about heart surgery, heart catheterization, and
              angioplasty and stenting.
              <br /> Cardiology is the study and treatment of disorders of the
              heart and the blood vessels. A person with heart disease or
              cardiovascular disease may be referred to a cardiologist.
              <br /> A cardiologist is a medical doctor who studies and treats
              diseases and conditions of the cardiovascular system — the heart
              and blood vessels — including heart rhythm disorders, coronary
              artery disease, heart attacks, heart defects and infections, and
              related disorders
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[60rem] bg-service-color">
            <div className="p-8 relative">
              <h2 className="text-2xl font-semibold text-dark">
                Cardio technology strategy and the roaplement that? The leaders
                arrefreshing it constantly and business decisions.
                <br />
                Willimes Smith
              </h2>
            </div>
            {/* Quote */}
            {/* Quote */}
           
          </div>
        </div>
      </div>
    </div>
  );
}
