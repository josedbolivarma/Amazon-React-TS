import { Comment, CommentSender } from "../../components"
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listCommentsAsync } from '../../../redux/actions/actionComments';
import { getAuth } from "firebase/auth";

import styles from './CommentsContainer.module.scss';
import { Loader } from "../../../shared";

export const CommentsContainer = ({ product }: any ) => {

  const [ user, setUser ] = useState<null | any>( null );
  const [ isLoading, setIsLoading ] = useState<boolean>( true );
  
  const [ photoURL, setPhotoURL ] = useState("");

  const { comments } = useSelector(( store: any ) => store.comments);
  const dispatch = useDispatch();

  console.log( comments );

  const getComments = () => {
    setIsLoading( true );
    dispatch<any>( listCommentsAsync() );
    const auth = getAuth().currentUser;
    const avatar = user?.photoURL;
    setPhotoURL(avatar);
    setUser( auth );
    setIsLoading( false );
  };

  useEffect(() => {
    getComments();
  }, [ isLoading ]);

  return (
    <div className={ styles.commentsContainer }>
      <div className={ styles.commentsContainer__container }>
        <div className={ styles.commentsContainer__questionsBox }>
          <h4 className={ styles.commentsContainer__questions }>
            { 
            ( isLoading )
            ? <Loader />
            : comments.filter(( item: any ) => item.nombre! == product.nombre ).length }{" "}
            PREGUNTAS
          </h4>
        </div>
        <CommentSender 
        product={ product } 
        user={ user } 
        />
        { 
        ( comments.length === 0 || !product )
        ? <Loader />
        : comments
          .filter( ( item: any ) => item.nombre == product.nombre )
          .map(( item: any , index: number) => (
            <Comment
              key={index}
              username={item.username}
              profilePic={item.profilePic}
              message={item.message}
              timestamp={item.timestamp}
              product={ product }
            />
          ))}
      </div>
    </div>
  )
}