import React from "react";
import Title from "./components/logo/Title";
import PetProjects from "./components/petProjects/PetProjects";
import Profile from "./components/profile/Profile";
import {PortfolioContainer} from "./style";

const PortfolioPage = () => {
	return (
		<PortfolioContainer>
			<header>
			<Title>ALEKSEY<br/>NIZHGORODOV</Title>
			</header>
			<Profile/>
			<PetProjects/>
		</PortfolioContainer>
	)
}

export default PortfolioPage;
