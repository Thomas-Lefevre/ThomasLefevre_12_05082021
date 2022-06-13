import { Link } from "react-router-dom"
function Error404() {
    const errorPhrase = "Oups! La page que vous demandez n'existe pas."
    const userLink = "Retourner sur la page Utilisateur"

    return (
        <section className="error">
            <p className="error__404">404</p>
            <p className="error__phrase">{errorPhrase}</p>
            <Link to="/" className="error__link">{userLink}</Link>
        </section>
    )
}

export default Error404