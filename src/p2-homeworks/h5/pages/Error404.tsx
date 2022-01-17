import React from 'react'
import styles from './Error404.module.css'

const error = {
    color: 'white',
    fontWeight: '700',
    fontSize: '24px'
}

function Error404() {
    return (
        <div className={styles.container}>

            <div style={error}>404</div>
            <div style={error}>Page not found!</div>
            <div>Please use the navigation.</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
