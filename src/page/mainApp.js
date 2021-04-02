import Page from "../component/Page";
import { IconWidget, NumberWidget } from "../component/Widget";
import { chartjs } from "../component/demos/dashboardPage";
import React from "react";
import { Alert } from "reactstrap";
import { Bar, Line } from "react-chartjs-2";
import {
  MdBubbleChart,
  MdInsertChart,
  MdPieChart,
  MdShowChart,
  MdRateReview,
  MdShare,
  MdThumbUp,
} from "react-icons/md";
import {
  Badge,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  Col,
  Row,
} from "reactstrap";
import { getColor } from "../utils/colors";
import Navbar from "../component/Navbar"
class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor("primary");
    return (
      <Page className="DashboardPage" title="Dashboard">
       <Navbar/>
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Total Profit"
              subtitle="This month"
              number="9.8k"
              color="secondary"
              progress={{
                value: 75,
                label: "Last month",
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Monthly Visitors"
              subtitle="This month"
              number="5,400"
              color="secondary"
              progress={{
                value: 45,
                label: "Last month",
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="New Users"
              subtitle="This month"
              number="3,400"
              color="secondary"
              progress={{
                value: 90,
                label: "Last month",
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Bounce Rate"
              subtitle="This month"
              number="38%"
              color="secondary"
              progress={{
                value: 60,
                label: "Last month",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Total Revenue{" "}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Total Expense</CardHeader>
              <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  <MdInsertChart size={25} color={primaryColor} /> Cost of sales{" "}
                  <Badge color="secondary">$3000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdBubbleChart size={25} color={primaryColor} /> Management
                  costs <Badge color="secondary">$1200</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdShowChart size={25} color={primaryColor} /> Financial costs{" "}
                  <Badge color="secondary">$800</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdPieChart size={25} color={primaryColor} /> Other operating
                  costs <Badge color="secondary">$2400</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <CardGroup style={{ marginBottom: "1rem" }}>
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdThumbUp}
            title="50+ Likes"
            subtitle="People you like"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdRateReview}
            title="10+ Reviews"
            subtitle="New Reviews"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdShare}
            title="30+ Shares"
            subtitle="New Shares"
          />
        </CardGroup>
      </Page>
    );
  }
}
export default DashboardPage;
