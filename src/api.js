export async function fetchImages(breed) {
  const response = await fetch(
    'https://shibe.online/api/birds'
  );
  const data = await response.json();
  return data;
}