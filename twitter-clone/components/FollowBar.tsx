import { useAppSelector } from "@/hooks/useRedux";
import { getUserFollows } from "@/httpAPI/followAPI";
import { fetchedUser } from "@/types/Interfaces";
import { useMemo, useState } from "react";
import Avatar from "./UI/Avatar";
import { useRouter } from "next/router";

const FollowBar = () => {
    const router = useRouter()
    const userState = useAppSelector(state => state.userSlice)
    const [followers, setFollowers] = useState<fetchedUser[]>([])

    const fetchFollowers = useMemo(async() => {
        if(!userState.isAuth) return 
        const subs = await getUserFollows()
        setFollowers(subs)
    }, [userState.isAuth, userState.user])

    const gotoUserpage = (id: number) => {
        router.push(`/users/${id}`)
    }

    return (
        <div className="px-6 py-4 hidden lg:block">
            <div className="bg-neutral-800 rounded-xl p-4">
                <span className="text-white text-xl font-semibold">Your followings</span>
                <div className="flex flex-col gap-6 mt-4">
                    {followers.map(follower =>
                        <div className="flex flex-row gap-2 items-center">
                            <Avatar src={process.env.SERVER_URL + follower.profileImg} />
                            <div className="flex flex-col">
                                <span onClick={() => gotoUserpage(follower.id)} className="text-white font-semibold hover:underline">{follower.username}</span>
                                <span onClick={() => gotoUserpage(follower.id)} className="text-neutral-500 font-semibold hover:underline">@{follower.secondname}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FollowBar;