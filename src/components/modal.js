import React from 'react';

const Modal = ({ handleClose, show, children }) => { // Instead of this, you can use this.props.handleClose
    const showHideModal = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideModal}>
            <section className='modal-main'>
                {children}
                <button onClick={handleClose} className='closeButtton'>X</button>
            </section>
        </div>
    );
}

export default Modal;

