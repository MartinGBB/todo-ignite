import { PlusCircle } from 'phosphor-react';

import logo from '../assets/logo.svg';
import clipboard from '../assets/clipboard.svg';
import styles from './ToDo.module.css';
import { Task } from './Task';

export function ToDo() {
const taskEmpty = false;
const tasksJson = [
  {
    id: 123,
    task: 'comer biscoito',
    isComplete: false
  },
  {
    id: 456,
    task: 'fazer compras',
    isComplete: false
  },
  {
    id: 789,
    task: 'estudar React',
    isComplete: false
  },
  {
    id: 101,
    task: 'ir para o trabalho',
    isComplete: true
  },
  {
    id: 121,
    task: 'comer biscoito',
    isComplete: true
  },
];

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

      {
        taskEmpty
        ? (
          <div className={styles.tasks}>
            <img src={clipboard} alt="clipboard" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )
        : (
          tasksJson.map((task) => {
            return (
              <Task 
                key={ task.id }
                content={task} 
              />
            );
          })
        )
      }
 
      </div>
    </div>
  )
}
