import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Form } from './styles';

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
  render() {
    const { classes, history } = this.props;
    console.log(history);
    return (
      <Container>
        <Card className={classes.card}>
          <CardContent>
            <Form>
              <TextField style={{ width: '100%' }} id="email" label="Email" margin="normal" />
              <TextField
                style={{ width: '100%' }}
                id="password"
                label="Senha"
                margin="normal"
                type="password"
              />
              <Button
                onClick={() => history.push('/')}
                style={{
                  marginTop: 30,
                  width: '100%',
                  backgroundColor: '#43d',
                  color: '#ffffff',
                }}
                variant="contained"
              >
                Entrar
              </Button>
              <Button
                style={{
                  marginTop: 20,
                  width: '100%',
                  backgroundColor: '#43d',
                  color: '#ffffff',
                }}
                variant="contained"
              >
                Registrar-se
              </Button>
            </Form>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default withStyles(styles)(Login);
