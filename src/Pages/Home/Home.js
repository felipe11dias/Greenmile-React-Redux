import React, { useState } from "react";
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import api from '../../api';
import './Home.css';

import { connect } from 'react-redux';

function Home(props) {

   // const [user, setUser] = useState({});
   const [name, setName] = useState('');
   const [msg, setMsg] = useState('');

   // const handleUserCredencials = user => {
   //    const { dispatch } = props;
   //    console.log('chega aq');
      
   //    console.log(user);
   //    dispatch({
   //       type: 'USER_CREDENCIALS',
   //       user
   //    });
      
   // }

   async function handleSubmit(e) {
      const { dispatch } = props;
      var data = {};
      e.preventDefault();
      try {
         const response = await api.get(`/users/${name}`);
         data = response.data;
      } catch (error) {
         setMsg('Nome/Apelido não encontrado.');
      }
      console.log(data.login);
      dispatch({
         type: 'USER_CREDENCIALS',
         user: data
      });
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

                     <Form onSubmit={handleSubmit}>
                        <Form.Label>Nome/Apelido</Form.Label><br/>
                        <Form.Control type="text" placeholder="Entre com seu nome ou apelido." value={name} onChange={ (e) => setName(e.target.value) }  /> <br/>
                        <Button type="submit" className="float-right">Acessar</Button>
                     </Form>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </React.Fragment>
   );
}
export default connect()(Home);
