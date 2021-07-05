export function transformData(data) {
  return data.map((item) => {
    let pic;
    if (!item["_embedded"].show.image) pic = "https://picsum.photos/200";
    else pic = item["_embedded"].show.image.medium;
    return {
      id: item.id,
      name: item["_embedded"].show.name,
      showId: item["_embedded"].show.id,
      image: pic,
      episode: item.name,
      summary: item["_embedded"].show.summary,
      date: item["_embedded"].show.premiered,
    };
  });
}

export function camelCase(title = "NoTitle") {
  return title[0].toUpperCase() + title.slice(1);
}

export function formatArrayLength(array = []) {
  if (array.length > 10) array.length = 10;
  return array;
}
