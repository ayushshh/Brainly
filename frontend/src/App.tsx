// import { Button } from "./components/ui/button"
// import { PlusIcon } from "./icons/PlusIcon"
// import { ShareIcon } from "./icons/ShareIcon"
import { Card } from "./components/ui/Card"


function App() {

  return (
    <div className="bg-gray-50 h-screen">
      <Card type="twitter" link="something" title="Hiii!" tags="abfaj" />
      {/* <Button startIcon={<ShareIcon />}  variant="secondary" text="Share Brain" size="md" onClick={() => {}}/>
      <Button startIcon={<PlusIcon />} variant="primary" text="Add Content" size="md" onClick={() => {}}/> */}
    </div>
  )
}

export default App