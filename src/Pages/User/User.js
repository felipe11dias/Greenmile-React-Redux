import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import store from '../../Store/index';

function User ({ user }) {
   console.log(store);
   console.log(store.getState());

   return (
      <React.Fragment>
         <Row>
            <Col>
               <Card>
                  <Card.Title>Dados Usuário</Card.Title>
                  <Card.Body>
                     <label>Apelido: {user.login} </label>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </React.Fragment>
   );
}

export default connect(state => ({
   user: state.user,
}) )(User);