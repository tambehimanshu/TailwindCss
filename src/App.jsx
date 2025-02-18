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
          </div>
        </div>
        </div>
      </div>

      <div>
        <div className="p-6 max-w-base mx-auto rounded-xl  h-full items-center space-x-4 bg-slate-950 mt-5">
         <div>
            <img className="h-20 w-30"
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
        </div>
       </div>
      </div>
    </>
  );
}

export default App;
