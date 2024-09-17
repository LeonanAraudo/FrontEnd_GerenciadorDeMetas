type PendingGoalsResponse = {
  id: string
  title: string
  desireWeeklyFrequency: number
  completionCount: number
}
export async function getPensingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch('http://localhost:3333/pending-goals')
  const data = await response.json()
  return data.summary
}
