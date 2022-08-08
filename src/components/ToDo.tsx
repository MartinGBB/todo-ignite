import { PlusCircle } from 'phosphor-react';

import styles from './ToDo.module.css';
import logo from '../assets/logo.svg';

export function ToDo() {
  return (
    <div className={styles.toDo}>
      <header>
        <img src={logo} alt="logo todo" />
      </header>

      <div className={styles.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button
          type="button"
        >
          Criar
          <PlusCircle size={16} />
        </button>
      </div>
    </div>
  )
}
