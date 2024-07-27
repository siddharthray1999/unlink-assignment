import React from "react";
import falcon from "../Assets/falcon.jpg";
import { useState } from "react";
import { X } from "lucide-react";
const Rockets = () => {
  const [aboutRocket, setAboutRocket] = useState(false);
  return (
    <>
      {aboutRocket ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[1000px] h-[700px] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <span className="text-2xl font-semibold">Falcon 9</span>
                  <span
                    onClick={() => setAboutRocket(false)}
                    className="cursor-pointer"
                  >
                    <X />
                  </span>
                </div>
                <hr />
                <div className="mt-5 ml-5 text-2xl font-semibold">Overview</div>
                <div className="flex justify-center gap-5 mt-5">
                  <div>
                    <img
                      src={falcon}
                      className="w-[200px] h-[300px] rounded-lg"
                    />
                  </div>
                  <div className="w-[700px]">
                    <div className="text-gray-500">DESCRIPTION</div>
                    <div>
                      Falcon 9 is a two-stage rocket designed and manufactured
                      by SpaceX for the reliable and safe transport of
                      satellites and the Dragon spacecraft into orbit.
                    </div>
                  </div>
                </div>
                <div className="mt-5 ml-5 text-2xl font-semibold">Photos</div>
                <div className="mt-5 flex flex-wrap gap-5 m-5">
                  <img src={falcon} className="w-[200px] h-[150px]" alt="" />
                  <img src={falcon} className="w-[200px] h-[150px]" alt="" />
                  <img src={falcon} className="w-[200px] h-[150px]" alt="" />
                  <img src={falcon} className="w-[200px] h-[150px]" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="flex justify-center pt-10">
        <div className="bg-[#00000080] w-[850px] h-[600px]  rounded-xl flex flex-wrap gap-5 p-5 ">
          <div>
            <div className="text-white text-xl">Falcon 9</div>
            <div>
              <img
                src={falcon}
                className="w-[200px] h-[300px] zoom-image rounded-lg"
                onClick={() => setAboutRocket(true)}
              />
            </div>
            <button className="bg-green-500 text-[white] p-2 mt-2 rounded-lg">
              Status : Active
            </button>
          </div>
          <div>
            <div className="text-white text-xl">Falcon 9</div>
            <div>
              <img src={falcon} className="w-[200px] h-[300px] zoom-image" />
            </div>
            <button className="bg-green-500 text-[white] p-2 mt-2 rounded-lg">
              Status : Active
            </button>
          </div>
          <div>
            <div className="text-white text-xl">Falcon 9</div>
            <div>
              <img src={falcon} className="w-[200px] h-[300px] zoom-image" />
            </div>
            <button className="bg-green-500 text-[white] p-2 mt-2 rounded-lg">
              Status : Active
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rockets;
