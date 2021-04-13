import React, { ReactNode } from 'react'

const Footer = ({children}:{children?: ReactNode}) => {
    return (
        <footer style={{textAlign: 'center', paddingBottom: '30px'}}>
            {children ? children : 'No child element found'}
        </footer>
    )
}

export default Footer
