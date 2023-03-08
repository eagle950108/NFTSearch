const REQUEST_DELAY = 1500; // Delay between API requests in milliseconds

const getCollection = async (address) => {
  const contractOptions = {
    method: "GET",
    headers: { "X-API-KEY": "72068b022909446e830208fa410442b3" },
  };
  let response = null;

  try {
    response = await fetch(
      "https://api.opensea.io/api/v1/asset_contract/" + address,
      contractOptions
    );
  } catch (error) {
    await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY));
    return getCollection(address);
  }

  const contractData = await response.json();
  const name = contractData.name;
  const slug = contractData.collection.slug;

  return { name, slug };
};

export default getCollection;
