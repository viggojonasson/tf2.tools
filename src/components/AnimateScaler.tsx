import { FC } from "react";
import { motion } from "framer-motion";

const AnimateScaler: FC = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateScaler;
