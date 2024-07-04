import edit from '../../assets/iconAdmin/edit.svg';
import deleteUser from '../../assets/iconHistoryList/deleteUser.svg';

import '../../styles/listAccountAdmin/listAccountAdmin.css';

export const ListAccountAdmin = () => {
    return (
        <section className='section-all-account-admin'>
            <div className='content-title-account-admin'>
                <h1 className='title-list-account-admin'>List Accounts</h1>
            </div>
            <div className='content-history-account-for-admin'>
                <table className='table-users-admin'>
                    <thead className='thead-users-admin'>
                        <tr>
                            <th >User</th>
                            <th >Account</th>
                            <th >No. Account</th>
                            <th >Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='info-users-list-admin'>
                            <td className='info--table-users'>Angel</td>
                            <td className='info--table-users'>Monetaria</td>
                            <td className='info--table-users'>123456789120</td>
                            <td className='info--table-users'>Active</td>
                            <td className='info--table-users'>
                                <button className='btn-edit'><img src={edit} alt="img" /></button>
                            </td>
                            <td className='info--table-users'>
                                <button className='btn-edit'><img src={deleteUser} alt="img" /></button>
                            </td>
                        </tr>
                        <tr className='info-users-list-admin'>
                            <td className='info--table-users'>Angel</td>
                            <td className='info--table-users'>Monetaria</td>
                            <td className='info--table-users'>123456789120</td>
                            <td className='info--table-users'>Active</td>
                            <td className='info--table-users'>
                                <button className='btn-edit'><img src={edit} alt="img" /></button>
                            </td>
                            <td className='info--table-users'>
                                <button className='btn-edit'><img src={deleteUser} alt="img" /></button>
                            </td>
                        </tr>
                        <tr className='info-users-list-admin'>
                            <td className='info--table-users'>Angel</td>
                            <td className='info--table-users'>Monetaria</td>
                            <td className='info--table-users'>123456789120</td>
                            <td className='info--table-users'>Active</td>
                            <td className='info--table-users'>
                                <button className='btn-edit'><img src={edit} alt="img" /></button>
                            </td>
                            <td className='info--table-users'>
                                <button className='btn-edit'><img src={deleteUser} alt="img" /></button>
                            </td>
                        </tr>
                        <tr className='info-users-list-admin'>
                            <td className='info--table-users'>Angel</td>
                            <td className='info--table-users'>Monetaria</td>
                            <td className='info--table-users'>123456789120</td>
                            <td className='info--table-users'>Active</td>
                            <td className='info--table-users'>
                                <button className='btn-edit'><img src={edit} alt="img" /></button>
                            </td>
                            <td className='info--table-users'>
                                <button className='btn-edit'><img src={deleteUser} alt="img" /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );

}