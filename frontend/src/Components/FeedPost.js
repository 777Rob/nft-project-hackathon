import React, { useState } from "react";
import { Typography, IconButton } from "@mui/material";
// Add comments, style, link to users profile, avatar,
import { useMoralisQuery } from "react-moralis";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function FeedPost(props) {
  const { userData, userError, userIsLoading } = useMoralisQuery(
    "User",
    (query) => query.equalTo("ethAddress", props.author)
  );

  const [liked, toLike] = useState(props.liked);
  if (userError) {
    return <span>🤯</span>;
  }

  if (userIsLoading) {
    return <span>🙄</span>;
  }
  //const userDataArray = JSON.stringify(userData, null, 2);
  //const userDataParse = JSON.parse(userDataArray);
  //return typeof props.current_id;

  const timePosted = new Date(props.createdAt).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const hrefLink = "/Profile/" + props.author;

  return (
    <Card sx={{ width: "97%", mx: "auto", mt: "20px" }}>
      <Link href={hrefLink} sx={{ textDecorationLine: "none" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "black", color: "white" }}
              aria-label="recipe"
            >
              A
            </Avatar>
          }
          subheader={timePosted}
        />
      </Link>
      <CardMedia
        component="img"
        image={props.image}
        alt="Paella dish"
        sx={{}}
      />
      <CardContent>
        <Box xs={{ textAlign: "left" }}>{props.post}</Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          {props.liked ? (
            <IconButton
              onClick={() => {
                liked ? toLike(true) : toLike(false);
              }}
            ></IconButton>
          ) : (
            <IconButton
              onClick={() => {
                liked ? toLike(true) : toLike(false);
              }}
            ></IconButton>
          )}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

