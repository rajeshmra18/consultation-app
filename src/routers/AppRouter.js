import React, { useState } from 'react'
import PrivateStack from './stack/private'
import PublicStack from './stack/public'

function AppRouter() {
    const [token] = useState('ads')

    if (token) {
        return (
            <PrivateStack />
        )
    } else {
        return (
            <PublicStack />
        )
    }
}

export default AppRouter