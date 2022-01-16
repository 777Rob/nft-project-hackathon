import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { useMoralisQuery } from "react-moralis";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



function Post(props) {
  return (
    <>
      <img alt="" style={{ width: "100%", height: "auto" }} src={props.image} />
    </>
  );
}

function UserPosts() {
  const params = useParams();
  const { data, error, isLoading } = useMoralisQuery("Posts", (query) =>
    query.equalTo("author_id", params.id)
  );

  const posts = JSON.parse(JSON.stringify(data));
  console.log(posts);
  if (error) {
    return <span>🤯</span>;
  }

  if (isLoading) {
    return <span>🙄</span>;
  }

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {posts.map((post) => (
        <ImageListItem>
          <img
            src={`${post.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${post.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt=""
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default UserPosts;
