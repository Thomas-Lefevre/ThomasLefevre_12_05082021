import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../mock/data"

/**
 * Find the current user's main mocked data 
 * @param {string} id User id
 * @returns main data of current user
 */
function userMainData(id) {
    const data = USER_MAIN_DATA.find(userData => userData.id.toString() === id)
    const mainData = {data}
    return mainData;
}

/**
 * Find the current user's activity mocked data 
 * @param {string} id User id
 * @returns user_activity data of current user
 */
function userActivity(id) {
    const data = USER_ACTIVITY.find(userData => userData.userId.toString() === id)
    const mainData = {data}
    return mainData;
}

/**
 * Find the current user's average sessions mocked data 
 * @param {string} id User id
 * @returns user_average_sessions data of current user
 */
function userAverageSessions(id) {
    const data = USER_AVERAGE_SESSIONS.find(userData => userData.userId.toString() === id)
    const mainData = {data}
    return mainData;
}

/**
 * Find the current user's performance mocked data 
 * @param {string} id User id
 * @returns user_performance data of current user
 */
function userPerformance(id) {
    const data = USER_PERFORMANCE.find(userData => userData.userId.toString() === id)
    const mainData = {data}
    return mainData;
}

/**
 * Find the user's data from mocked data
 * @param {string} id User id
 * @param {string} param The route of mocked data
 * @returns mocked data of current user
 */
const mockData = (id, param) => {
    switch (param) {
        case "main": return userMainData(id);
        case "activity": return userActivity(id);
        case "average-sessions": return userAverageSessions(id);
        case "performance": return userPerformance(id);
        default: return "";
    }
}

export default mockData