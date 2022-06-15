const BMI = 32.1;
const kondisi = document.getElementById("kondisi");
const risiko = document.getElementById("risiko");
const saran = document.getElementById("saran");
const bmiElement = document.getElementById("bmi");

bmiElement.innerText = BMI;

const textRisiko = () => {
  if (BMI < 18.5) {
    return ` Berdasarkan hasil penelitian dari <a href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/advice-for-underweight-adults/" target=_blank>United Kingdom National Health Service</a>, ketika berat badan Anda cukup rendah dari berat ideal, Anda juga memiliki risiko penyakit tertentu akibat kekurangan nutrisi dan sistem kekebalan tubuh yang lemah. Hal ini membuka peluang pada risiko kesehatan berikut:
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
				</ul>
					`;
  }
  if (BMI > 18.5 && BMI < 23.9) {
    return `Orang dengan nilai indeks massa tubuh normal tetap mungkin berisiko mengalami penyakit tertentu. Namun risikonya lebih rendah ketimbang orang dengan nilai IMT yang tidak normal. <br>
					Orang dengan IMT normal juga bisa memiliki persen lemak yang tinggi, maka itu harus dihitung lemak tubuh dan kondisi metabolismenya. Supaya bisa mencegah beragam penyakit kronis, penting untuk menjaga pola hidup sehat, mulai dari pola makan yang baik, olahraga, serta pemeriksaan kesehatan secara rutin.
					`;
  }
  if (BMI > 24 && BMI < 26.9) {
    return `Menurut <a href="https://www.cdc.gov/healthyweight/effects/index.html" target=_blank>Centers for Disease Controls (CDC)</a>, kelebihan berat badan dapat meningkatkan risiko diabetes tipe 2, hipertensi, gangguan jantung, stroke, osteoartritis, perlemakan hati (fatty liver), penyakit ginjal, hingga beberapa jenis kanker tertentu.
				`;
  }
  if (BMI > 27 && BMI < 29.9) {
    return `Obesitas membawa efek bagi tubuh, meningkatkan risiko kematian, serta mengembangkan kondisi kesehatan tertentu, seperti:
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
					`;
  }
  if (BMI > 30) {
    return `Obesitas meningkatkan risiko seseorang terkena diabetes tipe 2, hipertensi, penyakit jantung, stroke, osteoartritis, perlemakan hati, penyakit ginjal, dan jenis kanker tertentu.
				`;
  }
};

