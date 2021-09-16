import { motion } from 'framer-motion';
function Navbar ({onClickLogin, onClickRegister}) {

  return (
    <div>
      <nav>
        <motion.button
          className='save-button'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClickRegister}
        >
          Register
        </motion.button>

        <motion.button
          className='save-button'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClickLogin}
        >
          Login
        </motion.button>
      </nav>
    </div>
  );
}

export default Navbar;
