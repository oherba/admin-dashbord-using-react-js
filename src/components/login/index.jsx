import React from 'react'

function Index() {
    const test = ['ilias', 'hamaza']
    return (
        <div>
            {test.map(element =>
                element === 'ilias' ? <p key={element} style={{color: '#fff1515'}}>{element}</p> : null
        )}
        </div>
    )
}

export default Index
