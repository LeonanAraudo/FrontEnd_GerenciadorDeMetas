import logo from '../../assets/logo-in-orbit.svg'
import lets from '../../assets/lets-start-illustration.svg'
import { DialogTrigger } from './dialog'
import { Plus } from 'lucide-react'

export function EmptyGoals(){
    return(
        <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in.orbit" />
        <img src={lets} alt="in.orbit" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
          mesmo?
        </p>
        <DialogTrigger asChild>
          {/* asChild pra usar somente o botão de dentro ao inves de criar dois */}
          <button
            type="button"
            className="px-4 py-2.5 rounded-lg bg-violet-600 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-700"
          >
            <Plus className="size-4" />
            Cadastrar Meta
          </button>
        </DialogTrigger>
      </div>
    )
}