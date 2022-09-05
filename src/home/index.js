import React from 'react';
import AddArea from '../components/AddArea';
import ListItem from '../components/ListItem';

import * as style from './styles';

function home() {
  return (
    <style.Container>
      <style.Area>
        <style.Header>Lista de tarefas</style.Header>
        <AddArea/>
        <style.ListArea>

        <ListItem/>
        </style.ListArea>
      </style.Area>
    </style.Container>
  );
}

export default home;