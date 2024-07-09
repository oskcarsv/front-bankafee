import accept from '../../assets/iconAdmin/accept.svg';
import deleteUser from '../../assets/iconHistoryList/deleteUser.svg';

import '../../styles/homePageAdmin/ListApproval.css';

export const ListApproval = () => {
    return (
        <section className='section-list-approve'>
            <div className='container-approve-message'>
                <h1 className='message-approve'>Approval List</h1>
            </div>
            <div className='container-table-approve'>
                <table className='table-approve-user'>
                    <thead className='container-titles-info-approve'>
                        <tr>
                            <th>User</th>
                            <th>DPI</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='approve-container-info'>
                            <td className='info-user-approve'>Angel</td>
                            <td className='info-user-approve'>1234567890</td>
                            <td className='info-user-approve'>Waiting for approval</td>
                            <td className='info-user-approve'>
                                <button className='btn-approve'><img src={accept} alt="" /></button>
                            </td>
                            <td className='info-user-approve'>
                                <button className='btn-approve'><img src={deleteUser} alt="" /></button>
                            </td>
                        </tr>
                        <tr className='approve-container-info'>
                            <td className='info-user-approve'>Braulio</td>
                            <td className='info-user-approve'>987654321</td>
                            <td className='info-user-approve'>Waiting for approval</td>
                            <td className='info-user-approve'>
                                <button className='btn-approve'><img src={accept} alt="" /></button>
                            </td>
                            <td className='info-user-approve'>
                                <button className='btn-approve'><img src={deleteUser} alt="" /></button>
                            </td>
                        </tr>
                        <tr className='approve-container-info'>
                            <td className='info-user-approve'>Angel</td>
                            <td className='info-user-approve'>528146397</td>
                            <td className='info-user-approve'>Waiting for approval</td>
                            <td className='info-user-approve'>
                                <button className='btn-approve'><img src={accept} alt="" /></button>
                            </td>
                            <td className='info-user-approve'>
                                <button className='btn-approve'><img src={deleteUser} alt="" /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};