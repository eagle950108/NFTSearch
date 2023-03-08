import axios from "axios";

const REQUEST_DELAY = 1500; // Delay between API requests in milliseconds

const getAssets = async (slug, nextToken = "", limit = 8) => {
  let params = {
    collection: slug,
    order_direction: "desc",
    limit: limit,
    include_orders: "false",
  };

  if (nextToken) {
    params = { ...params, cursor: nextToken };
  }

  const options = {
    method: "GET",
    url: "https://api.opensea.io/api/v1/assets",
    params,
    headers: {
      accept: "application/json",
      "X-API-KEY": "72068b022909446e830208fa410442b3",
    },
  };
  let data = [];
  try {
    data = await axios.request(options);
  } catch (error) {
    await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY));
    return getAssets(slug, nextToken, (limit = 8));
  }

  return data;
};

export default getAssets;
