import React, { useState } from "react";
import './App.css';

function App() {

 const [color, setColor] = useState(false);

 const handleClick = () => {
   setColor(current => !current);
 }

  return (
    <div className="App"> 
      <div className="box_one" data-testid="box_one" style={{ backgroundColor: color ? '#6A5D4D' : '', color: color ? 'white' : '', }} onClick={handleClick}>
        1
      </div>
      
      <div className="box_two" style={{ backgroundColor: color ? '#7F7679' : '', color: color ? 'white' : '',}} onClick={handleClick}>
        2
      </div>

      <div className="box_three" style={{ backgroundColor: color ? '#20603D' : '', color: color ? 'white' : '',}} onClick={handleClick}>
        3
      </div>

      <div className="box_four" style={{ backgroundColor: color ? '#606E8C' : '', color: color ? 'white' : '',}} onClick={handleClick}>
        4
      </div>

      <div className="box_five" style={{ backgroundColor: color ? '#F39F18' : '', color: color ? 'white' : '',}} onClick={handleClick}>
        5
      </div>

      <div className="box_six" style={{ backgroundColor: color ? '#84C3BE' : '', color: color ? 'white' : '',}} onClick={handleClick}>
        6
      </div>

      <div className="box_seven" style={{ backgroundColor: color ? '#C1876B' : '', color: color ? 'white' : '',}} onClick={handleClick}>
        7
      </div>

      <div className="box_eight" style={{ backgroundColor: color ? '#1D1E33' : '', color: color ? 'white' : '',}} onClick={handleClick}>
        8
      </div>

      <div className="box_nine" style={{ backgroundColor: color ? ' #B32428' : '', color: color ? 'white' : '',}} onClick={handleClick}>
        9
      </div>
    </div>
  );
}

export default App;
