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
        <li>
          <div className="seat"></div>
          <small>N/A</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>
      <div className="screen"></div>
      <SeatTable/>
      <p>You have selected <span>{seatCount}</span> seats for a price of $<span>{sumPrice}</span></p>
    </div>
  )
}