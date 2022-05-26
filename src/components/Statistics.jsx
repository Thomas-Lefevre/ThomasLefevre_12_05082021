import iconCalories from "../assets/iconCalories.svg"
import iconProteines from "../assets/iconProteines.svg"
import iconGlucides from "../assets/iconGlucides.svg"
import iconLipides from "../assets/iconLipides.svg"

function Statistics({ keyData }) {
    const calories = keyData.calorieCount + "kCal"
    const proteines = keyData.proteinCount + "g"
    const glucides = keyData.carbohydrateCount + "g"
    const lipides = keyData.lipidCount + "g"
    return (
        <section className="statistics">
            <div className="statistics__card">
                <div className="statistics__card__icone iconeCalories">
                    <img src={iconCalories} alt="icone calories" />
                </div>
                <div className="statistics__card__text">
                    <p className="statistics__card__text__value">{calories}</p>
                    <p className="statistics__card__text__p">Calories</p>
                </div>
            </div>
            <div className="statistics__card">
                <div className="statistics__card__icone iconeProteines">
                    <img src={iconProteines} alt="icone proteines" />
                </div>
                <div className="statistics__card__text">
                    <p className="statistics__card__text__value">{proteines}</p>
                    <p className="statistics__card__text__p">Proteines</p>
                </div>
            </div>
            <div className="statistics__card">
                <div className="statistics__card__icone iconeGlucides">
                    <img src={iconGlucides} alt="icone glucides" />
                </div>
                <div className="statistics__card__text">
                    <p className="statistics__card__text__value">{glucides}</p>
                    <p className="statistics__card__text__p">Glucides</p>
                </div>
            </div>
            <div className="statistics__card">
                <div className="statistics__card__icone iconeLipides">
                    <img src={iconLipides} alt="icone lipides" />
                </div>
                <div className="statistics__card__text">
                    <p className="statistics__card__text__value">{lipides}</p>
                    <p className="statistics__card__text__p">Lipides</p>
                </div>
            </div>
        </section>
    )
}
export default Statistics;