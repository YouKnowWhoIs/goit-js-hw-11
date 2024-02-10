export class ImagesAPI {
  constructor() {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '?key=42272316-28c697ce0580eb37211383c7d';
    const Q = `&q=${nameImage}`;
    const IMAGE_TYPE = '&image_type=photo';
    const ORIENTATION = '&orientation=horizontal';
    const SAFESEARCH = '&safesearch=true';
  }

  getImages() {
    const url = BASE_URL + KEY + Q + IMAGE_TYPE + ORIENTATION + SAFESEARCH;
    return fetch(url).then(res => res.json());
  }

  createImages(data) {
    const url = BASE_URL + KEY + Q + IMAGE_TYPE + ORIENTATION + SAFESEARCH;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return fetch(url, options).then(res => res.json());
  }
}
