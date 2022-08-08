import styles from './ToDo.module.css';
import logo from '../assets/logo.svg';

export function ToDo() {
  return (
    <div className={styles.ToDo}>
      <header>
        <img src={logo} alt="logo todo" />
      </header>

      <div>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
      </div>
    </div>
  )
}
