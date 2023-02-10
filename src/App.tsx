import React from 'react';
import Footer from "./footer/Footer";
import PortfolioPage from "./portfolioPage/PortfolioPage";
import {AppWrapper} from './style';

function App() {
	return (
		<AppWrapper role={'main'}>
			<PortfolioPage/>
			<Footer/>
		</AppWrapper>
	);
}


export default App;
