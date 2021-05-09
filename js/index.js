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

getData('https://swapi.dev/api/starships/9/').then(starship => console.log(starship));

