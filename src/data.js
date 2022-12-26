import home from "./assets/images/icons/home.svg";
import category from "./assets/images/icons/category.svg";
import bag from "./assets/images/icons/bag.svg";
import fav from "./assets/images/icons/lovely.svg";
import phoneCat from "./assets/images/icons/phone-category-icon.svg";
import laptopCat from "./assets/images/icons/laptop-category-icon.svg";
import watchCat from "./assets/images/icons/watch-category-icon.svg";

import apple from "./assets/images/brands-logo/apple.svg";
import asus from "./assets/images/brands-logo/asus.svg";
import xiaomi from "./assets/images/brands-logo/image 23.svg";

export const links = [
  {
    id: 1,
    url: "/",
    title: "خانه",
    icon: `${home}`,
  },
  {
    id: 2,
    url: "/category",
    title: "دسته‌‌بندی",
    icon: `${category}`,
  },
  {
    id: 3,
    url: "/cart",
    title: "سبد‌خرید",
    icon: `${bag}`,
  },
  {
    id: 4,
    url: "/favorites",
    title: "علاقه‌مندی",
    icon: `${fav}`,
  },
];

// in helpers file
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  // to get an array, instead of an array of arrays
  if (type === "colors") unique = unique.flat();

  // console.log(["all", ...new Set(unique)]);
  // console.log([...new Set(unique)]);
  return [...new Set(unique)];
};

export const brands = [
  {
    id: 11,
    title: "اپل",
    image: `${apple}`,
  },
  {
    id: 22,
    title: "شیائومی",
    image: `${xiaomi}`,
  },
  {
    id: 33,
    title: "ایسوس",
    image: `${asus}`,
  },
];

export const colorsProduct = [
  {
    id: 11365254,
    title: "قرمز",
  },
  {
    id: 1136578,
    title: "آبی",
  },
  {
    id: 11322544,
    title: "زرد",
  },
  {
    id: 35484213,
    title: "سبز",
  },
  {
    id: 11367874,
    title: "سفید",
  },
  {
    id: 2484222,
    title: "مشکی",
  },
];

export const productsCategories = [
  {
    id: 111,
    title: "تلفن همراه",
    category: "cellphone",
    icon: `${phoneCat}`,
    // image: `${}`
  },
  {
    id: 222,
    title: "لپ تاپ",
    category: "laptop",
    icon: `${laptopCat}`,
    // image: `${}`
  },
  {
    id: 333,
    title: "ساعت هوشمند",
    category: "smartphone",
    icon: `${watchCat}`,
    // image: `${}`
  },
];

export const sortItems = [
  {
    id: 54005885456,
    title: "گران‌ترین",
  },
  {
    id: 540056768956,
    title: "ارزان‌ترین",
  },
  {
    id: 5400342256,
    title: "محبوب‌ترین",
  },
  {
    id: 54001111156,
    title: "پربازدیدترین",
  },
];

