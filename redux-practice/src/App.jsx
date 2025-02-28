import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/slices/index.js";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  return (
    <>
      <div className="m-80 h-10">
        <div className="flex items-center flex-wrap justify-center gap-10 m-10">
          <div>
            <button onClick={handleIncrementClick}
              className="bg-transparent hover:bg-blue-500 
          text-blue-700 font-semibold hover:text-white py-2 px-4
           border border-blue-500 hover:border-transparent rounded"
            >
              Increase
            </button>
          </div>
          <div>
            <h1>Count : {" "} {count} {" "} </h1>
          </div>
          <div>
            <button onClick={handleDecrementClick}
              className="bg-transparent hover:bg-blue-500 
          text-blue-700 font-semibold hover:text-white py-2 px-4
           border border-blue-500 hover:border-transparent rounded"
            >
              Decrease
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center m-5">
          <button onClick={handleResetClick}
            className="bg-transparent hover:bg-blue-500 
          text-blue-700 font-semibold hover:text-white py-2 px-4
           border border-blue-500 hover:border-transparent rounded"
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
