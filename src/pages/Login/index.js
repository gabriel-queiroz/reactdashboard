import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Form } from './styles';
import { login } from '../../services/userService';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
class Login extends Component {
  state = {
    username: '',
    password: '',
    loading: false,
  };

  handleChangeUsername = (username) => {
    this.setState({ username: username.target.value });
  };

  handleChangePassword = (password) => {
    this.setState({ password: password.target.value });
  };

  handleFormsubmit = async () => {
    const { username, password } = this.state;
    const { history } = this.props;
    console.log(history);
    await this.setState({ loading: true });
    if (!!username && !!password) {
      try {
        const {
          data: { token },
        } = await login(username, password);
        localStorage.setItem('@reactdashboard:token', token);
        history.push('/');
      } catch (error) {
        console.log(error);
        toast.error('Email/Usuário incorretos');
      }
    } else {
      toast.warn('Email e senha obrigatórios');
      this.setState({ loading: false });
    }
  };

  render() {
    const { classes, history } = this.props;
    console.log(this.props);
    const { username, password, loading } = this.state;
    return (
      <Container>
        <Card className={classes.card}>
          <CardContent>
            <Form>
              <TextField
                style={{ width: '100%' }}
                id="Usuário"
                label="Usuário"
                margin="no"
                value={username}
                onChange={this.handleChangeUsername}
              />
              <TextField
                style={{ width: '100%' }}
                id="password"
                label="Senha"
                margin="normal"
                type="password"
                value={password}
                onChange={this.handleChangePassword}
              />
              <Button
                onClick={this.handleFormsubmit}
                style={{
                  marginTop: 30,
                  width: '100%',
                  backgroundColor: '#43d',
                  color: '#ffffff',
                }}
                variant="contained"
              >
                {loading ? <div className="fa fa-spinner fa-spin" /> : 'Entrar'}
              </Button>
              <Button
                style={{
                  marginTop: 20,
                  width: '100%',
                  backgroundColor: '#43d',
                  color: '#ffffff',
                }}
                variant="contained"
                disable
              >
                Registrar-se
              </Button>
            </Form>
          </CardContent>
        </Card>
        <ToastContainer autoClose={2000} />
      </Container>
    );
  }
}

export default (withStyles(styles)(Login));
