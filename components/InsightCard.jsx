"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planets"
      className="rounded-[32px] md:w-[270px] w-full h-[250px] object-cover"
    />
    <div className="w-full flex items-center justify-between">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h1 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h1>
        <p className="font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="lg:flex hidden items-center justify-center rounded-full border-white bg-transparent border-[2px] h-[100px] w-[100px]">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
