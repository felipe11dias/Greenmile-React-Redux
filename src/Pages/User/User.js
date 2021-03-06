import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

function User ({ user }) {
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

const mapStateToProps = state => ({ user: state })

export default connect(mapStateToProps, null)(User);