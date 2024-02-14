import logo from './assets/logo.svg'
import { NoteCard } from './components/note-cards'
import { NewNoteCard } from './components/new-note-card'

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12'>    
      <img src={logo} alt='nlw / expert' className=' text-slate-400 b'/>      
      
      <form className="w-full ">
        <input 
          type="text"
          placeholder='Busque em suas notas...' 
          className=' w-full bg-transparent text-2xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
         />
      </form>

      <div className="h-px bg-slate-400 my-5"/>
  
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">

      <NewNoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />

      </div>

    </div>
  )
}