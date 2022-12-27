import React, { useState } from "react";

import { Link } from "react-router-dom";
import { links } from "../data";

const Footer = () => {
  const [active, setActive] = useState(links[0]);

  const linkHandler = (id) => {
    const selectedLink = links.find((link) => link.id === id);
    setActive(selectedLink);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 md:static">
      {/* mobile */}
      <section className="flex w-full items-center justify-between rounded-tr-lg rounded-tl-lg bg-white px-[10%] py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
        {links.map((link) => {
          const { id, url, title, icon } = link;
          return (
            <li key={id} className="list-none">
              <Link to={url} onClick={() => linkHandler(id)}>
                <div className="flex items-center">
                  {icon}
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
      <section className="hidden justify-between bg-white px-[5%] py-10 md:flex">
        {/* right */}
        {/* <div className="flex w-64 flex-col">
          <div className="mb-6 flex gap-1">
            <img src={logo} alt="Digitize" className="w-24" />
            <img src={line} alt="line" className="w-8" />
          </div>
          <p className="text-sm font-normal leading-relaxed text-slate-800">
            دیجی‌ تایز عرضه کننده جدیدترین محصولات الکترونیک نظیر لپ تاپ، گوشی هوشمند و ساعت هوشمند
            می‌باشد. دیجی تایز افتخار این را داشته که به
            <span className="text-red-400">۱۲۲,۲۳۲ نفر</span> تا به اکنون خدمت رسانی داشته باشد.
          </p>
        </div> */}

        {/* middle */}
        {/* <div className="flex flex-col justify-end gap-2 text-sm text-slate-800">
          <p className="text-base font-semibold">محصولات</p>
          <p>تلفن همراه</p>
          <p>لپ تاپ</p>
          <p>ساعت هوشمند</p>
        </div> */}

        {/* left */}
        {/* <div className="flex flex-col">
          <div>
            <img src={map} alt="map" className="h-36 w-36" />
          </div>
          <div></div>
        </div> */}
      </section>
    </footer>
  );
};

export default Footer;
