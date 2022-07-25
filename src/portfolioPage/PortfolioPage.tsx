import React from "react";
import Logo from "./components/logo/Logo";
import PetProjects from "./components/petProjects/PetProjects";
import Profile from "./components/profile/Profile";
import {PortfolioContainer} from "./style";

const PortfolioPage = () => {
	return (
		<PortfolioContainer>
			<Logo>ALEKSEY<br/>NIZHGORODOV</Logo>
			<Profile/>
			<PetProjects/>
		</PortfolioContainer>
	)
}

export default PortfolioPage;