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

function Previews(props) {
  const [error, setError] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "text": props.files,
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0] && props.files.indexOf("." + acceptedFiles[0].path.split(".")[1]) > -1) {
        setError(false);

        if(props.name === "SIGlight")
        props.setState({
          type: "Set_Value",
          payload: { [props.name]: acceptedFiles[0], SOC2 : "" },
        });
        else
        props.setState({
          type: "Set_Value",
          payload: { [props.name]: acceptedFiles[0] , SIGlight : ""},
        });

      } else setError(true);
    },
  });

  return (
    <Box className={props.cssClass}>
      <div {...getRootProps({ className: "dropzone" })}>
        <img src={Cloud} alt="upload"></img>
        <Typography variant="body1">
          Drop or Click to upload the file
        </Typography>
        <input  {...getInputProps()} />
        <p>{props.text}</p>
      </div>
      <aside style={thumbsContainer}>

        <Typography variant="caption">
          {props.state[props.name].name}
        </Typography>

        {error && (
          <Typography variant="caption" sx={{ color: "red" }}>
            Please upload the appropriate file formate.
          </Typography>
        )}

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
