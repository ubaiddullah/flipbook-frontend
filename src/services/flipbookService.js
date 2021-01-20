import http from "./httpServices";

const apiEndPoint = "/flipbooks";

function flipbookUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getFlipbooks() {
  return http.get(apiEndPoint);
}

export function getFlipbook(flipbookId) {
  return http.get(flipbookUrl(flipbookId));
}

export function saveFlipbook(flipbook) {
  if (flipbook._id) {
    const body = { ...flipbook };
    delete body._id;
    return http.put(flipbookUrl(flipbook._id), body);
  }

  return http.post(apiEndPoint, flipbook);
}

export function deleteFlipbook(flipbookId) {
  return http.delete(flipbookUrl(flipbookId));
}
