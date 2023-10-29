import React, { useEffect } from "react";
import "./home.css";
import { getDocs, collection } from "firebase/firestore";
import { db, auth } from "../firebase";

const Home = () => {
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
    };
  }, []);

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>

        <div className="postTextContainer">今はReactの勉強中です。</div>
        <div className="nameAndDeleteButton">
          <h3>name</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
