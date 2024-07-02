import propTypes from 'prop-types'
import './Modal.css'

function Modal({show, onClose}) {

    if(!show){ return null }

  return (
    <div className="modal-bg">
      <div className="modal">
        <h2>Delete comment</h2>
        <p>Are you sure you want to delete this comment? This will remove this comment and can&apos;t be undone</p>
        <div className='modal-btns'>
            <button className="confirm-btn no" onClick={onClose}>No, cancel</button>
            <button className="confirm-btn yes" onClick={onClose} >Yes, delete</button>
        </div>        
      </div>
    </div>
  )
}
Modal.propTypes={
    show: propTypes.bool,
    onClose: propTypes.func
}
export default Modal
