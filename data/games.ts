export interface Game {
  id: string;
  name: string;
  turkishName: string;
  icon: string;
  difficulty: "Kolay" | "Orta" | "Zor";
  type: string;
  description: string;
  players: string;
  gradient: string;
  bgColor: string;
}

export const games: Game[] = [
  {
    id: "wordle",
    name: "Five Letters",
    turkishName: "Beş Harf",
    icon: "🔤",
    difficulty: "Kolay",
    type: "Kelime Bulmaca",
    description: "Günün 5 harfli kelimesini 6 tahminde bul",
    players: "10K+",
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: "contexto",
    name: "Word Proximity",
    turkishName: "Kelime Yakınlığı",
    icon: "💭",
    difficulty: "Zor",
    type: "Anlam Benzerliği",
    description:
      "Kelimelerin anlam benzerliğinden yola çıkarak hedef kelimeyi bul",
    players: "2K+",
    gradient: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500/10",
  },
  {
    id: "moviedle",
    name: "CineGuess",
    turkishName: "Film Tahmini",
    icon: "🎬",
    difficulty: "Orta",
    type: "Film Tahmin",
    description: "Günün filmini bulanık görsellerden ve ipuçlarından tahmin et",
    players: "6K+",
    gradient: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
  },
  {
    id: "redactle",
    name: "Hidden Article",
    turkishName: "Gizli Makale",
    icon: "📄",
    difficulty: "Zor",
    type: "Makale Bulmaca",
    description: "Sansürlenmiş Wikipedia makalesinin başlığını tahmin et",
    players: "1K+",
    gradient: "from-slate-500 to-zinc-600",
    bgColor: "bg-slate-500/10",
  },
  {
    id: "quordle",
    name: "QuadGrid",
    turkishName: "Dörtlü",
    icon: "4️⃣",
    difficulty: "Orta",
    type: "Çoklu Kelime Bulmaca",
    description: "4 kelimeyi aynı anda 9 tahminde bul",
    players: "5K+",
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
  },
  {
    id: "octordle",
    name: "OctaGrid",
    turkishName: "Sekizli",
    icon: "8️⃣",
    difficulty: "Zor",
    type: "Çoklu Kelime Bulmaca",
    description: "8 kelimeyi aynı anda 13 tahminde bul",
    players: "3K+",
    gradient: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-500/10",
  },
  {
    id: "nerdle",
    name: "Equation",
    turkishName: "Denklem",
    icon: "🔢",
    difficulty: "Orta",
    type: "Matematik Bulmaca",
    description: "8 karakterlik matematik denklemini bul",
    players: "4K+",
    gradient: "from-cyan-500 to-sky-600",
    bgColor: "bg-cyan-500/10",
  },
  {
    id: "pokerdle",
    name: "Poker Puzzle",
    turkishName: "Poker Bulmaca",
    icon: "🃏",
    difficulty: "Orta",
    type: "Poker Kartları Bulmaca",
    description: "5 kartlık poker elini 7 tahminde bul",
    players: "1K+",
    gradient: "from-red-500 to-rose-600",
    bgColor: "bg-red-500/10",
  },
];
