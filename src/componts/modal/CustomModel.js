import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="bottom" ref={ref} {...props} />;
});

export default function CustomModal({modalOpen, onOpenModal,onCloseModal, children }) {

  return (
    <div>
      <Dialog
        open={modalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onCloseModal}
        aria-describedby="alert-dialog-slide-description"
      >
        {children}
      </Dialog>
    </div>
  );
}