import * as React from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import "./style.css"


function BookingForm() {
//   const [startDate, setDate] = React.useState(new Date)
  const [rangeStart, setRangeStart] = React.useState(new Date)
  const defaultEndDate = new Date()
  defaultEndDate.setDate(defaultEndDate.getDate() + 7)
  const [rangeEnd, setRangeEnd] = React.useState(defaultEndDate)
  const today = new Date()


  const selectStartDate = (d: any) => {
    setRangeStart(d)
  }

  const selectEndDate = (d: any) => {
    setRangeEnd(d)
  }

  function handleChange(input: any) {
    if (input.value < 0) input.value = 0;
    if (input.value > 100) input.value = 100;
  }

  return (
    <div className="booking-form">
      <h2>Please, fill out the form below: </h2>
      <form>
          <label>From: </label>
          <DatePicker
        selectsStart
        selected={rangeStart} 
        minDate={today}
        startDate={rangeStart} 
        endDate={rangeEnd}
        onChange={selectStartDate} />
          <br/>
          <label>To: </label>
      <DatePicker
        selectsEnd
        selected={rangeEnd} 
        startDate={rangeStart} 
        endDate={rangeEnd}
        onChange={selectEndDate} />
        <br/>
    <label>Boat name: </label>
        <input type="text" />
    <br/>
    <label>Boat length: </label>
        <input type="text" onChange={handleChange} />
    <br/>
        <button className="btn">Submit</button>
    </form>
    </div>
  );
}

export default BookingForm;
