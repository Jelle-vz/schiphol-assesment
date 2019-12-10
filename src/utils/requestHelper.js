
export const request = (url, defaultResponse) => fetch(`${url}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  })
  .catch(() => defaultResponse);
