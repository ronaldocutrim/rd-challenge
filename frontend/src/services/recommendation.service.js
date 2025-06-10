// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products
) => {
  const matchingProducts = products.map((product) => {
    const { selectedPreferences, selectedFeatures } = formData;
    const { preferences, features } = product;
    const preferencesMatch = preferences.filter((preference) => selectedPreferences?.includes(preference)).length;
    const featuresMatch = features.filter((feature) => selectedFeatures?.includes(feature)).length;
    return {
      score: preferencesMatch + featuresMatch,
      ...product
    }
  }).filter((product) => product.score > 0);

  const sortedProducts = [...matchingProducts].sort((a, b) => b.score - a.score);

  if (formData.selectedRecommendationType === 'SingleProduct' && sortedProducts.length > 0) {
    const highestScore = sortedProducts[0].score;
    const productsWithHighestScore = sortedProducts.filter(product => product.score === highestScore);
    return [productsWithHighestScore[productsWithHighestScore.length - 1]];
  }

  return sortedProducts;
}

export default { getRecommendations };
