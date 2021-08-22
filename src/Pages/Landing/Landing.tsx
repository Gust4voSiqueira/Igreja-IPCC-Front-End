import React, { useCallback, useState } from "react";
import "./Landing.css";
import CapaImage1 from "../../images/capa 1.jpg";
import CapaImage2 from "../../images/capa 2.jpg";
import CapaImage3 from "../../images/capa 3.jpg";

import Header from "../../Global Components/Header/Header";
import DailyVerse from "./Components/Daily-Verse/DailyVerse";
import EcdComponent from "./Components/EcdComponent/EcdComponent";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import Footer from "../../Global Components/Footer/Footer";

const Landing = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const obj = [
        CapaImage1,
        CapaImage2,
        CapaImage3
    ]
    const [cont, setCont] = useState(0);
    const handleImage = useCallback(() => {
        for (let a = 0; a <= 100; a++) {
            setTimeout(() => {
                if (cont < 2) {
                    setCont(cont + 1);
                } else {
                    setCont(0);
                }
            }, 2500);
        }
        return <img id='images-landing' src={obj[cont]} alt='' />
    }, [cont, obj]);
    return (
        <>
            <div id="landing-container">
                <Header />
                {handleImage()}

                <DailyVerse />
                <EcdComponent />
                <SocialMedia />
                <Footer />
            </div>
        </>
    );
};

export default Landing;
