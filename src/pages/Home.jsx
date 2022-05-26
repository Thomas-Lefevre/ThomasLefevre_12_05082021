import Header from "../components/Header";
import Menu from "../components/Menu";
import Welcome from "../components/Welcome";
import Activity from "../components/Activity";
import SessionDurationChart from "../components/SessionDurationChart";
import RadarChart from "../components/RadarChart";
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
        <Welcome name={data.USER_MAIN_DATA[1].userInfos.firstName} />
        <div className="information">
          <div className="information__chart">
            <Activity />
            <section className="information__chart__multiple">
              <div className="information__chart__multiple__SessionDurationChart">
                <SessionDurationChart />
              </div>
              <div className="information__chart__multiple__RadarChart">
                <RadarChart />
              </div>
              <div className="information__chart__multiple__Score">
                <Score />
              </div>
            </section>
          </div>
          <Statistics keyData={data.USER_MAIN_DATA[1].keyData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
