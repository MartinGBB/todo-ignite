
interface TaskProps {
  content: {
    task: string;
    isComplete: boolean;
  }
};

export function Task({ content }: TaskProps) {
  return (
    <div>
      <input 
        type="radio" 
        checked={content.isComplete}
      />
      
      <p>{content.task}</p>
      
      <button
        type="button"
      >
        delete
      </button>
    </div>
  )
}
