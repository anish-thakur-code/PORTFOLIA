import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skillGroups } from "../constants/portfolio";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I work with</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {skillGroups.map((group, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.1, 0.6)}
            className='bg-tertiary rounded-2xl p-6 border border-white/5'
            key={group.label}
          >
            <h3 className='text-white text-[20px] font-bold'>{group.label}</h3>
            <div className='mt-4 flex flex-wrap gap-2'>
              {group.skills.map((skill) => (
                <span key={skill} className='text-secondary text-[14px] bg-black-100 rounded-full px-3 py-1.5'>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className='mt-14 flex flex-row flex-wrap justify-center gap-6'>
        {technologies.map((technology) => (
          <div className='w-24 h-24 sm:w-28 sm:h-28' key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
