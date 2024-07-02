import propTypes from 'prop-types'


function AddComment({image, type, isAddReply}) {
  const classnam = isAddReply ? 'add-comment-container isreply'  : 'add-comment-container'

  return (
      <div className={classnam}>
        <img src={image} alt="" className='ava avatar' />
        <textarea placeholder="Add a comment..." className='textarea' rows={3} ></textarea>
        <button type="submit" className='submit-btn' >{type}</button>
    </div>    
  )
}

AddComment.propTypes={
    image: propTypes.string,
    type: propTypes.string,
    isAddReply: propTypes.bool
}

export default AddComment
