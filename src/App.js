import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Modal from './components/Modal/index';
import Navbar from './components/Navbar/index';


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const closeLogin = () => setLoginModalOpen(false);
  const openLogin = () => setLoginModalOpen(true);

  return (
    <div>
      <header>
        <h1>OPC</h1>
        <Navbar
          onClickRegister={() => (modalOpen ? close() : open())}
          onClickLogin={() => (loginModalOpen ? closeLogin() : openLogin())}
        />
      </header>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} text="REGISTER" />}
        {loginModalOpen && <Modal modalOpen={loginModalOpen} handleClose={closeLogin} text="LOGIN" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
