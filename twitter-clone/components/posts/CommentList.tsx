import { IComment } from '@/types/Interfaces';
import React from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

interface CommentListProps {
    comments: IComment[]
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
    return (
        <>
            <CommentForm />
            {comments.length
                ? comments.map((comment, index) => <CommentItem key={index} comment={comment} /> )
                : null
            }
        </>
    );
};

export default CommentList;