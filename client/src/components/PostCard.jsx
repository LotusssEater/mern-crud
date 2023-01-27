import toast from 'react-hot-toast'
import { usePosts } from '../context/postContext';
import { useNavigate } from 'react-router-dom';

export const PostCard = ({ post }) => {

    const { deletePost } = usePosts()
    const navigate = useNavigate()

    const handleDelete = (id) => {
        toast((t) => (
            <div className='p-6'>
                <p className='pb-4'>¿Estás seguro de que quieres eliminar este elemento?</p>
                <div className='grid grid-cols-2'>
                    <button className='bg-red-600 hover:bg-red-500 px-3 py-2 text-white rounded-md mx-2'
                        onClick={() => {
                            deletePost(id)
                            toast.dismiss(t.id)
                            toast.success("¡Elemento eliminado correctamente!")
                        }}> Borrar </button>
                    <button className='bg-slate-500 hover:bg-slate-400 px-3 py-2 text-white rounded-md mx-2'
                        onClick={() => toast.dismiss(t.id)}> Cancelar </button>
                </div>
            </div>
        ), {
            style: {
                'marginTop': '30px'
            }
        }
        );
    }
    return (
        <div className='bg-slate-300 rounded-sm shadow-md shadow-zinc-400'>
            <div className="hover:bg-slate-200 hover:cursor-pointer m-4 pb-10 rounded-md"
                onClick={() => navigate(`/posts/${post._id}`)}>
                <div className='h-full flex justify-between'>
                    <section id='content' className='px-6'>
                        <h3 className="text-lg font-bold">{post.title}</h3>
                        <p className="text-gray-500 text-md">{post.description}</p>
                    </section>
                </div>
            </div>
            <div className='bg-slate-100 p-2 m-4 rounded-md'>
                <section id='controls' className='flex justify-center'>
                    <button className="bg-red-500 text-white font-medium rounded-md py-2 px-20"
                        onClick={() => handleDelete(post._id)}>Borrar</button>
                </section>
            </div>
        </div>

    )
}

