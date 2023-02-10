import React, { useState } from "react";

import { useCartContext } from "../store/context/cart_context";
import { useFilterContext } from "../store/context/filter_context";
import { Link } from "react-router-dom";
import { links } from "../data";
import { map, logoDesk, line, phone } from "../assets";

const Footer = () => {
  const { clearFilters } = useFilterContext();
  const { totalItems } = useCartContext();
  const [active, setActive] = useState(links[0]);

  const linkHandler = (id) => {
    if (id === 1) clearFilters();

    const selectedLink = links.find((link) => link.id === id);
    setActive(selectedLink);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 md:static">
      {/* mobile */}
      <section className="flex w-full items-center justify-between rounded-tr-lg rounded-tl-lg bg-[#fdfdfd] px-[10%] py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
        {links.map((link) => {
          const { id, url, title, icon } = link;

          return (
            <li key={id} className="list-none">
              <Link to={url} onClick={() => linkHandler(id)}>
                <div className="relative flex items-center">
                  <img src={icon} alt={title} />
                  {id === 3 && totalItems > 0 && (
                    <div className="absolute -top-1 right-5 flex items-center justify-center rounded-full bg-red-400 px-2 py-0.5 text-xs">
                      <span className="inline-block pt-0.5 text-center">{totalItems}</span>
                    </div>
                  )}
                  <p
                    className={`mr-2 text-sm font-bold text-slate-800 ${
                      active.id === id ? "block" : "hidden"
                    }`}
                  >
                    {title}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </section>

      {/* laptop */}
      <section className="hidden grid-cols-4 grid-rows-1 bg-[#fdfdfd] px-[3%] py-6 text-slate-800 md:grid">
        {/* right */}
        <div className="col-span-2 flex flex-col p-2">
          <div className="mb-6 flex gap-1">
            <img src={logoDesk} alt="Digitize" className="w-24" />
            <img src={line} alt="red-line" className="mr-1 w-8" />
          </div>
          <p className="font-normal leading-8">
            دیجی‌ تایز عرضه کننده جدیدترین محصولات الکترونیک نظیر
            <br /> لپ تاپ، گوشی هوشمند و ساعت هوشمند می‌باشد.
            <br /> دیجی تایز افتخار این را داشته که به
            <span className="font-bold text-[#ff765d]"> ۱۲۲,۲۳۲ نفر</span> تا به اکنون خدمت رسانی
            داشته باشد.
          </p>
        </div>

        {/* middle */}
        <div className="col-span-1 mr-12 flex flex-col items-center justify-center gap-2 text-slate-800">
          <p className="text-lg font-bold">محصولات</p>
          <p>تلفن همراه</p>
          <p>لپ تاپ</p>
          <p>ساعت هوشمند</p>
        </div>

        {/* left */}
        <div className="col-span-1 flex flex-col items-end justify-center">
          <div>
            <img src={map} alt="map" className="mb-6 h-36 w-36" />
          </div>
          <div>
            <div className="mr-14 mb-1 flex items-center justify-end gap-1">
              <span>۰۲۱-۱۲۳۴۵۶</span>
              <img src={phone} alt="phone" className="w-5" />
            </div>
            <p>info@digitize.com</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
