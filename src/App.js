import * as React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
];

function valuetext(value) {
  return `${value}°C`;
}
function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

function App() {
  return (
    <div className="App">
      <div className="grid h-[100vmin] items-center">
        <div className="grid justify-center">
          <h1 className="text-3xl font-bold ">Hello</h1>
          <div className="w-[300px]">
            <Slider
              aria-label="Temperature"
              defaultValue={80}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={null}
              marks={marks}
              min={0}
              max={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
