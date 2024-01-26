import React from 'react'
import Navbar from '../Navbar.main'

interface Props {
    children: JSX.Element[] | JSX.Element
}

const PageLayout = ({ children }: Props) => {
    return (
        <div className='xl:px-24 lg:px-16 md:px-8 sm:px-5 px-3 min-h-screen gap-4 md:gap-8 lg:gap-12 relative'><Navbar />{children}</div>
    )
}

export default PageLayout