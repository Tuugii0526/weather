import { MenuIcon } from "lucide-react"

export const Nav=()=>{
    return (
        <div className="w-full h-[200px] flex justify-between items-end">
            <div className="h-fit w-fit p-1 bg-cyan-300  rounded-full">
                <p className="text-white font-extrabold">YTL</p>
            </div>
            <div className="w-1/3 flex justify-between">
                <label htmlFor="search" className="p-1 border border-cyan-400 rounded-sm" >
                    <input type="text" placeholder="Search"  className="outline-none placeholder-[#1767CE]"/>
                </label>
                
               <button className="p-1 border text-[#1767CE] border-cyan-400 rounded-sm">
                <MenuIcon/>
               </button>

            </div>
        </div>
    )
}