import { useMemo, useState } from "react";
import { BsHouseFill, } from 'react-icons/bs'
import { BiLogOut } from "react-icons/bi";
import { FaUser } from 'react-icons/fa'
import SidebarItem from "./UI/SidebarItem";
import SidebarTweet from "./UI/SidebarTweet";
import Logo from "./UI/Logo";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { userLogout } from "@/store/reducers/userSlice";
import { useLoginModal } from "@/hooks/useLoginModal";

const Sidebar = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const loginModal = useLoginModal()

    const user = useAppSelector(state => state.userSlice.user)
    const isAuth = useAppSelector(state => state.userSlice.isAuth)

    const [publicItems] = useState([
        {
            title: 'Home',
            href: '/',
            icon: BsHouseFill,
        },
    ])

    const authItems = useMemo(() => [
        {
            title: 'Profile',
            href: `/users/${user.id}`,
            icon: FaUser
        },
    ], [user])

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(userLogout())
        alert("You've left your account")
    }

    const authRedirect = (path: string) => {
        if(!isAuth) {
            loginModal.openModal()
            return
        }
        router.push(path)
    }

    return (
        <div className="col-span-1 h-full pr-4 md:pr-4">
             <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <Logo />
                    {publicItems.map((item, index) =>
                        <SidebarItem key={index} onClick={() => router.push(item.href)} title={item.title} icon={item.icon} />
                    )}
                    {authItems.map((item, index) =>
                        <SidebarItem key={index} onClick={() => authRedirect(item.href)} title={item.title} icon={item.icon} />
                    )}
                    {isAuth &&
                        <SidebarItem icon={BiLogOut} title="Logout" onClick={logout} />
                    }
                    <SidebarTweet />
                </div>
             </div>
        </div>
    );
};

export default Sidebar;