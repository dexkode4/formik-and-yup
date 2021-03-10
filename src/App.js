import React, { useRef, useState } from 'react';
import Card from './components/Card';
import FsTailorWidget from './components/FsTailorWidget';
import SignupContainer from './components/SignupContainer';
import {
  
  WalkingIcon,
  SewingMachineIcon,
 
} from './assets/svg'

const profile = {
  customerRating: "-",
  ftfr: "40%",
  id: "FS-003",
  liveOrders: 18,
  location: "10 Jaiyeola George Crescent iyano ipaja, Lagos",
  name: "Sholarin Oluwatunmise",
  phone: "+2348171876195"

}

function App() {
  const cardContainerRef = useRef()
  const [index, setIndex] = useState(0)
  const cardWidth = 40;
  let numberOfCards = 5;
  let current = 1;
  let move = 0;

  const handleNext = () => {
    if (current < numberOfCards) {
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
    <div className="px-10 h-screen pt-20  flex justify-between">
      {/* <div className="carousel h-auto border p-5"> */}
      {/* <div className="flex card-container" ref={cardContainerRef}> */}
      <Card handleNext={handleNext} translateAny={translateAny} index={index} />
      <FsTailorWidget imgSrc={'img/userImg.jpg'} profession="Tailor" profile={profile}/>
      {/* <Card  handleNext={handleNext} translateAny={translateAny} index={index}/>
          <Card  handleNext={handleNext} translateAny={translateAny} index={index}/>
          <Card  handleNext={handleNext} translateAny={translateAny} index={index}/>
          <Card  handleNext={handleNext} translateAny={translateAny} index={index}/> */}
      {/* </div> */}
      {/* </div> */}

      <span className="flex items-center card-svg-walk">
                                                        <WalkingIcon />
                                                        <SewingMachineIcon />
                                                    </span>

    </div>

  );

}

export default App;
