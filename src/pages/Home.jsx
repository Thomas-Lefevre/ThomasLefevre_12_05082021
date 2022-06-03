import Header from "../components/Header";
import Menu from "../components/Menu";
import Welcome from "../components/Welcome";
import Activity from "../components/Activity";
import SessionDurationChart from "../components/SessionDurationChart";
import UserPerformanceRadarChart from "../components/userPerformanceRadarChart";
import Score from "../components/Score";
import Statistics from "../components/Statistics";
import data from "../mock/data"

function Home() {
  // console.log(data);
  return (
    <div className="pageContainer">
      <Header />
      <Menu />
      <div className="main">
        <Welcome name={data.USER_MAIN_DATA[0].userInfos.firstName} />
        <div className="information">
          <div className="information__chart">
            <Activity userActivityData={data.USER_ACTIVITY[0].sessions}/>
            <section className="information__chart__multiple">
              <div className="information__chart__multiple__SessionDurationChart">
                <SessionDurationChart averageSessionsData={data.USER_AVERAGE_SESSIONS[0].sessions}/>
              </div>
              <div className="information__chart__multiple__RadarChart">
                <UserPerformanceRadarChart  userPerformance={data.USER_PERFORMANCE[0].data}/>
              </div>
              <div className="information__chart__multiple__Score">
                <Score userScore={data.USER_MAIN_DATA[0]}/>
              </div>
            </section>
          </div>
          <Statistics keyData={data.USER_MAIN_DATA[0].keyData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
