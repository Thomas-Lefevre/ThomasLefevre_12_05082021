import logo from "../assets/logo.svg"

function Header() {
    const accueil = "Accueil";
    const profil = "Profil";
    const reglage = "Réglage";
    const communaute = "Communauté";

    return(
        <header className="header">
            <img src={logo} alt="logo du site SportSee" />
            <nav className="header__nav">
                <ul className="header__nav__ul">
                    <li>{accueil}</li>
                    <li>{profil}</li>
                    <li>{reglage}</li>
                    <li>{communaute}</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header