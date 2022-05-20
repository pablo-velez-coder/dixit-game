import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { useWindowSize } from 'hooks/useWindowSize';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

export const Chat = () => {
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [chats, setChats] = useState<string[]>([]);
  const [chatText, setChatText] = useState<string>('');
  const chatRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = (e:any) =>{
    e.preventDefault()
    setChats(prev=>[...prev, chatText])
    setChatText('')
  }

  useOnClickOutside(chatRef, () => setOpenChat(false));
  const {width} = useWindowSize()

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior:'smooth'})
  }, [chats]);

  return <div
  ref={chatRef}
  className={`${styles.Chat} ${openChat && styles.open}`}>
  {(!openChat && width < 768) ? (
    <div
    className={styles.ChatClosed}
    onClick={()=> width < 768 && setOpenChat(prev => !prev)}>💬</div>
  ) :  <>
     <div onClick={()=> width < 768 && setOpenChat(prev => !prev)}>
     Chats
     </div>
       <section className={styles.ChatMain}>
        {chats.map((chat, id)=>(
          <div ref={scrollRef} key={id}>{chat}</div>
        ))}
       </section>
       <form
       onSubmit={handleSend}
       className={styles.ChatForm}>
         <input
         onChange={e=> setChatText(e.target.value)}
         value={chatText}
         placeholder="send a message..." />
         <button>Send</button>
       </form>
    </>}

  </div>;
};