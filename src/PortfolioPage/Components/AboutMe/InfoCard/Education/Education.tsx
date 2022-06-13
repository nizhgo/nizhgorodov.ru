import React from "react";
import styled from "styled-components";
import InfoCardSubtitle from "../Shared/InfoCardSubtitle";

const Education = () => {
    return(
        <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
            <InfoCardSubtitle>Образование</InfoCardSubtitle>
            <p>Учусь на 3-м курсе по специальности «Информационыне системы и технологии» в НИТУ «МИСиС»</p>
        </div>
    )
}

export default Education;