import React, { useState } from "react";
import { SeatTable } from "./seatTable";

export function ShowMovieSeat() {
  const [seatCount, setSeatCount] = useState(0)
  const [sumPrice, setSumPrice] = useState(0)
  return (
    <div className="show-movie-seat">
      <div className="movie-select">
        <p>Pick a movie:</p>
      </div>
      <ul className="seat-type">
        <li className="na">
          <div className="seat"></div>
          <small>N/A</small>
        </li>
        <li className="na">
          <div className="seat"></div>
          <small>Selected</small>
        </li>
        <li className="na">
          <div className="seat"></div>
          <small>Occupied</small>
        </li>
      </ul>
      <div className="screen"></div>
      <SeatTable/>
      <p>You have selected {seatCount} seats for a price of ${sumPrice}</p>
    </div>
  )
}