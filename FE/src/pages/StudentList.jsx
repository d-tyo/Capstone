import * as React from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useData } from '../hooks/useData';
import { useDemoData } from '@mui/x-data-grid-generator';


function updateRowPosition(initialIndex, newIndex, rows) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const rowsClone = [...rows];
      const row = rowsClone.splice(initialIndex, 1)[0];
      rowsClone.splice(newIndex, 0, row);
      resolve(rowsClone);
    }, Math.random() * 500 + 100); // simulate network latency
  });
}

export default function StudentList() {
//   const { data, loading: initialLoadingState }  = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 20,
//     maxColumns: 20,
//   });

const data = useData(`http://localhost:3000/students`)
  const [rows, setRows] = React.useState(data);
//   const [loading, setLoading] = React.useState(initialLoadingState);
console.log(data)

  React.useEffect(() => {
    setRows(data);
  }, [data]);

//   React.useEffect(() => {
//     setLoading(initialLoadingState);
//   }, [initialLoadingState]);

  const handleRowOrderChange = async (params) => {
    setLoading(true);
    const newRows = await updateRowPosition(
      params.oldIndex,
      params.targetIndex,
      rows,
    );

    setRows(newRows);
    // setLoading(false);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        {...data}
        // loading={loading}
        rows={rows}
        rowReordering
        onRowOrderChange={handleRowOrderChange}
      />
    </div>
  );
}
