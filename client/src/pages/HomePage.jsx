import { usePosts } from "../context/postContext"
import { BiCommentError } from "react-icons/bi"
import { Link } from 'react-router-dom'

import { PostCard } from '../components/PostCard.jsx'

export const HomePage = () => {
  const { posts } = usePosts()

  if (posts.length === 0) return (
    <div className="flex flex-col justify-center items-center pt-20">
      <BiCommentError className="w-36 h-36" />
      <div className="text-2xl mb-4"><h1>There are no posts yet, comeback later or create a new one...</h1></div>
      <div className="grid grid-cols-1 text-center px-6 m-6 ">
        <Link to="/new" className="bg-green-400 text-white font-medium rounded-lg text-2xl p-10 shadow-md shadow-zinc-400">Crear Nuevo Elemento</Link>
      </div>
    </div>

  )
  return (

    <div className="mx-20">
      <div className="grid grid-cols-1 text-center px-6 m-6 ">
        <Link to="/new" className="bg-green-400 text-white font-medium rounded-lg text-2xl p-10 shadow-md shadow-zinc-400 hover:outline-none">Crear Nuevo Elemento</Link>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 justify-center px-6 m-6">
        {posts.map(post => (
          <PostCard post={post} key={post._id}></PostCard>
        ))}
      </div>
    </div>
  )

}