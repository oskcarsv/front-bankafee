import { useEffect, useState } from 'react';
import accept from '../../assets/iconAdmin/accept.svg';
import deleteUser from '../../assets/iconHistoryList/deleteUser.svg';

import {useClientPetition} from '../../shared/hooks/';
import {useUser} from '../../shared/hooks/';
import '../../styles/homePageAdmin/ListApproval.css';

export const ListApproval = () => {
    const {getClientPetitions,clientPetitions,isLoading} = useClientPetition();
    const [clientNo_Petition, setClientNo_Petition] = useState('');
    const{postUser,loading } = useUser();

    useEffect(() => {
        getClientPetitions();
    }, [loading]); 

    const handleApprove = (event) => {
        event.preventDefault();
        setClientNo_Petition(event.target.id);
        postUser( clientNo_Petition);
    }

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
                        {
                            isLoading ? (
                                <tr>
                                    <td>Loading...</td>
                                </tr>
                            ) : (Array.isArray(clientPetitions) &&
                                clientPetitions.map((clientPetition) => (
                                    <tr className='approve-container-info' key={clientPetition.no_Petition}>
                                        <td className='info-user-approve'>{clientPetition.name}</td>
                                        <td className='info-user-approve'>{clientPetition.DPI}</td>
                                        <td className='info-user-approve'>Waiting for approval</td>
                                        <td className='info-user-approve'>
                                            <button className='btn-approve'><img src={accept} alt="" id={clientPetition.no_Petition} onClick={handleApprove}/></button>
                                        </td>
                                        <td className='info-user-approve'>
                                            <button className='btn-approve'><img src={deleteUser} alt="" /></button>
                                        </td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};