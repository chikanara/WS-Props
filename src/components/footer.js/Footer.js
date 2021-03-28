import React from 'react'

const Footer = ({children,total}) => {
    return (
        <div>
            <mark>Toal Price{total}</mark> <br/>
            {children}
        </div>
    )
}
Footer.defaultProps = {
    total:"0.00 $"
}

export default Footer
