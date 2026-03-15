

import Skill from "./Skill";
import Text from "./Text";

import detdet from "../../assets/images/detdet.jpg";

const HomePage = () => {


  return (
    <>
    <div
      style={{
         display: "grid",
  gridTemplateColumns: "1fr 2fr",
  alignItems: "flex-start",
  minHeight: "70vh",
  padding: "50px 80px 0 100px",   // giảm từ 100 -> 40
 
  backgroundSize: "cover",
  backgroundPosition: "center",
   
      }}
    >
      {/* LEFT TEXT */}
      <div
        style={{
            display: "flex",
    justifyContent: "center",
    marginTop: "20px"
          
        }}
      >
        <img
        src={detdet}
          style={{ width: "350px" ,borderRadius: "15px", marginLeft:"80px"}}
        />
    </div>
      {/* RIGHT IMAGE */}
       <div style={{
             
              padding: "40px 40px",
              borderRadius: "15px",
              display: "inline-block",
           
               marginLeft: "70px"
             
    
       }} >
        <Text/>
    </div>
     
     </div>
        <div  >
     <Skill/>
   </div>
 
     
     </>
  );
};

export default HomePage;