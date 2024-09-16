import {
  Dialog,
} from './components/ui/dialog'
import { CreateGoal } from './components/ui/create-goal'
import { Summary } from './components/ui/summary'
// import { EmptyGoals } from './components/ui/empty-goals'

export function App() {
  return (
    <Dialog>
        {/* <EmptyGoals/> */}
        <Summary/>
        <CreateGoal/>
    </Dialog>
  )
}
