import { Comment } from "./Comment";
import style from "./Post.module.css";
export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img src="https://github.com/diegoferna.png" alt="" />
          <div className={style.authorInfo}>
            <strong>Diego Nascimento</strong>
            <span>Web Develop</span>
          </div>
        </div>

        <time title="14 de outubro 16:08" dateTime="2022-10-14">
          Publicado há 1 hora
        </time>
      </header>
      <div className={style.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href=""> #nlw</a>{" "}
          <a href="">#rocketseat </a>
        </p>
      </div>

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Deixe um comentário"
        ></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
