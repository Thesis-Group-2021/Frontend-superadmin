import "./main.css";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import Pie from "../../components/charts/Pie";
import Chart from "../../components/charts/Chart";

import { PieChart } from "@material-ui/icons";

import Dough from "../../components/charts/Dough";
import { FcLibrary } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
const main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <div className="main__greeting">
            <h1>Welcome</h1>
            <p> welcome to dashboard</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i>
              {" "}
              <card>
                <CardMedia />{" "}
              </card>{" "}
            </i>
            <div className="card__inner">
              <Dough />
              <p className="text-primary-p">Number of Institute</p>
              <span className="font-bold text-title">140</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-approvers-o fa-2x text-yellow"></i>
            <div className="card__inner">
              <i>
                {" "}
                <card />{" "}
              </i>

              <Dough />
              <p className="text-primary-p">Number of Approvers</p>
              <span className="font-bold text-title">140</span>
            </div>
          </div>
          <div className="card">
            <i>
              {" "}
              <card />{" "}
            </i>
            <div className="card__inner">
              <Dough />
              <p className="text-primary-p">Number of users</p>
              <span className="font-bold text-title">500</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-posts-o fa-2x text-blue"></i>
            <div className="card__inner">
              <Dough />
              <p className="text-primary-p">Number of posts</p>
              <span className="font-bold text-title">950</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts">
            <div className="charts__lefttt">
              <div className="charts__left__title">
                <p>Overall Reports</p>
                <i>
                  {" "}
                  <card />{" "}
                </i>
              </div>
              <Pie />
            </div>
            <div className="charts__lefts">
              <div className="charts__left__titles">
                <p>Overall Reports</p>
                <i>
                  {" "}
                  <card />{" "}
                </i>
              </div>
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default main;
