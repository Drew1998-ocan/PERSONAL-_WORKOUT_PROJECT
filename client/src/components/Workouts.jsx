const Workouts = ({ work }) => {

  
  return (
    <div className="workouts shadow p-4 mb-5 bg-body rounded ">
      <div className="">
        <h4>{work.name}</h4>
        <hr />
        <p className="description">{work.description}</p>
        <p className="text-body-secondary text">what to do and the amount</p>
      </div>
      <div>
        <div className="my-2">
          <span className="border border-info py-1 px-3">{work.reps}</span>
          <span className="mx-3 ">:</span>
          <span>Reps</span>
        </div>

        <div className="my-3">
          <span className="border border-info py-1 px-3">{work.sets}</span>
          <span className="mx-3 ">:</span>
          <span>Sets</span>
        </div>
        <div className="my-2">
          <span className="border border-info py-1 px-3">{work.load}</span>
          <span className="mx-3 ">:</span>
          <span>Loads</span>
        </div>
        <div className=" mt-5">
          <button className="btn btn-danger">Delete workout</button>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
