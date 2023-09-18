import React, { useContext, useState } from "react";
import { UseWorkContext } from "../hooks/workoutHook";

const WorkForm = () => {
  // const [items, setItems] = useState({
  //   name: "",
  //   reps: "",
  //   sets: "",
  //   load: "",
  //   description: "",
  // });
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [load, setLoad] = useState("");
  const [description, setDescription] = useState([]);
  const [error, setError] = useState(null);
  const {dispatch} = UseWorkContext();

  // when the form is changed

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setItems((prevValue) => {
  //     if (name === "name") {
  //       return {
  //         name: value,
  //         reps: prevValue.reps,
  //         sets: prevValue.sets,
  //         load: prevValue.loads,
  //         description: prevValue.description,
  //       };
  //     } else if (name === "reps") {
  //       return {
  //         name: prevValue.name,
  //         reps: value,
  //         sets: prevValue.sets,
  //         load: prevValue.loads,
  //         description: prevValue.description,
  //       };
  //     } else if (name === "sets") {
  //       return {
  //         name: prevValue.name,
  //         reps: prevValue.reps,
  //         sets: value,
  //         load: prevValue.loads,
  //         description: prevValue.description,
  //       };
  //     } else if (name === "load") {
  //       return {
  //         name: prevValue.name,
  //         reps: prevValue.reps,
  //         sets: prevValue.sets,
  //         load: value,
  //         description: prevValue.description,
  //       };
  //     } else if (name === "description") {
  //       return {
  //         name: prevValue.name,
  //         reps: prevValue.reps,
  //         sets: prevValue.sets,
  //         loads: prevValue.loads,
  //         description: value,
  //       };
  //     }
  //   });
  // };

  // submitting the form
  const onSubmitForm = async (event) => {
    event.preventDefault();
    const work = { name, reps, sets, load, description };
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(work),
      headers: { "content-Type": "application/json" },
    });

    const json = await res.json();
    if (!res.ok) {
      setError(json.error);
    }
    if (res.ok) {
      console.log("workout loaded successfully", json);
      console.log(json);
      setDescription("");
      setName("");
      setLoad("");
      setReps("");
      setSets("");
      setError(null);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="bg-$indigo-100">
      <h4>Enter more workouts </h4>

      {/* form for to enter the workouts */}
      <form onSubmit={onSubmitForm}>
        {/* name of the workout */}
        <div className="mb-3">
          <label htmlFor="workoutName" className="form-label">
            Workout-Name
          </label>
          <input
            onChange={(t) => {
              setName(t.target.value);
            }}
            name="name"
            type="text"
            className="form-control"
            id="workoutName"
            placeholder="bench press"
            value={name}
          />
        </div>

        {/* reps */}
        <div className="mb-3">
          <label htmlFor="workoutReps" className="form-label">
            Reps
          </label>
          <input
            onChange={(t) => {
              setReps(t.target.value);
            }}
            value={reps}
            type="text"
            name="reps"
            className="form-control"
            id="workoutReps"
            placeholder="20"
          />
        </div>

        {/* sets */}
        <div className="mb-3">
          <label htmlFor="workoutSets" className="form-label">
            Sets
          </label>
          <input
            onChange={(t) => {
              setSets(t.target.value);
            }}
            value={sets}
            type="text"
            name="sets"
            className="form-control"
            id="workoutSets"
            placeholder="3"
          />
        </div>
        {/* Load */}
        <div className="mb-3">
          <label htmlFor="workoutLoad" className="form-label">
            Load
          </label>
          <input
            onChange={(t) => {
              setLoad(t.target.value);
            }}
            value={load}
            type="text"
            name="load"
            className="form-control"
            id="workoutLoad"
            placeholder="20"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="workoutDescription" className="form-label">
            Workout Descriptions
          </label>
          <textarea
            name="description"
            onChange={(t) => {
              setDescription(t.target.value);
            }}
            className="form-control"
            id="workoutDescription"
            rows="3"
            value={description}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>{error}</div>
      </form>
    </div>
  );
};

export default WorkForm;
