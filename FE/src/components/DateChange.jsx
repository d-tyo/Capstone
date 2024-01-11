import React, { useState } from "react";
import { Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateChange(props) {
  const [customDate, setCustomDate] = useState(false);
  const handleDateChange = (date) => {
    //define the date
    const selectedDate = new Date(date); //formatted into JS
    console.log(selectedDate);
    //set the date
    props.setDueDate(selectedDate);
  };
  const newDueDate = new Date();
  newDueDate.setDate(newDueDate.getDate() + 7);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          required
          label={"DOB"}
          onChange={handleDateChange}
          renderInput={(params) => <input {...params} />}
          format="DD-MM-YYYY"
          variant="outlined"
          maxWidth
          sx={{ borderRadius: 12, marginBottom: 2 }}
        />
      </LocalizationProvider>
    </div>
  );
}
