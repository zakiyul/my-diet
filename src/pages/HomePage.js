import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaCalculator, FaPrescriptionBottleAlt, FaNewspaper } from "react-icons/fa";
import config from '../global/config';

import NavbarComp from "../components/NavbarComp";
import CarouselComp from "../components/CarouselComp";
import FooterComp from "../components/Footer";
import BMIModal from "../components/BMIModal";

import { ProductContext } from "../context/ProductContext";
import Statistik from "../components/Statistik";

const HomePage = () => {
  const imgs = ["/jumbotron/1.png", "/jumbotron/2.png", "/jumbotron/3.png"];
  const dataStatistik = [
    {
      tahun: '2007',
      data: [81, 9, 11],
    },
    {
      tahun: '2013',
      data: [74, 12, 15],
    },
    {
      tahun: '2018',
      data: [65, 14, 22],
    },
  ]
  const { handleShowBMI } = React.useContext(ProductContext);

  const getCaraPakai = async () => {
    const res = await axios.get(`${config.BASE_URL}/api/cara-pakai/`);
    console.log(res);
  };

  React.useEffect(() => {
    getCaraPakai();
  }, []);
  return (
    <>
      <NavbarComp />
      <CarouselComp imgs={imgs} />

      <section id="why-must-diet" className="mt-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-7 col-12 pt-5">
                <h1 className="text-orange">Kenapa Harus Diet?</h1>
                <p className="text-justify">
                  Diet pada dasarnya adalah pola makan, yang cara dan jenis makanannya diatur. Tujuannya adalah untuk menjaga kesehatan tubuh secara keseluruhan. Selain itu, diet juga bertujuan untuk mencapai atau menjaga berat badan yang
                  terkontrol. Meski begitu, tidak semua diet dilakukan untuk menurunkan berat badan, beberapa orang melakukan diet atas dasar anjuran dokter karena mengidap penyakit tertentu yang memaksanya untuk mengatur segala nutrisi
                  yang akan masuk ke tubuhnya. Oleh karena itu, diet dan nutrisi adalah suatu kesatuan yang diperlukan tubuh dalam porsi seimbang.
                </p>
              </div>
              <div className="col-md-5 col-12">
                <img src="/imgs/kenapa-harus-diet.jpg" alt="..." className="img-fluid" style={{borderRadius:16}} />
              </div>
            </div>
          </div>
      </section>

      <section id="data-diet" className="mb-5">
        <div className="container p-5">
          <h1 className="text-orange text-center">Obesitas di Indonesia</h1>
          <h3 className="text-orange text-center">Satu Dekade Pertambahan Berat Badan</h3>
          <div className="row">
          {/* <img src="/imgs/statistik-diet.png" width="100%" alt="statistik diet" /> */}
            {dataStatistik.map((statistik, idx) => {
              return (
                <div className="col-md-4 col-12">
                  <Statistik key={idx} tahun={statistik.tahun} data={statistik.data} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="our-fitur" className="my-5">
        <div className="container">
          <h1 className="text-orange text-center">LAYANAN KAMI</h1>
          <div className="row py-5">
            <div className="col-md-4 col-12">
              <div className="text-center p-5">
                <h1>
                  <FaCalculator/>
                </h1>
                <h4>BMI</h4>
                <p>Cek Apakah Berat Anda Ideal Atau Tidak Dengan Kalkulator BMI</p>
                <button className="btn btn-service btn-warning border" onClick={handleShowBMI}>CLICK HERE</button>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="text-center p-5">
                <h1>
                  <FaPrescriptionBottleAlt />
                </h1>
                <h4>Produk Diet</h4>
                <p>Daftar Produk-Produk Yang Kami Jual di MyDietDiary</p>
                <Link to="/produk" className="btn btn-service btn-warning border">CLICK HERE</Link>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="text-center p-5">
                <h1>
                  <FaNewspaper/>
                </h1>
                <h4>Artikel</h4>
                <p>Kumpulan Artikel-Artikel Diet yang Dapat Membantu Diet Anda</p>
                <Link to="/artikel" className="btn btn-service btn-warning border">CLICK HERE</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BMIModal />

      <section id="about-us">
        <div className="container-fuild">
          <div className="container p-5">
            <h1 className="text-center mb-5 text-orange">TENTANG KAMI</h1>
            <div className="row">
              <div className="col-md-6 col-12">
                <h1 style={{ color: "#656565" }}>MyDietDiary</h1>
                <p className="text-justify">
                Sebuah website yang dapat mempermudah para pelaku diet untuk menentukan diet apa saja yang tepat untuk dilakukan sesuai dengan anjuran dengan memanfaatkan sistem pakar. Terdapat juga fitur produk, perhitungan kalori, serta tips - tips diet
                </p>
              </div>
              <div className="col-md-6 col-12">
                <iframe
                  className="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.152876344463!2d116.11702585116404!3d-8.581296093801923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5395df35f6af024!2sAstri%20Apotik!5e0!3m2!1sid!2ssg!4v1656640277302!5m2!1sid!2ssg"
                  // width={500}
                  // height={350}
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
