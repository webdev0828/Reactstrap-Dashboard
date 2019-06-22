// reactstrap components
import {
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Progress,
  Row,
  Table,
  UncontrolledDropdown,
  UncontrolledTooltip
} from 'reactstrap';
import React, { useEffect, useState } from 'react';

// import { getUsers } from '../../api/UserApi';
import { Redirect } from 'react-router-dom';
import auth from './../../api/auth';
import { verifySMSCode } from './../../api/LoginApi';

// import UserDetail from './UserDetail';

function VerificationCode() {
  const [lastDigits, setlastDigits] = useState(auth.getLastDigits());
  const [code, setCode] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function fetchData() {
    // const result = await getUsers();
    // setAllUsers(result.response);
  }

  useEffect(() => {
    // fetchData();
  }, []);

  function renderRedirect() {
    if (redirect) {
      return <Redirect to="/admin/user-detail" />;
    }
  }

  function handleUserDetails(id) {
    console.log(id);
    setRedirect(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    console.log(code);
    const response = await verifySMSCode(code);
    console.log(response);
    if (auth.hasLogin()) {
      setRedirect(true);
    }
  }

  return (
    <React.Fragment>
      {redirect ? (
        <Redirect from="/" to="/admin/Dashboard" />
      ) : (
        <div className="content">
          <Row className="justify-content-md-center">
            <Col md="6">
              <Card>
                <Form onSubmit={handleSubmit}>
                  <CardHeader>
                    <CardTitle tag="h4">Enter your verification code.</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <label>
                      Let's make sure it's really you. We've just sent a text message with a fresh verification code to
                      the phone number ending in *********{lastDigits}.
                    </label>
                    <FormGroup>
                      <Input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
                    </FormGroup>
                    <p>
                      Did not receive a code? <a href="">Try again.</a>
                    </p>
                  </CardBody>
                  <CardFooter>
                    <Button className="btn-fill" color="primary" type="submit">
                      Submit
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </React.Fragment>
  );
}

export default VerificationCode;
