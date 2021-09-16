import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        // drag
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>{text}</h2>
        {text === "REGISTER" && <form>
          <div className="field">
            <input type="text" name="fullname" id="fullname" required />
            <label for="fullname">Name</label>
          </div>

          <div className="field">
            <input type="email" name="email" id="email" required />
            <label for="email">Email</label>
          </div>

          <div className="field">
            <input type="password" name="password" id="password" required />
            <label for="password">Password</label>
          </div>
        </form>}
        {text === "LOGIN" && <form>
          <div className="field">
            <input type="email" name="email" id="email" required />
            <label for="email">Email</label>
          </div>

          <div className="field">
            <input type="password" name="password" id="password" required />
            <label for="password">Password</label>
          </div>
        </form>}
        <motion.button
          className="close-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
        >
          Close
        </motion.button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
