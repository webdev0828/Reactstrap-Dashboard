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
  Modal,
  ModalBody,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap';
import { getScooters } from '../../api/ScooterApi';
import { Redirect } from 'react-router-dom';
// import ScooterDetail from './ScooterDetail';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

function ManagementTable() {
  const [allScooters, setAllScooters] = useState({ Scooters: [] });
  const [redirect, setRedirect] = useState(false);
  const [modalPosition, setModalPosition] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lon: 0 });

  async function fetchData() {
    const result = await getScooters();
    setAllScooters(result.response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function renderRedirect() {
    if (redirect) {
      return <Redirect to="/admin/scooter-detail" />;
    }
  }

  function handleScooterDetails(id) {
    setRedirect(true);
  }

  function toggleModalPosition(lat, lon) {
    setCurrentPosition({ lat: parseFloat(lat), lon: parseFloat(lon) });
    setModalPosition(!modalPosition);
  }

  const RegularMap = withScriptjs(
    withGoogleMap((props) => {
      return (
        <GoogleMap
          defaultZoom={16}
          defaultCenter={{ lat: currentPosition.lat, lng: currentPosition.lon }}
          defaultOptions={{
            scrollwheel: false
          }}
        >
          <Marker position={{ lat: currentPosition.lat, lng: currentPosition.lon }} />
        </GoogleMap>
      );
    })
  );

  function renderModalPosition() {
    return (
      <Modal isOpen={modalPosition} toggle={toggleModalPosition}>
        <div className="modal-header justify-content-center">
          <button aria-hidden={true} className="close" data-dismiss="modal" type="button" onClick={toggleModalPosition}>
            <i className="tim-icons icon-simple-remove" />
          </button>
          <h6 className="title title-up">Position</h6>
        </div>
        <ModalBody className="text-center">
          <div className="map" id="regularMap">
            <RegularMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key={google api key}"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div
                  style={{
                    height: `500px`,
                    borderRadius: `.2857rem`,
                    overflow: `hidden`
                  }}
                />
              }
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </ModalBody>
      </Modal>
    );
  }

  function renderScooters() {
    return allScooters.Scooters.map((scooter, index) => {
      return (
        <tr key={index}>
          <td>{scooter.id_scooter}</td>
          <td>{scooter.serial}</td>
          <td>{scooter.status}</td>
          <td>
            <button
              onClick={() => toggleModalPosition(scooter.lat, scooter.lon)}
              className="btn btn-default btn-just-icon"
            >
              <i className="tim-icons icon-gps-fixed" />
            </button>
          </td>
        </tr>
      );
    });
  }
  return (
    <React.Fragment>
      {/* {renderRedirect()} */}
      {renderModalPosition()}
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
                <CardTitle tag="h4">Management</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>ID</th>
                      <th>IMEI</th>
                      <th>STATUS</th>
                      <th>POSITION</th>
                      <th>UNLOCK</th>
                      <th>TRACKING</th>
                      <th>SETTINGS</th>
                      <th>TRANSMITION</th>
                    </tr>
                  </thead>
                  <tbody>{renderScooters()}</tbody>
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

export default ManagementTable;
