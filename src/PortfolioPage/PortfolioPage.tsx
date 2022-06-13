import React from "react";
import Logo from "./Components/Logo/Logo";
import PortfolioContainer from "./Styles/PortfolioContainer";
import AboutMe from "./Components/AboutMe/AboutMe";
import PetProjects from "./Components/PetProjects/PetProjects";

const PortfolioPage = () =>
{
    return(
        <PortfolioContainer>
            <Logo>ALEKSEY<br/>NIZHGORODOV</Logo>
            <AboutMe/>
            <PetProjects/>
        </PortfolioContainer>
    )
}

export default PortfolioPage;