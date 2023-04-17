import React from "react";
import AboutMe from "./aboutMe/AboutMe";
import Contacts from "./contacts/Contacts";
import Education from "./education/Education";
import InfoCardSubtitle from "./shared/InfoCardSubtitle";
import Skills from "./skills/Skills";
import {InfoCardContainer, InfoCardHeader} from './style'

const InfoCard = () => {
    return (
        <InfoCardContainer>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <InfoCardHeader>Алексей Нижгородов</InfoCardHeader>
                <InfoCardSubtitle>Frontend Developer</InfoCardSubtitle>
            </div>
            <Skills/>
            <Contacts/>
            <Education/>
            <AboutMe/>
        </InfoCardContainer>
    )
}


export default InfoCard;