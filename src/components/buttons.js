import React from "react";
import Button from "@mui/material/Button";

function Buttons({ onCancelClick, onApplyClick }) {
  return (
    <div className="grid grid-cols-2 items-center justify-center mt-4">
      <div>
        <Button
          className="cancel-button"
          variant="contained"
          size="small"
          onClick={onCancelClick}
        >
          Cancel
        </Button>
      </div>
      <div>
        <Button
          className="apply-button"
          variant="contained"
          size="small"
          onClick={onApplyClick}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
