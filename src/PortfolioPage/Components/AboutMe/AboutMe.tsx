import React from "react";
import styled from "styled-components";
import Avatar from "../../../Images/avatar.jpg"
import InfoCard from "./InfoCard/InfoCard";

const AboutMe = () =>
{
    return(
        <AboutMeGrid>
            <UserPic src={Avatar} alt={'userpic'}/>
            <InfoCard/>
        </AboutMeGrid>
    )
}

const AboutMeGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 56px;
  
  @media (max-width: 700px)
  {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`


const UserPic = styled.img`
  min-width: 120px;
  border-radius: 8px;
  max-width: 212px;
  width: 100%;
`


export default AboutMe;