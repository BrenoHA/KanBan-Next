import { ICard } from '@app/interfaces/tarefa';
import style from './style.module.css';

type card = {
  data: ICard;
};

const Card = ({ data }: card) => {
  return (
    <div className={style.container}>
      <header>
        <span className={style.label}></span>
        {/* #TODO change label colors */}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="avatar" />}
      {/* #TODO change avatars */}
    </div>
  );
};

export default Card;
