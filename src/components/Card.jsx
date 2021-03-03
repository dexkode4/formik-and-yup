/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react'
import { FabricIcon, HandShakeIcon, MobileIcon, ThumbsDownIcon, ThumbsUpIcon } from '../assets/svg'

function Card({ cardRef }) {
    const cardContainerRef = useRef();
    const [index, setIndex] = useState(0)
    const cardHeight =  370;
    let numberOfCards = 2;
    let current = 1;
    let move = 0;
    const handleNext = () => {
        if (current < numberOfCards) {
            move += cardHeight;
            cardContainerRef.current.style.transform = `translateY(-${move}px)`;
            current++;
            setIndex(current - 1)
        }
    }

    const translateAny = (index) => {
        setIndex(index)
        cardContainerRef.current.style.transform = `translateY(-${index * cardHeight}px)`;
        current++;
    }
    return (
        <div className="card bg-white rounded-lg p-5 card-shadow px-6  pb-6">
            <div className=" transform transition duration-1000 ease-in-out" ref={cardContainerRef}>
                <div className="mb-9">
                    <header className="font-nunito flex items-center color-dark-brown font-bold uppercase">
                        Fabric <FabricIcon className="ml-2" />
                    </header>
                    <span className=" text-xs font-semibold text-gray-400">Fabric details capture below</span>
                </div>

                <div className="flex justify-between items-center mb-12">
                    <div className="w-3/5 flex">
                        <span className="text-gray-200 text-5xl mr-5 font-karla italic -mt-1">1</span>
                        <span className="font-light color-card-text text-sm">How are you getting fabric for this order?</span>
                    </div>
                    <div className="flex justify-between w-4/12">
                        <div>
                            <input id="in-person" name="delivery-method" type="radio" className="hidden" value="in-person" />
                            <label htmlFor="in-person" className="flex flex-col items-center cursor-pointer card-svg">
                                <HandShakeIcon />
                                <span className="color-dark-brown font-light text-xs mt-1">In-person</span>
                            </label>
                        </div>
                        <div>
                            <input id="remotely" name="delivery-method" type="radio" className="hidden" value="remotely" />
                            <label htmlFor="remotely" className="flex flex-col items-center cursor-pointer card-svg-rect">
                                <MobileIcon />
                                <span className="color-dark-brown font-light text-xs mt-1">Remotely</span>
                            </label>
                        </div>
                    </div>

                </div>
                <div className="flex justify-between items-center">
                    <div className="w-3/5 flex">
                        <span className="card-number-color text-5xl mr-5 font-karla italic -mt-1">2</span>
                        <span className="font-light color-card-text font-nunito text-sm">Are you getting it all the fabric needed  fabric needed for this outfit from the same supplier?</span>
                    </div>
                    <div className="flex justify-between w-4/12 px-4">
                        <div>
                            <input id="yes" name="isGetAllFabric" type="radio" className="hidden" value={true} />
                            <label htmlFor="yes" className="flex flex-col items-center cursor-pointer card-svg-stroke">
                                <ThumbsUpIcon />
                                <span className="color-dark-brown font-light text-xs mt-1">Yes</span>
                            </label>
                        </div>
                        <div>
                            <input id="no" name="isGetAllFabric" type="radio" className="hidden" value={false} />
                            <label htmlFor="no" className="flex flex-col items-center cursor-pointer card-svg-stroke">
                                <ThumbsDownIcon />
                                <span className="color-dark-brown font-light text-xs mt-1">No</span>
                            </label>
                        </div>
                    </div>

                </div>
                <div className="mt-14 flex w-full justify-between items-center mb-10">
                    <div>&nbsp;</div>
                    <div className="flex items-center">
                        <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 0 && "bg-red-800"}`} href="#" alt="move"
                            onClick={() => translateAny(0)}>&nbsp;</div>
                        <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 1 && "bg-red-800"}`} href="#" alt="move"
                            onClick={() => translateAny(1)}>&nbsp;</div>
                        <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 2 && "bg-red-800"}`} href="#" alt="move"
                            onClick={() => translateAny(2)}>&nbsp;</div>
                        <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 2 && "bg-red-800"}`} href="#" alt="move"
                            onClick={() => translateAny(3)}>&nbsp;</div>
                        <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 2 && "bg-red-800"}`} href="#" alt="move"
                            onClick={() => translateAny(4)}>&nbsp;</div>
                    </div>
                    <button className="card-btn rounded-md text-xs font-light font-nunito text-white transform transition ease-in-out hover:bg-red-600 hover:-translate-y-1"
                        onClick={handleNext}>
                        Next
           </button>
                </div>

                <div>
                    <div className="mb-9">
                        <header className="font-nunito flex items-center color-dark-brown font-bold uppercase">
                            Fabric <FabricIcon className="ml-2" />
                        </header>
                        <span className=" text-xs font-semibold text-gray-400">Fabric details capture below</span>
                    </div>

                    <div className="flex justify-between items-center mb-12">
                        <div className="w-3/5 flex">
                            <span className="text-gray-200 text-5xl mr-5 font-karla italic -mt-1">1</span>
                            <span className="font-light color-card-text text-sm">How are you getting fabric for this order?</span>
                        </div>
                        <div className="flex justify-between w-4/12">
                            <div>
                                <input id="in-person" name="delivery-method" type="radio" className="hidden" value="in-person" />
                                <label htmlFor="in-person" className="flex flex-col items-center cursor-pointer card-svg">
                                    <HandShakeIcon />
                                    <span className="color-dark-brown font-light text-xs mt-1">In-person</span>
                                </label>
                            </div>
                            <div>
                                <input id="remotely" name="delivery-method" type="radio" className="hidden" value="remotely" />
                                <label htmlFor="remotely" className="flex flex-col items-center cursor-pointer card-svg-rect">
                                    <MobileIcon />
                                    <span className="color-dark-brown font-light text-xs mt-1">Remotely</span>
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-3/5 flex">
                            <span className="card-number-color text-5xl mr-5 font-karla italic -mt-1">2</span>
                            <span className="font-light color-card-text font-nunito text-sm">Are you getting it all the fabric needed  fabric needed for this outfit from the same supplier?</span>
                        </div>
                        <div className="flex justify-between w-4/12 px-4">
                            <div>
                                <input id="yes" name="isGetAllFabric" type="radio" className="hidden" value={true} />
                                <label htmlFor="yes" className="flex flex-col items-center cursor-pointer card-svg-stroke">
                                    <ThumbsUpIcon />
                                    <span className="color-dark-brown font-light text-xs mt-1">Yes</span>
                                </label>
                            </div>
                            <div>
                                <input id="no" name="isGetAllFabric" type="radio" className="hidden" value={false} />
                                <label htmlFor="no" className="flex flex-col items-center cursor-pointer card-svg-stroke">
                                    <ThumbsDownIcon />
                                    <span className="color-dark-brown font-light text-xs mt-1">No</span>
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="mt-14 flex w-full justify-between items-center">
                        <div>&nbsp;</div>
                        <div className="flex items-center">
                            <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 0 && "bg-red-800"}`} href="#" alt="move"
                                onClick={() => translateAny(0)}>&nbsp;</div>
                            <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 1 && "bg-red-800"}`} href="#" alt="move"
                                onClick={() => translateAny(1)}>&nbsp;</div>
                            <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 2 && "bg-red-800"}`} href="#" alt="move"
                                onClick={() => translateAny(2)}>&nbsp;</div>
                            <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 2 && "bg-red-800"}`} href="#" alt="move"
                                onClick={() => translateAny(3)}>&nbsp;</div>
                            <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 2 && "bg-red-800"}`} href="#" alt="move"
                                onClick={() => translateAny(4)}>&nbsp;</div>
                        </div>
                        <button className="card-btn rounded-md text-xs font-light font-nunito text-white transform transition ease-in-out hover:bg-red-600 hover:-translate-y-1"
                            onClick={handleNext}>
                            Next
                      </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card
