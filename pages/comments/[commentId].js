import { comments } from "@/data/comments"

export default function Comment({ comment }) {

    console.log('---comment')
    console.log(comment)

    return (
        <>
            <h1>{comment.id}</h1>
            <p>{comment.text}</p>
        </>
    )
}

export async function getStaticProps(context) {
    const { params } = context

    console.log('-----OHIIII----')
    console.log(`/api/comments/${params.commentId}`)

    const comment = comments.find((comment) => comment.id === parseInt(params.commentId))

    // const response = await fetch(`http://localhost:3000/api/comments/${params.commentId}`)
    // const data = await response.json()

    return {
        props: {
            comment: data
        }
    }
}

export async function getStaticPaths() {
    return {
        // paths: [],
        paths: [{ params: { commentId: '1' } }, { params: { commentId: '2' } }, { params: { commentId: '3' } }],
        fallback: false
    }
}