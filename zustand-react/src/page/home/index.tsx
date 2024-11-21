import React from "react";
import "./index.css"
import BearBox from "@/page/home/components/bearBox.tsx";

const Home: React.FC = () => {
  return <div className="container">
    <BearBox></BearBox>
    <BearBox></BearBox>
  </div>;
};

export default Home;
