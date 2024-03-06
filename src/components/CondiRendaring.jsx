const LoginStatusButtion = (status2) => {
  if (status2) {
    return <button>Logout</button>;
  } else {
    return <button>Login</button>;
  }
};
const CondiRendaring = () => {
  return (
    <div>
      <h3>COnditional Rendaring Using Immediately Invocked function</h3>
      {LoginStatusButtion(false)}
    </div>
  );

//   const status = true;

//   if (status == true) {
//     return (
//       <div>
//         <hr />
//         <h4>COnditional Rendaring Explore</h4>
//         <ol>
//           <li>COnditional Rendaring if Else Statement</li>
//           <li>COnditional Rendaring Uing Switch Statemet</li>
//           <li>COnditional Rendaring Using Ternary Operator</li>
//           <li>COnditional Rendaring Using Logical &&</li>
//           <li>COnditional Rendaring Using Immediately Invocked function</li>
//           <li>
//             ----------------------------------------------------------------------------------------
//           </li>
//         </ol>
//         <h3>COnditional Rendaring using if Else Statement</h3>
//         <h5>If Status true the the page will visible</h5>
//         <button>Logout</button>
//         <hr />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h5>If Status true the the page will hide</h5>
//         <button>Submit</button>
//       </div>
//     );
//   }
};

export default CondiRendaring;
