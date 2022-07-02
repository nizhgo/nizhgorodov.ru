import React from "react";
import Logo from "./Components/Logo/Logo";
import PortfolioContainer from "./Styles/PortfolioContainer";
import Profile from "./Components/Profile/Profile";
import PetProjects from "./Components/PetProjects/PetProjects";

const PortfolioPage = () =>
{
    return(
        <PortfolioContainer>
            <Logo>ALEKSEY<br/>NIZHGORODOV</Logo>
            <Profile/>
            <PetProjects/>
        </PortfolioContainer>
    )
}

export default PortfolioPage;