import AdminSidebar from "../../components/admin/AdminSidebar";
import Parties from "../../components/Parties";
import Party from "../../components/Party";
import VoteResult from "../../components/VoteResult";
import AdminStore from "../../store/AdminStore";


function AdminServices() {
  const {isAdmin} = AdminStore();


  return (
    <div className="flex h-screen overflow-hidden">
      {/* LEFT SIDEBAR - Fixed */}
      <div className="w-1/5 flex-shrink-0">
        <div className="h-full overflow-y-auto">
          <AdminSidebar />
        </div>
      </div>

      {/* RIGHT MAIN PAGE - Scrollable */}
      <div className="w-4/5 flex-1 overflow-y-auto">
        <div className="p-5">
          {isAdmin() ? (
            <>
              <Party />
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

export default AdminServices;
