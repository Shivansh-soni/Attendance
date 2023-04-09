import axios from "axios";
import React, { useState } from "react";

const Hero = () => {
  const [finalData, setFinalData] = useState([]);
  const [uniqueValues, setUniqueValues] = useState([]);

  const [userData, setUserData] = useState({
    name: "",
    rollNumber: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    finalData.push(userData);
    axios
      .post("http://localhost:8080/data", userData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div data-theme="night">
      <div className="App flex flex-col lg:flex-row lg:mt-20 justify-center items-center gap-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body flex felx-col items-center">
            <h2 className="card-title  text-primary mb-6">Attendance</h2>
            <div className="card-actions justify-center items-center flex-col gap-5  ">
              <form
                action=""
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    className="input input-bordered input-accent w-full max-w-xs"
                    placeholder="Type Here"
                    type="text"
                    value={userData.name}
                    onChange={(e) => {
                      setUserData({ ...userData, name: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Roll Number </span>
                  </label>
                  <input
                    className="input input-bordered input-accent w-full max-w-xs"
                    placeholder="Type Here"
                    type="number"
                    value={userData.rollNumber}
                    onChange={(e) => {
                      if (finalData.length === 0) {
                        setUserData({
                          ...userData,
                          rollNumber: e.target.value,
                        });
                      } else {
                        finalData.map((data) => {
                          if (data.rollNumber !== e.target.value) {
                            setUserData({
                              ...userData,
                              rollNumber: e.target.value,
                            });
                          } else {
                            alert("d");
                          }
                        });
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Check In Time</span>
                  </label>
                  <input
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="time"
                    placeholder="Check-in Time"
                    value={userData.time}
                    onChange={(e) => {
                      setUserData({ ...userData, time: e.target.value });
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  {" "}
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="card-body items-center text-center">
          <h2 className="card-title">Records </h2>
          <div className="overflow-x-auto">
            <table className="table w-2/12">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>RollNo.</th>
                  <th>CheckIn</th>
                </tr>
              </thead>
              {finalData.map((record) => {
                return (
                  <tbody>
                    <tr className="mb-2">
                      <th></th>
                      <td>{record.name}</td>
                      <td>{record.rollNumber}</td>
                      <td>{record.time}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setFinalData([]);
              window.location.reload();
            }}
          >
            CLEAR TABLE
          </button>
          <p className="text-xl text-center">
            Total No. Of Students {finalData.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
