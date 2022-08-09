import { PlusCircle } from 'phosphor-react';

import { ChangeEvent, FormEvent, useState } from 'react';

import { Task } from './Task';
import styles from './ToDo.module.css';
import logo from '../assets/logo.svg';
import clipboard from '../assets/clipboard.svg';

export function ToDo() {
const tasksJson = [
  {
    id: '456',
    task: 'Nova Tarefa',
    isComplete: false
  },
];

const [tasks, setTasks] = useState(tasksJson);
const [newTasks, setNewTasks] = useState('');

function handleComment(event: FormEvent) {
  event.preventDefault();

  const newTaskValue = {
    id: '788',
    task: newTasks,
    isComplete: false
  }

  setTasks([newTaskValue, ...tasks])
}

function handleCommentChange(event: ChangeEvent<HTMLInputElement>) {
  const newTaskValue = event.target.value;
  setNewTasks(newTaskValue);
}

function deleteTask(taskDelete: string) {
  const newTasks = tasks.filter((task) => task.id !== taskDelete)
  setTasks(newTasks)
}

const taskQuantity = tasks.length;
const taskCompleteQuantity = tasks.filter((task) => task.isComplete).length;

  return (
    <div className={styles.toDo}>
      <header>
        <img src={logo} alt="logo todo" />
      </header>

      <form onSubmit={handleComment} className={styles.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleCommentChange}
        />
        <button
          type="submit"
        >
          Criar
          <PlusCircle size={16} />
        </button>
      </form>

      <div className={styles.contentTasks}>
        <div className={styles.countTask}>
          <p>Tarefas criadas <span>{taskQuantity}</span></p>
          <p>Concluídas
            <span>
              {
                taskQuantity > 0
                ? `${taskCompleteQuantity} de ${taskQuantity}`
                : taskQuantity
              }
            </span>
          </p>
        </div>

      {
        !tasks.length
        ? (
          <div className={styles.tasks}>
            <img src={clipboard} alt="clipboard" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )
        : (
          tasks.map((task) => {
            return (
              <Task 
                key={task.id}
                content={task}
                onDelete={deleteTask}
              />
            );
          })
        )
      }
 
      </div>
    </div>
  )
}
