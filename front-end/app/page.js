import { GeoLocation } from "@/components/body/GeoLocation";
import { Nav } from "@/components/nav/Nav";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <Nav/>
      <GeoLocation/>
    </div>
    );
}