const textSaran = () => {
  if (BMI < 18.5) {
    return `Bila Anda ingin meningkatkan berat badan, Anda perlu mengetahui terlebih dulu berapa banyak kalori yang dibutuhkan tubuh per harinya. Agar tubuh mendapatkan sumber energi yang maksimal untuk beraktivitas.<br>
					Menambah berat badan harus menambah massa otot bukan menambah massa lemak. Proporsi makanan harus diperhatikan tidak hanya kalori saja perlu zat gizi makro (karbohidrat, protein, lemak) dan mikro (vitamin dan mineral). <br>
					Anda juga bisa melakukan olahraga rutin agar otot terbentuk dengan optimal. Anda bisa menambahkan asupan kalori Anda sebanyak 300-500 kkal per hari. Misalnya, jika kebutuhan total kalori harian Anda adalah 1700 kkal. Artinya, Anda perlu mengonsumsi makanan dengan total 1700+500 = 2200 kkal per hari.
					Untuk mengetahui berapa kalori yang Anda butuhkan setiap hari, cek di Kalkulator Kebutuhan Kalori di Hello Sehat
				`;
  }
  if (BMI > 18.5 && BMI < 23.9) {
    return `Jika Anda ingin menjaga berat badan, penting untuk mengetahui berapa banyak kalori yang Anda butuhkan per harinya, agar tubuh mampu melakukan fungsinya dalam beraktivitas sehari-hari. Anda perlu mengonsumsi makanan dan minuman dengan jumlah kalori harian yang sesuai dengan kebutuhan tubuh. <br>
					Misalnya, jika kebutuhan kalori harian 1950 kkal, pastikan Anda mengonsumsi makanan dan minuman yang sesuai dengan nilai kalori tersebut. Jangan lupa juga untuk menggunakan prinsip gizi seimbang. Dengan begitu, semua jenis gizi yang dibutuhkan tubuh akan terpenuhi dengan baik.
				`;
  }
  if (BMI > 24 && BMI < 26.9) {
    return `Jika ingin menurunkan berat badan, ketahui dulu berapa banyak kalori yang Anda butuhkan per hari untuk menjalankan fungsi dasar tubuh dan aktivitas sehari-hari. Penting juga untuk mengetahui bagaimana kondisi kesehatan Anda saat ini, karena hal ini akan memengaruhi perhitungan kalori harian. <br>
					Selanjutnya, lihat label informasi nilai gizi pada produk, catat berapa kalori yang akan dikonsumsi. Sesuaikan dengan jumlah kalori yang sudah dikurangi sebelumnya dari total kebutuhan kalori harian. konsumsi makanan dan minuman dengan kandungan kalori yang lebih sedikit dari kebutuhan harian.<br>
					Misalnya, jika kebutuhan asupan kalori Anda 2100 kkal per hari, usahakan untuk mengurangi jumlahnya sekitar 300-500 kkal. Biasanya Anda akan dianjurkan untuk mengurangi kalori harian sebanyak 5-15% dari kebutuhan sebelumnya.<br>
					Hal ini tergantung dengan kondisi kesehatan dan kemampuan tubuh Anda. Program menurunkan berat badan ini harus dilakukan bertahap dengan memantau kondisi tubuh. Rata-rata dengan mengurangi 500 Kkal per hari, maka penurunan berat badan yang dihasilkan per minggu sekitar 500 gram sampai 1 kilogram.<br>
					Tujuan dari program ini adalah menurunkan massa lemak dan meningkatkan metabolisme tubuh. Berapa kebutuhan kalori minimum setiap orang? Hal ini tergantung dengan perhitungan metabolisme basal. Setiap orang akan berbeda, karena banyak faktor yang memengaruhi hal ini, dari kondisi kesehatan, usia, jenis kelamin, berat badan, tinggi badan, dan aktivitas fisik. Oleh karena sangat subjektif, konsultasikan hal ini pada pakar diet atau nutrisionis.<br>
					Meski begitu, rata-rata seorang wanita butuh 2.000 Kkal per hari. Sementara rata-rata kebutuhan kalori pria berkisar 2.500 Kkal per hari. Namun setiap orang membutuhkan minimal 1200 kkal per hari untuk menjaga fungsi tubuh. Mengonsumsi kurang dari 1.200 kkal per hari akan berdampak buruk bagi kesehatan tubuh.
				`;
  }
  if (BMI > 27 && BMI < 29.9) {
    return `Jika ingin menurunkan berat badan, ketahui dulu berapa banyak kalori yang Anda butuhkan per hari untuk menjalankan fungsi dasar tubuh dan aktivitas sehari-hari. Penting juga untuk mengetahui bagaimana kondisi kesehatan Anda saat ini, karena hal ini akan memengaruhi perhitungan kalori harian.<br>
					Selanjutnya, lihat label informasi nilai gizi pada produk, catat berapa kalori yang akan dikonsumsi. Sesuaikan dengan jumlah kalori yang sudah dikurangi sebelumnya dari total kebutuhan kalori harian. konsumsi makanan dan minuman dengan kandungan kalori yang lebih sedikit dari kebutuhan harian.<br>
					Misalnya, jika kebutuhan asupan kalori Anda 2100 kkal per hari, usahakan untuk mengurangi jumlahnya sekitar 300-500 kkal. Biasanya Anda akan dianjurkan untuk mengurangi kalori harian sebanyak 5-15% dari kebutuhan sebelumnya. Hal ini tergantung dengan kondisi kesehatan dan kemampuan tubuh Anda.<br>
					Program menurunkan berat badan ini harus dilakukan bertahap dengan memantau kondisi tubuh. Rata-rata dengan mengurangi 500 Kkal per hari, maka penurunan berat badan yang dihasilkan per minggu sekitar 500 gram sampai 1 kilogram.<br>
					Tujuan dari program ini adalah menurunkan massa lemak dan meningkatkan metabolisme tubuh. Berapa kebutuhan kalori minimum setiap orang? Hal ini tergantung dengan perhitungan metabolisme basal. Setiap orang akan berbeda, karena banyak faktor yang memengaruhi hal ini, dari kondisi kesehatan, usia, jenis kelamin, berat badan, tinggi badan, dan aktivitas fisik.  Oleh karena sangat subjektif, konsultasikan hal ini pada dietitian atau nutritionist.<br>
					Meski begitu, rata-rata seorang wanita butuh 2000 Kkal per hari. Sementara rata-rata kebutuhan kalori pria berkisar 2500 Kkal per hari. Namun setiap orang membutuhkan minimal 1200 kkal per hari untuk menjaga fungsi tubuh. Mengonsumsi kurang dari 1200 kkal per hari akan berdampak buruk bagi kesehatan tubuh.				
					`;
  }
  if (BMI > 30) {
    return `Jika ingin menurunkan berat badan, ketahui dulu berapa banyak kalori yang Anda butuhkan per hari untuk menjalankan fungsi dasar tubuh dan aktivitas sehari-hari. Penting juga untuk mengetahui bagaimana kondisi kesehatan Anda saat ini, karena hal ini akan memengaruhi perhitungan kalori harian.<br>
					Selanjutnya, lihat label informasi nilai gizi pada produk, catat berapa kalori yang akan dikonsumsi. Sesuaikan dengan jumlah kalori yang sudah dikurangi sebelumnya dari total kebutuhan kalori harian. konsumsi makanan dan minuman dengan kandungan kalori yang lebih sedikit dari kebutuhan harian.<br>
					Misalnya, jika kebutuhan asupan kalori Anda 2100 kkal per hari, usahakan untuk mengurangi jumlahnya sekitar 300-500 kkal. Biasanya Anda akan dianjurkan untuk mengurangi kalori harian sebanyak 5-15% dari kebutuhan sebelumnya. Hal ini tergantung dengan kondisi kesehatan dan kemampuan tubuh Anda.<br>
					Program menurunkan berat badan ini harus dilakukan bertahap dengan memantau kondisi tubuh. Rata-rata dengan mengurangi 500 Kkal per hari, maka penurunan berat badan yang dihasilkan per minggu sekitar 500 gram sampai 1 kilogram.<br>
					Tujuan dari program ini adalah menurunkan massa lemak dan meningkatkan metabolisme tubuh. Berapa kebutuhan kalori minimum setiap orang? Hal ini tergantung dengan perhitungan metabolisme basal. Setiap orang akan berbeda, karena banyak faktor yang memengaruhi hal ini, dari kondisi kesehatan, usia, jenis kelamin, berat badan, tinggi badan, dan aktivitas fisik. Oleh karena sangat subjektif, konsultasikan hal ini pada dietitian atau nutritionist.<br>
					Meski begitu, rata-rata seorang wanita butuh 2000 Kkal per hari. Sementara rata-rata kebutuhan kalori pria berkisar 2500 Kkal per hari. Namun setiap orang membutuhkan minimal 1200 kkal per hari untuk menjaga fungsi tubuh. Mengonsumsi kurang dari 1200 kkal per hari akan berdampak buruk bagi kesehatan tubuh.
				`;
  }
};

