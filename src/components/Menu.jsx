import iconCyclisme from "../assets/iconCyclisme.svg";
import iconMeditation from "../assets/iconMeditation.svg";
import iconMusculation from "../assets/iconMusculation.svg";
import iconNatation from "../assets/iconNatation.svg";

function Menu() {
    return (
        <section className="menu">
            <nav className="menu__nav">
                <img src={iconMeditation} alt="boutton meditation" />
                <img src={iconNatation} alt="boutton natation" />
                <img src={iconCyclisme} alt="boutton cyclisme" />
                <img src={iconMusculation} alt="boutton musculation" />
            </nav>
            <p className="menu__copyright">Copiryght, SportSee 2020</p>
        </section>

    )
}

export default Menu;