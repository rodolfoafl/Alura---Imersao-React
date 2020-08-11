import { FETCH_URL } from "../config";

const URL_VIDEOS = `${FETCH_URL}/videos`;

const registerVideo = (newVideo) => {
  console.log(newVideo);
  //   console.log(FETCH_URL);
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newVideo),
  }).then(async (response) => {
    if (response.ok) {
      const res = await response.json();
      return res;
    }

    throw new Error("Unable to send data!");
  });
};

export default {
  registerVideo,
};
