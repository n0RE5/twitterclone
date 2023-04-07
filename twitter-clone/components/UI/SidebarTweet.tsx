import { useLoginModal } from "@/hooks/useLoginModal";
import { useAppSelector } from "@/hooks/useRedux";
import { useTweetModal } from "@/hooks/useTweetModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

const SidebarTweet = () => {
    const loginModal = useLoginModal()
    const tweerModal = useTweetModal()
    const isAuth = useAppSelector(state => state.userSlice.isAuth)
    
    const handleClick = useCallback(() => {
        if (isAuth) {
            tweerModal.openModal()
        } else {
            loginModal.openModal()
        }
    }, [isAuth])

    return (
        <div onClick={handleClick}>
            <div className="
                mt-6
                lg:hidden
                rounded-full
                h-14
                w-14
                p-4
                flex
                items-center
                justify-center
                bg-sky-500
                hover:bg-opacity-80
                transition
                cursor-pointer
            ">
                <FaFeather size={24} color='white' />
            </div>
            <div className="
                mt-6
                hidden
                lg:block
                px-4
                py-2
                rounded-full
                bg-sky-500
                hover:bg-opacity-80
                transition
                cursor-pointer
            ">
                <div className="text-white text-xl text-center">{isAuth ? "Tweet" : "Login"}</div>
            </div>
        </div>
    );
};

export default SidebarTweet;