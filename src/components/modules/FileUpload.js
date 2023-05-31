import React, { useReducer } from "react";
import "../../assets/css/fileUpload.css";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

// utils
import FileDrop from "../utils/FileDropZone";
import DataGrid from "../utils/DataTable";
//icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel';
const FileUpload = () => {
  const initialState = {
    SIGlight: "",
    SOC2: "",
  };

  const [state, setState] = useReducer(reducer, initialState);

  function handleFile(e) {
    // console.log(e.target);
      setState({
        type: "Set_Value",
        payload: {
          [e.target.name]: e.target.files[0],
        },
      });
   
  }

  function handleRemove(name){
    document.getElementById(name).value = "";
    setState({
      type: "Set_Value",
      payload: {
        [name]: "",
      },
    });
  }

  return (
    <>
      <Box className="file-uploader-wrapper">
        <Box className="file-upload-container flex-col">
          <Box>
            <Typography variant="h6">File Uploading</Typography>
          </Box>
          <Box className="file-upload-main-container flex">
            <Box className="file-upload-section flex">
              <Box className="file-upload-input flex">
                <Box className="flex" sx={{ alignItems: "center" }}>
                  <Typography
                    color={"primary"}
                    sx={{ fontWeight: 500 }}
                    variant="body1"
                  >
                    Upload SIGlight
                  </Typography>
                  {state.SIGlight && <CheckCircleIcon color={"primary"} />}
                </Box>

                <Box>
                  <TextField
                    id="SIGlight"
                    name={"SIGlight"}
                    inputProps={{
                      accept: ".csv, .xlsx",
                      startAdornment: (
                        <InputAdornment position="start">
                          SIGlight
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                    type="file"
                    onChange={handleFile}
                    placeholder="Upload CSV"
                  />
                </Box>
                  {state.SIGlight && (
                    <Button onClick={()=>handleRemove("SIGlight")} color='primary' size ="small">Remove</Button>
                  )}
              </Box>
              <Box className="file-upload-input flex">
                <Box className="flex" sx={{ alignItems: "center" }}>
                  <Typography
                    color={"primary"}
                    sx={{ fontWeight: 500 }}
                    variant="body1"
                  >
                    Upload SOC-2 (pdf)
                  </Typography>
                  {state.SOC2 && <CheckCircleIcon color={"primary"} />}
                </Box>
                <Box>
                  <TextField
                    name={"SOC2"}
                    id="SOC2"
                    fullWidth
                    onChange={handleFile}
                    inputProps={{
                      accept: ".pdf",
                      startAdornment: (
                        <InputAdornment position="start">SOC2</InputAdornment>
                      ),
                    }}
                    type="file"
                    placeholder="Upload CSV"
                  />
                </Box>
                    {state.SOC2 && (
                    <Button onClick={()=>handleRemove("SOC2")} color='primary' size ="small">Remove</Button>
                  )}
              </Box>
            </Box>
            <Box className="file-query-result">
              <DataGrid />
            </Box>
          </Box>
          <Box className="file-upload-buttons flex">
            <Button variant="contained">Report</Button>
            <Button variant="contained">Export</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "Set_Value":
      return (state = { ...state, ...action.payload });
    default:
      return state;
  }
}

export default FileUpload;
