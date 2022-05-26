function Welcome({ name }) {

    return (
        <section className="welcome">
            <h1 className="welcome__hello">Bonjour <span className="welcome__hello__name">{name}</span></h1>
            <p className="welcome__goal">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    )
}
export default Welcome;