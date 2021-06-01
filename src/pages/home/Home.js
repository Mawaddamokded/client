import React from "react";
import Services from '../../components/services/Services'
import Header from "../../components/header/Header";
import Search from "../../components/banner/Search";


function HomePage() {
	return (
		<div >
		
				<Header />
				<Search />
				<Services />
		
		</div>
	)
}

export default HomePage;