import Comment from './Comment'
import AddComment from './AddComment'
import Footer from './Footer'
import data from './data.json'
import Modal from './Modal'
import { useState, createContext  } from 'react'


export const UserContext = createContext();

function App() {

  const user1 = data.comments[0]; 
  const user2 = data.comments[1];
  const reply1 = data.comments[1].replies[0];
  const reply2 = data.comments[1].replies[1];

  const [showModal, setShowModal] = useState(false);



  return (
    <div >
      <Comment score={user1.score} name={user1.user.username} time={user1.createdAt} content={user1.content} 
               image={user1.user.image.png} uimg={reply2.user.image.png} />
      <Comment score={user2.score} name={user2.user.username} time={user2.createdAt} content={user2.content} 
               image={user2.user.image.png} uimg={reply2.user.image.png}  />
      <Comment score={reply1.score} name={reply1.user.username} time={reply1.createdAt} content={reply1.content} 
               image={reply1.user.image.png} replyto={'@'+reply1.replyingTo} uimg={reply2.user.image.png} isReply={true} />
      <UserContext.Provider value={setShowModal}>
              <Comment score={reply2.score} name={reply2.user.username} time={reply2.createdAt} content={reply2.content} 
               image={reply2.user.image.png} replyto={'@'+reply2.replyingTo} you={true} uimg={reply2.user.image.png} isReply={true}  />
      </UserContext.Provider>
      
      <Modal show={showModal} onClose={() => setShowModal(false)} />
      <AddComment image={reply2.user.image.png} type='send' />
      <Footer />
    </div>
  )
}

export default App
