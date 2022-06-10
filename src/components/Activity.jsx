import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes  from "prop-types"

function Activity({ userActivityData }) {


    /**
     * Get the day in the full date
     * @param {string} value full date
     * @returns {number {1-31} } day
     */
    const renderXAxisNumber = (day) => {
        const dayNumber = day.split('-')

        return (Number(dayNumber[2]))
    }

    /**
     * Create Tooltip
     * @param {array} payload data
     * @param {boolean} active is Tootip active
     * @returns value on hover
     */
    function TooltipActivity({ payload, active }) {
        if (active) {
            return (
                <div className='activity__tooltip'>
                    <div>{`${payload[0].value}`}kg</div>
                    <div>{`${payload[1].value}`}Kcal</div>
                </div>
            )
        }
        return null
    }
    return (
        <section className="activity">
            <h2 className='activity__h2'>Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart
                    data={userActivityData}
                    margin={{
                        top: 30, right: 25, left: 25, bottom: 30
                    }}
                >
                    <CartesianGrid vertical='false' strokeDasharray='3' height={1} horizontalPoints={[90, 185]} />
                    <XAxis className='activityXAxis'
                        dataKey='day'
                        tickFormatter={renderXAxisNumber}
                        interval='preserveStartEnd'
                        tickSize='0'
                        tickMargin='25'
                        stroke='#9B9EAC' />
                    <YAxis
                        dataKey='calories'
                        yAxisId='left'
                        orientation='left'
                        hide='true' />
                    <YAxis className='activityYAxis'
                        dataKey='kilogram'
                        yAxisId='right'
                        orientation='right'
                        type='number'
                        domain={['dataMin -1', 'dataMax']}
                        tickCount='3'
                        tickSize='0'
                        axisLine={false}
                        tickMargin='30'
                        width={45}
                        stroke='#9B9EAC' />
                    <Tooltip content={<TooltipActivity />} />
                    <Legend
                        verticalAlign='top'
                        align='right'
                        height={80}
                        iconType='circle'
                        iconSize={8}
                        formatter={(value) => (
                            <span className='activity__legend'>{value}</span>)} />
                    <Bar name='Poids (kg)'
                        dataKey='kilogram'
                        yAxisId='right'
                        fill='#282D30'
                        radius={[3, 3, 0, 0]}
                        barSize={7} />
                    <Bar name='Calories brûlées (kCal)'
                        dataKey='calories'
                        yAxisId='left'
                        fill='#E60000'
                        radius={[3, 3, 0, 0]}
                        barSize={7} />
                </BarChart>
            </ResponsiveContainer>
        </section>
    )
}
export default Activity;

Activity.propTypes={
    userActivityData: PropTypes.array.isRequired
}