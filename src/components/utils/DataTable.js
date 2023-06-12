import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";


const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon" },
  { id: 2, lastName: "Lannister", firstName: "Cersei" },
];

function riskButton(params) {
  const colorCode = {
    yes: "#228B22",
    "not answered": "#FFA500",
    no: "#B22222",
    "not applicable": "#A9A9A9",
  };
  return (
    <Box
      sx={{
        minWidth: "25px",
        minHeight: "25px",
        borderRadius: "50px",
        backgroundColor: `${colorCode[params.formattedValue.trim().toLowerCase().replace(".","")]}`,
      }}
    ></Box>
  );
}

export default function DataTable({ state }) {


const columns =  [
  { field: "id", headerName: "ID", width: 70 },
  { field: "question", headerAlign: "center", headerName: "Question", flex: 1 },
  {
    field: "answer",
    headerName: "Answer",
    headerAlign: "center",
    width: 150,
    align: "center",
  },
  {
    field: "risk",
    headerName: "Risk",
    align: "center",
    headerAlign: "center",
    width: 100,
    renderCell: riskButton,
  },
];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={state.rows || rows}
        loading={state.loading}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 100 },
          },
        }}
        pageSize={100}
        pageSizeOptions={[5, 10, 50, 100]}
        // checkboxSelection
      />
    </div>
  );
}
