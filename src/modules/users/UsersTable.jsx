import React, { useEffect, useState } from 'react';

// reactstrap components
import {
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Progress,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap';
import { getUsers } from '../../api/UserApi';
import { Redirect } from 'react-router-dom';
import UserDetail from './UserDetail';

function UsersTable() {
  const [allUsers, setAllUsers] = useState({ Users: [] });
  const [redirect, setRedirect] = useState(false);

  async function fetchData() {
    const result = await getUsers();
    setAllUsers(result.response);
  }

  useEffect(() => {
    fetchData();
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

  function renderUsers() {
    return allUsers.Users.map((user, index) => (
      <tr key={index} onClick={() => handleUserDetails(index)}>
        <td className="text-center">
          <div className="photo">
            <img alt="..." src={require('assets/img/tania.jpg')} />
          </div>
        </td>
        <td>{`${user.first_name} ${user.last_name}`}</td>
        <td>{user.email}</td>
        <td className="text-center">{user.phone}</td>
        <td className="text-right">{user.country}</td>
        <td className="text-right">
          {user.status}
          {/* <Button className="btn-link btn-icon" color="success" id="tooltip324367706" size="sm">
            <i className="tim-icons icon-refresh-01" />
          </Button>
          <UncontrolledTooltip delay={0} target="tooltip324367706">
            Tooltip on top
          </UncontrolledTooltip>
          <Button className="btn-link" color="danger" id="tooltip974171201" size="sm">
            <i className="tim-icons icon-simple-remove" />
          </Button>
          <UncontrolledTooltip delay={0} target="tooltip974171201">
            Tooltip on top
          </UncontrolledTooltip> */}
        </td>
      </tr>
    ));
  }
  return (
    <React.Fragment>
      {renderRedirect()}
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <div className="tools float-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      className="btn-link btn-icon"
                      color="default"
                      data-toggle="dropdown"
                      type="button"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Another action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Something else here
                      </DropdownItem>
                      <DropdownItem className="text-danger" href="#pablo" onClick={(e) => e.preventDefault()}>
                        Remove Data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <CardTitle tag="h4">Admin Users</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th className="text-center">Phone</th>
                      <th className="text-right">Country</th>
                      <th className="text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>{renderUsers()}</tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      )
    </React.Fragment>
  );
}

export default UsersTable;
