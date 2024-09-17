import { Plus } from "lucide-react";
import { OutlineButton } from "./outline-button";

export function PendingGoals(){
    return(
        <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Meditar
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Nadar
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Se matar
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Se jogar de uma ponte bem bem alta
        </OutlineButton>
      </div>
    )
}