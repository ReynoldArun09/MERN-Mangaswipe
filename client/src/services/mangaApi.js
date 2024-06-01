const BASE_URL = import.meta.env.VITE_BASE_URL;

export const GetComingSoonManga = async () => {
  const response = await fetch(`${BASE_URL}/coming-soon`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }

  return data;
};

export const GetComingSoonMangaList = async (page) => {
  const response = await fetch(`${BASE_URL}/coming-soon-all?page=${page}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }

  return data;
};


export const GetMostLikedManga = async () => {
  const response = await fetch(`${BASE_URL}/most-liked`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }

  return data;
};


export const GetOnGoingManga = async () => {
  const response = await fetch(`${BASE_URL}/on-going`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }


  return data;
};


export const GetOnGoingMangaList = async (page) => {
  const response = await fetch(`${BASE_URL}/on-going-all?page=${page}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }


  return data;
};