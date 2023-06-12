import React, { useEffect, useReducer } from "react";
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
import CancelIcon from "@mui/icons-material/Cancel";
import Cloud from "../../assets/image/cloud.png";
import {
  sendFile,
  sendFile_Questioners,
  sendFile_SOC2,
} from "../service/service";
const FileUpload = () => {
  const initialState = {
    SIGlight: "",
    SOC2: "",
    loading: false,
    rows: [],
  };

  const [state, setState] = useReducer(reducer, initialState);

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      setState({
        type: "Set_Value",
        payload: {
          loading: true,
          rows: [],
        },
      });
      const FD = new FormData();
      FD.append("SIGlight", state.SIGlight);
      FD.append("SOC2", state.SOC2);
      // API Call
      let res = "";

      if (state.SIGlight !== "" && state.SIGlight)
        res = await sendFile_Questioners(FD);
      else if (state.SOC2 !== "" && state.SOC2) res = await sendFile_SOC2(FD);
      if (res.status === 200) {
        setState({
          type: "Set_Value",
          payload: {
            loading: false,
            rows: [
              ...res.data.Question.map((row, i) => {
                return {
                  id: i + 1,
                  question: row,
                  answer: res.data.Answer[i],
                  risk: res.data.Answer[i],
                };
              }),
            ],
          },
        });
      } else {
        window.alert("Error Occurred in APIs !!!");
      }
    } catch (error) {
      setState({
        type: "Set_Value",
        payload: {
          loading: false,
          rows: [],
        },
      });
      console.log("ERROR>>", error);
      window.alert("Something Went Wrong !!!");
    }
  }
  function handleRemove(name) {
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
        <Box
          className="file-upload-container flex-col"
          component={"form"}
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontSize: "1 rem", fontWeight: 700 }}
            >
              File Uploading
            </Typography>
          </Box>
          <Box className="file-upload-section flex">
            <Box className="file-upload-input flex">
              <Box className="flex" sx={{ alignItems: "center" }}>
                <Typography
                  color={"primary"}
                  sx={{ fontWeight: 600 }}
                  variant="body1"
                >
                  Upload Questionnaires
                </Typography>
                {state.SIGlight && <CheckCircleIcon color={"primary"} />}
              </Box>

              <FileDrop
                files={[".xlsx", ".csv"]}
                handleRemove={handleRemove}
                state={state}
                name={"SIGlight"}
                setState={setState}
                cssClass={"upload-section"}
              />
            </Box>
            <Box className="file-upload-input flex">
              <Box className="flex" sx={{ alignItems: "center" }}>
                <Typography
                  color={"primary"}
                  sx={{ fontWeight: 600 }}
                  variant="body1"
                >
                  Upload SOC-2 (pdf)
                </Typography>
                {state.SOC2 && <CheckCircleIcon color={"primary"} />}
              </Box>
              <Box>
                <FileDrop
                  files={[".pdf"]}
                  handleRemove={handleRemove}
                  state={state}
                  name={"SOC2"}
                  setState={setState}
                  cssClass={"upload-section"}
                />

                {/* <TextField
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
                  /> */}
              </Box>
            </Box>
          </Box>
          <Box className="file-query-result">
            <DataGrid state={state} />
          </Box>
          <Box className="file-upload-buttons flex">
            <Button
              color="secondary"
              size="small"
              type="submit"
              variant="contained"
            >
              Start Assessment
            </Button>
            <Button color="secondary" size="small" variant="contained">
              Generate Report
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "Set_Value":
      //console.log(action);
      return (state = { ...state, ...action.payload });
    default:
      return state;
  }
}

export default FileUpload;
