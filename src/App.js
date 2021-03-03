import React, { useEffect, useRef, useState } from 'react';
import Card from './components/Card';
import SignupContainer from './components/SignupContainer';

function App() {
  const cardContainerRef = useRef()
  const [index, setIndex] = useState(0)
  const cardWidth = 40;
  let numberOfCards = 5;
  let current = 1;
  let  move = 0;

  const handleNext = () => {
    if(current < numberOfCards){
      move += cardWidth; 
      cardContainerRef.current.style.transform = `translateX(-${move}vw)`;
      current++;
      // setIndex(current - 1)
    }
  }

  const translateAny = (index) => {
    setIndex(index)
    cardContainerRef.current.style.transform = `translateX(-${index * cardWidth}vw)`;
    current++;
}

  return (
    <div className="px-10 h-screen pt-20 bg-gray-100">
      {/* <div className="carousel h-auto border p-5"> */}
        {/* <div className="flex card-container" ref={cardContainerRef}> */}
          <Card  handleNext={handleNext} translateAny={translateAny} index={index}/>
          {/* <Card  handleNext={handleNext} translateAny={translateAny} index={index}/>
          <Card  handleNext={handleNext} translateAny={translateAny} index={index}/>
          <Card  handleNext={handleNext} translateAny={translateAny} index={index}/>
          <Card  handleNext={handleNext} translateAny={translateAny} index={index}/> */}
        {/* </div> */}
      {/* </div> */}

    </div>

  );
}

export default App;
