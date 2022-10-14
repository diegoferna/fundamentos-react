import style from "./Sidebar.module.css";
import { PencilLine} from 'phosphor-react'


export function Sidebar() {
  return (
    <div className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1536768139911-e290a59011e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        alt="citiy-cyberpunk"
      />
      <div className={style.profile}>
        <img className={style.avatar} src="https://github.com/diegoferna.png" />
        <strong>Meu nome</strong>
        <span>Web Develop</span>
      </div>
      <footer>
        
        <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
        </a>
      </footer>
    </div>
  );
}
