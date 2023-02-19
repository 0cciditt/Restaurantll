export default function Navbar () {
    
    return (
    <nav className= "nav">
        <a href = "/" className = "logo">logo</a>
        <ul>
           <CustomLink href="/Home">Home</CustomLink>
           <CustomLink href="/About">About</CustomLink>
           <CustomLink href="/Menu">Menu</CustomLink>
           <CustomLink href="/Reservations">Reservations</CustomLink>
           <CustomLink href="/Order-online">Order Online</CustomLink>
           <CustomLink href="/Login">Login</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink ({href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path == href ? "active" : ""}>
        <a href={href} {...props}>{children}</a>
        </li>

    )
}