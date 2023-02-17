import React, { useRef, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import BlogFeed from "../../components/BlogFeed/BlogFeed";
import parse from "html-react-parser";
import { Box, Container, Divider } from "@mui/material";

export default function feed() {
  const userBlogs = [
    {
      name: "Manisa",
      heading: "Heading",
      SubHeading: "SubHeading",
      blog: "<p>Hello</p>",
      minAgo: "12 sec",
    },
    {
      name: "Mani",
      heading: "Headi",
      SubHeading: "SubHing",
      blog: "<p>Go is a very nice programming language. It’s a language that lets you really focus on your business and don’t worry too much about the programming language itself, so you can write applications as quickly as possible. For example, it has a relatively complete ecosystem that provides you with everything you need to get started.​However, it is not a panacea, there are some flaws to be aware of. Of course, these are just tricks, not really a problem. If you notice them and use them in programming, they ​will benefit you a lot, which is the difference between a novice and a veteran.Go is a very nice programming language. It’s a language that lets you really focus on your business and don’t </p><p>worry too much about the programming language itself, so you can write applications as quickly as possible. For example, it has a relatively complete ecosystem that provides you with everything you need to get started.​However, it is not a panacea, there are some flaws to be aware of. Of course, these are just tricks, not really a problem. If you notice them and use them in programming, they ​will benefit you a lot, which is the difference between a novice and a veteran.</p>",
      minAgo: "14 sec",
    },
  ];
  const FeedPage = ({ name, heading, SubHeading, blog, minAgo }) => {
    return (
      <BlogFeed
        name={name}
        heading={heading}
        SubHeading={SubHeading}
        blog={parse(blog)}
        minAgo={minAgo}
      />
    );
  };
  return (
    <Container>
      <Box mt={10} />
      <div>
        <div>
          <Box
            sx={{
              my: 3,
              fontSize: 20,
              color: "text.secondary",
              fontWeight: "semibold",
            }}>
            Stay Updated with the latest Blogs...
          </Box>
        </div>
        <Divider></Divider>
        <Box mt={4} />
      </div>
      {userBlogs.map(FeedPage)}
    </Container>
  );
}
