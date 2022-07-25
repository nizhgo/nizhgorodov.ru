import React from 'react';
import Footer from "./footer/Footer";
import PortfolioPage from "./portfolioPage/PortfolioPage";
import {AppWrapper} from './style';

function App() {
	return (
		<AppWrapper>
			<PortfolioPage/>
			<Footer/>
		</AppWrapper>
	);
}


export default App;
