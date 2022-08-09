import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  content: {
    task: string;
    isComplete: boolean;
  }
};

export function Task({ content }: TaskProps) {
  
  const isChecket = content.isComplete ? styles.taskComplete: '';

  return (
    <div className={styles.taskContent}>

      <input 
        type="radio" 
        checked={content.isComplete}
      />
      
      <p className={isChecket}>{content.task}</p>
      
      <button
        type="button"
        title="Deletar comentário"
      >
        <Trash size={24} weight="thin" />
      </button>
    </div>
  )
}
