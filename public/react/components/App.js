import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import NavBar  from './NavBar';

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
      <h1>The Bit Buckets Inventory!</h1>
			<h2>All things 🔥</h2>
			<ItemsList items={items} />
		</main>
	)
}