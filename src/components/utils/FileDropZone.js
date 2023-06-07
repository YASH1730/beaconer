import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Cloud from "../../assets/image/cloud.png";

const thumbsContainer = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  marginTop: 2,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "100%",
  textOverflow: "clip",
  padding: 4,
  boxSizing: "border-box",
};

// const thumbInner = {
//   display: 'flex',
//   minWidth: 0,
//   overflow: 'hidden'
// };

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function Previews(props) {
  // const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "text/*": [".xlsx", ".csv"],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
      props.setState({
        type: "Set_Value",
        payload: { [props.name]: acceptedFiles[0] },
      });
    },
  });

  return (
    <Box className={props.cssClass}>
      <div {...getRootProps({ className: "dropzone" })}>
        <img src={Cloud} alt="upload"></img>
        <Typography variant="body1">Drop & Click to upload the file</Typography>
        <input {...getInputProps()} />
        <p>{props.text}</p>
      </div>
      <aside style={thumbsContainer}>
        {console.log(props.state)}
        <Typography variant="caption">
          {props.state[props.name].name}
        </Typography>

        {props.state[props.name] && (
          <Button
            onClick={() => props.handleRemove(props.name)}
            color="primary"
            size="small"
          >
            Remove
          </Button>
        )}
      </aside>
    </Box>
  );
}

export default Previews;
