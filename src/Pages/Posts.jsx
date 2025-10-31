 


import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import PostCart from "../Components/PostCart";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";


const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Posts
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" sx={{ mb: 2 }}>
          Go to Calculator
        </Button>
      </Link>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}> 
           {post && <PostCart post={post} />}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};




export default Posts;