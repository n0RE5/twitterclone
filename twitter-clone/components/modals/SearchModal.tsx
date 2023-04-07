import { useState } from "react";
import Modal from "../Modal";
import Input from "../UI/Input";
import { useSearchModal } from "@/hooks/useSearchModal";
import { searchUser } from "@/httpAPI/userAPI";
import { useRouter } from "next/router";

const SearchModal = () => {
    const searchModal = useSearchModal()
    const router = useRouter()
    const [query, setQuery] = useState<string>('')

    const onSubmit = async () => {
        try {
            const response = await searchUser(query)
            if(!response) {
                return alert('User not found!')
            }
            router.push(`/users/${response.id}`)
        } catch (error) {
            alert('Error occured while searching user!')
            console.log(error);
        } finally {
            searchModal.closeModal()
        }
    }

    const body = (
        <>
            <Input placeholder='Write something here...' value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
        </>
    )

    return (
        <Modal 
            body={body} 
            active={searchModal.active} 
            title={'Search'} 
            buttonTitle={'Search for user...'} 
            close={searchModal.closeModal} 
            submit={onSubmit}
        />
    );
};

export default SearchModal;