import style from './App.module.css'
import './global.css'
import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
