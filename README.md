1. Project Brief

    - Project Overview
    
      TRIVÉA merupakan website portofolio berbasis web yang dikembangkan sebagai wadah digital untuk menampilkan karakteristik, potensi, dan kreativitas tim melalui berbagai hasil karya.
      
      Website ini dirancang agar pengunjung dapat mengenal profil anggota, melihat project yang telah dikerjakan, mengetahui pencapaian melalui sertifikat, dan melihat daftar teknologi yang digunakan oleh tim. Selain itu, tersedia halaman Contact sebagai sarana komunikasi antara pengunjung dengan tim.
      
      Pengembangan website menggunakan Vue.js, React.js, dan MockAPI dengan menerapkan konsep component-based UI, state management, user interaction, serta integrasi layanan API.

    - Project Objectives

       Tujuan pengembangan website ini adalah:
        
       1. Membangun website portofolio sebagai media pengenalan tim.
       2. Menampilkan informasi profil setiap anggota tim.
       3. Mendokumentasikan dan menampilkan hasil project yang telah dikerjakan.
       4. Menampilkan sertifikat dan kompetensi yang dimiliki anggota.
       5. Memperkenalkan teknologi dan tools yang dikuasai oleh tim.
       6. Menyediakan fitur Contact untuk memudahkan pengunjung menghubungi tim.
       7. Menerapkan pembelajaran pengembangan frontend dan integrasi API.

2. Project Requirements
   - Functional Requirements

      <h3 align="center">Functional Requirements</h3>
      
      <p align="center">
        Functional requirements merupakan kebutuhan fungsional yang harus tersedia pada website TRIVÉA.
      </p>
      
      <table>
        <tr>
          <td width="33%" valign="top">
            <h3 align="center">01. Home</h3>
            <hr>
            <b>FR-01</b>
            <p>Sistem dapat menampilkan halaman utama sebagai landing page website.</p>
            <b>FR-02</b>
            <p>Sistem menyediakan navigasi untuk berpindah ke setiap halaman website.</p>
          </td>
          <td width="33%" valign="top">
            <h3 align="center">02. About Team</h3>
            <hr>
            <b>FR-03</b>
            <p>Sistem dapat menampilkan profil ketiga anggota tim.</p>
            <b>FR-04</b>
            <p>Sistem dapat menampilkan foto, nama, peran, dan deskripsi anggota.</p>
          </td>
          <td width="33%" valign="top">
            <h3 align="center">03. Project</h3>
            <hr>
            <b>FR-05</b>
            <p>Sistem dapat menampilkan daftar project yang telah dikerjakan.</p>
            <b>FR-06</b>
            <p>Sistem dapat menampilkan informasi detail project, termasuk deskripsi dan teknologi yang digunakan.</p>
          </td>
        </tr>
        <tr>
          <td width="33%" valign="top">
            <h3 align="center">04. Sertifikat</h3>
            <hr>
            <b>FR-07</b>
            <p>Sistem dapat menampilkan koleksi sertifikat anggota tim.</p>
            <b>FR-08</b>
            <p>Sistem dapat menampilkan detail sertifikat seperti nama, penerbit, dan tanggal penerbitan.</p>
          </td>
          <td width="33%" valign="top">
            <h3 align="center">05. Tech Stack</h3>
            <hr>
            <b>FR-09</b>
            <p>Sistem dapat menampilkan daftar teknologi dan tools yang dikuasai anggota tim.</p>
            <b>FR-10</b>
            <p>Sistem dapat mengelompokkan teknologi berdasarkan kategori.</p>
          </td>
          <td width="33%" valign="top">
            <h3 align="center">06. Contact</h3>
            <hr>
            <b>FR-11</b>
            <p>Sistem dapat menampilkan informasi kontak tim.</p>
            <b>FR-12</b>
            <p>Sistem menyediakan formulir untuk mengirimkan pesan dari pengunjung.</p>
            <b>FR-13</b>
            <p>Sistem dapat melakukan validasi input sebelum pesan dikirimkan.</p>
          </td>
        </tr>
        <tr>
          <td colspan="3" valign="top">
            <h3 align="center">07. API Integration</h3>
            <hr>
            <b>FR-14</b>
            <p>Sistem dapat mengambil data Project, Sertifikat, dan Tech Stack dari MockAPI.</p>
            <b>FR-15</b>
            <p>Sistem dapat mengirimkan data pesan Contact ke MockAPI.</p>
          </td>
        </tr>
      </table>


   - Non-Functional Requirements

      <h3 align="center">Non-Functional Requirements</h3>
      
      <p align="center">
        Non-functional requirements merupakan kebutuhan yang berkaitan dengan kualitas dan karakteristik website.
      </p>
      
      <table>
        <tr>
          <td width="33%" valign="top">
            <h3 align="center">01. Responsive Design</h3>
            <hr>
            <b>NFR-01</b>
            <p>Website dapat diakses melalui desktop, tablet, dan perangkat mobile.</p>
          </td>
          <td width="33%" valign="top">
            <h3 align="center">02. User Interface</h3>
            <hr>
            <b>NFR-02</b>
            <p>Website memiliki tampilan yang konsisten, menarik, dan mudah dipahami.</p>
          </td>
          <td width="33%" valign="top">
            <h3 align="center">03. Usability</h3>
            <hr>
            <b>NFR-03</b>
            <p>Navigasi dan interaksi website mudah digunakan oleh pengunjung.</p>
          </td>
        </tr>
        <tr>
          <td width="33%" valign="top">
            <h3 align="center">04. Performance</h3>
            <hr>
            <b>NFR-04</b>
            <p>Website dapat menampilkan halaman dan data dengan waktu pemuatan yang wajar.</p>
          </td>
          <td width="33%" valign="top">
            <h3 align="center">05. Maintainability</h3>
            <hr>
            <b>NFR-05</b>
            <p>Struktur kode menggunakan komponen agar mudah dikembangkan dan dipelihara.</p>
          </td>
          <td width="33%" valign="top">
            <h3 align="center">06. Reliability</h3>
            <hr>
            <b>NFR-06</b>
            <p>Website dapat menangani kegagalan pengambilan data dan kesalahan input dengan baik.</p>
          </td>
        </tr>
        <tr>
          <td colspan="3" valign="top">
            <h3 align="center">07. Compatibility</h3>
            <hr>
            <b>NFR-07</b>
            <p>Website dapat dijalankan pada browser modern.</p>
          </td>
        </tr>
      </table>
