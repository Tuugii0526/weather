export const isDaytime=(offset,sunrise,sunset)=>{
if(sunrise<(Date.now()+offset)<sunset)
{
    return true
}
return false
}