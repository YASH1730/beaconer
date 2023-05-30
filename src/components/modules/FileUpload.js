import React from "react";
import "../../assets/css/fileUpload.css";
import { Box, Button, TextField, Typography } from "@mui/material";

// utils
import FileDrop from "../utils/FileDropZone";
import DataGrid from "../utils/DataTable";

const FileUpload = () => {
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
                <Typography
                  color={"primary"}
                  sx={{ fontWeight: 500 }}
                  variant="body1"
                >
                  Upload CSV
                </Typography>
                <Box>
                  <TextField
                    label="Click here"
                    inputProps={{
                        accept : ".csv"
                    }}
                    fullWidth
                    type="file"
                    placeholder="Upload CSV"
                  />
                  <Typography className={"textOverflow"} variant="caption"></Typography>
                </Box>
              </Box>
              <Box className="file-upload-input flex">
                <Typography
                  color={"primary"}
                  sx={{ fontWeight: 500 }}
                  variant="body1"
                >
                  Upload SOC (pdf)
                </Typography>
                <Box>
                  <TextField
                    label="Click here"
                    fullWidth
                    inputProps={{
                        accept : ".pdf"
                    }}
                    type="file"
                    placeholder="Upload CSV"
                  />
                  <Typography className={"textOverflow"} variant="caption"></Typography>
                </Box>
              </Box>
            </Box>
            <Box className="file-query-result">
            <DataGrid/>
            </Box>
          </Box>
          <Box className="file-upload-buttons flex">
            <Button variant="contained">Report</Button>
            <Button variant="contained">Download</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FileUpload;
