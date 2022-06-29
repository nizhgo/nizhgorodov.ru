import React from "react";
import styled from "styled-components";
import InfoCardSubtitle from "./Shared/InfoCardSubtitle";
import Skills from "./Skills/Skills";
import Contacts from "./Contacts/Contacts";
import Education from "./Education/Education";

const InfoCard = () =>
{
    return(
<InfoCardContainer>
<div style={{display:'flex', flexDirection:'column'}}>
    <InfoCardHeader>Алексей Нижгородов</InfoCardHeader>
    <InfoCardSubtitle>Junior Frontend Developer (React)</InfoCardSubtitle>
</div>
    <Skills/>
    <Contacts/>
    <Education/>
</InfoCardContainer>
    )
}

const InfoCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0;
gap: 39px;
  max-width: 550px;
`

const InfoCardHeader = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 139.02%;
  color: #FFFFFF;
`



export default InfoCard;