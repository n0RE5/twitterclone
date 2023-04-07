import CreatePostModal from "./CreatePostModal";
import EditUserModal from "./EditUserModal";
import LoginModal from "./LoginModal";
import SearchModal from "./SearchModal";

const RootModal = () => {
    return (
        <>
            <EditUserModal />
            <LoginModal />
            <CreatePostModal />
            <SearchModal />
        </>
    );
};

export default RootModal;