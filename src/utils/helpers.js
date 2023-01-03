export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  // to get an array, instead of an array of arrays
  if (type === "colors") unique = unique.flat();

  // console.log(["all", ...new Set(unique)]);
  // console.log([...new Set(unique)]);
  return [...new Set(unique)];
};

export const formatPrice = (price) => {
  let newPrice = String(price)
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    .map(function (x) {
      return x.split("").reverse().join("");
    })
    .reverse()
    .join(",");

  return newPrice;
};
