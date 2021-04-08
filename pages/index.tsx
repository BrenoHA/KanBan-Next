import { ReactElement } from 'react';

import Header from '@app/components/Header';
import Board from '@app/components/Board';

const HomePage = (): ReactElement => {
  return (
    <>
      <Header />
      <Board />
    </>
  );
};

export default HomePage;
