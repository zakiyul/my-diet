import { useContext, useState } from "react";
import { Modal, Nav } from "react-bootstrap";

import { ProductContext } from "../context/ProductContext";

const BMIOutput = ({bmi, keadaan, resiko, saran}) => {
  const [active, setActive] = useState(true);
  
  const handleActive = () => setActive(true);
  const handleNonActive = () => setActive(false);

  return (
    <>
      <h3>{bmi && bmi.toString().substring(0, 4)}</h3>
      <p>{keadaan}</p>
      <Nav fill variant="tabs">
        <Nav.Item>
          <Nav.Link onClick={handleActive} className={active ? 'active':''}>Resiko</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleNonActive} className={active ? '':'active'}>Saran</Nav.Link>
        </Nav.Item>
      </Nav>
      {active && <div dangerouslySetInnerHTML={{ __html: resiko }} /> }
      {!active && <div dangerouslySetInnerHTML={{ __html: saran }} /> }

      {/* {active && <p className="mt-3 text-justify">{resiko}</p> } */}
      {/* {!active && <p className="mt-3 text-justify">{saran}</p> } */}
    </>
  )
}

const BMIModal = () => {
  const [bmi, setBmi] = useState({});
  const [hasilBmi, setHasilBMI] = useState({});

  const { handleCloseBMI, showBMI } = useContext(ProductContext);

  const bmiKalkulator = (beratBadan, tinggiBadan) => {
    const BMI = beratBadan / ((tinggiBadan / 100) * (tinggiBadan / 100));
    if (BMI < 18.5) {
      setHasilBMI({
        bmi: BMI,
        keadaan: 'Anda Kekurangan Bobot.',
        resiko:`Berdasarkan hasil penelitian dari <a href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/advice-for-underweight-adults/" target=_blank>United Kingdom National Health Service</a>, ketika berat badan Anda cukup rendah dari berat ideal, Anda juga memiliki risiko penyakit tertentu akibat kekurangan nutrisi dan sistem kekebalan tubuh yang lemah. Hal ini membuka peluang pada risiko kesehatan berikut:
                <ul>
                  <li>
                    Malnutrisi.
                  </li>
                  <li>
                    Anemia.
                  </li>
                  <li>
                    Osteoporosis karena kekurangan kalsium dan vitamin D.
                  </li>
                  <li>
                    Masalah kesuburan dari siklus menstruasi tidak teratur.
                  </li>
                  <li>
                    Risiko komplikasi operasi yang lebih tinggi.
                  </li>
                  <li>
                    Pertumbuhan dan masalah perkembangan yang terhambat pada anak dan remaja.
                  </li>
                </ul>`,
        saran:`Bila Anda ingin meningkatkan berat badan, Anda perlu mengetahui terlebih dulu berapa banyak kalori yang dibutuhkan tubuh per harinya. Agar tubuh mendapatkan sumber energi yang maksimal untuk beraktivitas.<br>
					Menambah berat badan harus menambah massa otot bukan menambah massa lemak. Proporsi makanan harus diperhatikan tidak hanya kalori saja perlu zat gizi makro (karbohidrat, protein, lemak) dan mikro (vitamin dan mineral). <br>
					Anda juga bisa melakukan olahraga rutin agar otot terbentuk dengan optimal. Anda bisa menambahkan asupan kalori Anda sebanyak 300-500 kkal per hari. Misalnya, jika kebutuhan total kalori harian Anda adalah 1700 kkal. Artinya, Anda perlu mengonsumsi makanan dengan total 1700+500 = 2200 kkal per hari.
					Untuk mengetahui berapa kalori yang Anda butuhkan setiap hari, cek di Kalkulator Kebutuhan Kalori di Hello Sehat`});
    }
    if (BMI > 18.5 && BMI < 23.9) {
      setHasilBMI({
        bmi: BMI,
        keadaan: 'Anda normal dan sehat.',
        resiko:`Orang dengan nilai indeks massa tubuh normal tetap mungkin berisiko mengalami penyakit tertentu. Namun risikonya lebih rendah ketimbang orang dengan nilai IMT yang tidak normal. <br>
        Orang dengan IMT normal juga bisa memiliki persen lemak yang tinggi, maka itu harus dihitung lemak tubuh dan kondisi metabolismenya. Supaya bisa mencegah beragam penyakit kronis, penting untuk menjaga pola hidup sehat, mulai dari pola makan yang baik, olahraga, serta pemeriksaan kesehatan secara rutin.
        `,
        saran:`Jika Anda ingin menjaga berat badan, penting untuk mengetahui berapa banyak kalori yang Anda butuhkan per harinya, agar tubuh mampu melakukan fungsinya dalam beraktivitas sehari-hari. Anda perlu mengonsumsi makanan dan minuman dengan jumlah kalori harian yang sesuai dengan kebutuhan tubuh. <br>
        Misalnya, jika kebutuhan kalori harian 1950 kkal, pastikan Anda mengonsumsi makanan dan minuman yang sesuai dengan nilai kalori tersebut. Jangan lupa juga untuk menggunakan prinsip gizi seimbang. Dengan begitu, semua jenis gizi yang dibutuhkan tubuh akan terpenuhi dengan baik.
      `,
      });
    }
    if (BMI > 24 && BMI < 26.9) {
      setHasilBMI({
        bmi: BMI,
        keadaan: 'Anda Kelebihan Bobot.',
        resiko:`Menurut <a href="https://www.cdc.gov/healthyweight/effects/index.html" target=_blank>Centers for Disease Controls (CDC)</a>, kelebihan berat badan dapat meningkatkan risiko diabetes tipe 2, hipertensi, gangguan jantung, stroke, osteoartritis, perlemakan hati (fatty liver), penyakit ginjal, hingga beberapa jenis kanker tertentu.
				`,
        saran:`Jika ingin menurunkan berat badan, ketahui dulu berapa banyak kalori yang Anda butuhkan per hari untuk menjalankan fungsi dasar tubuh dan aktivitas sehari-hari. Penting juga untuk mengetahui bagaimana kondisi kesehatan Anda saat ini, karena hal ini akan memengaruhi perhitungan kalori harian. <br>
        Selanjutnya, lihat label informasi nilai gizi pada produk, catat berapa kalori yang akan dikonsumsi. Sesuaikan dengan jumlah kalori yang sudah dikurangi sebelumnya dari total kebutuhan kalori harian. konsumsi makanan dan minuman dengan kandungan kalori yang lebih sedikit dari kebutuhan harian.<br>
        Misalnya, jika kebutuhan asupan kalori Anda 2100 kkal per hari, usahakan untuk mengurangi jumlahnya sekitar 300-500 kkal. Biasanya Anda akan dianjurkan untuk mengurangi kalori harian sebanyak 5-15% dari kebutuhan sebelumnya.<br>
        Hal ini tergantung dengan kondisi kesehatan dan kemampuan tubuh Anda. Program menurunkan berat badan ini harus dilakukan bertahap dengan memantau kondisi tubuh. Rata-rata dengan mengurangi 500 Kkal per hari, maka penurunan berat badan yang dihasilkan per minggu sekitar 500 gram sampai 1 kilogram.<br>
        Tujuan dari program ini adalah menurunkan massa lemak dan meningkatkan metabolisme tubuh. Berapa kebutuhan kalori minimum setiap orang? Hal ini tergantung dengan perhitungan metabolisme basal. Setiap orang akan berbeda, karena banyak faktor yang memengaruhi hal ini, dari kondisi kesehatan, usia, jenis kelamin, berat badan, tinggi badan, dan aktivitas fisik. Oleh karena sangat subjektif, konsultasikan hal ini pada pakar diet atau nutrisionis.<br>
        Meski begitu, rata-rata seorang wanita butuh 2.000 Kkal per hari. Sementara rata-rata kebutuhan kalori pria berkisar 2.500 Kkal per hari. Namun setiap orang membutuhkan minimal 1200 kkal per hari untuk menjaga fungsi tubuh. Mengonsumsi kurang dari 1.200 kkal per hari akan berdampak buruk bagi kesehatan tubuh.
      `,
      });
    }
    if (BMI > 27 && BMI < 29.9) {
      setHasilBMI({
        bmi: BMI,
        keadaan: 'Anda obesitas 1.',
        resiko:`Obesitas membawa efek bagi tubuh, meningkatkan risiko kematian, serta mengembangkan kondisi kesehatan tertentu, seperti:
				<ul>
					<li>
						Diabetes tipe 2
					</li>
					<li>
						Kolesterol LDL tinggi, kolesterol HDL rendah, atau kadar lipid darah yang tidak sehat
					</li>
					<li>
						Penyakit jantung koroner
					</li>
					<li>
						Stroke
					</li>
					<li>
						Penyakit kantung empedu
					</li>
					<li>
						Osteoartritis
					</li>
					<li>
						Sleep apnea dan masalah pernapasan
					</li>
					<li>
						Peradangan kronis dan peningkatan stres oksidatif
					</li>
					<li>
						Kanker
					</li>
					<li>
						Depresi klinis, kecemasan, dan kondisi kesehatan mental lainnya
					</li>
				</ul>
					`,
        saran:`Jika ingin menurunkan berat badan, ketahui dulu berapa banyak kalori yang Anda butuhkan per hari untuk menjalankan fungsi dasar tubuh dan aktivitas sehari-hari. Penting juga untuk mengetahui bagaimana kondisi kesehatan Anda saat ini, karena hal ini akan memengaruhi perhitungan kalori harian.<br>
        Selanjutnya, lihat label informasi nilai gizi pada produk, catat berapa kalori yang akan dikonsumsi. Sesuaikan dengan jumlah kalori yang sudah dikurangi sebelumnya dari total kebutuhan kalori harian. konsumsi makanan dan minuman dengan kandungan kalori yang lebih sedikit dari kebutuhan harian.<br>
        Misalnya, jika kebutuhan asupan kalori Anda 2100 kkal per hari, usahakan untuk mengurangi jumlahnya sekitar 300-500 kkal. Biasanya Anda akan dianjurkan untuk mengurangi kalori harian sebanyak 5-15% dari kebutuhan sebelumnya. Hal ini tergantung dengan kondisi kesehatan dan kemampuan tubuh Anda.<br>
        Program menurunkan berat badan ini harus dilakukan bertahap dengan memantau kondisi tubuh. Rata-rata dengan mengurangi 500 Kkal per hari, maka penurunan berat badan yang dihasilkan per minggu sekitar 500 gram sampai 1 kilogram.<br>
        Tujuan dari program ini adalah menurunkan massa lemak dan meningkatkan metabolisme tubuh. Berapa kebutuhan kalori minimum setiap orang? Hal ini tergantung dengan perhitungan metabolisme basal. Setiap orang akan berbeda, karena banyak faktor yang memengaruhi hal ini, dari kondisi kesehatan, usia, jenis kelamin, berat badan, tinggi badan, dan aktivitas fisik.  Oleh karena sangat subjektif, konsultasikan hal ini pada dietitian atau nutritionist.<br>
        Meski begitu, rata-rata seorang wanita butuh 2000 Kkal per hari. Sementara rata-rata kebutuhan kalori pria berkisar 2500 Kkal per hari. Namun setiap orang membutuhkan minimal 1200 kkal per hari untuk menjaga fungsi tubuh. Mengonsumsi kurang dari 1200 kkal per hari akan berdampak buruk bagi kesehatan tubuh.				
        `,
    });
    }
    if (BMI > 30) {
      setHasilBMI({
        bmi: BMI,
        keadaan: 'Anda obesitas 2.',
        resiko:`Obesitas meningkatkan risiko seseorang terkena diabetes tipe 2, hipertensi, penyakit jantung, stroke, osteoartritis, perlemakan hati, penyakit ginjal, dan jenis kanker tertentu.
				`,
        saran:`Jika ingin menurunkan berat badan, ketahui dulu berapa banyak kalori yang Anda butuhkan per hari untuk menjalankan fungsi dasar tubuh dan aktivitas sehari-hari. Penting juga untuk mengetahui bagaimana kondisi kesehatan Anda saat ini, karena hal ini akan memengaruhi perhitungan kalori harian.<br>
        Selanjutnya, lihat label informasi nilai gizi pada produk, catat berapa kalori yang akan dikonsumsi. Sesuaikan dengan jumlah kalori yang sudah dikurangi sebelumnya dari total kebutuhan kalori harian. konsumsi makanan dan minuman dengan kandungan kalori yang lebih sedikit dari kebutuhan harian.<br>
        Misalnya, jika kebutuhan asupan kalori Anda 2100 kkal per hari, usahakan untuk mengurangi jumlahnya sekitar 300-500 kkal. Biasanya Anda akan dianjurkan untuk mengurangi kalori harian sebanyak 5-15% dari kebutuhan sebelumnya. Hal ini tergantung dengan kondisi kesehatan dan kemampuan tubuh Anda.<br>
        Program menurunkan berat badan ini harus dilakukan bertahap dengan memantau kondisi tubuh. Rata-rata dengan mengurangi 500 Kkal per hari, maka penurunan berat badan yang dihasilkan per minggu sekitar 500 gram sampai 1 kilogram.<br>
        Tujuan dari program ini adalah menurunkan massa lemak dan meningkatkan metabolisme tubuh. Berapa kebutuhan kalori minimum setiap orang? Hal ini tergantung dengan perhitungan metabolisme basal. Setiap orang akan berbeda, karena banyak faktor yang memengaruhi hal ini, dari kondisi kesehatan, usia, jenis kelamin, berat badan, tinggi badan, dan aktivitas fisik. Oleh karena sangat subjektif, konsultasikan hal ini pada dietitian atau nutritionist.<br>
        Meski begitu, rata-rata seorang wanita butuh 2000 Kkal per hari. Sementara rata-rata kebutuhan kalori pria berkisar 2500 Kkal per hari. Namun setiap orang membutuhkan minimal 1200 kkal per hari untuk menjaga fungsi tubuh. Mengonsumsi kurang dari 1200 kkal per hari akan berdampak buruk bagi kesehatan tubuh.
      `,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBmi({ ...bmi, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bmiKalkulator(bmi.beratBadan, bmi.tinggiBadan);
  };

  return (
    <>
      <Modal size="md" show={showBMI} onHide={handleCloseBMI}>
        <Modal.Header>
          <Modal.Title>BMI Kalkulator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Gunakan kalkulator ini untuk memeriksa Indeks Massa Tubuh (IMT) dan mengecek apakah berat badan Anda ideal atau tidak.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="berat-badan" className="form-label">
                Berat Badan (Kg){" "}
              </label>
              <input onChange={handleChange} type="number" name="beratBadan" id="berat-badan" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="tinggi-badan" className="form-label">
                Tinggi Badan (cm)
              </label>
              <input onChange={handleChange} type="number" step="any" name="tinggiBadan" id="tinggi-badan" className="form-control" />
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="submit">Hitung</button>
            </div>
          </form>
          <br></br>
          {hasilBmi && <BMIOutput bmi={hasilBmi.bmi} keadaan={hasilBmi.keadaan} resiko={hasilBmi.resiko} saran={hasilBmi.saran} />}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setHasilBMI({});
              handleCloseBMI();
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BMIModal;
