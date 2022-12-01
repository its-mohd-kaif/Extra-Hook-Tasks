import Customhook from "./Components/Custom Hook/Customhook";
import Parent from "./Components/UseCallback/Parent";
import Usememo from "./Components/Usememo/Usememo";
import Usereducer from "./Components/Usereducer";

function App() {
  return (
    <div>
      <Usereducer />
      <Customhook />
      <Usememo />
      <Parent />
    </div>
  );
}

export default App;
