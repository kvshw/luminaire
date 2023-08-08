import React from "react";

function AppliedValues({ changesApplied, appliedValues }) {
  return (
    <div className="text-center mt-3">
      {changesApplied && (
        <>
          {appliedValues ? (
            <>
              <p className="font-bold">Applied Levels:</p>
              <span>
                <p>Occupied: {appliedValues.occupied}% </p>
                <p>Power Save: {appliedValues.powerSave}% </p>
                <p>Minimum: {appliedValues.minimum}% </p>
              </span>
            </>
          ) : (
            <p>Changes have been canceled.</p>
          )}
        </>
      )}
    </div>
  );
}

export default AppliedValues;
