// async function fetchPosts() {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// 		const todos = await response.json();
//
// 		return todos;
// }
//
// fetchPosts().then(todos => todos.title);


const getData = async () => {
		const result = await fetch('https://swapi.dev/api/starships/9');
		const starship = await result.json();

		if(!result.ok) {
				throw new Error(`Error status: ${result.status} ${result.url}`)
		}

		return starship
}

getData().then(starship => console.log(starship));
