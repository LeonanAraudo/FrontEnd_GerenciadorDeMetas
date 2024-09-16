import logo from './assets/logo-in-orbit.svg'
import lets from './assets/lets-start-illustration.svg'
import { Plus, X } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog'
import { Button } from './components/ui/button'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './components/ui/radio-group'

export function App() {
  return (
    <Dialog>
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
      <DialogContent>
        <div className="flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <DialogTitle>Cdastrar Meta</DialogTitle>
              <DialogClose>
                <X className="size-5 text-zinc-600" />
              </DialogClose>
            </div>
            <DialogDescription>
              Adicione atividades que te fazem bem e que você quer continuar
              praticando toda semana.
            </DialogDescription>
          </div>
          <form action="" className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Qual a atividade</Label>
                <Input
                  id="tittle"
                  autoFocus
                  placeholder="Praticar exercícios, meditar etc..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Quantas vezes na semana</Label>
                <RadioGroup>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm  font-medium leading-none ">
                      1x vez na semana
                    </span>
                    <span className="text-lg leading-none">🥱</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="2">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm  font-medium leading-none ">
                      2x vez na semana
                    </span>
                    <span className="text-lg leading-none">😐</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="3">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm  font-medium leading-none ">
                      3x vez na semana
                    </span>
                    <span className="text-lg leading-none">😎</span>
                  </RadioGroupItem>
                </RadioGroup>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DialogClose asChild>
                <Button className="flex-1" variant="secondary">
                  Fechar
                </Button>
              </DialogClose>
              <Button className="flex-1">Salvar</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
