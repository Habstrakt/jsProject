const getData = async (url) => {
  const result = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!result.ok) {
    throw new Error(`Error status: ${result.status} ${result.url}`);
  }

  return result.json();
};

const card = document.querySelector(".card");
const nextLinkRender = (nextLink) => {
  getData(nextLink).then((data) =>
    document
      .querySelector(".row")
      .insertAdjacentHTML("afterbegin", `<a href="${data.next}">asd</a>`)
  );
};

getData("https://swapi.dev/api/starships/").then((data) =>
  nextLinkRender(data.next)
);

getData("https://swapi.dev/api/starships/").then((data) => {
  data.results.forEach((item) => {
    card.insertAdjacentHTML(
      "afterbegin",
      `
				
					<img  src="https://static.wikia.nocookie.net/starwars/images/7/72/DeathStar1-SWE.png/revision/latest/scale-to-width-down/499?cb=20150121020639" class="card-img-top" alt="">
					<div class="card-body">
						<h5 class="card-title" id="title">${item.name}</h5>
						<p class="card-text" id="text">${item.manufacturer}</p>
					</div>
			
		`
    );
  });
});

getData("https://swapi.dev/api/starships/").then((data) => {});

// getData("https://swapi.dev/api/starships/").then((starship) =>
//   console.log(starship)
// );

// getData("https://swapi.dev/api/starships/").then((data) =>
//   data.results.forEach((item) => {
//     console.log(item);
//   })
// );

// getData("https://swapi.dev/api/starships/").then((data) =>
//   data.results.forEach((item) => {
//     console.log(item.model);
//   })
// );

// getData("https://swapi.dev/api/starships/").then((data) =>
//   data.results.forEach((item) => {
//     console.log(item.model);
//     console.log(item.name);
//   })
// );

// getData("https://swapi.dev/api/starships/").then((data) =>
//   console.log(data.next)
// );

// getData("https://swapi.dev/api/starships/").then((data) =>
//   renderNext(data.next)
// );

// const renderNext = (nextLink) => {
//   getData(nextLink).then((data) => console.log(data.next));
// };
