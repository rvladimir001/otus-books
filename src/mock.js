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

const gender = ["Male", "Female"];

function addMockData(data) {
  for (const elem of data) {
    elem["ISBN"] = Math.floor(
      Math.random() * (9999999999999 - 8780882330693) + 8780882330693
    );
    elem["description"] = text;
    elem["price"] = `${Math.floor(Math.random() * (60 - 20) + 20)}$`;
    elem["year"] = `${Math.floor(Math.random() * (2000 - 1760) + 1760)}`;
    elem["poster"] = links[Math.floor(Math.random() * (6 - 1) + 1)];
    if (elem.authors.length > 0) {
      elem.authors[0]["country"] =
        country[Math.floor(Math.random() * (6 - 1) + 1)];
      elem.authors[0]["gender"] = gender[Number(Math.random() >= 0.5)];
    }
  }
  return data;
}

function addMockPoster(data) {
  console.log("data", data);
  data["poster"] = links[Math.floor(Math.random() * (6 - 1) + 1)];
  return data;
}

export { addMockData, addMockPoster };
