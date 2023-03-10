import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Addtopic from "./components/addtopic";
import ContentNotFound from "./components/contentNotFound";
import Dashboard from "./components/dashboard";
import LandingPage from "./components/landingPage";
import ShowData from "./components/showData";

function App() {
  const username = "Sravan";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const initialState = [
    {
      id: 1,
      name: "Sravan",
      data: [
        {
          id: 10,
          text: "Sravan is a FULL Stack Dev",
          status: "green"
        },
        {
          id: 11,
          text: "Sravan has learned MERN Stack",
          status: "green"
        },
        {
          id: 12,
          text: "Sravan actively solves questions on LEETCODE ",
          status: "green"
        },
        {
          id: 14,
          text:
            "Sravan has made various projects and also contributed to other projects",
          status: "green"
        }
      ],
      completed: 100
    }
  ];

  function deleteItem(itemId) {
    let myTopics = topics.filter((item) => {
      return item.id !== itemId;
    });

    setTopics(myTopics);
  }

  const myItem = JSON.parse(localStorage.getItem("topics"));
  const [topics, setTopics] = useState(myItem ? myItem : initialState);
  // const [topics, setTopics] = useState(initialState)

  useEffect(() => {
    localStorage.setItem("topics", JSON.stringify(topics));
  }, [topics]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage username={username} setIsLoggedIn={setIsLoggedIn} />
        }
      ></Route>
      <Route
        path="/dashboard"
        element={
          <Dashboard
            deleteItem={deleteItem}
            topics={topics}
            isLoggedIn={isLoggedIn}
          />
        }
      ></Route>
      <Route
        path="/addTopic"
        element={<Addtopic setTopics={setTopics} isLoggedIn={isLoggedIn} />}
      ></Route>
      <Route
        path="/showData/:itemId"
        element={
          <ShowData
            setTopics={setTopics}
            topics={topics}
            isLoggedIn={isLoggedIn}
          />
        }
      ></Route>
      <Route path="*" element={<ContentNotFound />}></Route>
    </Routes>
  );
}

export default App;
