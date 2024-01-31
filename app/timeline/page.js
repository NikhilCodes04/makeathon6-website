"use client";

import styles from "./timeline.module.css";
import Image from "next/image";
import astrolab from "./assets/astroimg.png";
import astroframe from "/public/timeline/astroframe.svg";
import astrotrail from "./assets/trail.svg";
import ell29 from "./assets/ell29.svg";
import ell30 from "./assets/ell30.svg";
import ell31 from "./assets/ell31.svg";
import ell32 from "./assets/ell32.svg";
import ell33 from "./assets/ell33.svg";
import ell34 from "./assets/ell34.svg";
import ell35 from "./assets/ell35.svg";
import ell36 from "./assets/ell36.svg";
import Bg from "./particles.js";

const rotations = [0, 30, 60, 90, 120, 150, 180];

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

import { headings } from "./data";
import { useState } from "react";
const rotations = [0, 30, 60, 90, 120, 150, 180];
import Hamburger from "@/components/Hamburger/Hamburger";

export default function Page() {
  const { scrollYProgress } = useScroll();

  const changetracker = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9],
    [0, 1, 2, 3, 4, 5, 6]
  );

  useMotionValueEvent(changetracker, "change", (latest) => {
    console.log(Math.round(latest * 10));
    setCi(Math.round(latest));
    // if(Math.round(latest*10)%2===0)
    // {

    // //   setCi((prevCi) => (prevCi + 1) % 5);

    // }
  });

  const [ci, setCi] = useState(0);
  date();

  return (
    <>
    <Hamburger/>
    <div style={{height:'500vh'}}>
    <div style={{position:'sticky', top:'0px'}} className={styles.bgbox}>
      <div className={styles.astrobox}>
        <div id={styles.imgbox}>
          <Bg />
          <div className={styles.stackbox}>
            <Image src={astrolab} className={styles.astroimage} />
            {/* <motion.img 
            src={astroframe} 
            className={styles.astroimage2} 
            animate={{ rotate: rotations[ci] }} 
             /> /}
              {/ 
             <motion.div  style ={{height:'200px'}} animate={{ rotate: rotations[ci] }} >
                  <Image src={astroframe} className={styles.astroimage2} />
                </motion.div> */}

               <motion.div animate={{ rotate: rotations[ci] }} className={styles.framediv} >
                <Image src={astroframe} className={styles.astroimage2} />
              </motion.div>

            <Image src={astrotrail} className={styles.astroimage3} />
            <Image src={ell29} className={styles.astroimage4} />
            <Image src={ell30} className={styles.astroimage5} />
            <Image src={ell31} className={styles.astroimage6} />
            <Image src={ell32} className={styles.astroimage7} />
            <Image src={ell33} className={styles.astroimage8} />
            <Image src={ell34} className={styles.astroimage9} />
            <Image src={ell35} className={styles.astroimage10} />
            <Image src={ell36} className={styles.astroimage11} />
            <p className={styles.parag}>{date()}</p>
          </div>
        </div>
        <div className={styles.textbox}>
          <motion.div onClick={()=>{
            setCi((ci + 1) % 5)
          }} className={styles.mikibox}>
            <motion.h1
              key = {headings[ci]}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={styles.heading}
            >
             {headings[ci]}
            </motion.h1>
          </motion.div>
          <div className={styles.minibox}>
            <ul className={styles.para}>
              <li>
                Voluptate exercitation aliquip pariatur in voluptate duis esse
                irure occaecat. Cillum dolore velit occaecat aute duis dolor.
                Duis qui id aliquip cillum incididunt in. Nisi mollit do nostrud
                sunt Lorem ullamco cillum fugiat ut sint. Aute laboris
                incididunt elit et anim..
              </li>
              <li>
                Veniam cupidatat commodo elit pariatur adipisicing. Adipisicing
                esse in dolore excepteur. Deserunt magna eiusmod culpa mollit
                duis.
              </li>
              <li>
                Consectetur nisi amet consectetur aute sunt ea proident
                consectetur excepteur pariatur id sint voluptate nostrud.
                Exercitation dolore sunt in laboris sint aute irure mollit
                laborum. Quis do qui laborum Lorem consequat labore voluptate.
              </li>
              <li>
                Consectetur nisi amet consectetur aute sunt ea proident
                consectetur excepteur pariatur id sint voluptate nostrud.
                Exercitation dolore sunt in laboris sint aute irure mollit
                laborum. Quis do qui laborum Lorem consequat labore voluptate.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

function date() {
  const now = new Date();
  const date = now.getDate();
  const time = now.toLocaleTimeString();
  const year = now.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var month = months[now.getMonth()];
  return `${month} ${date}'${year} `;
}