import './App.css'
import { HomePage, PostForm, NotFound } from './pages';
import { Routes, Route } from 'react-router-dom';
import { PostProvider } from './context/postContext.jsx'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <PostProvider>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/new' element={<PostForm />}></Route>
        <Route path='/posts/:id' element={<PostForm />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Toaster></Toaster>
    </PostProvider>

  )
}

export default App
