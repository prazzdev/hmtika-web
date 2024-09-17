const menuData = [
  {
    name: "Beranda",
    path: "/",
  },
  {
    name: "Tentang Kami",
    path: "#",
    child: [
      {
        name: "Visi Misi",
        path: "/visi-misi",
      },
      {
        name: "Kandidat",
        path: "/team",
      },
    ],
  },
  {
    name: "Akademik",
    path: "#",
    child: [
      {
        name: "Buku Modul",
        path: "/buku-modul",
      },
      {
        name: "E-Learning",
        path: "/e-learning",
      },
    ],
  },
  {
    name: "Kegiatan",
    path: "#",
    child: [
      {
        name: "Beasiswa",
        path: "/beasiswa",
      },
      {
        name: "Kegiatan Rutin",
        path: "/kegiatan-rutin",
      },
      {
        name: "Next Event",
        path: "/next-event",
      },
      {
        name: "Dokumentasi Kegiatan",
        path: "/dokumentasi-kegiatan",
      },
    ],
  },
  {
    name: "Lain-lain",
    path: "#",
    child: [
      {
        name: "Database Anggota",
        path: "/database-anggota",
      },
      {
        name: "Aspirasi Mahasiswa",
        path: "/aspirasi-mahasiswa",
      },
      {
        name: "PDH Prodi",
        path: "/pdh-prodi",
      },
      {
        name: "Sponsorship",
        path: "/sponsorship",
      },
      {
        name: "Chatbot",
        path: "/chatbot",
      },
    ],
  },
];

export default menuData;
