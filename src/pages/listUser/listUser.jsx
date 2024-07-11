import { SidebarAdmin } from "../../components/SidebarAdmin";
import { ListUserAdmin } from "../../components/listUserAdmin/ListUserAdmin";
import { ListForAllUser } from "../../components/listUserAdmin/ListForAllUser";

import "../../pages/listUser/listUser.css";

export const ListUser = () => {
  return (
    <>
      <main className="main-list-admin-users">
        <nav className="sidebar-list-user">
          <SidebarAdmin />
        </nav>
        <article className="article-list-user-admin">
          <ListUserAdmin />
          <ListForAllUser />
        </article>
      </main>
    </>
  );
};
