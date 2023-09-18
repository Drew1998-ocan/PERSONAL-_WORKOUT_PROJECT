import { useEffect, useState } from "react";
import WorkForm from "../components/WorkoutForm";
import Workouts from "../components/Workouts";
import { UseWorkContext } from "../hooks/workoutHook";



const Home = () => {
  // const [workouts, setWorkouts] = useState([]);
  const { workouts, dispatch } = UseWorkContext();

  useEffect(() => {

    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts/");
      console.log(res);
      const json = await res.json();
      if (res.ok) {
        
        
        console.log({
          message: "data is being fetched successfully",
          data: json,
        });
        dispatch({ type: "FETCH_WORKOUT", payload: json });
        // setWorkouts(json);
      
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h3 className="text-body-secondary my-5 text-center">
        Start your Workouts today
      </h3>

      <div className="">
        <div className="row">
          <div className="col-8">
          <div className="row">
            {workouts.map(workout => (
              <div className="col-6">
                <Workouts key={workout._id} work={workout}/>
              </div>
            ))}
          </div>
      
          </div>
          <div className="col-4">
            <WorkForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
