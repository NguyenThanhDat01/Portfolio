import BookingCare from "./BookingCare";

import CommerceProject2 from "./E-Commerce.Project2";
import Portfolio from "./Portfolio";


const ProjectPage = () => {
       return (
        <div  style={{
         display: "grid",
  alignItems: "flex-start",
  minHeight: "70vh",
  padding: "0px 80px 10px 85px ",   // giảm từ 100 -> 40
 
   
      }}>
        <div style={{
    display: "flex",
    justifyContent: "center",
    gap: "100px",

    flexWrap: "wrap",
  }}>
    <Portfolio/>
      <BookingCare/>
     <CommerceProject2/>
       </div>
        </div>
    )

}

export default ProjectPage;