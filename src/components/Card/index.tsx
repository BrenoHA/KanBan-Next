import { ICard } from '@app/interfaces/tarefa';
import style from './style.module.css';
import { useDrag, useDrop } from 'react-dnd';

type card = {
  data: ICard;
};

const Card = ({ data }: card) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'CARD',
    // item: { type: 'CARD' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
      {isDragging ? (
        <div
          className={`${style.container} ${style.containerIsDragging}`}
          ref={dragRef}
        >
          <header>
            <span className={style.label}></span>
          </header>
          <p>{data.content}</p>
          {data.user && <img src={data.user} alt="avatar" />}
        </div>
      ) : (
        <div className={style.container} ref={dragRef}>
          <header>
            <span className={style.label}></span>
          </header>
          <p>{data.content}</p>
          {data.user && <img src={data.user} alt="avatar" />}
        </div>
      )}
    </>
  );
};

// TODO change label colors */
// TODO change avatars */
export default Card;
