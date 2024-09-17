import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/ui/create-goal'
import { Summary } from './components/ui/summary'
import { EmptyGoals } from './components/ui/empty-goals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'
// import { EmptyGoals } from './components/ui/empty-goals'

export function App() {
  const {data} = useQuery({
    queryKey:['summary'],
    queryFn: getSummary, //Qual função vou executar para trazer os dados
    staleTime: 1000 * 60 //Cria um cash com os dados, a pesquisa dos dados será feita a cada tempo selecionado
})
  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}
      {/* <EmptyGoals/> */}
      {/* <Summary /> */}
      <CreateGoal />
    </Dialog>
  )
}
