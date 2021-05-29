import React, { Component } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import DoctorList from "../team/DoctorList.js";
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom_doc: "",
      prenom_doc: "",
      nom_ville: "",
      nom_spec: "",
      docteur: [],
      specialite: [],
      ville: [],
      
    };
    this.handleChangeNom = this.handleChangeNom.bind(this);
    this.handleChangeVille = this.handleChangeVille.bind(this);
    this.handleChangeSpec = this.handleChangeSpec.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickHandler = this.clickHandler.bind(this)
    this.state = {currentPosition: 0, totalLength: 3, val: 'yolo'}
  }
  clickHandler(){ 
    this.setState({currentPosition: (this.state.currentPosition + 1)%this.state.totalLength})
  }

  handleChangeNom(event) {
    this.setState({ nom_doc: event.target.value });
  }

  handleChangeVille(event) {
    this.setState({ nom_ville: event.target.value });
  }

  handleChangeSpec(event) {
    this.setState({ nom_spec: event.target.value });
  }

  handleSubmit() {
    let { nom_doc, nom_ville, nom_spec } = this.state;
    const url = `/cabinet/docteur/search?&nom_doc=${nom_doc}&nom_ville=${nom_ville}&nom_spec=${nom_spec}`;
    axios.get(url).then((res) => {
      // console.log(res);
      this.setState({ docteur: res.data.response });
      console.log(res.data);
    });
  }
  componentDidMount() {
    axios.get("/cabinet/docteur").then((res) => {
      console.log(res);
      this.setState({ docteur: res.data });
    });
    axios.get("/cabinet/docteur/spec").then((res) => {
      console.log(res);
      this.setState({ specialite: res.data });
    });
    axios.get("/cabinet/docteur/ville").then((res) => {
      console.log(res);
      this.setState({ ville: res.data });
    });
  }

  render() {
    
 /*    const { search } = this.state;
    let searchList =
      search.length > 0 &&
      search.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.docteur}
          </option>
        );
      }, this);
 */
    const { specialite } = this.state;
    const { ville } = this.state;
    let specialiteList =
      specialite.length > 0 &&
      specialite.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.nom_spec}
          </option>
        );
      }, this);

    let villeList =
      ville.length > 0 &&
      ville.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.nom_ville}
          </option>
        );
      }, this);

    return (
     <div>
      <div id="tcd-banner" className="tcd-banner">
        {/* Banner Wrapper Part */}
        <div className="banner-wrapper">
          <Container>
            <div className="banner-part">
              <section id="hero" className="d-flex align-items-center">
                <div className="container">
                 
                  {/* <div class="row" style="margin: 100%; "> */}
                  <div className="col">
                    <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChangeNom}
                      placeholder="Nom Docteur"
                      id="arround"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <select
                      name="Spécialité"
                      value={this.state.value1}
                      onChange={this.handleChangeSpec}
                      id="arround"
                      className="form-control"
                    >
                      <option value>Spécialite</option>
                      {specialiteList}
                    </select>
                  </div>
                  <div className="col">
                    <select
                      name="Ville"
                      id="arround"
                      value={this.state.value2}
                      onChange={this.handleChangeVille}
                      className="form-control"
                    >
                      <option value>Ville</option>
                      {villeList}
                    </select>
                  </div>

                  <div className="col">
                    <label />
                    <input
                      className="button1"
                      onClick={() => this.handleSubmit()+clickHandler}
                      href="#tcd-team"
                      type="submit"
                    />
                    <br />
                  </div>
                </div>

              </section>
            </div>
          </Container>
        </div>
        </div>
        <DoctorList 
        docteur={this.state.docteur}
        />
      </div>
    );
  }
}
export default Banner;