/* eslint-disable no-useless-computed-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import 'date-fns';
import React, { useEffect, useRef, useState } from 'react'
import { Formik } from "formik";
import * as Yup from 'yup';
import {
    FabricIcon,
    HandShakeIcon,
    MobileIcon,
    ThumbsDownIcon,
    ThumbsUpIcon,
    ImageUploadIcon,
    WalkingIcon,
    SewingMachineIcon,
    BikeIcon,
    LocationIcon,
    CheckedIcon,
    CaretDownIcon,
    CaretLeftPinkIcon,
    CautionIcon
} from '../assets/svg'
import Ratings from './Ratings';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './datePicker.css';
import { getSuppliers } from './functions';

function CardContainer({ children, cardContainerRef, index, setIndex, isSubmit }) {
    const cardHeight = 23;
    let numberOfCards = 5;

    useEffect(() => {
        cardContainerRef.current.style.transform = `translateY(-${index * cardHeight}rem)`;
    }, [index, cardContainerRef])

    const handleNext = () => {
        setIndex(prev => prev + 1)
    }


    const translateAny = (index) => {
        setIndex(index)
    }

    return (
        <div className="p-5 fabric_card">
            <div className="">
                <header className="font-nunito flex items-center color-dark-brown font-bold uppercase">
                    Fabric <FabricIcon className="ml-2" />
                </header>
                <span className=" text-xs font-semibold text-gray-400">Fabric details capture below</span>
            </div>

            {children}
            <div className="flex w-full justify-between items-center absolute bottom-5 right-5">
                <div>&nbsp;</div>
                <div className="flex items-center">
                    <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 0 && "bg-red-800"}`} href="#" alt="move"
                        onClick={() => translateAny(0)}>&nbsp;</div>
                    <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 1 && "bg-red-800"}`} href="#" alt="move"
                        onClick={() => translateAny(1)}>&nbsp;</div>
                    <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 2 && "bg-red-800"}`} href="#" alt="move"
                        onClick={() => translateAny(2)}>&nbsp;</div>
                    <div className={`cursor-pointer border h-3 w-3 rounded-full mr-2 ${index === 3 && "bg-red-800"}`} href="#" alt="move"
                        onClick={() => translateAny(3)}>&nbsp;</div>

                </div>
                {
                        index >= numberOfCards - 2 ? (<button className="card-btn rounded-md text-xs font-light font-nunito text-white transform transition ease-in-out hover:bg-red-600 hover:-translate-y-1" type="submit"
                     >
                        
                        Submit
                      
                    </button>) : <div className="cursor-pointer card-btn rounded-md text-xs font-light font-nunito text-white transform transition ease-in-out hover:bg-red-600 hover:-translate-y-1" 
                    onClick={handleNext}>
                   
                         Next
                   
                </div>
                    }
            </div>
        </div>
    )
}

function FabricsDetailCollection() {
    const cardContainerRef = useRef();
    const [index, setIndex] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    useEffect(() => {
        console.log('fetching suppliers')
        getSuppliers()
        .then(res => {
            console.log(res)
        })
        .catch(err => console.error(err))
    },[])

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const [fabricType, setFabricType] = useState({
        type1:{
            type: '',
            yard: 0,
            price: 0,
            rating: 0
        },
        type2:{
            type:'',
            yard: 0,
            price: 0,
            rating:0
        },
        type3:{
            type:'',
            yard: 0,
            price: 0,
            rating: 0
        }
    });

    const handleType1 = (e) => {
        let {name, value} = e.target;
        if(name === 'price' || name === 'yard'){
            value = Number(value)
        }
        setFabricType({...fabricType, type1: { ...fabricType.type1, [name]: value, ["totalPrice"]: fabricType.type1.yard * fabricType.type1.price }})
    }
    const handleType2 = (e) => {
        const {name, value} = e.target;
        setFabricType({...fabricType, type2: { ...fabricType.type2, [name]: value, ["totalPrice"]: fabricType.type2.yard * fabricType.type2.price }})
    }
    const handleType3 = (e) => {
        const {name, value} = e.target;
        setFabricType({...fabricType, type3: { ...fabricType.type3, [name]: value , ["totalPrice"]: fabricType.type3.yard * fabricType.type3.price}})
    }

    const grandTotal = () => {
        return Number((fabricType.type1.yard * fabricType.type1.price) +  (fabricType.type2.yard * fabricType.type2.price) + (fabricType.type3.yard * fabricType.type3.price)).toLocaleString()
    }

    const handleRating = (value) => {
        setFabricType({...fabricType, type1: { ...fabricType.type1, rating: value }})
    }
    const handleRating2 = (value) => {
        setFabricType({...fabricType, type2: { ...fabricType.type2, rating: value }})
    }
    const handleRating3 = (value) => {
        setFabricType({...fabricType, type3: { ...fabricType.type3, rating: value }})
    }

    useEffect(() => {
        if(isSubmitting){
            cardContainerRef.current.style.transform = `translateY(-${(index + 1) * 23}rem)`;
        }
    },[isSubmitting, index])
    console.log(fabricType)
    return (
        <Formik
            initialValues={{ delivery_method: "", isGetAllFabric: null, delivery_method_tailor: "", location:"" }}
            onSubmit={(values) => {
                setIsSubmitting(true)
                const data = {...values, fabricType, selectedDate}
                console.log("Logging in ", data);
                alert(JSON.stringify(values, null, 2));
               
            }}

                validationSchema={Yup.object().shape({
                delivery_method: Yup.string().min(3).max(20).required("Required"),
                isGetAllFabric: Yup.string().min(3).max(20).required("Required"),
                delivery_method_tailor: Yup.string().min(3).max(20).required("Required"),
                location: Yup.string().min(10).max(250).required("Required"),
           
        })}
        >
            {({ handleChange, handleSubmit, values, errors }) => {
               
                return (
                    <form onSubmit={handleSubmit}>
                        <div className="fabricForm bg-white rounded-lg  card-shadow">
                            <div className="transform transition duration-1000 ease-in-out" ref={cardContainerRef}>
                                <CardContainer cardContainerRef={cardContainerRef} index={index} setIndex={setIndex} isSubmit={isSubmitting}>
                                    <div className="flex justify-between items-center mt-5  mb-5">
                                        <div className="w-3/5 flex">
                                            <span className="text-gray-200 text-5xl mr-7 font-karla italic -mt-1">1</span>
                                            <span className="font-light color-card-text text-sm">How are you getting fabric for this order?</span>
                                        </div>
                                        <div className="flex justify-between w-4/12">
                                            <div>
                                                <input id="in-person" name="delivery_method" type="radio" className="hidden" value="in-person" onChange={handleChange}/>
                                                <label htmlFor="in-person" className="flex flex-col items-center cursor-pointer card-svg">
                                                    <HandShakeIcon />
                                                    <span className="color-dark-brown font-light text-xs mt-1">In-person</span>
                                                </label>
                                            </div>
                                            <div>
                                                <input id="remotely" name="delivery_method" type="radio" className="hidden" value="remotely" onChange={handleChange}/>
                                                <label htmlFor="remotely" className="flex flex-col items-center cursor-pointer card-svg-rect">
                                                    <MobileIcon />
                                                    <span className="color-dark-brown font-light text-xs mt-1">Remotely</span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex justify-between items-center mb-9">
                                        <div className="w-3/5 flex">
                                            <span className="card-number-color text-5xl mr-5 font-karla italic -mt-1">2</span>
                                            <span className="font-light color-card-text font-nunito text-sm">Are you getting it all the fabric needed  fabric needed for this outfit from the same supplier?</span>
                                        </div>
                                        <div className="flex justify-between w-4/12 px-4">
                                            <div>
                                                <input id="yes" name="isGetAllFabric" type="radio" className="hidden" value={true} onChange={handleChange}/>
                                                <label htmlFor="yes" className="flex flex-col items-center cursor-pointer card-svg-stroke">
                                                    <ThumbsUpIcon />
                                                    <span className="color-dark-brown font-light text-xs mt-1">Yes</span>
                                                </label>
                                            </div>
                                            <div>
                                                <input id="no" name="isGetAllFabric" type="radio" className="hidden" value={false} onChange={handleChange}/>
                                                <label htmlFor="no" className="flex flex-col items-center cursor-pointer card-svg-stroke">
                                                    <ThumbsDownIcon />
                                                    <span className="color-dark-brown font-light text-xs mt-1">No</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </CardContainer>

                                <CardContainer cardContainerRef={cardContainerRef} index={index} setIndex={setIndex}>
                                    <div className="flex mt-4">
                                        <span className="text-gray-200 text-5xl mr-5 font-karla italic -mt-1">3</span>
                                        <table id="fabric-table" className="w-full">
                                            <thead>
                                                <tr className="color-card-text text-xs">
                                                    <th>Picture</th>
                                                    <th>Type</th>
                                                    <th># Yards</th>
                                                    <th>Price/Yard</th>
                                                    <th>Rating</th>
                                                    <th>Total Price(N)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><ImageUploadIcon className="inline" /> </td>
                                                    <td><input type="text" name="type" className="text-black border border-gray-300 rounded-md w-11/12 outline-none bg-gray-100 px-2" onChange={handleType1} /> </td>
                                                    <td className="flex justify-center"><input type="number"  name="yard" min={0} max={20} className="text-black border border-gray-300 rounded-md w-1/2 outline-none bg-gray-100 pl-2" onChange={handleType1} /> </td>
                                                    <td><input type="number" name="price" min={0}  max={5000} className="text-black border border-gray-300 rounded-md w-11/12 outline-none bg-gray-100 pl-2" onChange={handleType1}  />  </td>
                                                    <td>
                                                        <Ratings
                                                            handleRating={handleRating}
                                                            starCount={5}
                                                            className="w-full flex"
                                                        />

                                                    </td>
                                                    <td className="flex justify-center">{(fabricType.type1.yard * fabricType.type1.price).toLocaleString()}</td>
                                                </tr>
                                                <tr>
                                                    <td><ImageUploadIcon className="inline" /> </td>
                                                    <td><input type="text" name="type" className="text-black border border-gray-300 rounded-md w-11/12 outline-none bg-gray-100 px-2" onChange={handleType2}/>  </td>
                                                    <td className="flex justify-center"><input type="number" name="yard" min={0} className="text-black border border-gray-300 rounded-md w-1/2 outline-none bg-gray-100 pl-2" onChange={handleType2}/> </td>
                                                    <td><input type="number" name="price" min={0} className="text-black border border-gray-300 rounded-md w-11/12 outline-none bg-gray-100 pl-2" onChange={handleType2}/>  </td>
                                                    <td>
                                                        <Ratings
                                                             handleRating={handleRating2}
                                                            starCount={5}
                                                            className="w-full flex"
                                                        />
                                                    </td>
                                                    <td className="flex justify-center">{(fabricType.type2.yard * fabricType.type2.price).toLocaleString()}</td>
                                                </tr>
                                                <tr className="">
                                                    <td><ImageUploadIcon className="inline" /> </td>
                                                    <td><input type="text" name="type" className="text-black border border-gray-300 rounded-md w-11/12 outline-none bg-gray-100 px-2" onChange={handleType3} />  </td>
                                                    <td className="flex justify-center"><input type="number" name="yard" min={0} className="text-black border border-gray-300 rounded-md w-1/2 outline-none bg-gray-100 text-center pl-2" onChange={handleType3}/> </td>
                                                    <td><input type="number" name="price" min={0} className="text-black border border-gray-300 rounded-md w-11/12 outline-none bg-gray-100 pl-2" onChange={handleType3}/>  </td>
                                                    <td>  <Ratings
                                                        handleRating={handleRating3}
                                                        starCount={5}
                                                        className="w-full flex"
                                                    />
                                                    </td>
                                                    <td className="flex justify-center">{(fabricType.type3.yard * fabricType.type3.price).toLocaleString()}</td>
                                                </tr>
                                                <tr className="border-top">
                                                    <td>Total</td>
                                                    <td></td>
                                                    <td className=" text-center">{Number(fabricType.type1.yard) + Number(fabricType.type2.yard) + Number(fabricType.type3.yard)}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{grandTotal()}</td>
                                                </tr>
                                            </tbody>

                                        </table>

                                    </div>

                                    <div className="color-card-text flex justify-between mt-4 mb-4">
                                        <span className="text-sm">Supplier Details</span>
                                        <div className="w-4/6 bg-gray-100 rounded-md flex items-center justify-between px-1">
                                            <div>&nbsp;</div>
                                            <CaretDownIcon />
                                        </div>
                                    </div>
                                </CardContainer>

                                <CardContainer cardContainerRef={cardContainerRef} index={index} setIndex={setIndex}>
                                    <div className="flex justify-between items-center mb-12">
                                        <div className=" flex w-3/5">
                                            <span className="text-gray-200 text-5xl mr-5 font-karla italic -mt-1">4</span>
                                            <span className="font-light color-card-text text-sm">How is the tailor getting the fabric?</span>
                                        </div>
                                        <div className="flex justify-between w-max">
                                            <div>
                                                <input id="self-delivering" name="delivery_method_tailor" type="radio" className="hidden" value="self delivering" onChange={handleChange}/>
                                                <label htmlFor="self-delivering" className="flex flex-col items-center cursor-pointer card-svg-walk">
                                                    <WalkingIcon />
                                                    <span className="color-dark-brown font-light text-xs mt-1 text-center">I'm delivering</span>
                                                </label>
                                            </div>
                                            <div>
                                                <input id="tailor-pickup" name="delivery_method_tailor" type="radio" className="hidden" value="tailor pickup" onChange={handleChange}/>
                                                <label htmlFor="tailor-pickup" className="flex flex-col items-center cursor-pointer ">
                                                    <span className="flex items-center card-svg-walk">
                                                        <WalkingIcon />
                                                        <SewingMachineIcon />
                                                    </span>
                                                    <span className="color-dark-brown font-light text-xs mt-1 text-center">Tailor Pickup</span>
                                                </label>
                                            </div>
                                            <div>
                                                <input id="online-dispatch" name="delivery_method_tailor" type="radio" className="hidden" value="online dispatch" onChange={handleChange}/>
                                                <label htmlFor="online-dispatch" className="flex flex-col items-center cursor-pointer card-svg">

                                                    <BikeIcon />

                                                    <span className="color-dark-brown font-light text-xs mt-1 text-center">Online Dispatch</span>
                                                </label>
                                            </div>
                                            <div>
                                                <input id="offline-dispatch" name="delivery_method_tailor" type="radio" className="hidden" value="offline dispatch" onChange={handleChange} />
                                                <label htmlFor="offline-dispatch" className="flex flex-col items-center cursor-pointer card-svg">
                                                    <BikeIcon />
                                                    <span className="color-dark-brown font-light text-xs mt-1 text-center">Offline Dispatch</span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mb-12">
                                        <div className="flex">
                                            <span className="text-gray-200 text-5xl mr-5 font-karla italic -mt-1">5</span>
                                            <div className="w-full">
                                                <span className="font-light color-card-text text-sm">Please enter your current location to submit</span>
                                                <div className="flex w-full mt-4">
                                                    <LocationIcon />
                                                    <input type="text" className="bg-gray-200 ml-3 rounded-md w-full outline-none px-3 " name="location" onChange={handleChange}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContainer>

                                <CardContainer cardContainerRef={cardContainerRef} index={index} setIndex={setIndex}>
                                <div className="flex mt-4">
                                            <span className="text-gray-200 text-5xl mr-5 font-karla italic -mt-1">6</span>
                                            <div className="w-full">
                                            <span className="font-light color-card-text font-nunito text-sm">What time are you planning the fabric handover to occur?</span>
                                                <div className="flex w-full mt-4 flex-col">
                                                
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <div className="flex justify-between">
                                                <KeyboardDatePicker
                                                    className="w-1/2 text-center  border"
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                
                                                    id="date-picker-inline"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                    />
                                                      <KeyboardTimePicker
                                                      className=" text-center w-1/3"
                                                    //    disableToolbar
                                                       variant="inline"
                                                        margin="normal"
                                                        id="time-picker-inline"
                                                        value={selectedDate}
                                                        onChange={handleDateChange}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change time',
                                                        }}
                                                        />
                                                        </div>
                                                    </MuiPickersUtilsProvider>

                                                    <div className="flex  mt-14 -ml-3">
                                                        <CautionIcon/>
                                                        <span className="ml-2 font-bold color-card-text text-xs">To adhere to the Fitted SLA, you need to get this to the tailor within 4 hours from now</span>
                                                    </div>
                                                </div>
                                              
                                            </div>
                                        </div>
                                </CardContainer>


                                <div className="mb-12 p-9">
                                    <div className="">
                                        <header className="font-nunito flex items-center color-dark-brown font-bold uppercase">
                                            Fabric <FabricIcon className="ml-2" />
                                        </header>
                                    </div>
                                    <div className="flex color-card-text mt-16  justify-between">
                                        <div className="text-xs w-4/6">
                                            <p className="mb-5">
                                                Thanks for submitting your fabric procurement record. If you're delivering yourself, please be safe and adhere to COVID-19 protection measures.
                            </p>
                                            <p>
                                                If you need a delivery trip for this order, please request one in the logistics section of this page.
                            </p>
                                        </div>

                                        <CheckedIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                );
            }}

        </Formik>
    )
}

export default FabricsDetailCollection
