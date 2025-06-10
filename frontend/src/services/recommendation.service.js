// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  return products.map((product) => {
    const { selectedPreferences, selectedFeatures } = formData;
    const { preferences, features } = product;
    const preferencesMatch = preferences.filter((preference) => selectedPreferences.includes(preference)).length;
    const featuresMatch = features.filter((feature) => selectedFeatures.includes(feature)).length;
    return {
      score: preferencesMatch + featuresMatch,
      ...product
    }
  }).filter((product) => product.score > 0);
}

export default { getRecommendations };
