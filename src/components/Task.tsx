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
      >
        delete
      </button>
    </div>
  )
}
