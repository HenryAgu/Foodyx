# Foodyx

Foodyx gives you a breakdown of calories and nutrients, compare serving sizes, and discover how the food you eat supports your goals.

# Screenshot
![foodyx-started](https://user-images.githubusercontent.com/74037448/205732736-93a7f818-47e0-4fcd-bd9f-208c2378014b.PNG)
![foodyx](https://user-images.githubusercontent.com/74037448/205732757-6a3aaeda-c05c-4510-a374-a2b9ef040825.PNG)
![foodyx2](https://user-images.githubusercontent.com/74037448/205732767-39211ca4-b465-4b04-85af-1e0395bd44d2.PNG)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Reactjs (Hooks like states and effects)
- API (https://developer.edamam.com/edamam-recipe-api)


## Roadmap

- Click on any 'Get started' button when the page loads.

- Enter your choice of meal into the search box.
![foodyx-search](https://user-images.githubusercontent.com/74037448/205732605-8c19a204-cc15-4623-bce7-b92cfe7f8373.PNG)


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

