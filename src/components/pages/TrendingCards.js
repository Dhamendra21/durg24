// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Newspage from "./Newspage";

// const event = new Date();
// const Event = new Date();
// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };

// function TrendingCard(Props) {
//   // console.log(Props)
 
//   const navigate = useNavigate();
//   const [showNewspage, setShowNewspage] = useState(false);
//   const headlineClick = useRef();

//   function targetHandler() {
//     setShowNewspage(true);
//     navigate("/newspage"); // Navigate to the "/newspage" route
//   }

//   if (showNewspage) {
//     return (
//       <Newspage img={Props.img} headline={Props.headline} description={Props.description}  />
//     );
//   }

//   return (
//     <div className="card mb-3  border-start-0 border-end-0 text-start">
//       <div className="m-0 row g-0">
//         <div className="col-md-4">
//           <img
//             src={Props.img}
//             className="img-fluid rounded-start"
//             alt="..."
//           />
//         </div>
//         <div className="col-md-8">
//           <div className="card-body">
//             <h5
//               className="card-title"
//               ref={headlineClick}
//               onClick={targetHandler}
//             >
//               {Props.headline}
//             </h5>
//             <div className="overflow-hidden " style={{ height: "78px" }}>
//               <p className="card-text">{Props.description}</p>
//             </div>
//             <p className="card-text">
//               <small className="text-body-secondary">
//                 Last updated {Event.toLocaleDateString("hi", options)}{" "}
//                 {event.toLocaleTimeString("en-US")}
//               </small>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TrendingCard;



// render Newspage componenet
import { useRef, useState } from "react";
import Newspage from "./Newspage";

const event = new Date();
const Event = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function TrendingCard(Props) {
  const [showNewspage, setShowNewspage] = useState(false);
  const headlineClick = useRef();

  function targetHandler() {
    setShowNewspage(true);
    console.log(Props)
  }

  if (showNewspage) {
    return <Newspage img={Props.img} headline={Props.headline} description={Props.description}  />;
  }

  return (
    <div class="card mb-3  border-start-0 border-end-0 text-start">
      <div class="m-0 row g-0">
        <div class="col-md-4">
          <img src={Props.img} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" ref={headlineClick} onClick={targetHandler}>
              {Props.headline}
            </h5>
            <div class="overflow-hidden " style={{ height: "78px" }}>
              <p class="card-text">{Props.description}</p>
            </div>
            <p class="card-text">
              <small class="text-body-secondary">
                Last updated{" "}
                {Event.toLocaleDateString("hi", options)}{" "}
                {event.toLocaleTimeString("en-US")}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;



