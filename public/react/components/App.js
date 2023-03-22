import React, { useState, useEffect } from 'react';
import NavBar  from './NavBar';
import { HomePage } from './HomePage';
import ShopAll from './ShopAll';
import { Route, Routes, useLocation } from 'react-router-dom';
import '../stylesheets/app.css';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
			<NavBar />
			<div className='mainContainer'>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shopall" element={<ShopAll />} />
			</Routes>
			</div>

		</main>
	)
}