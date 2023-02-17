import { React, useState } from "react";
import { Box, Divider, Avatar } from "@mui/material";

function BlogFeed(props) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const sliceblog = () => {
    // console.log(props.blog.length);
    return (
      <div>
        {props.blog.slice(0, 150)}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </div>
    );
  };
  return (
    <div>
      <div my={3}>
        <Box
          sx={{
            my: 1,
            display: "flex",
            alignItems: "center",
            fontSize: 15,
            fontWeight: "bold",
          }}>
          <Box mr={1}>
            <Avatar>{props.name[0]}</Avatar>{" "}
          </Box>
          <Box>{props.name}</Box>
        </Box>
        <Box sx={{ my: 1, fontSize: 30, fontWeight: "bold" }}>
          {props.heading}
        </Box>
        <Box sx={{ my: 1, fontSize: 20, fontWeight: "semibold" }}>
          {props.SubHeading}
        </Box>
        <Box sx={{ my: 1 }}>{props.blog}</Box>

        <Box sx={{ my: 2, fontSize: 12, color: "text.secondary" }}>
          {props.minAgo} ago
        </Box>
      </div>
      <Divider></Divider>
      <Box mt={4} />
    </div>
  );
}

export default BlogFeed;
