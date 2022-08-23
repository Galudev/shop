import React from 'react'

export const EmptyList = ({ isEmpty, message }) => {
    return (
        <div className="alert alert-danger m-4"
            style={{ display: isEmpty ? '' : 'none' }}>
            {message}
        </div>
    )
}
