import * as React from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
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

export default function LessonList(props) {


const data = props.data

  const [rows, setRows] = React.useState(Array.isArray(data.rows) ? data.rows : []);


React.useEffect(() => {
  console.log(data);
    setRows(data.rows);
}, [data]);


  const handleRowOrderChange = async (params) => {
    setLoading(true);
    const newRows = await updateRowPosition(
      params.oldIndex,
      params.targetIndex,
      rows,
    );

    setRows(newRows);
    setLoading(false);
  };
  console.log(Array.isArray(data.rows))
  console.log(data)

  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* {typeof(data.rows) === 'array'? */}
        <DataGridPro
        {...data}
        // loading={loading}
        rows={rows}
        // columns={columns}
        rowReordering
        onRowOrderChange={handleRowOrderChange}
      />
        {/* :null} */}
    </div>
  );
}
