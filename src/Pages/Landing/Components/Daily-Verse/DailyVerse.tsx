import React from "react";
import "./DailyVerse.css";
import DailyVerseImg from "../../../../images/image-versiculo-dia.jpg";

const DailyVerse = () => {
    const verse = {
        text: 'Disse-lhe Jesus: "Guarde a espada! Pois todos os que empunham a espada, pela espada morrerão. Você acha que eu não posso pedir a meu Pai, e ele não colocaria imediatamente à minha disposição mais de doze legiões de anjos?"',
        ref: "Mateus 26:52-53",
    };

    return (
        <>
            <div id="dailyverse-container">
                <img src={DailyVerseImg} alt="" />
                <div>
                    <h2 className="title">Versículo Diário</h2>
                    <p>{verse.text}</p>
                    <span>{verse.ref}</span>
                </div>
            </div>
        </>
    );
};

export default DailyVerse;
