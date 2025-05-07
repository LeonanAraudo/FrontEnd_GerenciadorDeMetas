import { Plus } from 'lucide-react'
import { OutlineButton } from './outline-button'
import { getPendingGoals } from '../../http/get-pending-goals'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { createGoalCompletion } from '../../http/create-goal-completion'

export function PendingGoals() {
  const queryClient = useQueryClient()
  const { data } = useQuery({
    queryKey: ['pendding-goals'],
    queryFn: getPendingGoals, //Qual função vou executar para trazer os dados
    staleTime: 1000 * 60, //Cria um cash com os dados, a pesquisa dos dados será feita a cada tempo selecionado
  })

  if (!data || !Array.isArray(data)) {
    return null
  }

  async function handleCompletionGoal(goalId: string) {
    await createGoalCompletion(goalId)
    queryClient.invalidateQueries({ queryKey: ['summary'] }) // vantagens do reactquery isso aqui permite que ao clicar na meta não precise atualizar a pagina para que ele seja inserido nas metas comcluidas
    queryClient.invalidateQueries({ queryKey: ['pendding-goals'] })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desireWeeklyFrequency}
            onClick={() => handleCompletionGoal(goal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
