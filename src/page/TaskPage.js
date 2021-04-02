import Page from "../component/Page";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Navbar from "../component/Navbar";

const FormPage = () => {
  let [inputCheck, setInputCheck] = useState([""]);
  let [Title, settitle] = useState("");
  let [Description, setDescription] = useState("");
  let [File, setFile] = useState([""]);

  const submitValue = () => {
    const frmdetails = {
      title: Title,
      description: Description,
      file: File,
      check_list: inputCheck,
    };
    console.log(frmdetails);
  };

  return (
    <Page title="Add Task">
      <Navbar />
      <Card>
        <CardHeader>Task</CardHeader>
        <CardBody>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Title
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="title"
                onChange={(e) => settitle(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelectMulti" sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="decription"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              File
            </Label>
            <Col sm={10}>
              <Input type="file" name="file" multiple onChange={e=>setFile(e.target.files)} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}>
              Checklist
            </Label>
            <Col sm={10}>
              <form>
                {inputCheck.map((value, i) => (
                  <div key={i}>
                    <Input
                      value={value.title}
                      onChange={(e) =>
                        setInputCheck(
                          inputCheck.map((value, j) => {
                            if (i === j)
                              value = {
                                id: i,
                                checkitle: e.target.value,
                                status: false,
                              };
                            return value;
                          })
                        )
                      }
                    />
                  </div>
                ))}
              </form>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}></Label>
            <Col sm={{ size: 10 }}>
              <button
                className="btn btn-primary"
                onClick={() => setInputCheck(inputCheck.concat(""))}
              >
                Add Checklist
              </button>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="date" sm={2}>
              Date
            </Label>
            <Col sm={{ size: 10 }}>
              <input type="date" id="birthday" name="birthday" />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 6 }}>
              <Button onClick={submitValue}>Submit</Button>
            </Col>
          </FormGroup>
        </CardBody>
      </Card>
    </Page>
  );
};

export default FormPage;
