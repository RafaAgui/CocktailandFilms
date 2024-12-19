async function getCocktails(): Promise<Cocktail[]> {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
  const data: { drinks: Cocktail[] } = await response.json();
  return data.drinks;
}

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
}

export default getCocktails;
