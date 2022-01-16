import React, { useState } from "react";
import { FeedPost } from "./../Components/FeedPost";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import PostForm from "./../Components/PostForm";
import { useMoralisQuery } from "react-moralis";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HomeView() {
  const { data, error, isLoading } = useMoralisQuery("Posts");

  if (error) {
    return <span>error - posts query</span>;
  }

  if (isLoading) {
    return <span></span>;
  }

  //return <pre>{JSON.stringify(data, null, 2)}</pre>;

  const postArray = JSON.stringify(data, null, 2);
  const postParse = JSON.parse(postArray);
  //return postArray;

  return (
    <Grid item xs={6}>
      <Item>
        {/*
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          /*options={top100Films.map((option) => option.title)}
            /*renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
              )}
              
        */}
        <PostForm />
        {postParse.map((item, i) => (
          <FeedPost
            image={item.img}
            title={item.title}
            post={item.post}
            author={item.author_id}
            createdAt={item.createdAt}
            liked={true}
            current_id={i}
          />
        ))}
      </Item>
    </Grid>
  );
}

export default HomeView;
