
//sudah tidak terpakai karana langsung ke page!
import React, { Children } from "react";

import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center min-w-100">
      <RegisterPage />
    </div>
  );
}

export default App;

//component dengan class dan extend react.Componen!
// class Button extends React.Component{
//   render() {
//     return(
//       <button className='h-10 px-6 font-semibold rounded-md bg-black text-white'>
//       buy now
//     </button>
//     )
//   }
// }

//penggunaan componen dengan function!
// function ButtonGray(){
//   return(
//     <button className='h-10 px-6 font-semibold rounded-md bg-gray-200 text-white'>
//       testing
//     </button>
//   );
// }
