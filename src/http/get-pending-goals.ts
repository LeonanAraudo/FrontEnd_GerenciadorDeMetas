type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}
export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch('https://backend-gerenciadordemetas.onrender.com/pendding-goals')
  const data = await response.json()
  return data.penddingGoals
}
