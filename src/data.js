import { FavIcon, CartIcon, MainIcon, CategoryIcon } from "./assets";

import phoneCat from "./assets/images/icons/phone-category-icon.svg";
import laptopCat from "./assets/images/icons/laptop-category-icon.svg";
import watchCat from "./assets/images/icons/watch-category-icon.svg";

import apple from "./assets/images/brands-logo/apple.svg";
import asus from "./assets/images/brands-logo/asus.svg";
import xiaomi from "./assets/images/brands-logo/image 23.svg";

// SVGs
export const sellerIcon = (
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
export const warrantyIcon = (
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
export const deliveryIcon = (
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
export const filterCompIcon = (
  <div class="relative">
    <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.8334 13.271H1.1667c-.2392 0-.4375-.1983-.4375-.4375s.1983-.4375.4375-.4375h11.6667c.2391 0 .4375.1983.4375.4375s-.1984.4375-.4375.4375Z"
        fill="#222F5D"
      ></path>
      <path
        d="M2.1585 12.8331h-.875l.0291-7.0175c0-.4958.2275-.9567.6183-1.26l4.0834-3.1792c.5775-.4491 1.3883-.4491 1.9716 0l4.0834 3.1734c.385.3033.6183.7758.6183 1.2658v7.0175h-.875V5.8214c0-.2216-.105-.4375-.28-.5775L7.4493 2.0706c-.2625-.2042-.63-.2042-.8983 0L2.4676 5.2498c-.175.1341-.28.35-.28.5716l-.0292 7.0117Z"
        fill="#222F5D"
      ></path>
      <path
        d="M9.9167 13.2707H4.0833c-.2392 0-.4375-.1984-.4375-.4375V7.2915c0-.7233.5892-1.3125 1.3125-1.3125h4.0834c.7233 0 1.3124.5892 1.3124 1.3125v5.5417c0 .2391-.1983.4375-.4375.4375Zm-5.3959-.875h4.9584V7.2915c0-.2392-.1984-.4375-.4375-.4375H4.9583c-.2392 0-.4375.1983-.4375.4375v5.1042Z"
        fill="#222F5D"
      ></path>
      <path
        d="M5.8333 10.7915c-.2392 0-.4375-.1983-.4375-.4375v-.875c0-.2392.1983-.4375.4375-.4375s.4375.1983.4375.4375v.875c0 .2392-.1983.4375-.4375.4375ZM7.875 4.8125h-1.75c-.2392 0-.4375-.1983-.4375-.4375s.1983-.4375.4375-.4375h1.75c.2392 0 .4375.1983.4375.4375s-.1983.4375-.4375.4375Z"
        fill="#222F5D"
      ></path>
    </svg>
    <svg
      class="absolute bottom-1 left-0"
      width="19"
      height="19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.5" cy="9.5" r="9.5" fill="#AFAFAF" fill-opacity=".29"></circle>
    </svg>
  </div>
);
export const filterColorsIcon = (
  <div class="relative">
    <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.8334 2.6248v7.875c0 .63-.2567 1.2075-.665 1.6275l-.0234.0234a1.831 1.831 0 0 1-.1633.1458 2.041 2.041 0 0 1-.5775.35c-.0642.0292-.1284.0525-.1925.0758-.2275.0759-.4725.1109-.7117.1109-.1575 0-.315-.0175-.4666-.0467-.0759-.0175-.1517-.035-.2275-.0583-.0934-.0292-.1809-.0584-.2684-.0992 0-.0058 0-.0058-.0058 0-.1633-.0817-.3208-.175-.4667-.2858l-.0058-.0059c-.0759-.0583-.1458-.1166-.21-.1866-.0642-.07-.1283-.14-.1925-.2159-.1109-.1458-.2042-.3033-.2858-.4666.0058-.0059.0058-.0059 0-.0059 0 0 0-.0058-.0059-.0116-.035-.0817-.0641-.1692-.0933-.2567-.0233-.0758-.0409-.1517-.0584-.2275a2.4826 2.4826 0 0 1-.0466-.4667v-7.875c0-.875.5833-1.4583 1.4583-1.4583h1.75c.875 0 1.4584.5833 1.4584 1.4583Z"
        stroke="#222F5D"
        stroke-width=".875"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12.8333 9.6248v1.75c0 .875-.5833 1.4584-1.4583 1.4584H3.5c.2392 0 .4842-.035.7117-.1109.0641-.0233.1283-.0466.1925-.0758a2.041 2.041 0 0 0 .5775-.35 1.831 1.831 0 0 0 .1633-.1458l.0233-.0234L9.135 8.1665h2.24c.875 0 1.4583.5833 1.4583 1.4583ZM2.8058 12.7285a2.237 2.237 0 0 1-.9567-.5775 2.2374 2.2374 0 0 1-.5775-.9567 2.3447 2.3447 0 0 0 1.5342 1.5342Z"
        stroke="#222F5D"
        stroke-width=".875"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M10.7158 6.5857 9.135 8.1666l-3.9667 3.9608c.4083-.42.665-.9975.665-1.6275v-5.635L7.414 3.284c.6183-.6184 1.4467-.6184 2.065 0l1.2367 1.2366c.6183.6184.6183 1.4467 0 2.065ZM3.5 11.0832a.5834.5834 0 1 0 0-1.1667.5834.5834 0 0 0 0 1.1667Z"
        stroke="#222F5D"
        stroke-width=".875"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
    <svg
      class="absolute bottom-1 left-0"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.5" cy="9.5" r="9.5" fill="#AFAFAF" fill-opacity="0.29"></circle>
    </svg>
  </div>
);
export const filterPriceIcon = (
  <div class="relative">
    <svg width="16" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5234 7.9038c-.245.2392-.385.5834-.35.9509.0525.63.63 1.0908 1.26 1.0908h1.1084v.6942c0 1.2075-.9859 2.1933-2.1934 2.1933H3.6518c-1.2075 0-2.1934-.9858-2.1934-2.1933V6.7139c0-1.2075.9859-2.1934 2.1934-2.1934h6.6966c1.2075 0 2.1934.9859 2.1934 2.1933v.84h-1.1784c-.3266 0-.6241.1284-.84.35Z"
        stroke="#222F5D"
        stroke-width=".875"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M1.4584 7.2388V4.573c0-.6942.4259-1.3126 1.0734-1.5576l4.6316-1.75c.7234-.2741 1.4992.2626 1.4992 1.0384v2.2167M13.1593 8.1492v1.2017c0 .3208-.2567.5833-.5833.595h-1.1434c-.63 0-1.2075-.4609-1.26-1.0909-.035-.3675.105-.7117.35-.9508.2159-.2217.5134-.35.84-.35h1.2134c.3266.0117.5833.2741.5833.595ZM4.0833 7h4.0834"
        stroke="#222F5D"
        stroke-width=".875"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
    <svg
      class="absolute bottom-1 left-0"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.5" cy="9.5" r="9.5" fill="#AFAFAF" fill-opacity="0.29"></circle>
    </svg>
  </div>
);

export const links = [
  {
    id: 1,
    url: "/",
    title: "خانه",
    icon: <MainIcon fill="#666" />,
  },
  {
    id: 2,
    url: "/category",
    title: "دسته‌‌بندی",
    icon: <CategoryIcon fill="#666" />,
  },
  {
    id: 3,
    url: "/cart",
    title: "سبد‌خرید",
    icon: <CartIcon fill="#666" />,
  },
  {
    id: 4,
    url: "/favorites",
    title: "علاقه‌مندی",
    icon: <FavIcon fill="#666" />,
  },
];

export const sortOptions = [
  {
    id: 4545439,
    title: "گران‌ترین‌محصول",
  },
  {
    id: 12323111,
    title: "ارزان‌ترین‌محصول",
  },
  {
    id: 5553990,
    title: "پربازدیدترین محصول",
  },
  {
    id: 10909090,
    title: "محبوب‌ترین‌محصول",
  },
];

export const categories = [
  {
    id: 99887722,
    icon: `${phoneCat}`,
    title: "تلفن‌همراه",
  },
  {
    id: 99881122,
    icon: `${laptopCat}`,
    title: "لپ‌تاپ",
  },
  {
    id: 77887922,
    icon: `${watchCat}`,
    title: "ساعت‌هوشمند",
  },
];

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

export const products = [
  {
    id: "iuhgdSDEWQPolop98",
    title: "گوشی آیفون 13 پرومکس",
    // price: "25,500,000",
    price: 25500000,
    image: `https://storage.torob.com/backend-api/base/images/Yp/UF/YpUF7wAUwqd7Y61p.png_/216x216.jpg`,
    colors: ["bg-red-400", "bg-green-400", "bg-yellow-400", "bg-blue-400"],
    company: "اپل",
    category: "تلفن همراه",
  },
  {
    id: "recF0KpwlkF7e8kXO",
    title: "مک بوک VivoBook X5",
    // price: "32,500,000",
    price: 32500000,
    image: `https://storage.torob.com/backend-api/base/images/Ij/mC/IjmCjKNGb2rv5Ek8.png_/216x216.jpg`,
    colors: ["bg-red-400", "bg-green-400", "bg-yellow-400", "bg-gray-400"],
    company: "ایسوس",
    category: "لپ تاپ",
  },
  {
    id: "recEHmzvupvT8ZONH",
    title: "مک بوک Air MGN93",
    // price: "57,400,000",
    price: 57400000,
    image: `https://storage.torob.com/backend-api/base/images/xh/rq/xhrqvVUGmm_z1gM1.jpg_/216x216.jpg`,
    colors: ["bg-red-400", "bg-green-400", "bg-yellow-400"],
    company: "اپل",
    category: "لپ تاپ",
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    title: "گوشی Redmi 9A",
    // price: "10,250,000",
    price: 10250000,
    image: `https://www.technolife.ir/image/color_image_TLP-1658_8f8f8f_33f7172f-c9ab-441b-be9a-a19c9ed632b7.png`,
    colors: ["bg-red-400", "bg-green-400"],
    company: "شیائومی",
    category: "تلفن همراه",
  },
  {
    id: "recd1jIVIEChmiwhe",
    title: "گوشی آیفون 12 پرومکس",
    // price: "27,500,000",
    price: 27500000,
    image: `https://storage.torob.com/backend-api/base/images/j0/9V/j09VTeEJ0OFWxrAO.png_/216x216.jpg`,
    colors: ["bg-yellow-400", "bg-purple-400"],
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
    colors: ["bg-blue-400", "bg-gray-400"],
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
