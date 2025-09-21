import Sidebar from "../components/user/Sidebar";
import Parties from "../components/Parties";
import VoteResult from "../components/VoteResult";
import UserStore from "../store/UserStote";
import UserPageParty from "../components/user/UserPageParty";

function UserHome() {
  const {isUser} = UserStore();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* LEFT SIDEBAR - Fixed */}
      <div className="w-1/5 flex-shrink-0">
        <div className="h-full overflow-y-auto">
          <Sidebar />
        </div>
      </div>

      {/* RIGHT MAIN PAGE - Scrollable */}
      <div className="w-4/5 flex-1 overflow-y-auto">
        <div className="p-5">
          {isUser() ? (
            <>
              <UserPageParty />
            </>
          ) : (
            <></>
          )}

          <VoteResult />
          <Parties />
        </div>
      </div>
    </div>
  );
}

export default UserHome;
