import React from 'react';

export default function UsersOnline({ membersOnline }) {
    return (
        <div className="container" >
            <div className="row alert alert-info" role="alert">
                <div className="col-md-6">
                    <strong>Lista korisnika:</strong>&nbsp;{(membersOnline.length === 0) ? "Trenutno nema nikoga" : ""}<br />
                    <div>
                        {membersOnline.map((m, idx) => {
                            return (
                                <span key={idx}><i>{m.clientData.username}</i><br /></span>
                            )
                        })}
                    </div>
                </div>
                <div className="col-md-6">
                    <strong>Broj korisnika online:</strong> {membersOnline.length}<br />
                </div>
            </div>
        </div>

    )
}