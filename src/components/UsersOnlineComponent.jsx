import React from 'react';

export default function UsersOnline({ membersOnline }) {
    return (
        <div className="alert alert-dark" role="alert">
            <strong>Broj korisnika online:</strong> {membersOnline.length}<br />
            <strong>Lista korisnika:</strong><br />
            <div>
                {membersOnline.map((m, idx) => {
                    return (
                    <span key={idx} className={m.clientData.color} >{m.clientData.username}<br /></span>
                    )
                })}
            </div>
        </div>
    )
}