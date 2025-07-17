-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2025 at 06:20 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `berita`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Teknologi'),
(2, 'Olahraga'),
(3, 'Bisnis'),
(4, 'Politik'),
(5, 'Breaking News'),
(6, 'Trending'),
(7, 'Update'),
(8, 'Fakta'),
(9, 'Edukasi'),
(10, 'Inspirasi'),
(11, 'Viral'),
(12, 'Ekonomi'),
(13, 'Nasional');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `news_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `news_id`, `user_id`, `comment`, `created_at`) VALUES
(1, 19, 2, 'coba', '2025-07-15 01:06:44'),
(5, 21, 3, 'nguawur cik', '2025-07-15 11:34:18');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `excerpt` text DEFAULT NULL,
  `detail` text DEFAULT NULL,
  `image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `excerpt`, `detail`, `image`) VALUES
(1, 'Inovasi AI Terbaru di Indonesia', 'Perkembangan teknologi AI di Indonesia semakin pesat...', NULL, 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'),
(2, 'Tim Nasional Lolos ke Final', 'Indonesia berhasil mengalahkan Malaysia dengan skor...', NULL, 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop'),
(3, 'Rupiah Menguat Terhadap Dollar', 'Nilai tukar rupiah menunjukkan penguatan signifikan...', ' Nilai tukar rupiah terhadap dollar Amerika Serikat menunjukkan penguatan signifikan dalam beberapa pekan terakhir. Penguatan ini didorong oleh stabilitas ekonomi nasional, kenaikan ekspor, dan masuknya investasi asing. Bank Indonesia terus memantau pergerakan nilai tukar dan siap melakukan intervensi jika diperlukan untuk menjaga stabilitas pasar.,\r\n      Para pelaku usaha menyambut baik penguatan rupiah karena dapat menekan biaya impor bahan baku. Namun, mereka juga tetap waspada terhadap fluktuasi global yang bisa mempengaruhi perekonomian nasional. Pemerintah diharapkan terus menjaga iklim investasi dan memberikan stimulus bagi sektor-sektor strategis agar pertumbuhan ekonomi tetap terjaga.', 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop'),
(4, 'Startup Lokal Raih Pendanaan Besar', 'Startup Indonesia mendapatkan investasi dari luar negeri...', NULL, 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop'),
(5, 'Atlet Muda Pecahkan Rekor Nasional', 'Prestasi membanggakan dari atlet muda Indonesia...', NULL, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'),
(6, 'Ekspor UMKM Tembus Pasar Eropa', 'UMKM Indonesia berhasil menembus pasar ekspor Eropa...', NULL, 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'),
(7, 'Debat Capres Berlangsung Sengit', 'Debat calon presiden berlangsung dengan berbagai argumen menarik...', NULL, 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=400&h=300&fit=crop'),
(8, 'Pemerintah Dorong Digitalisasi Desa', 'Program digitalisasi desa mulai diterapkan di berbagai daerah...', NULL, 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'),
(9, 'Indonesia Tuan Rumah Kejuaraan Asia', 'Kejuaraan olahraga Asia akan digelar di Indonesia tahun ini...', NULL, 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop'),
(10, 'Pasar Saham Menguat di Awal Pekan', 'Indeks saham Indonesia dibuka menguat pada perdagangan awal pekan...', NULL, 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?w=400&h=300&fit=crop'),
(11, 'Gempa Besar Guncang Wilayah Barat Indonesia', 'Gempa berkekuatan 7.2 SR mengguncang wilayah barat Indonesia, masyarakat diimbau tetap waspada...', NULL, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'),
(12, 'Video Viral: Aksi Heroik di Tengah Banjir', 'Sebuah video aksi penyelamatan viral di media sosial, menuai pujian netizen...', NULL, 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop'),
(13, 'Update Harga BBM Hari Ini', 'Pemerintah mengumumkan update harga BBM terbaru yang berlaku mulai hari ini...', NULL, 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'),
(14, 'Fakta Unik: Indonesia Negara dengan Ribuan Pulau', 'Tahukah kamu? Indonesia memiliki lebih dari 17.000 pulau yang tersebar dari Sabang sampai Merauke...', NULL, 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'),
(15, 'Tips Belajar Efektif di Era Digital', 'Simak tips belajar efektif dan produktif di era digital untuk pelajar dan mahasiswa...', NULL, 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop'),
(16, 'Kisah Inspiratif: Anak Desa Raih Beasiswa Luar Negeri', 'Perjuangan seorang anak desa yang berhasil meraih beasiswa ke universitas ternama dunia...', NULL, 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop'),
(17, 'Fenomena Challenge Baru di Media Sosial', 'Challenge baru di TikTok dan Instagram ramai diikuti anak muda...', NULL, 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop'),
(18, 'Ekonomi Indonesia Tumbuh di Kuartal Kedua', 'Pertumbuhan ekonomi Indonesia menunjukkan tren positif di kuartal kedua tahun ini...', NULL, 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?w=400&h=300&fit=crop'),
(19, 'Hari Besar Nasional Diperingati Meriah', 'Berbagai daerah di Indonesia memperingati hari besar nasional dengan beragam acara...', NULL, 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=400&h=300&fit=crop'),
(20, 'carok', 'nyoba', 'coba doang sih', 'https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(21, 'Zombie menyerang dunia', 'Masyarakat dunia panik setelah segerombolan zombie terlihat berkeliaran... namun ternyata mereka hanya ingin terhubung ke WiFi gratis demi update status!', 'Pada Senin pagi yang mendung, dunia digemparkan oleh kemunculan para zombie di berbagai kota besar. Warga berhamburan, toko-toko tutup, dan tukang cilok pun kabur dari lapaknya. Namun setelah diteliti lebih lanjut oleh para ilmuwan dari Universitas Meme Internasional, ternyata zombie-zombie ini bukan haus darah, melainkan haus sinyal.\n\"Kami awalnya takut, tapi setelah mereka berhenti di kafe dan mengetik password WiFi, kami sadar mereka cuma generasi lama yang belum move on dari TikTok,\" ujar Pak RT setempat sambil menyembunyikan router-nya.\nZombie tersebut terlihat membawa papan bertuliskan \"Need WiFi 4 Brain Update\", dan satu di antaranya bahkan meminta hotspot sambil menangis karena kuota habis.\nPemerintah kini mempertimbangkan untuk menyediakan WiFi publik di pemakaman umum guna meredakan keresahan mereka. Sementara itu, masyarakat diminta tidak menyalakan tethering secara sembarangan, karena dikhawatirkan bisa memancing kerumunan zombie online dadakan.\nHingga berita ini diturunkan, satu zombie dikabarkan marah karena tidak bisa masuk ke jaringan WiFi bernama \"IndoHome_Galaxy8\" yang memakai password 12345678.', 'https://i.imgur.com/lzcjbs8.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `news_categories`
--

CREATE TABLE `news_categories` (
  `news_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news_categories`
--

INSERT INTO `news_categories` (`news_id`, `category_id`) VALUES
(1, 1),
(1, 6),
(2, 2),
(3, 3),
(4, 1),
(5, 2),
(6, 3),
(7, 4),
(8, 1),
(9, 2),
(10, 3),
(11, 5),
(12, 6),
(13, 7),
(14, 8),
(15, 9),
(16, 10),
(17, 11),
(18, 12),
(19, 13),
(20, 8),
(20, 9),
(20, 10),
(20, 12),
(21, 5),
(21, 6),
(21, 7),
(21, 8),
(21, 11);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `created_at`, `phone`) VALUES
(1, 'alif', 'alifridwan@gmail.com', '$2b$10$fgKJiHj/jAByBJJYHb.AHuFcyK.W2/iLC9G2QwBpoP8hxajn/wvlO', '2025-07-14 12:29:24', '0897654321'),
(3, 'yusron', 'yusron@gmail.com', '$2b$10$WkHIGKbKY9ZhgoqPABmS2.xFfW4XNJy7gzgsFBb4n5lvh2ENsNPHy', '2025-07-14 18:07:25', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_categories`
--
ALTER TABLE `news_categories`
  ADD PRIMARY KEY (`news_id`,`category_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `news_categories`
--
ALTER TABLE `news_categories`
  ADD CONSTRAINT `news_categories_ibfk_1` FOREIGN KEY (`news_id`) REFERENCES `news` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `news_categories_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
