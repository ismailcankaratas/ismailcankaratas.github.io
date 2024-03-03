import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineBrokenImage } from "react-icons/md";

const items = [
  {
    id: "Home",
    icon: <AiOutlineHome />,
  },
  {
    id: "About",
    icon: <AiOutlineUser />,
  },
  {
    id: "Experience",
    icon: <BiBook />,
  },
  {
    id: "Portfolio",
    icon: <MdOutlineBrokenImage />,
  },
  {
    id: "Contact",
    icon: <BiMessageSquareDetail />,
  },
];
export default function Nav({ observerRefs }) {
  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef([]);

  const onClick = (item, key) => {
    setVisibleKey(key);
  };

  const observerCallback = async (e, key) => {
    if (e.length && e[0].isIntersecting) {
      setVisibleKey(key);
    }
  };

  useEffect(() => {
    if (observerRefs.current?.length && observers.current) {
      Array.from(Array(10).keys()).forEach((_u, key) => {
        observers.current[key] = new IntersectionObserver((e) =>
          observerCallback(e, key)
        );
        if (observerRefs.current[key]) {
          observers.current[key].observe(observerRefs.current[key]);
        }
      });
    }
    return () =>
      observers.current?.forEach((observer) => observer?.current?.disconnect());
  }, [observerRefs, observers]);

  return (
    <nav>
      {items.map((item, key) => (
        <a
          href={`#${item.id.toLowerCase()}`}
          className={`${key === visibleKey ? "active" : ""}`}
          onClick={() => onClick(item, key)}
          key={`item-${key}`}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
}