export const products = [
  {
    id: "iuhgdSDEWQPolop98",
    title: "گوشی آیفون 13 پرومکس",
    // price: "25,500,000",
    price: 25500000,
    image: `https://storage.torob.com/backend-api/base/images/Yp/UF/YpUF7wAUwqd7Y61p.png_/216x216.jpg`,
    colors: [, "bg-red-400", "bg-green-400", "bg-yellow-400", "bg-pink-400"],
    company: "اپل",
    category: "تلفن همراه",
  },
  {
    id: "recF0KpwlkF7e8kXO",
    title: "مک بوک VivoBook X5",
    // price: "32,500,000",
    price: 32500000,
    image: `https://storage.torob.com/backend-api/base/images/Ij/mC/IjmCjKNGb2rv5Ek8.png_/216x216.jpg`,
    colors: [, "bg-red-400", "bg-green-400", "bg-yellow-400"],
    company: "ایسوس",
    category: "لپ تاپ",
  },
  {
    id: "recEHmzvupvT8ZONH",
    title: "مک بوک Air MGN93",
    // price: "57,400,000",
    price: 57400000,
    image: `https://storage.torob.com/backend-api/base/images/xh/rq/xhrqvVUGmm_z1gM1.jpg_/216x216.jpg`,
    colors: ["bg-rose-500", "bg-purple-500"],
    company: "اپل",
    category: "لپ تاپ",
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    title: "گوشی Redmi 9A",
    // price: "10,250,000",
    price: 10250000,
    image: `https://www.technolife.ir/image/color_image_TLP-1658_8f8f8f_33f7172f-c9ab-441b-be9a-a19c9ed632b7.png`,
    colors: ["bg-gray-500"],
    company: "شیائومی",
    category: "تلفن همراه",
  },
  {
    id: "recd1jIVIEChmiwhe",
    title: "گوشی آیفون 12 پرومکس",
    // price: "27,500,000",
    price: 27500000,
    image: `https://storage.torob.com/backend-api/base/images/j0/9V/j09VTeEJ0OFWxrAO.png_/216x216.jpg`,
    colors: ["bg-yellow-300"],
    company: "اپل",
    category: "تلفن همراه",
  },
  // {
  //   id: "recoM2MyHJGHLVi5l",
  //   title: "مک بوک Apple MKGR3 1TB",
  //   price: "72,500,000",
  //   image: `https://storage.torob.com/backend-api/base/images/fS/Og/fSOgIywBaXrt7IpU.jpeg_/216x216.jpg`,
  //   colors: ["bg-black", "bg-gray-400"],
  //   company: "اپل",
  //   category: "لپ تاپ",
  // },
  // {
  //   id: "recotY5Nh00DQFdkm",
  //   title: "گوشی سامسونگ مدل S21",
  //   price: "12,350,000",
  //   image: `https://storage.torob.com/backend-api/base/images/hG/hX/hGhXpsWoNMKH8rQi.png`,
  //   colors: ["bg-orange-500", , "bg-yellow-400", "bg-purple-500"],
  //   company: "سامسونگ",
  //   category: "تلفن همراه",
  // },
  // {
  //   id: "rec1Ntk7siEEW9ha1",
  //   title: "گوشی آیفون 14 پرومکس",
  //   price: "21,500,000",
  //   image: `https://storage.torob.com/backend-api/base/images/yt/A0/ytA0W9pMJQtmFbzN.png_/216x216.jpg`,
  //   colors: ["bg-orange-500", , "bg-yellow-400", "bg-purple-500"],
  //   company: "اپل",
  //   category: "تلفن همراه",
  // },
  {
    id: "recNZ0koOqEmilmoz",
    title: "اپل واچ سری 6",
    // price: "2,500,000",
    price: 2500000,
    image: `https://storage.torob.com/backend-api/base/images/XB/q9/XBq9Rbj7Jk32Lfbj.jpg_/216x216.jpg`,
    colors: ["bg-blue-500", "bg-green-600"],
    company: "اپل",
    category: "ساعت هوشمند",
  },
  // {
  //   id: "recrfxv3EwpvJwvjq",
  //   title: "ساعت شیائومی ایمیلب",
  //   price: "2,250,000",
  //   image: `https://lojima.com/wp-content/uploads/2022/11/%D8%B3%D8%A7%D8%B9%D8%AA-%D9%87%D9%88%D8%B4%D9%85%D9%86%D8%AF-%D8%A7%DB%8C%D9%85%DB%8C%D9%84%D8%A8-%D9%85%D8%AF%D9%84-KW66-45mm.jpg`,
  //   colors: ["bg-blue-500", "bg-green-600", "bg-pink-400", "bg-gray-100", "bg-yellow-400"],
  //   company: "شیائومی",
  //   category: "ساعت هوشمند",
  // },
  // {
  //   id: "recoW8ecgjtKx2Sj2",
  //   title: "گوشی سامسونگ مدل A32",
  //   price: "15,700,000",
  //   image: `https://www.technolife.ir/image/color_image_TLP-5417_e98376_db9ca724-45b6-4860-b9ba-0c4dc906d465.png`,
  //   colors: ["bg-blue-500", "bg-green-600", "bg-pink-400", "bg-yellow-400"],
  //   company: "سامسونگ",
  //   category: "تلفن همراه",
  // },
  // {
  //   id: "recEOA6qtDag1hRbU",
  //   title: "ساعت Galaxy Watch4",
  //   price: "3,500,000",
  //   image: `https://faraz-system.com/wp-content/uploads/2022/11/%D8%B3%D8%A7%D8%B9%D8%AA-%D9%87%D9%88%D8%B4%D9%85%D9%86%D8%AF-%D8%B3%D8%A7%D9%85%D8%B3%D9%88%D9%86%DA%AF-%D9%85%D8%AF%D9%84-galaxy-watch4-sm-r860-40mm.jpg`,
  //   colors: [, "bg-red-400", "bg-green-400", "bg-yellow-400"],
  //   company: "سامسونگ",
  //   category: "ساعت هوشمند",
  // },
  // {
  //   id: "recoAJYUCuEKxcPSr",
  //   title: "گوشی شیائومی Redmi Note 11",
  //   price: "8,700,000",
  //   image: `https://www.technolife.ir/image/color_image_TLP-5153_ffffff_d9156fd1-d421-46e4-9211-1d7613499456.png`,
  //   colors: ["bg-gray-500", ],
  //   company: "شیائومی",
  //   category: "تلفن همراه",
  // },
  // {
  //   id: "recQ0fMd8T0Vk211E",
  //   title: "ساعت شیائومی Amafit GTR",
  //   price: "2,950,000",
  //   image: `https://storage.torob.com/backend-api/base/images/o2/M6/o2M67xJhDzf0L0df.png_/216x216.jpg`,
  //   colors: ["bg-slate-800", "bg-fuchsia-700", "bg-gray-100"],
  //   description:
  //     "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  //   company: "شیائومی",
  //   category: "ساعت هوشمند",
  // },
  // {
  //   id: "rec7CjDWKRgNQtrKe",
  //   title: "ساعت شیائومی Amazfit",
  //   price: "2,100,000",
  //   image: `https://storage.torob.com/backend-api/base/images/6l/_A/6l_ACi_f9ccb-r2c.jpg_/216x216.jpg`,
  //   colors: ["bg-green-600", "bg-blue-500"],
  //   company: "شیائومی",
  //   category: "ساعت هوشمند",
  // },
];

