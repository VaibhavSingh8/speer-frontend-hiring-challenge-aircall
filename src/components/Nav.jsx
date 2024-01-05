import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("calls");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap justify-center -mb-px">
        <li className="me-2">
          <Link
            to="/"
            className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
              activeTab === "calls"
                ? "text-blue-600 border-blue-600"
                : "text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            } focus:text-blue-600 focus:border-blue-600 focus:outline-none dark:focus:text-blue-500 dark:focus:border-blue-500`}
            onClick={() => handleTabChange("calls")}
          >
            Calls
          </Link>
        </li>

        <li className="me-2">
          <Link
            to="/archived"
            className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
              activeTab === "archived"
                ? "text-blue-600 border-blue-600"
                : "text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            } focus:text-blue-600 focus:border-blue-600 focus:outline-none dark:focus:text-blue-500 dark:focus:border-blue-500`}
            onClick={() => handleTabChange("archived")}
          >
            Archived Calls
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
