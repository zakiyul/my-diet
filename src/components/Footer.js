const FooterComp = () => {
  return (
    <footer>
      <div className="container-fluid bg-dark">
        <div className="row justify-content-beetwen bg-dark p-5">
          <div className="col col-md-6">
            <h1 className="text-light">MyDietDiary</h1>
            <div>
              <p className="text-light">Make Your Diet Easy</p>
              <p className="text-light">Bersama kami, kamu bisa</p>
            </div>
            <p className="text-light">© Copyright 2022 Designed by Tika</p>
          </div>
          <div className="col-md-3">
            <h6 className="text-light">Layanan</h6>
            <p className="text-light">Konsultasi</p>
            <p className="text-light">Produk Diet</p>
            <p className="text-light">BMI Kalkulator</p>
            <p className="text-light">Artikel</p>
          </div>
          <div className="col ">
            <h6 className="text-light">Kontak</h6>
            <p className="text-light">+62 878-5035-9488</p>
            <p className="text-light">nuriastikaoktaviana@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
