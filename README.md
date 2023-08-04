<base target="_blank">

# Luminaire Project

This is created as a project for Helvar. The guidelines are to create this as a react project and try to have same functionalities and styles they have provided. It seems interesting and have some exciting points. You can read more while the project is on the go and completed.

**Link to project:** <a href="https://luminaire-kvshw.netlify.app/" target="_blank"> Luminaire </a>

## Problems Facing & Progress Roadmap

(15.07.2023)

- Am I going to create the functionality by myself, or will I use some UI libraries like Material UI or Chakra UI? Which library is best for this project
- Then I selected Material UI first to try, and currently having the problem of making the 0-1 mark wider because the 0-1 change is not noticeable as the project requirements.

(19.07.2023)

- In the past few days I tried to use few UI libraries and choose Material UI because it's under MIT.
- Then I had problem with how to get the same visible width as 5-10 to be equal to 0-1 then Finally I did Value mapping. 0 - 0/ 1-1/ then 2-5.
- It is working fine and I completed the slider changing according to the requirenments.

(26.07.2023)

- After having a few days vacation, I Completed the functionalities of the project and it's working the desired way.
- Values emiting was easier to implement into the project.
- I'm having a doubt about the UI design because the PDF design and Video design is totally different. I sent a email regrading the doubt I'm having to the Helvar team. Hope I'll get a reply. Otherwise I'm planning on doing both designs.
- I haven't done testing in cypress so I'm currently learning that to implement it.
- Also I'm building different components and adding them into the project so the App.js would be more cleaner.
- But had a few problems so I decided to do the component creation later.

(27.07.2023)

- Deployed the project to netlify.
- After the deployment I could see a few designs of elements are not showing properly specially the slider designs even though the functionalities are working fine. 😟

(01.08.2023)

- Netlify Error solved successfully after reading through the documentation of Material UI.
- Reason was I first used to design it inside App.css using classnames. But material UI uses a prop called "sx" to apply the designs. Its the best option for adding style overrides to a single instance of a component. Because the classnames that are needed for styling the slider can't be used as CSS selectors because they are unstable.
- Production build on Netlify is also working fine now 😃

(03.08.2023)

