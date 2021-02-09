export default (queryPrams: any): string => {
  let queryString = '';
  for (const key in queryPrams) {
    if (queryPrams.hasOwnProperty(key)) {
      if (key === 'repository') queryPrams[key] = encodeURIComponent(queryPrams[key]);

      queryString === ''
        ? (queryString = `${key}=${queryPrams[key]}`)
        : (queryString = `${queryString}&${key}=${queryPrams[key]}`);
    }
  }
  return queryString;
};
