import { Plus } from 'lucide-react'
import { OutlineButton } from './outline-button'
import { getPendingGoals } from '../../http/get-pending-goals'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { createGoalCompletion } from '../../http/create-goal-completion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSummary } from '../../http/get-summary'
export function PendingGoals() {
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pending-goals'], // Corrigido o erro de digitação
    queryFn: getPendingGoals, // Qual função vai executar para trazer os dados
    staleTime: 1000 * 60, // Cria um cache com os dados, pesquisa dos dados será feita a cada tempo selecionado
  })

  if (!data || !Array.isArray(data)) {
    return null
  }

  async function handleCompletionGoal(goalId: string) {
    await createGoalCompletion(goalId)
    queryClient.invalidateQueries({ queryKey: ['summary'] }) // Atualiza as metas concluídas
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] }) // Atualiza as metas pendentes
  }

  const { data: summaryData } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  useEffect(() => {
    if (summaryData) {
      const completed = summaryData?.completed ?? 0
      const total = summaryData?.total ?? 0

      if (completed === total && total > 0) {
        // Redireciona pra tela inicial
        navigate('/')
      }
    }
  }, [summaryData, navigate]) // Corrigido para usar "navigate" em vez de "router"

  // Se tudo foi completado, evita até mostrar as metas
  if (summaryData?.completed === summaryData?.total) {
    return null
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
