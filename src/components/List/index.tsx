import { MdAdd } from 'react-icons/md';
import Card from '@app/components/Card';

import { ITarefa, ICard } from '@app/interfaces/tarefa';

import style from './style.module.css';

type tarefa = {
  data: ITarefa;
};

const List = ({ data }: tarefa) => {
  return (
    <div
      className={
        !data.done
          ? `${style.container}`
          : `${style.container} ${style.containerDone}`
      }
    >
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </ul>
    </div>
  );
};

export default List;
