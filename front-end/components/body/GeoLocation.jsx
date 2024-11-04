"use client"
import { roboto } from "@/app/fonts/fonts"
import "dotenv/config"
import { Clock } from "lucide-react"
import { useEffect, useState } from "react"
import { DataDisplaying } from "./DataDisplaying"
export const GeoLocation=()=>{
    const [data,setData]=useState({})
    useEffect(()=>{
       async  function success(position){
            const latitude=position.coords.latitude;
            const longitude=position.coords.longitude;
            const res=  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_POINT}/current?lat=${latitude}&lon=${longitude}`)
            const data=await res.json()
            setData(data)
        }
        function error()
        {
          
        }

        if(!navigator.geolocation)
        {
            
        }
        else 
        {
            navigator.geolocation.getCurrentPosition(success, error);
        }

    },[])
    return (
        <div  className="w-[80%] h-fit  mt-10 bg-white rounded-2xl pt-4 pb-6 px-8 flex flex-col gap-5">
         <div className="flex gap-4 items-center">
          <Clock className="w-5 h-4"/>
          <p className={`${roboto.className} antialiased`}>The weather now</p>
         </div>
         {
            (!Object.keys(data).length) 
            ? null
            : <DataDisplaying data={data} />
         }
        </div>
    )
}