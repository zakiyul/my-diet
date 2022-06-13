import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';

import NavbarComp from "../components/NavbarComp";
import CarouselComp from "../components/CarouselComp";
import FooterComp from "../components/Footer";
import BMIModal from "../components/BMIModal";

import { ProductContext } from "../context/ProductContext";

const HomePage = () => {
  const imgs = ["/jumbotron/1.png", "/jumbotron/2.png"];
  const { handleShowBMI } = React.useContext(ProductContext);

  const getCaraPakai = async () => {
    const res = await axios.get("http://localhost:8000/api/cara-pakai/");
    console.log(res);
  };

  React.useEffect(() => {
    getCaraPakai();
  }, []);
  return (
    <>
      <NavbarComp />
      <CarouselComp imgs={imgs} />

      <section id="why-must-diet">
        <div className="container-fuild">
          <div className="container p-5">
            <div className="row">
              <div className="col pt-5">
                <h1 className="text-orange">Kenapa Harus Diet?</h1>
                <p className="text-justify">
                  Diet pada dasarnya adalah pola makan, yang cara dan jenis makanannya diatur. Tujuannya adalah untuk menjaga kesehatan tubuh secara keseluruhan. Selain itu, diet juga bertujuan untuk mencapai atau menjaga berat badan yang
                  terkontrol. Meski begitu, tidak semua diet dilakukan untuk menurunkan berat badan, beberapa orang melakukan diet atas dasar anjuran dokter karena mengidap penyakit tertentu yang memaksanya untuk mengatur segala nutrisi
                  yang akan masuk ke tubuhnya. Oleh karena itu, diet dan nutrisi adalah suatu kesatuan yang diperlukan tubuh dalam porsi seimbang.
                </p>
              </div>
              <div className="col">
                <img src="/imgs/kenapa-harus-diet.png" alt="..." className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="data-diet">
        <div className="container-fuild">
          <img src="/imgs/statistik-diet.png" width="100%" alt="statistik diet" />
        </div>
      </section>

      <section id="our-fitur">
        <div className="container-fluid p-5">
          <h1 className="text-center mb-5 text-orange">LAYANAN KAMI</h1>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card text-center" style={{ width: "18rem", borderRadius: 8 }}>
                <div className="icon-fitur p-4">
                  <i className="fa fa-box fa-5x" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center w-100" style={{fontWeight:'bold'}}>Produk Diet</h5>
                  <p className="card-text">
                    Daftar produk-produk yang kami jual di MyDietDiary.
                  </p>
                  <Link to="/produk" className="btn" style={{ backgroundColor:'#f84c00', color: 'white'}}>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center" style={{ width: "18rem", borderRadius: 8 }}>
                <div className="icon-fitur p-4">
                  <i className="fa fa-newspaper fa-5x" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center w-100" style={{fontWeight:'bold'}}>Artikel</h5>
                  <p className="card-text">
                    Kumpulan artikel-artikel diet yang dapat membantu diet anda.
                  </p>
                  <Link to="/artikel" className="btn" style={{ backgroundColor:'#f84c00', color: 'white'}}>
                    Klik Disini
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center" style={{ width: "18rem", borderRadius: 8 }}>
                <div className="icon-fitur p-4">
                  <i className="fa fa-calculator fa-5x" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center w-100" style={{fontWeight:'bold'}}>BMI</h5>
                  <p className="card-text">
                    cek apakah berat badan Anda ideal atau tidak.
                  </p>
                  <button className="btn" onClick={handleShowBMI} style={{ backgroundColor:'#f84c00', color: 'white'}}>
                    Klik Disini
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BMIModal />

      <section id="about-us">
        <div className="container-fuild">
          <div className="container p-5">
            <h1 className="text-center mb-5">TENTANG KAMI</h1>
            <div className="row">
              <div className="col">
                <h1 style={{ color: "#656565" }}>MyDietDiary</h1>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis pellentesque sed faucibus nam sed ultricies morbi. Lorem suspendisse eget consequat augue semper sed consectetur dictum mauris. Molestie tellus a pharetra
                  semper id. Leo nisi, adipiscing nisi, vitae. Lacus sed bibendum viverra nec, urna. Posuere consectetur quis sit lobortis mauris commodo. Lorem volutpat eu praesent lacus. Nunc arcu justo, nibh nibh sed sed. Mi massa magna
                  morbi nibh ac pulvinar amet erat dis. Morbi vestibulum ornare consequat non et faucibus sit tellus potenti. In sed pulvinar lectus placerat lobortis turpis blandit nec semper. Nullam duis nisi, duis pretium placerat
                  facilisis pellentesque nulla augue. Tempor adipiscing augue donec diam nec enim, nunc. Ornare egestas etiam venenatis tellus iaculis ullamcorper arcu.
                </p>
              </div>
              <div className="col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9217.989923613726!2d107.5999973550412!3d-6.943810743419139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e892041f5f4d%3A0x62b0d7b3a715ffff!2sDietplus%20Bandung!5e0!3m2!1sid!2sid!4v1654312001579!5m2!1sid!2sid"
                  width={500}
                  height={350}
                  allowFullScreen=""
                  loading="lazy"
                  style={{ border: "2px solid #0F8C8A", borderRadius: 10 }}
                  referrerPolicy="no-referrer-when-downgrade"
                  title="tes"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComp />
    </>
  );
};

export default HomePage;
