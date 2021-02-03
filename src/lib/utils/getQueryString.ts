export default (queryPrams: any): string => {
  let queryString = '';
  for (let key in queryPrams) {
    if (queryPrams.hasOwnProperty(key)) {
      queryString = `${queryString}&${key}=${queryPrams[key]}`;
    }
  }
  return queryString;
};
