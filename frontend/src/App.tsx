// import { Button } from "./components/ui/button"
// import { PlusIcon } from "./icons/PlusIcon"
// import { ShareIcon } from "./icons/ShareIcon"
import { Card } from "./components/ui/Card"


function App() {

  return (
    <div className="bg-gray-50 h-screen">
      <Card type="Documents" link="Curiosity is the spark that drives learning and innovation. It pushes us to ask questions, explore new ideas, and challenge assumptions. When we stay curious, we open ourselves to perspectives we might otherwise overlook, and we discover connections that fuel creativity. Whether in science, art, or everyday life, curiosity transforms routine into discovery and keeps our minds active and adaptable. In a world that changes rapidly, curiosity isn’t just a trait—it’s a lifelong skill that helps us grow." title="Random" tags={["hsejb", "hwjeg", "webfhes"]}/>
      <Card type="twitter" link="https://twitter.com/username/status/807811447862468608" title="Testing Link" tags={["example", "checking"]}/>
      <Card type="Youtube" link="https://youtu.be/UKunvvN2iCk?si=Q5iSAxGT_LF7Za4W" title="song" tags={["songs"]}/>
      {/* <Button startIcon={<ShareIcon />}  variant="secondary" text="Share Brain" size="md" onClick={() => {}}/>
      <Button startIcon={<PlusIcon />} variant="primary" text="Add Content" size="md" onClick={() => {}}/> */}
    </div>
  )
}

export default App