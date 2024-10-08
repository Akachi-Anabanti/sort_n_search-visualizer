import { motion } from "framer-motion";
import "../../styles/Sorting.css";

const springAnim = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

function Bars({ arr }) {
  return (
    <div className="bars" style={{ marginTop: "30px", marginBottom: "20px" }}>
      {arr.map((element, idx) => (
        <motion.div
          key={element.id}
          layout
          transition={springAnim}
          className={`bar ${element.style}`}
          id={element.id}
          style={{ height: element.value * 3, order: idx }}
        >
          {element.value}
        </motion.div>
      ))}
    </div>
  );
}

export default Bars;
