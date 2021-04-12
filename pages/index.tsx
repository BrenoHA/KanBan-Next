import { ReactElement } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Header from '@app/components/Header';
import Board from '@app/components/Board';

const HomePage = (): ReactElement => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
    </DndProvider>
  );
};

export default HomePage;
