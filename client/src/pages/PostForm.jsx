import { Formik, Form, Field, ErrorMessage } from 'formik'
import { usePosts } from '../context/postContext'
import { useNavigate, useParams, Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'

export const PostForm = () => {
  const { createPost, getPost, updatePost } = usePosts()
  const navigate = useNavigate()
  const params = useParams()
  const [post, setPost] = useState({
    title: '',
    description: '',
    image: null
  })

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id)
        setPost(post)
      }
    })()
  }, [params.id])

  return (
    <div className='flex items-center justify-center h-[80vh]'>
      <div className='bg-slate-300 p-10 shadow-md rounded-md'>
        <Formik
          initialValues={post}
          validationSchema={
            Yup.object({
              title: Yup.string().required("Titulo requerido"),
              description: Yup.string().required("Descripción requerida")
            })
          }
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values)
            } else {
              await createPost(values)
            }
            navigate("/")
            console.log(values)
          }}
          enableReinitialize
        >
          {({ handleSubmit, setFieldValue }) => (

            <Form onSubmit={handleSubmit}>
              <label htmlFor="title" className='text-lg'>Titulo:</label>
              <Field name='title' placeholder="Ingrese un titulo descriptivo para el producto."
                className='px-3 py-2 mb-4 focus:outline-none rounded bg-gray-600 text-white w-full' />
              <ErrorMessage component="p"
                className='text-md text-red-500 text-bold' name='title'></ErrorMessage>
              <label htmlFor="description" className='text-lg'>Descripción:</label>
              <Field name='description' component='textarea' placeholder='Ingrese una descripción del producto en cuestión.'
                className='px-3 py-2 mb-4 focus:outline-none rounded bg-gray-600 text-white w-full' rows={5} />
              <ErrorMessage component="p"
                className='text-md text-red-500 text-bold' name='description'></ErrorMessage>

              <label htmlFor="image" className='text-lg'>Sube tu imagen:</label>\
              <input type="file" name='image'
                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
                onChange={(e) => setFieldValue('image', e.target.files[0])} />
              <div className='flex justify-between'>
                <Link to="/" className='bg-slate-500 hover:bg-slate-400 mt-4 py-4 px-16 rounded-md text-white focus:outline-none'>Volver</Link>
                <button type='submit' className='bg-green-500 hover:bg-green-400 mt-4 py-4 px-16 rounded-md text-white focus:outline-none'>Guardar</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

    </div>
  )
}