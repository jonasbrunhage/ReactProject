import { Routes } from '../src/routes/Routes'
import { NavBar } from '../src/components/navbar/NavBar'
import './shared/css/GlobalCSS.css'
import { UserProvider } from './shared/provider/UserProvider'
function App() {
  return (
    <UserProvider>
      <Routes>
        <NavBar />
      </Routes>
    </UserProvider>
  );
}

export default App;
