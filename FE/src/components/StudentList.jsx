import * as React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";


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

export default function StudentList(props) {
 

  console.log('props', props)

  const data = props.data;
  const [rows, setRows] = React.useState(
    Array.isArray(data.rows) ? data.rows : []
  );

  // const [loading, setLoading] = React.useState(initialLoadingState);
  React.useEffect(() => {
    setRows((prevRows) =>
      data.rows.map((student) => {
        // Parse the ISO 8601 date string
        const parsedDate = new Date(student.DOB);

        // Format the date as DD-MM-YYYY
        const formattedDOB = `${parsedDate.getDate().toString().padStart(2, '0')}-${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}-${parsedDate.getFullYear()}`;

        // Update the student object with the formatted DOB
        return {
          ...student,
          DOB: formattedDOB,
        };
      })
    );
  }, [data]);


  // React.useEffect(() => {
  //   setLoading(initialLoadingState);
  // }, [initialLoadingState]);

  const handleRowOrderChange = async (params) => {
    setLoading(true);
    const newRows = await updateRowPosition(
      params.oldIndex,
      params.targetIndex,
      rows
    );

    setRows(newRows);
    setLoading(false);
  };
  console.log(Array.isArray(data.rows));
  console.log(data);

  return (
    <div style={{ height: 400, width: "100%" }}>
      {/* {typeof(data.rows) === 'array'? */}
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
