import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  content: {
    task: string;
    id: string;
    isComplete: boolean;
  }
  onDelete: (comment: string) => void;
  completeTask: (comment: string) => void;
};

export function Task({ content, onDelete, completeTask }: TaskProps) {
  
  function handleDeleteTask() {
    onDelete(content.id)
  }

  function handleChecked() {
    completeTask(content.id)
  }

  function handleChange() {
    //completeTask(content.id)
  }

  const isChecket = content.isComplete ? styles.taskComplete : styles.taskNotComplete;

  return (
    <div className={styles.taskContent}>

      <input 
        type="radio" 
        checked={content.isComplete}
        value={content.id}
        onClick={handleChecked}
        onChange={handleChange}
      />
      
      <p className={isChecket}>{content.task}</p>
      
      <button
        type="button"
        title="Deletar comentário"
        onClick={handleDeleteTask}
      >
        <Trash size={24} weight="thin" />
      </button>
    </div>
  )
}
