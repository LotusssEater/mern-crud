import axios from "axios"

export const getPostsRequests = async () => await axios.get('/api/posts')

export const getPostRequest = async (id) => await axios.get('/api/posts/' + id)

export const createPostRequest = async (post) => {
    const form = new FormData()

    for (let key in post) {
        form.append(key, post[key])
    }

    return await axios.post('/api/posts', form, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
}

export const deletePostRequest = async (id) => await axios.delete('/api/posts/' + id)

export const updatePostRequest = async (id, newFields) => await axios.put('/api/posts/' + id, newFields)
