import { Routes, Route } from 'react-router';

import Layout from './components/Layout';
import Smiles from './pages/smiles';
import Contacts from './pages/contacts';
import About from './pages/about';
import Todo from './pages/todo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Smiles />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/todo" element={<Todo />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
