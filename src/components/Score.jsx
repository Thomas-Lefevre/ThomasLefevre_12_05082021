import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes  from "prop-types"

function Score({ userScore }) {

    /**
     * Format data into 'score'
     * @param {object} data 
     * @returns data
     */
    function formatScore(data) {
        if (data.todayScore) {
            data.score = data.todayScore
            delete data.todayScore
            return data
        }
    }
    formatScore(userScore)


    /**
     * Format the score in percentage
     * @param {object} data 
     * @returns integer for percentage
     */
    function calculatePercent(data) {
        const score = Number(data.score)

        return Math.round(score * 100)
    }
    const scorePercent = calculatePercent(userScore)

    return (
        <section className="score">
            <div className="score__chart">
                <h2 className='score__h2'>Score</h2>
                <ResponsiveContainer width="100%" height='100%'>
                    <RadialBarChart
                        innerRadius="70%"
                        data={[userScore]}
                        startAngle={180}
                        endAngle={-180}>
                        <RadialBar
                            dataKey='score'
                            fill='#FF0000'
                            cornerRadius={25}
                            barSize={10} />
                        <PolarAngleAxis type='number' domain={[0, 1]} tick={false} />
                        <circle cx="50%" cy="50%" fill='white' r="30%" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className='score__chart__legend'>
                    <p className='score__chart__legend__percent'>{scorePercent}%</p>
                    <p className='score__chart__legend__p'>de votre objectif</p>
                </div>
            </div>
        </section>
    )
}
export default Score;

Score.propTypes={
    userScore: PropTypes.object.isRequired
}