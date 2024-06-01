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

export const GetMostReadManga = async () => {
  const response = await fetch(`${BASE_URL}/most-read`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }

  return data;
};

export const GetMostReadMangaList = async (page) => {
  const response = await fetch(`${BASE_URL}/most-read-all?page=${page}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }

  return data;
};

export const GetMostRecommendedMangas = async () => {
  const response = await fetch(`${BASE_URL}/most-recommended`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }

  return data;
};

export const GetMostRecommendedMangaList = async (page) => {
  const response = await fetch(`${BASE_URL}/most-recommended-all?page=${page}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }

  return data;
};

export const GetMostRecentManga = async () => {
  const response = await fetch(`${BASE_URL}/most-recent`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }

  return data;
};

export const GetMostRecentMangaList = async (page) => {
  const response = await fetch(`${BASE_URL}/most-recent-all?page=${page}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }

  return data;
};



export const GetMostPopularManga = async () => {
  const response = await fetch(`${BASE_URL}/most-popular`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }

  return data;
};
