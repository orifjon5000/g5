import React, { useContext } from "react";
import { MahsulotlarContext } from "../../Context";
export const Mahsulotlar = (props) => {
  const [value] = useContext(MahsulotlarContext);
  return (
    <div>
      <h1>Mahsulotlar:{value.length} </h1>
    </div>
  );
};
export default Mahsulotlar;

// const ReactHooks = (props) => {
//   const [counter, setCounter] = useState(props.count);
//   const [status, setStatus] = useState("student");

//   useEffect(() => {
//     setCounter(props.count);
//   }, [props.count]);
//   return (
//     <div>
//       <h2>React {counter}</h2>
//       <h2>React {status}</h2>
//       <button onClick={() => setCounter(counter + 1)}>+</button>
//       <br />
//       <input
//         type="text"
//         value={status}
//         onChange={(e) => {
//           setStatus(e.target.value);
//         }}
//       />
//     </div>
//   );
// };
// export default ReactHooks;
