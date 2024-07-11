import { SidebarAdmin } from "../../components/SidebarAdmin";
import { MessageAdminAccount } from "../../components/listAccount/MessageAdminAccount";
import { ListAccountAdmin } from "../../components/listAccount/ListAccountAdmin";

import "../../pages/listAccount/listAccount.css";

export const ListAccount = () => {
  return (
    <>
      <main className="main-list-account-admin">
        <nav className="sidebar-list-user">
          <SidebarAdmin />
        </nav>
        <article className="article-list-account-admin">
          <MessageAdminAccount />
          <ListAccountAdmin />
        </article>
      </main>
    </>
  );
};
