export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export const features: Feature[] = [
  {
    id: "daily",
    title: "Günlük Oyun Sistemi",
    description:
      "Her gün yeni bulmacalar, swipe ile günler arasında geçiş, haftalık takvim görünümü",
    icon: "🗓️",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "chest",
    title: "Sandık ve Ödül Sistemi",
    description:
      "1, 3 ve 6 oyun tamamlama hedefleri ile coins ve ipucu kazan, Clash Royale tarzı animasyonlar",
    icon: "🏆",
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    id: "hints",
    title: "İpucu Sistemi",
    description:
      "Takıldığın yerlerde coin ile ipucu satın al, doğru stratejiyle daha hızlı çöz",
    icon: "💡",
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    id: "social",
    title: "Sosyal Özellikler",
    description:
      "Arkadaş ekle, sıralamada yarış, dürt özelliği ile arkadaşlarını harekete geçir",
    icon: "👥",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "duel",
    title: "Düello Sistemi",
    description:
      "Canlı eşleşme, bot maçları, push bildirimleri ve liderlik tablosu",
    icon: "⚔️",
    gradient: "from-red-500 to-orange-600",
  },
  {
    id: "premium",
    title: "EverydiePlus Premium",
    description:
      "Tüm geçmiş günlere sınırsız erişim, reklamları kaldır, özel rozetler kazan",
    icon: "💎",
    gradient: "from-indigo-500 to-blue-600",
  },
];

export const stats = [
  { value: "32K+", label: "Aktif Oyuncu" },
  { value: "8", label: "Farklı Oyun" },
  { value: "1M+", label: "Çözülen Bulmaca" },
  { value: "4.8", label: "App Store Puanı" },
];
