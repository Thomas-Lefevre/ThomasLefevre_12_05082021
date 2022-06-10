import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function userPerformanceRadarChart({ userPerformance }) {


    /**
     * Format XAxis ticks in french
     * @param {string} kind english labels
     * @returns french labels
     */
    const renderPerformanceCategories = (kind) => {

        switch (kind) {
            case 1: return 'Cardio';
            case 2: return 'Energie';
            case 3: return 'Endurance';
            case 4: return 'Force';
            case 5: return 'Vitesse';
            case 6: return 'Intensité';
            default: return null;
        }
    }


    /**
     * Reverse order the data from array
     * @param {array} array 
     * @returns reversed array
     */
    function reverseData(array) {
        const dataReversedArray = []
        for (let i = array.length - 1; i >= 0; i--) {
            dataReversedArray.push(array[i])
        }
        return dataReversedArray
    }

    const dataReversed = reverseData(userPerformance)

    return (
        <section className="radarChart">
            <div className='radarChart__chart'>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={dataReversed} outerRadius="60%" >
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis dataKey='kind'
                            tickLine={false}
                            tick={{ fontSize: 12, fontWeight: 500 }}
                            stroke="#FFFFFF"
                            tickFormatter={renderPerformanceCategories} />
                        <Radar dataKey='value' fill="rgba(255, 1, 1, 0.7)" />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}
export default userPerformanceRadarChart;