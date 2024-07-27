import { useEffect } from "react";
import rocket from "../Assets/rocket.jpg";
import tworocket from "../Assets/tworocket.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets } from "../Features/RocketsSlice";

const Main = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const firstRocket = rockets.length > 0 ? rockets[0] : null;

  return (
    <div className="">
      <div className="flex flex-wrap gap-5 p-5 pl-14 ">
        <div className="bg-[#00000080] w-[420px] h-[340px] rounded-xl p-5">
          <div className="text-white font-semibold text-xl">
            upcoming launch
          </div>
          <div className="mt-5 flex justify-between ">
            <div>
              <div className="">
                <div className="text-sm text-gray-500 uppercase">
                  MISSION NAME
                </div>
                <div className="text-white text-lg">
                  {firstRocket?.mission_name}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase">Rocket</div>
                <div className="text-white text-lg">
                  {firstRocket?.rocket?.rocket_name}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase">
                  Flight Number
                </div>
                <div className="text-white text-lg">
                  {firstRocket?.flight_number}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase">
                  Time (UTC)
                </div>
                <div className="text-white text-lg">
                  {firstRocket?.launch_date_utc}
                </div>
              </div>
            </div>
            <div>
              <div className=" bg-gray-700 w-[130px] h-[130px] rounded-lg">
                logo
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase">Launchpad</div>
                <div className="text-white text-lg">ufdfd-44</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#00000080] w-[420px] h-[340px] rounded-xl p-5">
          <div className="text-white font-semibold text-xl ">
            launch Facilities
          </div>
          <div className="mt-5 flex flex-col gap-5">
            <div
              className="w-[380px] h-[120px] rounded-xl p-2 flex flex-col gap-2 "
              style={{
                backgroundImage: `url(${rocket})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex justify-between">
                <div>
                  <div className="text-white text-xl ">cape canaeral</div>
                  <div className="text-gray-600 text-sm">LC-39A & SLC-40</div>
                </div>
                <div className="text-right">
                  <div className="text-white text-sm ">Regoin</div>
                  <div className="text-gray-600 text-xl">Florida</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-sm text-gray-600">TEMP</div>
                  <div className="text-white text-xl">34C</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">WEATHER</div>
                  <div className="text-white text-xl">34C</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">WIND</div>
                  <div className="text-white text-xl">34C</div>
                </div>
              </div>
            </div>
            <div
              className="w-[380px] h-[120px] rounded-xl p-2 flex flex-col gap-2 "
              style={{
                backgroundImage: `url(${tworocket})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex justify-between">
                <div>
                  <div className="text-white text-xl ">cape canaeral</div>
                  <div className="text-gray-600 text-sm">LC-39A & SLC-40</div>
                </div>
                <div className="text-right">
                  <div className="text-white text-sm ">Regoin</div>
                  <div className="text-gray-600 text-xl">Florida</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-sm text-gray-600">TEMP</div>
                  <div className="text-white text-xl">34C</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">WEATHER</div>
                  <div className="text-white text-xl">34C</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">WIND</div>
                  <div className="text-white text-xl">34C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#00000080] w-[420px] h-[340px] rounded-xl p-5">
          <div className="text-white font-semibold text-xl">
            Previous launch
          </div>
          <div className="mt-5 flex justify-between ">
            <div>
              <div className="">
                <div className="text-sm text-gray-500 uppercase">
                  MISSION NAME
                </div>
                <div className="text-white text-lg">ufdfd-44</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase">Rocket</div>
                <div className="text-white text-lg">ufdfd-44</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase">
                  Flight Number
                </div>
                <div className="text-white text-lg">ufdfd-44</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase">
                  Time (UTC)
                </div>
                <div className="text-white text-lg">ufdfd-44</div>
              </div>
            </div>
            <div>
              <div className=" bg-gray-700 w-[130px] h-[130px] rounded-lg">
                logo
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase">Launchpad</div>
                <div className="text-white text-lg">ufdfd-44</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#00000080] w-[420px] h-[340px] rounded-xl p-5 flex flex-col justify-between">
          <div className="text-white text-xl">Starlink</div>
          <div className="text-white text-center">
            There are currently 3268 active Starlink satellites on the low Earth
            orbit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
