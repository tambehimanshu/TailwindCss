import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div >
      <div className=" mt-lg">
        <div className="p-6 max-w-sm mx-auto rounded-xl shadow-2xl flex items-center space-x-4 bg-slate-950 ">
         <div>
            <img className="h-20 w-30"
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/virat-kohli-312826258-16x9.jpg?VersionId=KRRPsSiipmTumDS2YbQ_XUWpLD8IlkZJ"
              alt=""
            />
          </div>
       
         <div>
          <div>
          
            <p className="text-slate-500">VIRAT Kohlii</p>
            <p>Brand Of Cricket</p>
            <p>RCB</p>
          </div>
        </div>
        </div>
      </div>

      <div>
        <div className="p-6 max-w-base mx-auto rounded-xl  w-40 h-full items-center space-x-4 bg-slate-950 mt-5">
         <div>
            <img className="h-20 w-200"
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/virat-kohli-312826258-16x9.jpg?VersionId=KRRPsSiipmTumDS2YbQ_XUWpLD8IlkZJ"
              alt=""
            />
          </div>
       
         <div>
          <div>
          
            <p className="text-slate-500">VIRAT Kohli</p>

          </div>
          <p>KING</p>
         
      </div>
         <button className="h-100 w-33 bg-sky-500 text-white hover:bg-sky-700 hover:text-black "> Buy Now </button>
         
        </div>
        <div className="text-center my-4">
          <p className="text-white  md:text-green-400 sm: text-red-500"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error consequatur aut ab asperiores placeat? Consequuntur minus tempore veritatis voluptas officia ea, nostrum quaerat beatae cupiditate tenetur odit, quae ut nemo.</p>

         </div>
       </div>

      </div>
      <div className="mt-3">
       <div className="max-w-sm mx-auto rounded-xl bg-white overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div>
            <img  className="h-48 w-full object-cover md:h-full md:w-48 "src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div className="p-8 text-black">
            <div className=" uppercase text-indigo-400 font-semibold"> An awesome card </div>
            <a href="#">TailwindCss is Amazing once you understand the power of it</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non similique repellat modi in voluptates quidem dolores magni. Dolor, praesentium ipsa.</p>
            
          </div>
        </div>
       </div>

      </div>
    </>
  );
}

export default App;
