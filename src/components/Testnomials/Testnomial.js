import React, { useState } from 'react'
import './testnomial.css';
import { testimonialsData } from '../Data/testimonialsData';
import Leftarrow from '../../images/leftArrow.png'
import Rightarrow from '../../images/rightArrow.png'
import { motion } from 'framer-motion';
const Testnomial = () => {
   const transition = { type: 'spring', duration: 3 }

   const [Selected, Setselected] = useState(0);
   const tLength = testimonialsData.length;
   return (

      <div className="home-c">
         <h4 className='introducing'>Couslt Doctors</h4>
         <h1 className="heading">Consult with our best Doctor for proper Treatment</h1>

         <div className="testnomial" id='testnomial'>


            <div className="left-t">
               <motion.span
                  key={Selected}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ transition }}
               >
                  {/* <img className='test' src={testimonialsData.comma} alt="hell" /> */}
                  {testimonialsData[Selected].review}
               </motion.span>
               <span>
                  <span >{testimonialsData[Selected].name}</span>
                  <br />
                  <p>
                     {testimonialsData[Selected].status}
                  </p>
               </span>
            </div>
            <div className="right-t">
               <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ ...transition, duration: 2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className='border'></motion.div>
               <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ ...transition, duration: 2 }}
                  whileInView={{ opacity: 1, x: 0 }}

                  className='fill'></motion.div>
               <motion.img
                  key={Selected}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ transition }}
                  src={testimonialsData[Selected].image} alt="" />
               <div className="arrows">
                  <img onClick={() => {
                     Selected === 0 ? Setselected(tLength - 1) :
                        Setselected((prev) => prev - 1)
                  }}
                     src={Rightarrow} alt="prev" />

                  <img
                     onClick={() => {
                        Selected === tLength - 1 ?
                           Setselected(0) :
                           Setselected((prev) => prev + 1)
                     }}
                     src={Leftarrow} alt="next" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Testnomial