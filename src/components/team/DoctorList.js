/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container, Row, Col } from "reactstrap";
import SectionHeading from "../heading";
import React, { Component } from "react";
import axios from "axios";
import Doctor from "./Doctor";

function DoctorList(props){
  
   const { docteur } = props ;

    return (
      <div className="tcd-team pt-110 pb-110 md-pt-70 md-pb-70">
        <Container>
          <SectionHeading
            classes="sec-title center mb-40"
            title=" Specialistes"
          />
          <Row className="container team-member" >
            <Col className="row ml-10 d-flex justify-content-between">
              {docteur.length > 0 && docteur.map((docteur) => <Doctor key={docteur.id_docteur} docteur={docteur} />)}
            </Col>
          </Row>
          
        </Container>
      </div>
    );
}
export default DoctorList;
