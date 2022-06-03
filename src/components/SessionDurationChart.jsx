import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
function SessionDurationChart({ averageSessionsData }) {

    const renderXAxisLetter = (day) => {
        switch (day) {
            case 1: return 'L';
            case 2: return 'M';
            case 3: return 'M';
            case 4: return 'J';
            case 5: return 'V';
            case 6: return 'S';
            case 7: return 'D';
            default: return '';
        }
    }
    function tooltipSessionDurationChart({ payload, active }) {
        if (active) {
            return (
                <div className='sessionDurationChart__tooltip'>
                    <p>{`${payload[0].value}`}min</p>
                </div>
            )
        }
    }


    return (
        <section className="sessionDurationChart">
            <div className='sessionDurationChart__chart'>
                <h2 className='sessionDurationChart__h2'>Durée moyenne des sessions</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={averageSessionsData}
                        margin={{ top: 60, right: 10, bottom: 30, left: 10 }}>
                        <Line type="natural"
                            dataKey="sessionLength"
                            stroke="rgba(255, 255, 255, 0.5)"
                            dot={false}
                            strokeWidth={2} />
                        <XAxis
                            dataKey='day'
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fontWeight: 500 }}
                            tickFormatter={renderXAxisLetter}
                            stroke='rgba(255, 255, 255, 0.5)'
                            tickMargin={30}
                        />
                        <Tooltip content={tooltipSessionDurationChart} cursor={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}
export default SessionDurationChart;