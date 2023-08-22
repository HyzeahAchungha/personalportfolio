import React, { useContext } from "react";
import "./Works.css";
import Datagirltechlogo from "../../img/Datagirltechlogo.png";
import Africanwitt from "../../img/Africanwitt.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Attended Events in All these
          </span>
          <span>Brands & Clients</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Datagirltechlogo} alt="" width={'80%'}/>
          </div>
          <div className="w-secCircle">
            <img src={Africanwitt} alt="" width={'80%'}/>
          </div>
          <div className="w-secCircle">
            <img src={Datagirltechlogo} alt="" width={'80%'}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={Africanwitt} alt="" width={'80%'}/>
          </div>
          <div className="w-secCircle">
            <img src={Africanwitt} alt="" width={'80%'}/>
          </div>
          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
