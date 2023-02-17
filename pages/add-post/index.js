import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import ReactHtmlParser from "react-html-parser";
import {Box, Button, Container, Grid, TextField } from "@mui/material";
import parse from "html-react-parser";

export default function AddPost() {
  const [publishStage, setPublishStage] = useState(0);
  const editorRef = useRef(null);
  const [initial, setInitial] = useState("Write Something");
  const [headerData, setHeaderData] = useState({})
  const log = () => {
    // console.log(editorRef.current.getContent().innerHTML(editorRef.current));
  };
    const handleDataChange = (e) => {
      const { name, value } = e.target;
      setHeaderData({
        ...headerData,
        [name]: value,
        
      });
    };
  const publishBlogs = () => {
    // console.log(headerData.heading);
    // console.log(headerData.subheading);
    //
    // console.log(initial);
    setPublishStage(1);
    window.location.href = "/";
  };
  return (
    <>
      <Container>
        <Box mt={10} />
        <Grid container m={2}>
          <Grid
            item
            xs={6}
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center">
            <span>Draft </span>
          </Grid>
          <Grid item px={2} xs={6} display="flex" justifyContent="flex-end">
            <Button variant="contained" onClick={publishBlogs}>
              Publish
            </Button>
          </Grid>
        </Grid>

        <Box pt={2}>
          <TextField
            name="heading"
            fullWidth
            label={"Heading"}
            type={"text"}
            onChange={handleDataChange}
          />
        </Box>

        <Box py={2}>
          <TextField
            name="subheading"
            fullWidth
            label={"Sub-Heading"}
            type={"text"}
            onChange={handleDataChange}
          />
        </Box>

        <Editor
          apiKey="jq0hm5i9g8sxohg5nsiut5ugowize8j50790c8eu8eeajiir"
          onInit={(evt, editor) => (editorRef.current = editor)}
          value={initial}
          onEditorChange={(content) => setInitial(content)}
          init={{
            selector: "#textarea",
            height: 300,
            image_dimensions: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks fullscreen",
              "insertdatetime media table paste image",
            ],
            toolbar:
              "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <h2>Preview</h2>
        <Box sx={{ overflow: "auto", height: 500 }}>
          {initial && ReactHtmlParser(initial)}
        </Box>
        <Box mt={10} />
      </Container>
    </>
  );
}
