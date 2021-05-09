const getData = async (url) => {
		const result = await fetch(url, {
				method: 'GET',
				headers: {
						'Content-type': 'application/json'
				},
		});

		if(!result.ok) {
				throw new Error(`Error status: ${result.status} ${result.url}`)
		}

		return result.json();
}



getData('https://swapi.dev/api/starships/').then(starship => console.log(starship));

getData('https://swapi.dev/api/starships/').then(data => data.results.forEach(item => {
		console.log(item);
}));

getData('https://swapi.dev/api/starships/').then(data => data.results.forEach(item => {
		console.log(item.model);
}));

getData('https://swapi.dev/api/starships/').then(data => data.results.forEach(item => {
		console.log(item.model);
		console.log(item.name);
}));

getData('https://swapi.dev/api/starships/').then(data => console.log(data.next));

getData('https://swapi.dev/api/starships/').then(data => renderNext(data.next));

const renderNext = (nextLink) => {
		getData(nextLink).then(data => console.log(data.next));
};