- Installed Cypress but having a few problems while doing the testing. Have to figure it out.
- Compoent creation is in progress.
<!-- ![alt tag](http://placecorgi.com/1200/650) -->

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, Material UI

As the requirement I used React for creating this project. It was quite fun to create but I had to take a few breaks because of it's end of summer. First I made a plan about what needed to be done. It consisted of a few questions for myself first. Such as,

- Am I going to build this from scratch or am I going to use some UI library to make the work bit easier so I could have time to work on the functionalities.
- What UI libraries are under license of MIT, BSD, or similar(Which are many popular UI libraries)
- Then How the value changing of the project going to work because It need to change from 0,1,5,10 until 100. Then I found out value mapping would be the best option for that.
- Which new Components to create.
- How to do Testing, which is a problem for me 😥

<!-- Version 1 of the project before breaking down to components
import React, { useState } from "react";
import "./App.css";
import { Slider } from "@mui/material";
import Button from "@mui/material/Button";

const valueBreakSteps = 21;

const valueMappings = {
  0: 0,
  1: 1,
};

for (let i = 2; i <= valueBreakSteps; i++) {
  valueMappings[i] = (i - 1) * 5;
}

const firstValueToFind = 80;
const eightyPositionFound = Object.keys(valueMappings).findIndex(
  (key) => valueMappings[key] === firstValueToFind
);
const secondValueToFind = 20;
const TwentyPositionFound = Object.keys(valueMappings).findIndex(
  (key) => valueMappings[key] === secondValueToFind
);

function App() {
  const [firstSliderValue, setFirstSliderValue] = useState(eightyPositionFound);
  const [secondSliderValue, setSecondSliderValue] =
    useState(TwentyPositionFound);
  const [thirdSliderValue, setThirdSliderValue] = useState(0);
  const [appliedValues, setAppliedValues] = useState(null);
  const [changesApplied, setChangesApplied] = useState(false);

  const handleFirstSliderChange = (event, newValue) => {
    setFirstSliderValue(newValue);

    if (newValue < secondSliderValue) {
      setSecondSliderValue(newValue);
    }

    if (newValue < thirdSliderValue) {
      setThirdSliderValue(newValue);
    }
  };

  const handleSecondSliderChange = (event, newValue) => {
    setSecondSliderValue(newValue);

    if (newValue > firstSliderValue) {
      setFirstSliderValue(newValue);
    }

    if (newValue < thirdSliderValue) {
      setThirdSliderValue(newValue);
    }
  };

  const handleThirdSliderChange = (event, newValue) => {
    setThirdSliderValue(newValue);

    if (newValue > firstSliderValue) {
      setFirstSliderValue(newValue);
    }

    if (newValue > secondSliderValue) {
      setSecondSliderValue(newValue);
    }
  };

  const mappedValue = valueMappings[firstSliderValue];

  const handleApplyClick = () => {
    // Save the applied values
    const levels = {
      occupied: mappedValue,
      powerSave: valueMappings[secondSliderValue],
      minimum: valueMappings[thirdSliderValue],
    };
    setAppliedValues(levels);
    setChangesApplied(true);
  };

  const handleCancelClick = () => {
    // Clear the applied values and indicate that changes were canceled
    setAppliedValues(null);
    setChangesApplied(true);
  };

  const getSliderStyles = () => ({
    width: 300,
    "& .MuiSlider-thumb": {
      backgroundColor: "#ad3738",
    },
    "& .MuiSlider-rail": {
      backgroundColor: "#efeeef",
      border: "1px solid #696969",
      height: "10px",
    },
    "& .MuiSlider-track": {
      border: "0px",
      backgroundColor: "#ad3738",
      height: "9px",
    },
  });

  return (
    <div className="App">
      <div className="grid h-[100vh] items-center md:h-[100vmin] overflow-y-hidden justify-center">
        <div className="grid justify-center  md:mt-0">
          <div className="w-[95vw] border-2 p-4 grid justify-center md:w-[350px]">
            <h3 className="text-xl font-bold text-left mb-3">Edit Levels</h3>
            <div>
              <div className="w-[300px] grid grid-cols-2">
                <span className="text-left font-semibold">Occupied</span>
                <span className="text-right text-[#ba122b] font-semibold">
                  {mappedValue}%
                </span>
              </div>
              <div>
                <Slider
                  data-testid="first-slider"
                  value={firstSliderValue}
                  min={0}
                  max={valueBreakSteps}
                  step={1}
                  onChange={handleFirstSliderChange}
                  sx={getSliderStyles()}
                />
              </div>
              <div className="w-[300px] grid grid-cols-2">
                <span className="text-left font-semibold">Power save</span>
                <span className="text-right text-[#ba122b] font-semibold">
                  {valueMappings[secondSliderValue]}%
                </span>
              </div>
              <div>
                <Slider
                  data-testid="second-slider"
                  value={secondSliderValue}
                  min={0}
                  max={valueBreakSteps}
                  step={1}
                  onChange={handleSecondSliderChange}
                  sx={getSliderStyles()}
                />
              </div>
              <div className="w-[300px] grid grid-cols-2">
                <span className="text-left font-semibold">Minimum</span>
                <span className="text-right text-[#ba122b] font-semibold">
                  {valueMappings[thirdSliderValue]}%
                </span>
              </div>
              <div>
                <Slider
                  data-testid="third-slider"
                  value={thirdSliderValue}
                  min={0}
                  max={valueBreakSteps}
                  step={1}
                  onChange={handleThirdSliderChange}
                  sx={getSliderStyles()}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center justify-center mt-4">
              <div>
                <Button
                  className="cancel-button"
                  variant="contained"
                  size="small"
                  onClick={handleCancelClick}
                >
                  Cancel
                </Button>
              </div>
              <div>
                <Button
                  className="apply-button"
                  variant="contained"
                  size="small"
                  onClick={handleApplyClick}
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[15vh]">
            {changesApplied && (
              <div className="text-center mt-3">
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; -->

<!--
## Optimizations

_(optional)_

You don't have to include this section but interviewers _love_ that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those _whoa this is awesome_ or _fuck yeah I did it!_ moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Examples:

Take a look at these couple examples that I have in my own portfolio:

**Palettable:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel -->

<!-- const marks = [
  {
    value: 0,
  },
  {
    value: 1,
  },
  {
    value: 5,
  },
  {
    value: 10,
  },
  {
    value: 15,
  },
  {
    value: 20,
  },
  {
    value: 25,
  },
  {
    value: 30,
  },
  {
    value: 35,
  },
  {
    value: 40,
  },
  {
    value: 45,
  },
  {
    value: 50,
  },
  {
    value: 55,
  },
  {
    value: 60,
  },
  {
    value: 65,
  },
  {
    value: 70,
  },
  {
    value: 75,
  },
  {
    value: 80,
  },
  {
    value: 85,
  },
  {
    value: 90,
  },
  {
    value: 95,
  },
  {
    value: 100,
  },
];
];
// const valueMappings = {
//   0: 0,
//   1: 1,
//   2: 5,
//   3: 10,
//   4: 15,
//   5: 20,
//   6: 25,
//   7: 30,
//   8: 35,
//   9: 40,
//   10: 45,
//   11: 50,
//   12: 55,
//   13: 60,
//   14: 65,
//   15: 70,
//   16: 75,
//   17: 80,
//   18: 85,
//   19: 90,
//   20: 95,
//   21: 100,
// };
 -->
