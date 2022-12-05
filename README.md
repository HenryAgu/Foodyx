# Foodyx

Foodyx gives you a breakdown of calories and nutrients, compare serving sizes, and discover how the food you eat supports your goals.

# Screenshot

![passgen1](https://user-images.githubusercontent.com/74037448/199025915-01987067-cba7-4b7d-a96c-f03899a95a90.PNG)
![passgen2](https://user-images.githubusercontent.com/74037448/199025923-3bcb8d8b-fcd1-493d-9359-e72fcc00a9e9.PNG)
![passgen3](https://user-images.githubusercontent.com/74037448/199025926-33e976e6-f014-4b77-93ab-5eaf9230d5e5.PNG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Reactjs (Hooks like states and effects)
- API (https://developer.edamam.com/edamam-recipe-api)


## Roadmap

- Click on any 'Get started' button when the page loads.

- Enter your choice of meal into the search box.
![passgen3](https://user-images.githubusercontent.com/74037448/199025926-33e976e6-f014-4b77-93ab-5eaf9230d5e5.PNG)

- Then watch edamam API generate options of that meal with their calories.


## To Run this program on your device

- Open your terminal
- Locate this project
- Run 'npm init' to get the 'node module' folder
- Run 'npm start' to run the program on your local browser.


## What I Learnt on the project

    I learnt to use axios to get data from an api and it is way easier than useEffect.

```js
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((res) => {
        setData(res.data.hits);
      });
```

# Designer

- Twitter - [@AdahJonathan](https://twitter.com/AdahJonathann)

# Developer

- Twitter - [@\_henryi](https://www.twitter.com/_henryi)
- LinkedIn - [Henry Agu](https://www.linkedin.com/in/agu-henry-871a981b0)

