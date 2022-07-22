const dinnerBox = document.getElementById("dinnerbox");
const drinkBox = document.getElementById("drinkbox");
const dinnerBtn = document.getElementById("dinnerbtn");
const drinkBtn = document.getElementById("drinkbtn");

const API_URL_DINNER = "https://www.themealdb.com/api/json/v1/1/random.php";
const API_URL_DRINKS = "https://api.punkapi.com/v2/beers/random";

dinnerBtn.addEventListener("click", () => {
  fetch(API_URL_DINNER).then((res) =>
    res.json().then((data) => {
      console.log("dinner", data);

      dinnerBox.innerHTML = `
      <div>
      <img class="dinner-pic" src="${data.meals[0].strMealThumb}" alt="pic" width="auto" height="300"/>
       <p class="dinner-desc">Your dinner tonight: <span>${data.meals[0].strMeal} </span></p>
       <p class="dinner-desc">Type: <span>${data.meals[0].strCategory} </span></p>
       <p class="dinner-desc">Cuisine: <span> ${data.meals[0].strArea} </span></p>

       <p class="dinner-desc">Get the instructions and list of ingredients here: <a href="${data.meals[0].strSource}" target="_blank"
       rel="noopener noreferrer"><span>Yummy!</span></a></p>
        </div>
      `;
    })
  );
});

{
  /* <h2>Instructions:</h2> <br>
<p>${data.meals[0].strInstructions}</p>
<p>3 first ingredients</p>
<ol>
 <li>${data.meals[0].strIngredient1}, ${data.meals[0].strMeasure1}</li>
 <li>${data.meals[0].strIngredient2}, ${data.meals[0].strMeasure2}</li>
 <li>${data.meals[0].strIngredient3}, ${data.meals[0].strMeasure3}</li>
</ol> */
}

drinkBtn.addEventListener("click", () => {
  fetch(API_URL_DRINKS).then((res) =>
    res.json().then((data) => {
      console.log("drink", data);

      const image = data[0].image_url;

      console.log("bild", image);

      if (image !== null) {
        drinkBox.innerHTML = `
        <div>
        <img class="drink-pic" src="${image}" alt="pic" width="auto" height="300"/>
        </div>
        `;
        console.log("i första");
      } else {
        drinkBox.innerHTML = `<div>
        <img class="drink-pic" src="./beer-png.png" alt="drink-pic" height="300"/>
        </div>`;
        console.log("i andra");
      }

      drinkBox.innerHTML += `
      <div>
      <p class="dinner-desc"><span>Name:</span> ${data[0].name}</p>
      <p class="dinner-desc"> <span>Tagline: </span>${data[0].tagline}</p>
      <p class="dinner-desc"><span>Description: </span>${data[0].description}</p>
      <p class="dinner-desc"><span>Your drink of choice is prefferably paired with:</span></p>
      </div>`;

      data[0].food_pairing.forEach((item) => {
        console.log("item", item);
        drinkBox.innerHTML += `
        <ul>
        <li class="dinner-desc">${item}</li>
        </ul>
        `;
      });
    })
  );
});
