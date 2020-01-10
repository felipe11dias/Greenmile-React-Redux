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

   const handleUserCredencials =  name => {
      const { addToUserRequest } = props;

      addToUserRequest(name);
   }

   // async function handleSubmit(e) {
   //    e.preventDefault();
   //    try {
   //       const response = await api.get(`/users/${name}`);
   //       setMsg("Nome/Apelido encontrado");
   //    } catch (error) {
   //       setMsg('Nome/Apelido não encontrado.');
   //    }
   // };

   // Tentativa de utilizar redux para exportar dados do usuario encontrado para reducer(state global).

   // async function handleSubmit(e) {
   //    const { dispatch } = props;
   //    var data = {};
   //    e.preventDefault();
   //    try {
   //       const response = await api.get(`/users/${name}`);
   //       data = response.data;
   //    } catch (error) {
   //       setMsg('Nome/Apelido não encontrado.');
   //    }
   //    console.log(data);
   //    dispatch({
   //       type: 'USER_CREDENCIALS',
   //       user: data
   //    });
   // }

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
                        <label>Nome/Apelido</label><br/>
                        <input className="form-control" type="text" placeholder="Entre com seu nome ou apelido." value={name} onChange={ (e) => setName(e.target.value) }  /> <br/>
                        <Button className="float-right" onClick={() => handleUserCredencials(name)}>Acessar</Button>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </React.Fragment>
   );
}

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
