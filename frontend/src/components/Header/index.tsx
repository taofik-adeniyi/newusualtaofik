import React, { ReactNode } from 'react'

interface HeaderProps {
    children: ReactNode;
    myStyles?: Array<object>;
}
const Header = (props: HeaderProps) => {
    const { children, myStyles } = props
    return (
        <header className="App-header" style={{}}>
        {children}
      </header>
    )
}

export default Header
