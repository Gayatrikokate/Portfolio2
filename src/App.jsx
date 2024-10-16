
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import TodoList from './components/TodoList/TodoList';

const App = () => (
  <Router>
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-900 min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/todoList' element={<TodoList/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App; 