import { PlusCircle } from 'phosphor-react';

import logo from '../assets/logo.svg';
import clipboard from '../assets/clipboard.svg';
import styles from './ToDo.module.css';

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

      <div className={styles.contentTasks}>
        <div className={styles.countTask}>
          <p>Tarefas criadas <span>0</span></p>
          <p>Concluídas <span>0</span></p>
        </div>

        <div className={styles.tasks}>
          <img src={clipboard} alt="clipboard" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
}
