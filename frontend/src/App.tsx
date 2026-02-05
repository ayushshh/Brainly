import { Button } from "./components/ui/button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"


function App() {

  return (
    <>
      <Button startIcon={<ShareIcon />}  variant="secondary" text="Share Brain" size="md" onClick={() => {}}/>
      <Button startIcon={<PlusIcon />} variant="primary" text="Add Content" size="md" onClick={() => {}}/>
    </>
  )
}

export default App