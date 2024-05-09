import Footer from "@/components/Footer";
import Course from "@/components/Home/Course";
import Hero from "@/components/Home/Hero";
import Marketing from "@/components/Home/Marketing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
        <>  <div className="">
         
            <Navbar/>
            <Hero/>
            <Course/>
            {/* <Marketing/> */}
            {/* <Footer/> */}
            </div>
        </>
  );
}
