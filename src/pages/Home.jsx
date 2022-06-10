import Header from "../components/Header";
import Menu from "../components/Menu";
import Welcome from "../components/Welcome";
import Activity from "../components/Activity";
import SessionDurationChart from "../components/SessionDurationChart";
import UserPerformanceRadarChart from "../components/userPerformanceRadarChart";
import Score from "../components/Score";
import Statistics from "../components/Statistics";
import { useEffect, useState } from "react";
// import mockData from "../services/fetchMock";
import fetchData from "../services/fetchApi";
import { useNavigate, useParams } from "react-router-dom"

function Home() {

  const { id } = useParams()
  // const navigate = useNavigate()

  const [userData, setUserData] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userAverageSessions, setUserAverageSessions] = useState()
  const [userPerformance, setUserPerformance] = useState()

  // fetchData(18).then(data => console.log(data)).catch((err) => console.log("Erreur", err))

  useEffect(() => {

    //Mocked Data
    // const userData = mockData(id, "main")
    // setUserData(userData)

    // const userActivity = mockData(id, "activity")
    // setUserActivity(userActivity)

    // const userAverageSessions = mockData(id, "average-sessions")
    // setUserAverageSessions(userAverageSessions)

    // const userPerformance = mockData(id, "performance")
    // setUserPerformance(userPerformance)

    //Fetch Data
    fetchData(id)
      .then(data => setUserData(data))
      .catch(err => console.log("Erreur lors de la récupération des données", err))

    fetchData(id, "activity")
      .then(data => setUserActivity(data))
      .catch(err => console.log("Erreur lors de la récupération des données", err))

    fetchData(id, "average-sessions")
      .then(data => setUserAverageSessions(data))
      .catch(err => console.log("Erreur lors de la récupération des données", err))

    fetchData(id, "performance")
      .then(data => setUserPerformance(data))
      .catch(err => console.log("Erreur lors de la récupération des données", err))

  }, [id])

  if ((!userData) || (!userActivity) || (!userAverageSessions) || (!userPerformance)) {
    return null
  }

  return (
    <div className="pageContainer">
      <Header />
      <Menu />
      <div className="main">
        <Welcome name={userData.data.userInfos.firstName} />
        <div className="information">
          <div className="information__chart">
            <Activity userActivityData={userActivity.data.sessions} />
            <section className="information__chart__multiple">
              <div className="information__chart__multiple__SessionDurationChart">
                <SessionDurationChart averageSessionsData={userAverageSessions.data.sessions} />
              </div>
              <div className="information__chart__multiple__RadarChart">
                <UserPerformanceRadarChart userPerformance={userPerformance.data.data} />
              </div>
              <div className="information__chart__multiple__Score">
                <Score userScore={userData.data} />
              </div>
            </section>
          </div>
          <Statistics keyData={userData.data.keyData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