kondisi.onclick = function () {
  document.getElementById("kondisi").className = "border-bottom border-warning border-3 text-warning";
  document.getElementById("risiko").classList.remove("border-bottom", "text-warning");
  document.getElementById("saran").classList.remove("border-bottom", "text-warning");
  if (BMI < 18.5) {
    document.getElementById("result").innerHTML = "Nilai IMT di bawah 18,5 menandakan berat badan Anda kurang (underweight)";
  }
  if (BMI > 18.5 && BMI < 23.9) {
    document.getElementById("result").innerHTML = "Nilai IMT di antara 18,5 dan 23,9 menandakan berat badan Anda ideal (normal weight)";
  }
  if (BMI > 24 && BMI < 26.9) {
    document.getElementById("result").innerHTML = "Nilai IMT di antara 24 dan 26,9 menandakan berat badan Anda berlebih (overweight)";
  }
  if (BMI > 27 && BMI < 29.9) {
    document.getElementById("result").innerHTML = "Anda mengalami obesitas tingkat 1, jika BMI menunjukkan antara 27-29,9";
  }
  if (BMI > 30) {
    document.getElementById("result").innerHTML = "Anda dianggap mengalami obesitas level 2, jika memiliki Indeks Massa Tubuh (BMI) lebih dari 30.";
  }
};

risiko.onclick = function () {
  document.getElementById("risiko").className = "border-bottom border-warning border-3 text-warning";
  document.getElementById("kondisi").classList.remove("border-bottom", "text-warning");
  document.getElementById("saran").classList.remove("border-bottom", "text-warning");
  if (BMI < 18.5) {
    document.getElementById("result").innerHTML = textRisiko();
  }
  if (BMI > 18.5 && BMI < 23.9) {
    document.getElementById("result").innerHTML = textRisiko();
  }
  if (BMI > 24 && BMI < 26.9) {
    document.getElementById("result").innerHTML = textRisiko();
  }
  if (BMI > 27 && BMI < 29.9) {
    document.getElementById("result").innerHTML = textRisiko();
  }
  if (BMI > 30) {
    document.getElementById("result").innerHTML = textRisiko();
  }
};

saran.onclick = function () {
  document.getElementById("saran").className = "border-bottom border-warning border-3 text-warning";
  document.getElementById("kondisi").classList.remove("border-bottom", "text-warning");
  document.getElementById("risiko").classList.remove("border-bottom", "text-warning");
  if (BMI < 18.5) {
    document.getElementById("result").innerHTML = textSaran();
  }
  if (BMI > 18.5 && BMI < 23.9) {
    document.getElementById("result").innerHTML = textSaran();
  }
  if (BMI > 24 && BMI < 26.9) {
    document.getElementById("result").innerHTML = textSaran();
  }
  if (BMI > 27 && BMI < 29.9) {
    document.getElementById("result").innerHTML = textSaran();
  }
  if (BMI > 30) {
    document.getElementById("result").innerHTML = textSaran();
  }
};
