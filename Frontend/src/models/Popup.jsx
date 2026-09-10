import React, { useState, useEffect } from 'react';

export function Success({ value, onClose }) {
  const [show, setShow] = useState(false);


  useEffect(() => {
    if (value !== undefined) {
      setShow(value);
    }
  }, [value]);

  const handleClose = () => {
    setShow(false);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Modal with Bootstrap classes */}
      <div
        className={`modal fade ${show ? 'show d-block' : ''}`}
        style={{ display: show ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.5)' }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {value ? '✅ Success!' : '❌ Error!'}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                {value
                  ? 'Item added successfully!'
                  : 'Something went wrong. Please try again.'}
              </p>
            </div>
            <div className="modal-footer">
              <button
                className={`btn ${value ? 'btn-success' : 'btn-danger'}`}
                onClick={handleClose}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      
      {show && (
        <div
          className="modal-backdrop fade show"
          onClick={handleClose}
        ></div>
      )}
    </>
  );
}

export function DeletePop({ value, onShow, onDelete }) {


  function handleDeleteFalse() {
    onShow(false);

  }

  function handleDeleteTrue() {
    onDelete();
    onShow(false);
  }

  return (

    <>

     


      <div className={`modal fade ${value ? 'show' : ''}`} id="staticBackdrop"
        style={{ display: value ? 'block' : 'none' }} data-bs-backdrop="static" data-bs-keyboard="false">


        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Delete </h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => handleDeleteFalse()}  // Close on click
              ></button>
            </div>
            <div className="modal-body">
              You want to Delete
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleDeleteFalse()}
              >
                Close
              </button>
              <button type="button" className="btn btn-danger" onClick={() => handleDeleteTrue()}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}