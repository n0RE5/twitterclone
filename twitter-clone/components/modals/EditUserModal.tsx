import React, { useState } from 'react';
import Modal from '../Modal';
import Input from '../UI/Input';
import { useUserModal } from '@/hooks/useUserModal';
import { editUserBio } from '@/httpAPI/userAPI';

const EditUserModal = () => {
    const userModal = useUserModal()

    const [secondname, setSecondname] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [bannerImg, setBannerImg] = useState<string>('')
    const [profileImg, setProfileImg] = useState<string>('')

    const onSubmit = async () => {
        try {
            let formData = new FormData()
            formData.append('email', '')
            formData.append('password', '')
            formData.append('username', username)
            formData.append('secondname', secondname)
            formData.append('files', bannerImg)
            formData.append('files', profileImg)
            const response = await editUserBio(formData)
        } catch (error) {
            console.log(error);
        } finally { 
            userModal.closeModal()
        }
    }

    const body = (
        <div className='flex flex-col gap-4'>
            <Input type="file" placeholder='Edit Username' onChange={(e: any) => setBannerImg(e.target.files[0])} />
            <Input type="file" placeholder='Edit Avatar' onChange={(e: any) => setProfileImg(e.target.files[0])} />
            <Input placeholder='Edit Username' value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
            <Input placeholder='Edit Secondname' value={secondname} onChange={(e) => setSecondname(e.target.value)} type="text" />
        </div>
    )

    return (
        <Modal 
            body={body} 
            active={userModal.active} 
            title={'Edit your profile'} 
            buttonTitle={'Save'} 
            close={userModal.closeModal} 
            submit={onSubmit}
        />
    );
};

export default EditUserModal;