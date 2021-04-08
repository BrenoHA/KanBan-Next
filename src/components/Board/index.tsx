import List from '@app/components/List';
import { ICard } from '@app/interfaces/tarefa';

import { loadLists } from '@app/services/api';

import style from './style.module.css';

const lists = loadLists();

const Board = () => {
  return (
    <div className={style.container}>
      {lists.map((tarefa) => (
        <List key={tarefa.title} data={tarefa} />
      ))}
    </div>
  );
};

export default Board;
