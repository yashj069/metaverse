"use client";

import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import styles from "../styles";
import { socials } from "../constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div
      className={`${styles.innerWidth}  mx-auto flex flex-col gap-[40px] text-white`}
    >
      <div className="flex flex-row justify-between">
        <h1 className="md:text-[64px] text-[48px] leading-[60px] md:leading-[81px] font-bold">
          Enter the Metaverse{" "}
        </h1>
        <div className="flex flex-row gap-2 justify-between mt-[20px] md:mt-[0px] bg-[#25618B] rounded-[32px] w-[246px] h-[64px] items-center px-6 md:px-8">
          <img
            src="/headset.svg"
            alt="headset"
            className="h-[18px] w-[18px] md:h-[24px] md:w-[24px] object-contain"
          />
          <h1 className="text-[12px] md:text-[16px] leading-[20px]">
            ENTER METAVERSE
          </h1>
        </div>
      </div>
      <div className="h-[2px] w-full bg-white opacity-[0.1]" />
      <div className="text-white flex flex-col md:flex-row justify-between items-center gap-3">
        <h1 className="font-bold text-[24px] leading-[30px]">METAVERUS</h1>
        <p className="text-[14px] leading-[21px] text-secondary-white">
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>
        <div className="flex flex-row gap-4">
          {socials.map((social) => (
            <img
              src={social.url}
              key={social.name}
              alt={social.name}
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
