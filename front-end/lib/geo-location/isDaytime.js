export const isDaytime=(sunrise,sunset)=>{
    const now =new Date()
if(sunrise<now.getTime() && now.getTime()<sunset)
{
    return true
}
return false
}