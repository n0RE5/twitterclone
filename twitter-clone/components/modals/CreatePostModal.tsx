import { useTweetModal } from '@/hooks/useTweetModal';
import Modal from '../Modal';
import { useState } from 'react';
import Input from '../UI/Input';
import { createPost } from '@/httpAPI/postsAPI';

const CreatePostModal = () => {
    const tweetModal = useTweetModal()
    const [content, setContent] = useState<string>('')

    const onSubmit = async () => {
        try {
            const response = await createPost(content)
            alert("You've posted a tweet!")
        } catch (error) {
            alert('Error occured while posting tweet!')
            console.log(error);
        } finally {
            tweetModal.closeModal()
        }
    }

    const body = (
        <div className='flex items-center'>
            <Input placeholder='Write something here...' value={content} onChange={(e) => setContent(e.target.value)} type="text" />
        </div>
    )

    return (
        <Modal title="Tweet" body={body} buttonTitle='Tweet' close={tweetModal.closeModal} submit={onSubmit} active={tweetModal.active}/>
    );
};

export default CreatePostModal;