import { countComments } from "@/httpAPI/commentsAPI"
import { useMemo, useState } from "react"

export const useComments = (postId: number) => {
    const [comments, setComments] = useState<number>(0)
    
    const getComments = useMemo(async() => {
        const response = await countComments(postId)
        setComments(response)
    }, [postId])

    return [comments] as const
}