import React from 'react'
import { Redirect } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from 'reactstrap'
import { loginUniverseUser, AuthTokenLogin } from '../../api/LoginApi'
import auth from './../../api/auth'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false,
      redirectSMSValidation: false,
      email: '',
      pass: ''
    }
    this.login = this.login.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
  }
  componentDidMount () {
    document.body.classList.toggle('login-page')
  }
  componentWillUnmount () {
    document.body.classList.toggle('login-page')
  }
  handleChangeEmail (event) {
    this.setState({
      email: event.target.value
    })
  }
  handleChangePass (event) {
    this.setState({
      pass: event.target.value
    })
  }
  async login (event) {
    event.preventDefault()
    const userLogin = {
      email: this.state.email,
      password: this.state.pass
    }
    const response = await AuthTokenLogin()
    const result = await loginUniverseUser(userLogin)
    console.log('loginUniverseUser', result)
    if (auth.hasLogin()) {
      this.setState({
        redirect: true
      })
    } else {
      console.log('auth.hasSMSBeenSent()', auth.hasSMSBeenSent())
      if (auth.hasSMSBeenSent()) {
        this.setState({
          redirectSMSValidation: true
        })
      }
    }
  }
  renderLogin () {
    if (this.state.redirect) {
      return <Redirect from='/' to='/admin/Dashboard' />
    } else if (this.state.redirectSMSValidation) {
      return <Redirect from='/' to='/auth/verification-code' />
    } else {
      return (
        <div className='content'>
          <Container>
            <Col className='ml-auto mr-auto' lg='6' md='6'>
              <Form className='form'>
                <Card className='card-login'>
                  <CardHeader>
                    <CardTitle tag='span'>Welcome back!</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col sm={{ size: 6, offset: 3 }}>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='tim-icons icon-email-85' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Email'
                            type='text'
                            onChange={this.handleChangeEmail}
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={{ size: 6, offset: 3 }}>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='tim-icons icon-lock-circle' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Password'
                            type='password'
                            onChange={this.handleChangePass}
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Button
                      type='button'
                      block
                      className='mb-3'
                      color='primary'
                      onClick={e => {
                        this.login(e)
                      }}
                      size='lg'
                    >
                      Get Started
                    </Button>
                    <div className='pull-left'>
                      <h6>
                        <a
                          className='link footer-link'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className='pull-right'>
                      <h6>
                        <a
                          className='link footer-link'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
      )
    }
  }
  render () {
    return <React.Fragment>{this.renderLogin()}</React.Fragment>
  }
}

export default Login
