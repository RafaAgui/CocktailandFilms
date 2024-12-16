async function getCocktails(): Promise<any> {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
  const data = await response.json();
  return data.drinks;
}

export default getCocktails;