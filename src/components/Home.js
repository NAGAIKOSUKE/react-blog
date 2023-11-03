import React, { useEffect, useState } from "react";
import "./home.css";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      console.log(data);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <Box className="homePage">
      {postList.map((post) => {
        return (
          <Box className="postContents" key={post.id}>
            <Box className="postHeader">
              <Heading as="h1" size="lg">
                {post.title}
              </Heading>
            </Box>

            <Box className="postTextContainer">
              <Text>{post.postText}</Text>
            </Box>
            <Box className="nameAndDeleteButton">
              <Text>@{post.author.username}</Text>
              {post.author.id === auth.currentUser?.uid && (
                <Button
                  onClick={() => {
                    handleDelete(post.id);
                  }}
                  colorScheme="red"
                  size="sm"
                  width="50px"
                  display="flex"
                  justifyContent="flex-end"
                >
                  削除
                </Button>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Home;