// SVGs
export const SVG1 = (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="8" fill="#E2E2E2"></circle>
    <path
      d="M1.75586 11.5449V14.1641C1.75586 16.7833 2.80586 17.8333 5.42503 17.8333H8.56919C11.1884 17.8333 12.2384 16.7833 12.2384 14.1641V11.5449"
      stroke="#222F5D"
      strokeWidth="0.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M7.00012 11.9993C8.06762 11.9993 8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z"
      stroke="#222F5D"
      strokeWidth="0.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z"
      stroke="#222F5D"
      strokeWidth="0.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255 8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z"
      stroke="#222F5D"
      strokeWidth="0.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M7.00008 14.916C6.02591 14.916 5.54175 15.4002 5.54175 16.3743V17.8327H8.45841V16.3743C8.45841 15.4002 7.97425 14.916 7.00008 14.916Z"
      stroke="#222F5D"
      strokeWidth="0.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export const SVG2 = (
  <svg width="21" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="13" cy="8" r="8" fill="#E2E2E2"></circle>
    <path
      d="M7.43 3.58 3.897 4.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V7.043c0-.87-.666-1.834-1.48-2.139L9.583 3.58c-.602-.22-1.566-.22-2.153 0Z"
      stroke="#222F5D"
      strokeWidth="1.063"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export const SVG3 = (
  <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="8" fill="#E2E2E2"></circle>
    <path
      d="M10 6.333V13c0 .733-.6 1.333-1.333 1.333H1.333V10.08a2.6 2.6 0 0 0 2.06.92 2.563 2.563 0 0 0 1.734-.707c.206-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.907-1.94H10Z"
      stroke="#222F5D"
      strokeWidth="1.125"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M14.667 14.333v2c0 1.107-.894 2-2 2H12C12 17.6 11.4 17 10.667 17c-.734 0-1.334.6-1.334 1.333H6.667c0-.733-.6-1.333-1.334-1.333C4.6 17 4 17.6 4 18.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 14.333 10 13.733 10 13V8.333h1.227c.48 0 .92.26 1.16.673L13.527 11h-.86c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667h2Z"
      stroke="#222F5D"
      strokeWidth="1.125"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.333 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 13v1.333h-2a.669.669 0 0 1-.667-.666v-2c0-.367.3-.667.667-.667h.86l1.14 2Z"
      stroke="#222F5D"
      strokeWidth="1.125"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M6 8.333c0 .8-.353 1.513-.907 2a2.666 2.666 0 1 1-1.76-4.667A2.666 2.666 0 0 1 6 8.333Z"
      stroke="#222F5D"
      strokeWidth="1.125"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3.5 7.499v1l-.833.5"
      stroke="#222F5D"
      strokeWidth="1.125"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
