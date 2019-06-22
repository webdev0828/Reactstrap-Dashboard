import React, { useState } from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Table
} from 'reactstrap';
import Select from 'react-select';

function UserDetail() {
  const [user, setUser] = useState({});
  // useEffect(async () => {
  //   // const result = await getUsers();
  //   setUser(result.response);
  // }, []);

  function renderPayments() {
    // return allUsers.Users.map((user, index) => (
    return (
      // <tr key={index} onClick={() => handleUserDetails(index)}>
      <tr>
        <td className="text-left">130-FEB072019A0015</td>
        <td>$2,350.00</td>
        <td>COP</td>
        <td>ch_1DdIoyEEYmGsP3uuXlJrGGz5</td>
        <td className="text-left">Feb 27, 2019 4:45 PM</td>
        <td className="text-left">kathy.sanders@mail.com</td>
        <td className="text-left">Credit Card</td>
        <td className="text-left">E-Scooter</td>
        <td className="text-left">Failed</td>
      </tr>
    );
    // ));
  }

  return (
    <>
      <div className="content">
        <h4 className="title pl-3 icon-user">Carlos Client</h4>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Account Information</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form-horizontal" action="#">
                  <Row>
                    <Label md="3">CUID</Label>
                    <Col md="9">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label md="3">Created</Label>
                    <Col md="9">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label md="3">Name</Label>
                    <Col md="9">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label md="3">Email</Label>
                    <Col md="9">
                      <FormGroup>
                        <Input type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label md="3">Phone</Label>
                    <Col md="9">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label md="3">Country</Label>
                    <Col md="9">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label md="3">Birthday</Label>
                    <Col md="9">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Form className="form-horizontal">
                  <Row>
                    <Label md="3" />
                    <Col md="9">
                      <Button className="btn-fill" color="primary" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardFooter>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Cards</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form-horizontal">
                  <Row>
                    <Col md="9">
                      <FormGroup>
                        <Input type="text" value="Visa 8113" />
                      </FormGroup>
                    </Col>
                    <button className="btn btn-default btn-just-icon">
                      <i className="tim-icons icon-delete" />
                    </button>
                  </Row>
                </Form>
              </CardBody>
              <CardHeader>
                <CardTitle tag="h4">Currency</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form-horizontal">
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          name="singleSelect"
                          // value={this.state.singleSelect}
                          // onChange={(value) => this.setState({ singleSelect: value })}
                          options={[
                            {
                              value: '',
                              label: 'Single Option',
                              isDisabled: true
                            },
                            { value: '2', label: 'COP' },
                            { value: '3', label: 'USD' }
                          ]}
                          placeholder="Choose a currency..."
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Form className="form-horizontal">
                  <Row>
                    <Label md="3" />
                    <Col md="9">
                      <Button className="btn-fill" color="primary" type="submit">
                        Sign in
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardFooter>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">User balance</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="/" className="form-horizontal" method="get">
                  <Row>
                    <Col md="12">
                      <h6>$0.00</h6>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Payments</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-left">Order ID</th>
                      <th>Amount</th>
                      <th>Currency</th>
                      <th className="text-left">Token</th>
                      <th className="text-left">Date</th>
                      <th className="text-left">User</th>
                      <th className="text-left">Payment Method</th>
                      <th className="text-left">Service</th>
                      <th className="text-left">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>{renderPayments()}</tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserDetail;
