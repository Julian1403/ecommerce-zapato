import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import productos from "../../data/productos.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom"; // Importa Outlet para rutas secundarias
import "./categoria.css";

function Categoria() {
  const dataProducto = productos;
  const tallas = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

  return (
    <Container>
      <Row>
        <Col>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                <Link to={"/ecommerce-zapato"}>Home</Link>
              </li>
              <li className="breadcrumb-item active">Categorias</li>
              <li className="breadcrumb-item active" aria-current="page">
                Calzado
              </li>
            </ol>
          </nav>
        </Col>
      </Row>
      <Row className="p-3 border-bottom">
        <Col lg={3}>
          <Container>
            <Row className="mb-2 p-2">
              <Col>
                <h2>CALZADO</h2>
                <span>TODOS ({dataProducto.length})</span>
              </Col>
            </Row>
            <div className="border mt-3 p-2">
              <Row className="mt-2 p-1">
                <p>
                  <b>TALLA</b>
                </p>
                <div className="tallasbox">
                  {tallas.map((data, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className="btn btn-secondary tallasitems btn-xs m-1"
                      >
                        {data}
                      </button>
                    );
                  })}
                </div>
              </Row>
              <Row className="mt-2 p-1">
                <p>
                  <b>PRECIO</b>
                </p>
                <p>{"$150000 - $300000 (10)"}</p>
                <p>{"$300000 - $450000 (24)"}</p>
              </Row>
              <Row className="mt-2 p-1">
                <p>
                  <b>MATERIAL</b>
                </p>
                <p>{"CUERO (18)"}</p>
                <p>{"NUBUK (8)"}</p>
              </Row>
              <Row className="mt-2 p-1">
                <p>
                  <b>COLOR</b>
                </p>
                <p>{"NEGRO (12)"}</p>
                <p>{"CAFE (12)"}</p>
                <p>{"AZUL (12)"}</p>
                <p>{"ORO (12)"}</p>
              </Row>
              <Row className="mt-2 p-1">
                <p>
                  <b>TECNOLOGÍA</b>
                </p>
                <p>{"HPO2Flex (5)"}</p>
                <p>{"BioBevel (1)"}</p>
                <p>{"flexGroove (3)"}</p>
              </Row>
            </div>
          </Container>
        </Col>
        <Col lg={9}>
          <Row>
            {dataProducto.map((data, index) => {
              const photo = require(`../../assets/img/${data.foto}`);
              return (
                <Col className="mb-2" key={index} lg={4}>
                  <div className="card no-radius card-product no-borders-bottom">
                    <div className="card-favorite">
                      <button type="button" className="btn btn-default mx-4">
                        <FontAwesomeIcon icon={faHeart} color="gray" size="lg" />
                      </button>
                    </div>
                    <div className="card-img card-img-box">
                      <Link to={`/producto/${data.id}`}> {/* Utiliza rutas relativas */}
                        <img className="card-img-element" src={photo} alt="e-commerce" />
                      </Link>
                    </div>
                    <div className="card-title">
                      <div className="text-center">
                        <b>{data.nombre}</b>
                        <p>
                          <h5> &#36;{data.precio}</h5>
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      {/* Outlet para rutas secundarias */}
      <Outlet />
    </Container>
  );
}

export default Categoria;

