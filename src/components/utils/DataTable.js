import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'question', headerName: 'Question', width: 600 },
  { field: 'answer', headerName: 'Answer', width: 300 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
];

export default function DataTable({state}) {
  return (

    <div style={{ height: 400, width: '100%' }}>
      {console.log(state.rows)}
      <DataGrid
        rows={state.rows || rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 100 },
          },
        }}
        pageSize = {100}
        pageSizeOptions={[5, 10, 50, 100]}
        // checkboxSelection
      />
    </div>
  );
}