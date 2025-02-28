import React from "react";

const App = () => {
  return (
    <>
      <div className="m-80 h-10">
        <div className="flex items-center flex-wrap justify-center gap-10 m-10">
          <div>
            <button
              className="bg-transparent hover:bg-blue-500 
          text-blue-700 font-semibold hover:text-white py-2 px-4
           border border-blue-500 hover:border-transparent rounded"
            >
              Increase
            </button>
          </div>
          <div>
            <h1>Count : </h1>
          </div>
          <div>
            <button
              className="bg-transparent hover:bg-blue-500 
          text-blue-700 font-semibold hover:text-white py-2 px-4
           border border-blue-500 hover:border-transparent rounded"
            >
              Decrease
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center m-5">
          <button
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
