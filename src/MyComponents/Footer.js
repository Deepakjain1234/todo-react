import React from 'react'
let stylecss=
{
    position:"fixed",
    bottom:" 0px",
    width:"100%"


}

export const Footer = () => { 
    return (
        <footer className="bg-dark text-light py-3" style={stylecss}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
