export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  // to get an array, instead of an array of arrays
  if (type === "colors") unique = unique.flat();

  // console.log(["all", ...new Set(unique)]);
  // console.log([...new Set(unique)]);
  return [...new Set(unique)];
};
