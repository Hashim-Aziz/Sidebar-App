import React from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./Context";

const Home = () => {
  const { OpenSidebar, OpenModal } = useGlobalContext();
  return (
    <main>
      <button className={`sidebar-toggle show-toggle`} onClick={OpenSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={OpenModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
