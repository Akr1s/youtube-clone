export function transformData(data) {
  return data.map((item) => ({
    id: item.id,
    name: item["_embedded"].show.name,
    showId: item["_embedded"].show.id,
    image: item["_embedded"].show.image.medium,
    episode: item.name,
  }));
}

export function camelCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function formatArrayLength(array) {
  if (array.length > 10) array.length = 10;
  return array;
}
