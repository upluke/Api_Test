import React,{useState} from "react";
import Star from "./Star";



export const Rating:React.FC<any>=({stars})=> {
    const [dynamicValue, setDynamicValue]=useState<number>(stars)
    const [value, setValue]=useState<number>(0)

 
    const _colors:any = {
      1: "#f44336",
      2: "#FF5722",
      3: "#FF9800",
      4: "#FFC107",
      5: "#FFEB3B"
    };
    const _meanings:any = {
      0: "No Rating 🚫",
      1: "Terrible 🤮",
      2: "Mediocre 😒",
      3: "Average 😐",
      4: "Solid 🙂",
      5: "Fantastic 🔥"
    };
    
  
  const handleClick=(newValue:any)=> {
      setValue(newValue)
      setDynamicValue(newValue)
  }
  const handleMouseEnter=(newValue:any)=> {
    setDynamicValue(newValue)
  }

  const handleMouseLeave=(newValue:any)=> {
    setDynamicValue(value);
  }

   
    
    const starSpans = [];
    const max = 5
    let count = dynamicValue;
    // for (let v = 1; v <= max; v++) {
    //   if (v <= dynamicValue) {
    //     count++;
    //   }
    // }
    for (let v = 1; v <= max; v++) {
      starSpans.push(
        <Star
          key={v}
          color={_colors[count]}
          isFilled={v <= dynamicValue}
          value={v}
          handleHover={handleMouseEnter}
          handleHoverLeave={handleMouseLeave}
          handleClick={handleClick}
        />
      );
    }
    return (
      <div>
        <p>{_meanings[value]}</p>
        {starSpans}
      </div>
    );
  
    }
 
