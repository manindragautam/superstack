import { Route, Router } from "@solidjs/router";
import Index from "./pages/Index.tsx";
import Dinosaur from "./pages/Dinosaur.tsx";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Index} />
      <Route path="/dinosaur/:selectedDinosaur" component={Dinosaur} />
    </Router>
  );
};

export default App;
