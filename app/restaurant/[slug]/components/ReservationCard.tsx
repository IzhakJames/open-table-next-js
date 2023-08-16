"use client";

import React from "react";

const ReservationCard = () => {
  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="dropbar">Party size</label>
        <select
          name="dropbar"
          id="dropbar"
          className="py-3 border-b font-light">
          <option value="1">1 person</option>
          <option value="2">2 people</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            id="date"
            type="text"
            className="py-3 border-b font-light w-28"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="time">Time</label>
          <select name="time" id="time" className="py-3 border-b font-light">
            <option value="730">7:30 AM</option>
            <option value="930">9:30 AM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
          Find a Time
        </button>
      </div>
    </div>
  );
};

export default ReservationCard;
