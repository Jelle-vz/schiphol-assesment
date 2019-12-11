
export const request = (url, defaultResponse) => fetch(`${url}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    return defaultResponse;
  });
