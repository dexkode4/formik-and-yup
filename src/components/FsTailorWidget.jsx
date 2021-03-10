import React from 'react'
import { CaretDownDarkIcon, LocationBlackIcon } from '../assets/svg'

function FsTailorWidget({ imgSrc, profession, profile }) {
    return (
        <div className="w-2/5 fsTailorWidget relative shadow-md flex items-center pr-4 mb-4">
            <div className="mr-4">
                <div className="rounded-full bg-white w-20 h-20  border-white border-4 overflow-hidden">
                    <img src={imgSrc} alt="user display" className="w-full" />
                </div>
            </div>
            <div className="flex font-nunito justify-between w-5/6 items-center">
                <div className="  w-5/12 h-20 overflow-scroll">
                    <header className="font-extrabold">
                        <span className=" fitted_pink_color mr-2">{profession}:</span>
                        {profile.name}
                    </header>
                    <div className="flex items-center">
                        <LocationBlackIcon className="mr-2"/>
                        <span className="text-xs text-blue-600 underline">{profile.location}</span>
                    </div>

                </div>
                {/* <div className="flex justify-between whitespace-nowrap">
                    <div className="flex flex-col justify-center items-center mr-3">
                        <h3 className="font-extrabold text-xs">Live orders</h3>
                        <span className="border px-2 py-1 rounded-lg color-card-text bg-white text-sm">{profile.liveOrders}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center mr-3">
                        <h3 className="font-extrabold text-xs">FTFR</h3>
                        <span className="border  py-1 rounded-lg color-card-text bg-white text-sm">{profile.ftfr}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="font-extrabold text-xs">% on time</h3>
                        <span className="border px-2 py-1 rounded-lg color-card-text bg-white text-sm">{profile.percentageOnTime || '--'}</span>
                    </div>

                    <div className="flex items-center cursor-pointer">
                        <CaretDownDarkIcon />
                    </div>
                </div> */}

                <table className=" w-5/12  border h-20 overflow-scroll">
                    <tr className="whitespace-nowrap text-xs px-1">
                        <th>Live orders</th>
                        <th>FTFR</th>
                        <th>% on time</th>
                    </tr>
                    <tr>
                        <td > <span className=" p-1 rounded-lg color-card-text text-xs"> {profile.liveOrders}</span></td>
                        <td> <span className=" p-1 rounded-lg color-card-text  text-xs">{profile.ftfr}</span> </td>
                        <td> <span className=" p-1 rounded-lg color-card-text  text-xs"> {profile.percentageOnTime || '--'}</span></td>
                    </tr>
                </table>
                <div className="flex items-center cursor-pointer">
                        <CaretDownDarkIcon />
                </div>
            </div>
        </div>
    )
}

export default FsTailorWidget
