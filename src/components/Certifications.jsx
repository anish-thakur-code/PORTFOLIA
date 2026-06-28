import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants/portfolio";
import { fadeIn, textVariant } from "../utils/motion";

const Certifications = () => (
  <div className='bg-black-100 rounded-[20px] p-7 sm:p-10'>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Continuous learning</p>
      <h2 className={styles.sectionHeadText}>Certifications.</h2>
    </motion.div>

    <div className='mt-10 grid md:grid-cols-2 gap-5'>
      {certifications.map((certificate, index) => (
        <motion.article
          key={certificate.title}
          variants={fadeIn("up", "spring", index * 0.1, 0.6)}
          className='bg-tertiary border border-white/5 rounded-2xl p-6 flex gap-4'
        >
          <div className='shrink-0 w-11 h-11 rounded-xl bg-[#915EFF]/20 grid place-items-center text-[#bda7ff] text-xl'>
            ✓
          </div>
          <div>
            <h3 className='text-white font-semibold text-[17px]'>{certificate.title}</h3>
            <p className='mt-2 text-secondary text-[13px]'>{certificate.issuer}</p>
            <p className='mt-2 text-[#bda7ff] text-[12px] font-medium'>{certificate.date}</p>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Certifications, "certifications");
