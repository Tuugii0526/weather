import { forecasts } from "@/lib/forecasts";
export async function GET(_, { params }) {
  try {
    const forecast = forecasts.find(
      (forecast) => forecast.id === parseInt(params.id)
    );
    return Response.json(forecast);
  } catch (error) {}
}
export async function PATCH(request, { params }) {
  try {
    const body=await request.json()
    const {forecast}=body
   const foundIndex= forecasts.findIndex(forecast=>forecast.id===parseInt(params.id))
   if(foundIndex==-1)
   {
    return new Response('That forecast not found')
   }
    forecasts[foundIndex].forecast=forecast
    return Response.json(forecasts[foundIndex])
  } catch (error) {

  }
}
export async function DELETE(request,{params})
{
    try {
        const index=forecasts.findIndex(forecast=>forecast.id===parseInt(params.id))
        const deletedForecast=forecasts[index]
        forecasts.splice(index,1)
        return Response.json(deletedForecast)
    } catch (error) {
        
    }
}
