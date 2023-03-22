import { useState } from "react"

export default function CommentsPage(second) {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data.comments)

    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        console.log(data)
    }

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        fetchComments()

    }


    return (
        <>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)}></input>
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComments}>Fetch Comments</button>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            {comment.text}
                            <button onClick={() => deleteComment(comment.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}