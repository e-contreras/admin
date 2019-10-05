import React, { Component } from "react";
import "./mercaderia.js";
import axios from "axios";
import { FormControl, FormGroup, Col, Button } from "react-bootstrap";
import Select from "react-select";
import ImageUploader from "react-images-upload";
import { baseURLServer } from "../../../../../../core/opcionesApp";

export default class Add extends Component {
  initialState = {
    brand_selected: undefined,
    category_selected: undefined,
    defaultListValue: {
      label: "Seleccione una opción",
      value: undefined
    },
    categories: [
      {
        id: undefined,
        description: undefined
      }
    ],
    brands: [
      {
        value: undefined,
        label: undefined
      }
    ],
    attributes: [
      {
        id: undefined,
        description: undefined
      }
    ],
    code: undefined,
    product_name: undefined,
    product_model: undefined,
    model_id: undefined,
    attributes: [],
    brand_id: undefined,
    pictures: []
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.handleInputCheckChange = this.handleInputCheckChange.bind(this);
    this.getCategories();
    this.getBrands();
  }

  render() {
    return (
      <div>
        {/* Main content */}
        <section className="content">
          <div className="row">
            {/* left column */}
            <div className="col-md-7">
              {/* general form elements */}
              <div className="box box-primary">
                {/* /.box-header */}
                {/* form start */}
                <form>
                  <div className="box-body">
                    <FormGroup controlId="formCode">
                      <Col className="form-group has-feedback">
                        <label htmlFor="code">Código</label>
                        <FormControl
                          type="text"
                          placeholder="0001"
                          value={this.state.code}
                          onChange={e => {
                            this.changeField(e, "code");
                          }}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formProduct">
                      <Col className="form-group has-feedback">
                        <label htmlFor="product">Mercaería</label>
                        <FormControl
                          id="product"
                          type="text"
                          placeholder="Lavarropa LG"
                          value={this.state.product_name}
                          onChange={e => {
                            this.changeField(e, "product_name");
                          }}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formBrand">
                      <Col className="form-group has-feedback">
                        <label htmlFor="brand">Modelo</label>
                        <FormControl
                          id="Brand"
                          type="text"
                          placeholder="T-800"
                          value={this.state.product_model}
                          onChange={e => {
                            this.changeField(e, "product_model");
                          }}
                        />
                      </Col>
                    </FormGroup>

                    <div className="form-group">
                      <label htmlFor="atributos">Atributos</label>
                      <div className="form-group">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Elegir</th>
                              <th>Atributo</th>
                              <th>Valor</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input
                                  type="checkbox"
                                  id="chkpeso"
                                  onChange={this.handleInputCheckChange}
                                />
                              </td>
                              <td>Peso</td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="peso"
                                  id="peso"
                                  disabled
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="checkbox"
                                  id="chkvolumen"
                                  onChange={this.handleInputCheckChange}
                                />
                              </td>
                              <td>volumen</td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="volumen"
                                  id="volumen"
                                  disabled
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <FormGroup controlId="formBrand">
                      <label>Marca</label>
                      <Select
                        placeholder="brand"
                        options={this.state.brands}
                        defaultValue={{
                          label: this.state.defaultListValue.label,
                          value: this.state.defaultListValue.value
                        }}
                        onChange={this.handleChangeBrand.bind(this)}
                      />
                    </FormGroup>

                    <FormGroup controlId="formCategory">
                      <label>Categoría</label>
                      <Select
                        placeholder="category"
                        options={this.state.categories}
                        multiple={true}
                        defaultValue={{
                          label: this.state.defaultListValue.label,
                          value: this.state.defaultListValue.value
                        }}
                        onChange={this.handleChangeBrand.bind(this)}
                      />
                    </FormGroup>
                    <div className="form-group">
                      <label htmlFor="imagen-producto">
                        Imagen principal del producto
                      </label>
                      <ImageUploader
                        withIcon={true}
                        withPreview={true}
                        multiple={false}
                        buttonText="Elija una imagen"
                        onChange={this.onDrop.bind(this)}
                        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                        maxFileSize={5242880}

                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <Button type="button" className="btn btn-primary" onClick={this.save.bind(this)}>
                      Guardar
                    </Button>
                  </div>
                </form>
              </div>
              {/* /.box */}
            </div>
            <div className="col-md-5 box-body">
              <div className="box">
                <img
                  className="img-responsive pad"
                  src="../../dist/img/photo2.png"
                  alt="Product images"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  save(){
    this.state.pictures.forEach(p => {
        console.log('imagen: '+p);
    });
  }

  async getCategories() {
    let categoryList = [];
    let categorySelect = [];
    await axios
      .get(baseURLServer + "/categories")
      .then(resp => {
        categoryList = resp.data;
      })
      .catch(e => {
        console.log(e);
      });

    categoryList.forEach(b => {
      categorySelect.push({ value: b.id, label: b.description });
    });

    this.setState({ categories: categorySelect });
  }

  async getBrands() {
    let brandList = [];
    let brandSelect = [];
    await axios
      .get(baseURLServer + "/brands")
      .then(resp => {
        brandList = resp.data;
      })
      .catch(e => {
        console.log(e);
      });

    brandList.forEach(b => {
      brandSelect.push({ value: b.id, label: b.description });
    });

    this.setState({ brands: brandSelect });
  }

  getProductAttributes() {}

  handleInputCheckChange(event) {
    const target = event.target;
    const checked = target.checked;
    let id = target.id;
    id = id.replace("chk", "");
    let inputTarget = document.getElementById(id);
    if (checked) {
      inputTarget.removeAttribute("disabled");
    } else {
      inputTarget.setAttribute("disabled", true);
    }
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }

  changeField(e, field) {
    e.preventDefault();
    let obj = {};
    obj[field] = e.target.value;
    this.setState(obj);
  }

  handleChangeBrand = brand_selected => {
    this.setState({
      brand_selected: brand_selected.id
    });
  };
}
