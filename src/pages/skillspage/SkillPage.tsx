import FrontEnd from "./FrontEnd";
import Libraries from "./Libraries";
import Tool from "./Tool";


const SkillPage = () => {
    return (
        <div  style={{
         display: "grid",
  alignItems: "flex-start",
  minHeight: "70vh",
  padding: "0px 80px 10px 85px ",   // giảm từ 100 -> 40
 
   
      }}>
         <FrontEnd/>
        <Tool/>
        <Libraries/>
        </div>
    )

}
export default SkillPage;