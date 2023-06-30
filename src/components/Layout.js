import React from 'react'

const Layout = ({children}) => {
    return (
        <div className="font-noto">
            <main className="bg-zinc-50 max-w-5xl mx-auto px-2.5">{children}</main>
        </div>
    )
}

export default Layout