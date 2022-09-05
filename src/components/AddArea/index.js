import * as style from './styles';
import {MdAdd} from 'react-icons/md'
import React from 'react';

// import { Container } from './styles';

function AddArea() {
  return (
    <style.Container>
    <button type='submit'><MdAdd color='#FFF' size={20}/></button>
    <input type="text" placeholder='Adicione uma tarefa' />
    </style.Container>
  );
}

export default AddArea;