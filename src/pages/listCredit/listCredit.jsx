import { SidebarAdmin } from "../../components/SidebarAdmin";
import { MessageAdminCredit } from "../../components/listCreditAdmin/MessageAdminCredit";
import { ListCreditAdmin } from "../../components/listCreditAdmin/ListCreditAdmin";

import "../../pages/listCredit/listCredit.css";

export const ListCredit = () => {
  return (
    <>
      <main className="main-list-credit-admin">
        <nav className="sidebar-list-credit">
          <SidebarAdmin />
        </nav>
        <article className="article-list-credit-admin">
          <MessageAdminCredit />
          <ListCreditAdmin />
        </article>
      </main>
    </>
  );
};
