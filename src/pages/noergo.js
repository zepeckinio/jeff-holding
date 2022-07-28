import React, { Component } from 'react'
import { Carousel } from "react-bootstrap";
import n from "../assets/n.jpg"
import n1 from "../assets/n1.jpg"
import n2 from "../assets/n2.jpg"


export default class noergo extends Component {
  render() {
    return (
      <div>

         <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={n}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Salle a Manger</h3>
              <p>Manger en armonie.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={n1} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Salle a Manger MRIMI</h4>
                                    <p class="mb-0 text-white-50">Doter d'un total de 12 places, ce salon reunis confort et luxe. Vous etes a la recherche de deux salon au prix d'un ? Koubri est fais pour vous .</p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={n2} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Salle a Manger DIMM</h4>
                                    <p class="mb-0 text-white-50">Reunissant ambiance chaleureuse et detente, ce salon saura vous gardez dans une humeur positive.</p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
        
        <div class="bg-white text-center h-100 project">
          <div class="d-flex h-100">
            <div class="project-text w-100 my-auto text-center text-lg-left">
              <h4 class="text-black">Votre confort, notre prioriter.</h4>
              <p class="mb-0 text-black-50">@JeffHoldingCorporation.</p>
              <hr class="d-none d-lg-block mb-0 ms-0" />
            </div>
          </div>
        </div>
    </div>

      </div>
    )
  }
}

