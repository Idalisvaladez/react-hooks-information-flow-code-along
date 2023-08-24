import React from "react";
import { getRandomColor } from "./randomColorGenerator";

function Child({ onChangeColor, color }) {  //STEP 4. Add the prop with access to the handleChangeColor function so child can utilize
// STEP 8. Add passed color prop into the child function so it can access it

  function handleClick() { //STEP 11. create function that invokes passed prop {onChangeColor} which is the function handleChangeColor from parent
    const newColor = getRandomColor() // STEP 12. Add variable to house randome color
    onChangeColor(newColor) //STEP 13. Pass newColor to prop (which is our parent function) to update component 
  }


  return <div 
            className="child" 
            style={{ backgroundColor: color }} //STEP 9. Utilize prop to set background color to color state. GO TO PARENT TO GET IT TO
            // CHANGE THE childrenColor as well
            // STEP 5. Add prop as event handler onClick={onChangeColor}. This changes parent color when child is clicked
            // (GO BACK TO PARENT) We want the children components to also change color, since we cant pass data between siblings
            // we need to store it in the state of their Parent so it can pass to both children
            onClick={handleClick} // STEP 14. Update component with onClick calling handleClick that is a parent callback function for handleColorChange
            // here were calling our onChangeColor prop passed from the parent
            // that is a function callback that handles colorchange - handleColorChange from parent component
          />;
}

export default Child;
