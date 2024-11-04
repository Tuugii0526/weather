import { forecasts } from "@/lib/forecasts"
import { headers,cookies } from "next/headers"
export async function GET(request){
    try {
        const res=await fetch('https://weather-proxy.freecodecamp.rocks/api/current?lat=47.4&lon=102.9')
        const data=await res.json()
        return   Response.json(data);


        
        // const requestHeaders=new Headers(request.headers)
        // console.log(requestHeaders.get('Authorization'))
        // const headerList=await headers()
        // console.log('next headers:',headerList.get('Authorization'))
        // const searchParams=request.nextUrl.searchParams
        // const query=searchParams.get(
        //     'query'
        // )
        // const theme=request.cookies.get('theme')
        // console.log('THEME IS:',theme)
        // const filterForecasts= query ?  forecasts.filter(forecast=>forecast.forecast.includes(query)) : forecasts;
        // return new Response("<h1>Profile data</h1>",{
        //     headers:{
        //         "Content-Type":"text/html",
        //         "Set-Cookie":"theme=dark"
        //     }
        // })
    } catch (error) {
        Response.json({
            error:`${error}`
        })
    }
}
export async function POST (request){
    try {
        const res=await request.json()
        const newForecast={
            id:forecasts.length+1,
            text:res.forecast
        }
        forecasts.push(newForecast)
        return new Response(JSON.stringify(newForecast),{
            headers:{
                "Content-Type":"application/json"
            },
            status:201
        })
    } catch (error) {
        
    }
}