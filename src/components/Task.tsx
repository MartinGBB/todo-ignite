
interface TaskProps {
  task: string;
  isComplete: boolean;
};

export function Task({ task, isComplete }: TaskProps) {
  return (
    <div>
      <h1>Task</h1>
    </div>
  )
}
