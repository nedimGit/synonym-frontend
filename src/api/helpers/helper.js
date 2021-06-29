export const generateQueryParams = params => {
  if (params.length === 0) return '';
  let query = '?';
  params.forEach((param, index) => {
    const key = Object.keys(param)[0];
    if (param[key] || !isNaN(param[key])) {
      query += `${key}=${param[key] + (index === params.length - 1 ? '' : '&')}`;
    }
  });
  return query;
};
