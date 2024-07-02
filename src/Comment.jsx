import propTypes from 'prop-types'

import iconPlus from '/images/icon-plus.svg'
import iconMinus from '/images/icon-minus.svg'
import iconReply from '/images/icon-reply.svg'
import iconDelete from '/images/icon-delete.svg'
import iconEdit from '/images/icon-edit.svg'
import AddComment from './AddComment.jsx'

import {useState, useContext, useCallback, useRef, useEffect} from 'react';
import {UserContext} from './App.jsx'

 function Comment(props) {

    const [showReply, setShowReply] = useState(false);
    const commentContent = useRef();
    const [editable, setEditable] = useState(false);

    const handleReply = useCallback(() => {
      setShowReply((previousState) => !previousState)
    }, [])
    const handleEdit = useCallback(async () => {
      setEditable((previousState) => !previousState)          
    }, [])
    
    useEffect( () => {
      commentContent.current.style.border = editable ? '1px solid black' : 'none'
    }, [editable] )     
     
    const setShowModal = useContext(UserContext);
   
    const {score, content, image, name, time, replyto, you=false, uimg, isReply} = props;
    const youtag = <p className='you'>you</p>;
    const replytag =<><img src={iconReply} alt='' />
              <a href='#' className='reply' onClick={handleReply}>Reply</a></>;
    const edittag = <>
              <div className='edit'>
                <img src={iconDelete} alt='' />
                <a href='#' className='delete' onClick={() => setShowModal(true)}>Delete</a>
              </div>
              <div className='edit'>
                <img src={iconEdit} alt='' />
                <a href='#' className='reply' onClick={handleEdit} >Edit</a>
              </div>
              </>;
    const update = <button className='update-btn'>update</button>
    const classna = isReply ? 'comment-container isreply'  : 'comment-container'
    
  return (
    <div className='container'>
    <div className={classna}>
      <div className="comment-status">
        <img src={iconPlus} alt='' />
        <p>{score}</p>
        <img src={iconMinus} alt='' />
      </div>

      
            <div className='user'>
              <img alt='' className='avatar' src={image} />
              <p className='name'>{name}</p> {you ? youtag : null}
              <p className='time'>{time}</p>
            </div>

            <div className='btns'>
            {you ? edittag : replytag}
            </div>
        <div className='content-container'>
        <p className='content' contentEditable={editable} suppressContentEditableWarning={true} ref={commentContent}>
          <span className='replyto'>{replyto}</span>
          {content}</p>

        {editable && update }
        </div>
        
      
    </div>
    {showReply ? <AddComment type='reply' image={uimg} isAddReply={true} /> : null}
    </div>
    
  );
}
Comment.propTypes = {
    content: propTypes.string,
    score: propTypes.number,
    image: propTypes.node,
    name: propTypes.string,
    time: propTypes.string,
    replyto: propTypes.string,
    you: propTypes.bool,
    uimg: propTypes.node,
    isReply: propTypes.bool
}

export default  Comment