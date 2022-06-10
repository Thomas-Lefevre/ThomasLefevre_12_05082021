import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../mock/data"

function userMainData(id) {
    const data = USER_MAIN_DATA.find(userData => userData.id.toString() === id)
    const mainData = {data}
    return mainData;
}

function userActivity(id) {
    const data = USER_ACTIVITY.find(userData => userData.userId.toString() === id)
    const mainData = {data}
    return mainData;
}

function userAverageSessions(id) {
    const data = USER_AVERAGE_SESSIONS.find(userData => userData.userId.toString() === id)
    const mainData = {data}
    return mainData;
}

function userPerformance(id) {
    const data = USER_PERFORMANCE.find(userData => userData.userId.toString() === id)
    const mainData = {data}
    return mainData;
}

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