import React, { useState } from "react";
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import './home.css';

import * as UserActions from '../../Store/Models/User/actions';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

function Home(props) {

   // const [user, setUser] = useState({});
   const [name, setName] = useState('');
   const [msg, setMsg] = useState('');

   function handleUserCredencials(e, name) {
      e.preventDefault();
      const { addToUserRequest } = props;

      addToUserRequest(name);
   }

   return (
      <React.Fragment>
         <Row style={{ margin: "auto" }}>
            <Col>
               <Card className="rounded border">
                  <Card.Body>
                     <Card.Title className="border-bottom"> Consulte sua conta do GitHub </Card.Title>
                     {/* Mostrar mensagem. */}
                     <div>
                        {msg && <p>{msg}</p>}
                     </div>
                     <Form onSubmit={(e) => handleUserCredencials(e, name)}>
                        <label>Nome/Apelido</label><br/>
                        <input className="form-control" type="text" placeholder="Entre com seu nome ou apelido." value={name} onChange={ (e) => setName(e.target.value) }  /> <br/>
                        <Button className="float-right" type="submit">Acessar</Button>
                     </Form>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </React.Fragment>
   );
}

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
