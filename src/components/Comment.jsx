import { ThumbsUp, Trash } from "phosphor-react";
import style from "./Comment.module.css";

export function Comment() {
  return (
    <div className={style.comment}>
      <img src="https://github.com/diegoferna.png" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Diego Nascimento</strong>
              <time title="14 de outubro 16:08" dateTime="2022-10-14">
                Cerca de 1 hora há atrás.
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
