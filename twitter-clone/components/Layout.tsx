import { useAppDispatch } from "@/hooks/useRedux"
import FollowBar from "./FollowBar"
import Sidebar from "./Sidebar"
import { fetchUser, fetchUserError, fetchUserSuccess } from "@/store/reducers/userSlice"
import { check } from "@/httpAPI/authAPI"
import { useEffect } from "react"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children})=> {
  const dispatch = useAppDispatch()

  const checkUser = async () => {
    try {
      dispatch(fetchUser())
      const response = await check()
      dispatch(fetchUserSuccess(response))
    } catch (error: any) {
        dispatch(fetchUserError(error.response?.data?.message))
    }
  }

  useEffect(() => {
    checkUser()
  })

  return (
    <div className='bg-black h-screen'>
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
             {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  )
}

export default Layout