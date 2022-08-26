import { BsFillPersonFill } from 'react-icons/bs';
import { addCommentAsync } from '../../../redux/actions/actionComments';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './CommentSender.module.scss';

export const CommentSender = ( {user, product}: any ) => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
  
    const date = new Date();
  
    const handleSubmit = ( e: any ) => {
      e.preventDefault();
      
      dispatch<any>( addCommentAsync({
        message: input,
        timestamp: date,
        profilePic: user?.photoURL || '',
        username: user?.email || '',
        nombre: product?.nombre
      }));

      setInput('');
    }
  
  return (
    <div className={ styles.commentSender }>
      <div className={ styles.commentSender__top }>
        {/* <Avatar src={user?.photoURL}/> */}
        
        {
            !user?.photoURL
            ? <img 
            src='https://www.hallofseries.com/wp-content/uploads/2020/05/harveyspec-img-1.jpg'
            className='avatar'
            alt='Avatar'
            />
            : ''
        }
        <form className={ styles.commentSender__form } onSubmit={ handleSubmit }>
          <input
          value={ input }
          onChange={(e) => setInput( e.target.value )}
          className={ styles.commentSender__input }
          placeholder='Déjanos tu opinión...'
          >
          </input>

          <button 
          className={ styles.commentSender__inputSubmit } 
          type='submit'>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}