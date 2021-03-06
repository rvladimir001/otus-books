const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const links = [
  "https://u.livelib.ru/reader/WornTime/o/9lec3o5u/o-o.jpeg",
  "https://cdn.fishki.net/upload/post/201407/11/1284739/b8c761206e88ad420bdb0bcce65ff905.jpg",
  "https://i.artfile.ru/2048x1351_956900_[www.ArtFile.ru].jpg",
  "https://i12.fotocdn.net/s114/7022a5b2a040cffc/public_pin_l/2572283319.jpg",
  "https://energo.mos.ru/upload/medialibrary/cb1/knigi.jpg",
  "https://vseodetyah.com/editorfiles/devushka-s-knigoi-04.jpg",
  "https://avatars.mds.yandex.net/get-zen_doc/4395091/pub_60abf08ae7169a0881f5516d_60abf12ad0011619649daa95/scale_1200",
];

const country = [
  "Russia",
  "England",
  "USA",
  "Germany",
  "Italy",
  "Spain",
  "France",
];

function numberGen(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

const gender = ["Male", "Female"];

export function addMockData(data) {
  for (const elem of data) {
    elem["ISBN"] = numberGen(8780882330693, 9999999999999);
    elem["description"] = text;
    elem["price"] = `${numberGen(20, 60)}$`;
    elem["year"] = `${numberGen(1760, 2000)}`;
    elem["poster"] = links[numberGen(1, 6)];
    if (elem.authors.length > 0) {
      elem.authors[0]["country"] = country[numberGen(1, 6)];
      elem.authors[0]["gender"] = gender[Number(Math.random() >= 0.5)];
    }
  }
  return data;
}

export function addMockPoster(data) {
  data["poster"] = links[Math.floor(Math.random() * (6 - 1) + 1)];
  return data;
}
