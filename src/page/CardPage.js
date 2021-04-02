import Page from "../component/Page";
import React from "react";
import { TodosCard } from "../component/Card";
import { todosData } from "../component/demos/dashboardPage";
import { Col, Row } from "reactstrap";
import Navbar from "../component/Navbar"


const CardPage = () => {
  return (
    <Page title="Cards">
     <Navbar/>
      <Row>
        <Col>
          <TodosCard todos={todosData} />
        </Col>

        <Col>
          <TodosCard todos={todosData} />
        </Col>
        <Col>
          <TodosCard todos={todosData} />
        </Col>
      </Row>

      <Row>
        <Col>
          <TodosCard todos={todosData} />
        </Col>

        <Col lg="4" md="12" sm="12" xs="12">
          <TodosCard todos={todosData} />
        </Col>
        <Col lg="4" md="12" sm="12" xs="12">
          <TodosCard todos={todosData} />
        </Col>
      </Row>
    </Page>
  );
};

export default CardPage;
