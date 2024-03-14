import "./App.css"
import { AppProvider } from "./utils/context";
import Layout from "./pages/layout";

function App() {
  return (
    <AppProvider>
      <div className="App" >
        <Layout/>
      </div>
    </AppProvider>
  );
}

export default App;
