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
        path: "/about/visi-misi",
      },
      {
        name: "Kandidat",
        path: "/about/team",
      },
    ],
  },
  {
    name: "Akademik",
    path: "#",
    child: [
      {
        name: "Buku Modul",
        path: "/academic/buku-modul",
      },
      {
        name: "E-Learning",
        path: "/academic/e-learning",
      },
    ],
  },
  {
    name: "Kegiatan",
    path: "#",
    child: [
      {
        name: "Beasiswa",
        path: "/event/beasiswa",
      },
      {
        name: "Program Unggulan",
        path: "/event/program-unggulan",
      },
      {
        name: "Kegiatan Rutin",
        path: "/event/kegiatan-rutin",
      },
      {
        name: "Next Event",
        path: "/event/next-event",
      },
      {
        name: "Blog",
        path: "/blog",
      },
    ],
  },
  {
    name: "Lain-lain",
    path: "#",
    child: [
      {
        name: "Database Anggota",
        path: "/other/database-anggota",
      },
      {
        name: "Aspirasi Mahasiswa",
        path: "/other/aspirasi-mahasiswa",
      },
      {
        name: "PDH Prodi",
        path: "/other/pdh-prodi",
      },
      {
        name: "Sponsorship",
        path: "/other/sponsorship",
      },
      {
        name: "Chatbot",
        path: "/other/chatbot",
      },
    ],
  },
];

export default menuData;
