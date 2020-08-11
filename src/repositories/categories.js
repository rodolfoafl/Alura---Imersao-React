import { FETCH_URL } from "../config";

const URL_CATEGORIES = `${FETCH_URL}/categories`;

const getAllCategories = () => {
  return fetch(URL_CATEGORIES).then(async (response) => {
    if (response.ok) {
      const res = await response.json();
      return res;
    }

    throw new Error("Unable to fetch data!");
  });
};

const getAllCategoriesWithVideos = () => {
  //   console.log(FETCH_URL);
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const res = await response.json();
      return res;
    }

    throw new Error("Unable to fetch data!");
  });
};

const registerCategory = (newCategory) => {
  console.log(newCategory);
  //   console.log(FETCH_URL);
  return fetch(`${URL_CATEGORIES}?_embed=videos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCategory),
  }).then(async (response) => {
    if (response.ok) {
      const res = await response.json();
      return res;
    }

    throw new Error("Unable to send data!");
  });
};

export default {
  getAllCategories,
  getAllCategoriesWithVideos,
  registerCategory,
};
