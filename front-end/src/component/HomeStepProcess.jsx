import React from "react";
import { motion } from "framer-motion"; // corrected import

const steps = [
  { id: 1, title: "Step 1", description: "Upload Your Resume" },
  {
    id: 2,
    title: "Step 2",
    description: "AI analyzes your resume & extracts information",
  },
  {
    id: 3,
    title: "Step 3",
    description:
      "AI produced high-level coding questions comparable to those encountered at FAANG companies",
  },
  {
    id: 4,
    title: "Step 4",
    description: "AI starts asking personalized questions",
  },
  {
    id: 5,
    title: "Step 5",
    description: "You answer in real-time & get feedback",
  },
];

function StepProcess() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12">
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-center sm:text-left">
          How It Work
        </h1>
      </div>

      <div className="relative flex flex-col items-center gap-9 text-white mt-10">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#0C1A31] hidden lg:block"></div>

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`relative flex w-full max-w-2xl items-center justify-center lg:justify-${
              index % 2 === 0 ? "start" : "end"
            }`}
          >
            <div
              className={`border border-[#173460] p-4 rounded-lg w-[90%] sm:w-[70%] md:w-80 lg:w-72 relative z-10 ${
                index % 2 === 0 ? "lg:ml-[-20px]" : "lg:mr-[-20px]"
              }`}
            >
              <h2 className="text-lg font-bold">{step.title}</h2>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StepProcess;
