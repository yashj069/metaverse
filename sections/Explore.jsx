"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExploreCard, TypingText, TitleText } from "../components";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";
import styles from "../styles";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section id="explore" className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex flex-col mx-auto ${styles.innerWidth}`}
      >
        <TypingText title="| The Worlds" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div
          className="mt-[50px] flex lg:flex-row flex-col
        min-h-[70vh] gap-5"
        >
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
