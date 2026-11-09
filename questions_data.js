// Dữ liệu câu hỏi và từ vựng trích xuất từ tài liệu "PART 1: VERB FORM"
// Giáo Viên Chuyên Anh - Thầy Bùi Văn Vinh (0988.333.599)

window.QUIZ_DATA = {
  metadata: {
    title: "PART 1: VERB FORM (DẠNG CỦA ĐỘNG TỪ)",
    author: "Thầy Bùi Văn Vinh - 0988.333.599",
    total_words: 135
  },
  categories: [
    { id: "ALL", name: "Tất cả chuyên đề (Trộn ngẫu nhiên)" },
    { id: "CAT_I", code: "I", name: "Phần I: Verb + Gerunds (V-ing)" },
    { id: "CAT_II", code: "II", name: "Phần II: Verb + To V-infinitives" },
    { id: "CAT_III", code: "III", name: "Phần III: Verb + sb + V-infinitives (Bare V)" },
    { id: "CAT_IV", code: "IV", name: "Phần IV: Verb giác quan + O + V / V-ing" },
    { id: "CAT_V", code: "V", name: "Phần V: Verb + to V / V-ing (Không đổi nghĩa)" },
    { id: "CAT_VI", code: "VI", name: "Phần VI: Verb + to V / V-ing (Khác nhau về nghĩa)" },
    { id: "CAT_VII", code: "VII", name: "Phần VII: Verb + Object + to V" },
    { id: "CAT_VIII", code: "VIII", name: "Phần VIII: Các dạng nâng cao của To V & V-ing" }
  ],
  vocabList: [
    // --- PHẦN I: VERB + GERUNDS (V-ing) ---
    { word: "advise", meaning: "khuyên", cat: "CAT_I", form: "V-ing (không có tân ngữ)", note: "advise + V-ing nếu không có tân ngữ; nếu có tân ngữ thì advise sb to V" },
    { word: "anticipate", meaning: "đánh giá cao, lường trước", cat: "CAT_I", form: "V-ing", note: "anticipate + V-ing" },
    { word: "avoid", meaning: "tránh", cat: "CAT_I", form: "V-ing", note: "avoid + V-ing" },
    { word: "be/get used to", meaning: "quen với việc gì", cat: "CAT_I", form: "V-ing", note: "be/get used to + V-ing (khác với used to + V bare)" },
    { word: "can’t help", meaning: "không thể không, không nhịn được", cat: "CAT_I", form: "V-ing", note: "can't help + V-ing" },
    { word: "can’t stand", meaning: "không chịu được", cat: "CAT_I", form: "V-ing", note: "can't stand + V-ing" },
    { word: "cease", meaning: "chấm dứt", cat: "CAT_I", form: "V-ing", note: "cease + V-ing" },
    { word: "complete", meaning: "hoàn thành", cat: "CAT_I", form: "V-ing", note: "complete + V-ing" },
    { word: "consider", meaning: "xem xét, cân nhắc", cat: "CAT_I", form: "V-ing", note: "consider + V-ing" },
    { word: "delay", meaning: "hoãn lại", cat: "CAT_I", form: "V-ing", note: "delay + V-ing" },
    { word: "deny", meaning: "từ chối, phủ nhận", cat: "CAT_I", form: "V-ing", note: "deny + V-ing" },
    { word: "dread", meaning: "kinh sợ, khiếp sợ", cat: "CAT_I", form: "V-ing", note: "dread + V-ing" },
    { word: "discuss", meaning: "bàn bạc, thảo luận", cat: "CAT_I", form: "V-ing", note: "discuss + V-ing" },
    { word: "dislike", meaning: "không thích", cat: "CAT_I", form: "V-ing", note: "dislike + V-ing" },
    { word: "endure", meaning: "chịu đựng", cat: "CAT_I", form: "V-ing", note: "endure + V-ing" },
    { word: "enjoy", meaning: "thích, tận hưởng", cat: "CAT_I", form: "V-ing", note: "enjoy + V-ing" },
    { word: "escape", meaning: "trốn thoát", cat: "CAT_I", form: "V-ing", note: "escape + V-ing" },
    { word: "excuse", meaning: "bào chữa, thứ lỗi", cat: "CAT_I", form: "V-ing", note: "excuse + V-ing" },
    { word: "face", meaning: "đối mặt", cat: "CAT_I", form: "V-ing", note: "face + V-ing" },
    { word: "finish", meaning: "xong, hoàn tất", cat: "CAT_I", form: "V-ing", note: "finish + V-ing" },
    { word: "forgive", meaning: "tha thứ", cat: "CAT_I", form: "V-ing", note: "forgive + V-ing" },
    { word: "imagine/fancy", meaning: "tưởng tượng", cat: "CAT_I", form: "V-ing", note: "imagine/fancy + V-ing" },
    { word: "involve", meaning: "đòi hỏi, liên quan", cat: "CAT_I", form: "V-ing", note: "involve + V-ing" },
    { word: "keep", meaning: "cứ, liên tục", cat: "CAT_I", form: "V-ing", note: "keep + V-ing" },
    { word: "mention", meaning: "đề cập", cat: "CAT_I", form: "V-ing", note: "mention + V-ing" },
    { word: "mind", meaning: "phiền, ngại, nề hà", cat: "CAT_I", form: "V-ing", note: "Do/Would you mind + V-ing" },
    { word: "miss", meaning: "nhớ, nhỡ (tàu, xe...)", cat: "CAT_I", form: "V-ing", note: "miss + V-ing" },
    { word: "postpone", meaning: "hoãn lại", cat: "CAT_I", form: "V-ing", note: "postpone + V-ing" },
    { word: "practice", meaning: "luyện tập", cat: "CAT_I", form: "V-ing", note: "practice + V-ing" },
    { word: "quit/give up", meaning: "từ bỏ", cat: "CAT_I", form: "V-ing", note: "quit/give up + V-ing" },
    { word: "object to", meaning: "phản đối", cat: "CAT_I", form: "V-ing", note: "object to + V-ing (to là giới từ)" },
    { word: "recall", meaning: "nhớ lại", cat: "CAT_I", form: "V-ing", note: "recall + V-ing" },
    { word: "recollect", meaning: "hồi tưởng", cat: "CAT_I", form: "V-ing", note: "recollect + V-ing" },
    { word: "resent", meaning: "ganh tỵ, phẫn uất", cat: "CAT_I", form: "V-ing", note: "resent + V-ing" },
    { word: "resist", meaning: "cưỡng lại, chống cự", cat: "CAT_I", form: "V-ing", note: "resist + V-ing" },
    { word: "risk", meaning: "mạo hiểm", cat: "CAT_I", form: "V-ing", note: "risk + V-ing" },
    { word: "suggest", meaning: "đề nghị, gợi ý", cat: "CAT_I", form: "V-ing", note: "suggest + V-ing" },
    { word: "tolerate", meaning: "khoan dung, tha thứ", cat: "CAT_I", form: "V-ing", note: "tolerate + V-ing" },
    { word: "understand", meaning: "hiểu", cat: "CAT_I", form: "V-ing", note: "understand + V-ing" },
    { word: "there’s no point in", meaning: "vô ích", cat: "CAT_I", form: "V-ing", note: "there's no point in + V-ing" },
    { word: "sit/stand/lie + nơi chốn", meaning: "ngồi/đứng/nằm tại nơi nào đó", cat: "CAT_I", form: "V-ing", note: "sit/stand/lie + place + V-ing" },
    { word: "It’s no use", meaning: "không ích gì", cat: "CAT_I", form: "V-ing", note: "It's no use + V-ing" },
    { word: "It’s no good", meaning: "không tốt, vô ích", cat: "CAT_I", form: "V-ing", note: "It's no good + V-ing" },
    { word: "It’s (not) worth", meaning: "chẳng xứng đáng / (không) đáng", cat: "CAT_I", form: "V-ing", note: "It's (not) worth + V-ing" },
    { word: "spend/waste on", meaning: "trải qua, tiêu tốn / lãng phí", cat: "CAT_I", form: "V-ing", note: "spend/waste time/money (on) + V-ing" },
    { word: "look forward to", meaning: "trông đợi, ngóng chờ", cat: "CAT_I", form: "V-ing", note: "look forward to + V-ing (to là giới từ)" },
    { word: "with a view to", meaning: "với mục đích, có quan điểm", cat: "CAT_I", form: "V-ing", note: "with a view to + V-ing" },
    { word: "have difficulty/trouble/fun", meaning: "gặp khó khăn / vui vẻ", cat: "CAT_I", form: "V-ing", note: "have trouble/difficulty/fun + V-ing" },
    { word: "a waste of money/time", meaning: "lãng phí tiền bạc / thời gian", cat: "CAT_I", form: "V-ing", note: "a waste of time/money + V-ing" },
    { word: "prefer V-ing to V-ing", meaning: "thích làm việc này hơn việc kia", cat: "CAT_I", form: "V-ing", note: "prefer V-ing to V-ing" },

    // --- PHẦN II: VERB + TO V-INFINITIVES ---
    { word: "afford", meaning: "đủ khả năng chi trả", cat: "CAT_II", form: "To V", note: "afford + To V" },
    { word: "agree", meaning: "đồng ý làm gì", cat: "CAT_II", form: "To V", note: "agree + To V (đồng ý làm gì)" },
    { word: "aim", meaning: "có mục đích, nhắm tới", cat: "CAT_II", form: "To V", note: "aim + To V" },
    { word: "appear", meaning: "dường như, xuất hiện", cat: "CAT_II", form: "To V", note: "appear + To V" },
    { word: "arrange", meaning: "sắp xếp", cat: "CAT_II", form: "To V", note: "arrange + To V" },
    { word: "hope", meaning: "hy vọng", cat: "CAT_II", form: "To V", note: "hope + To V" },
    { word: "learn", meaning: "học cách làm gì", cat: "CAT_II", form: "To V", note: "learn + To V" },
    { word: "manage", meaning: "xoay xở được", cat: "CAT_II", form: "To V", note: "manage + To V" },
    { word: "offer", meaning: "mời, đề nghị", cat: "CAT_II", form: "To V", note: "offer + To V" },
    { word: "plan", meaning: "hoạch định, lên kế hoạch", cat: "CAT_II", form: "To V", note: "plan + To V" },
    { word: "ask", meaning: "hỏi xin, yêu cầu", cat: "CAT_II", form: "To V", note: "ask + To V / ask sb to V" },
    { word: "attempt", meaning: "nỗ lực, cố gắng", cat: "CAT_II", form: "To V", note: "attempt + To V" },
    { word: "be about", meaning: "sắp, định làm gì", cat: "CAT_II", form: "To V", note: "be about + To V" },
    { word: "beg", meaning: "van xin", cat: "CAT_II", form: "To V", note: "beg + To V" },
    { word: "care", meaning: "quan tâm", cat: "CAT_II", form: "To V", note: "care + To V" },
    { word: "claim", meaning: "nói, tuyên bố", cat: "CAT_II", form: "To V", note: "claim + To V" },
    { word: "consent", meaning: "bằng lòng", cat: "CAT_II", form: "To V", note: "consent + To V" },
    { word: "choose", meaning: "chọn lựa", cat: "CAT_II", form: "To V", note: "choose + To V" },
    { word: "dare", meaning: "dám", cat: "CAT_II", form: "To V", note: "dare + To V / dare + V bare" },
    { word: "decide", meaning: "quyết định", cat: "CAT_II", form: "To V", note: "decide + To V" },
    { word: "demand", meaning: "đòi hỏi, yêu sách", cat: "CAT_II", form: "To V", note: "demand + To V" },
    { word: "deserve", meaning: "xứng đáng", cat: "CAT_II", form: "To V", note: "deserve + To V" },
    { word: "determine", meaning: "quyết tâm", cat: "CAT_II", form: "To V", note: "determine + To V" },
    { word: "do one’s best", meaning: "cố hết sức", cat: "CAT_II", form: "To V", note: "do one's best + To V" },
    { word: "expect", meaning: "mong đợi", cat: "CAT_II", form: "To V", note: "expect + To V" },
    { word: "fail", meaning: "thất bại, không làm được", cat: "CAT_II", form: "To V", note: "fail + To V" },
    { word: "guarantee", meaning: "bảo đảm", cat: "CAT_II", form: "To V", note: "guarantee + To V" },
    { word: "hesitate", meaning: "ngần ngại, do dự", cat: "CAT_II", form: "To V", note: "hesitate + To V" },
    { word: "pretend", meaning: "giả vờ", cat: "CAT_II", form: "To V", note: "pretend + To V" },
    { word: "promise", meaning: "hứa", cat: "CAT_II", form: "To V", note: "promise + To V" },
    { word: "require", meaning: "yêu cầu", cat: "CAT_II", form: "To V", note: "require + To V" },
    { word: "refuse", meaning: "từ chối", cat: "CAT_II", form: "To V", note: "refuse + To V" },
    { word: "seem", meaning: "dường như", cat: "CAT_II", form: "To V", note: "seem + To V" },
    { word: "struggle", meaning: "phấn đấu, vật lộn", cat: "CAT_II", form: "To V", note: "struggle + To V" },
    { word: "swear", meaning: "thề", cat: "CAT_II", form: "To V", note: "swear + To V" },
    { word: "set out", meaning: "lập ra, khởi hành", cat: "CAT_II", form: "To V", note: "set out + To V" },
    { word: "tend", meaning: "có khuynh hướng", cat: "CAT_II", form: "To V", note: "tend + To V" },
    { word: "threaten", meaning: "đe dọa", cat: "CAT_II", form: "To V", note: "threaten + To V" },
    { word: "trouble", meaning: "có vấn đề, bận tâm", cat: "CAT_II", form: "To V", note: "trouble + To V" },
    { word: "volunteer", meaning: "tình nguyện", cat: "CAT_II", form: "To V", note: "volunteer + To V" },
    { word: "wait", meaning: "chờ đợi", cat: "CAT_II", form: "To V", note: "wait + To V" },
    { word: "want", meaning: "muốn", cat: "CAT_II", form: "To V", note: "want + To V" },
    { word: "would like", meaning: "muốn", cat: "CAT_II", form: "To V", note: "would like + To V" },
    { word: "wish", meaning: "mong ước", cat: "CAT_II", form: "To V", note: "wish + To V" },
    { word: "used to", meaning: "đã từng (làm gì)", cat: "CAT_II", form: "V (bare)", note: "used to + V (bare)" },
    { word: "It’s + adj", meaning: "thật ... để làm gì", cat: "CAT_II", form: "To V", note: "It's + adj + To V" },

    // --- PHẦN III: VERB + sb + V-INFINITIVES ---
    { word: "let (sb)", meaning: "để, cho phép", cat: "CAT_III", form: "V (bare)", note: "let sb + V (bare)" },
    { word: "make (sb)", meaning: "buộc, bắt", cat: "CAT_III", form: "V (bare)", note: "make sb + V (bare)" },
    { word: "have (sb)", meaning: "nhờ, yêu cầu", cat: "CAT_III", form: "V (bare)", note: "have sb + V (bare) (nhờ ai làm gì)" },
    { word: "help (sb)", meaning: "giúp đỡ", cat: "CAT_III", form: "V (bare) hoặc To V", note: "help sb + V (bare) / To V" },
    { word: "would rather", meaning: "thích hơn / thà rằng", cat: "CAT_III", form: "V (bare)", note: "would rather + V (bare)" },
    { word: "had better", meaning: "tốt hơn nên", cat: "CAT_III", form: "V (bare)", note: "had better + V (bare)" },
    { word: "modal verbs", meaning: "động từ khuyết thiếu (can/may/must...)", cat: "CAT_III", form: "V (bare)", note: "can, could, may, might, must, should, will + V (bare)" },

    // --- PHẦN IV: VERB (GIÁC QUAN) + OBJECT + V / V-ING ---
    { word: "see", meaning: "nhìn thấy", cat: "CAT_IV", form: "V (toàn bộ) / V-ing (một phần)", note: "see sb V (toàn bộ) / see sb V-ing (một phần)" },
    { word: "notice", meaning: "nhận thấy", cat: "CAT_IV", form: "V (toàn bộ) / V-ing (một phần)", note: "notice sb V / V-ing" },
    { word: "watch", meaning: "theo dõi", cat: "CAT_IV", form: "V (toàn bộ) / V-ing (một phần)", note: "watch sb V / V-ing" },
    { word: "look at", meaning: "nhìn vào", cat: "CAT_IV", form: "V (toàn bộ) / V-ing (một phần)", note: "look at sb V / V-ing" },
    { word: "observe", meaning: "quan sát", cat: "CAT_IV", form: "V (toàn bộ) / V-ing (một phần)", note: "observe sb V / V-ing" },
    { word: "hear", meaning: "nghe thấy", cat: "CAT_IV", form: "V (toàn bộ) / V-ing (một phần)", note: "hear sb V / V-ing" },
    { word: "listen to", meaning: "lắng nghe", cat: "CAT_IV", form: "V (toàn bộ) / V-ing (một phần)", note: "listen to sb V / V-ing" },
    { word: "feel", meaning: "cảm thấy", cat: "CAT_IV", form: "V (toàn bộ) / V-ing (một phần)", note: "feel sb V / V-ing" },
    { word: "smell", meaning: "ngửi thấy", cat: "CAT_IV", form: "V (toàn bộ) / V-ing (một phần)", note: "smell sth V / V-ing" },
    { word: "catch", meaning: "bắt gặp", cat: "CAT_IV", form: "V (toàn bộ) / V-ing (một phần)", note: "catch sb V / V-ing" },
    { word: "find", meaning: "nhận thấy, tìm thấy", cat: "CAT_IV", form: "V (toàn bộ) / V-ing (một phần)", note: "find sb V / V-ing" },

    // --- PHẦN V: VERB + TO V / V-ING (KHÔNG ĐỔI NGHĨA) ---
    { word: "intend", meaning: "có ý định, dự định", cat: "CAT_V", form: "To V / V-ing", note: "Không tân ngữ: V-ing | Có tân ngữ: To V" },
    { word: "encourage", meaning: "khuyến khích", cat: "CAT_V", form: "To V / V-ing", note: "Không tân ngữ: V-ing | Có tân ngữ: To V" },
    { word: "allow / permit", meaning: "cho phép", cat: "CAT_V", form: "To V / V-ing", note: "Không tân ngữ: V-ing | Có tân ngữ: To V" },
    { word: "forbid", meaning: "cấm", cat: "CAT_V", form: "To V / V-ing", note: "Không tân ngữ: V-ing | Có tân ngữ: To V" },
    { word: "admit", meaning: "thừa nhận", cat: "CAT_V", form: "To V / V-ing", note: "Có thể dùng cả To V hoặc V-ing" },
    { word: "recommend", meaning: "đề nghị, giới thiệu", cat: "CAT_V", form: "To V / V-ing", note: "Không tân ngữ: V-ing | Có tân ngữ: To V" },
    { word: "begin / start", meaning: "bắt đầu", cat: "CAT_V", form: "To V / V-ing", note: "Dùng to V khi ở thì tiếp diễn hoặc sau đó là understand/realize" },
    { word: "continue", meaning: "tiếp tục", cat: "CAT_V", form: "To V / V-ing", note: "continue + to V / V-ing" },

    // --- PHẦN VI: VERB + TO V / V-ING (KHÁC NHAU VỀ NGHĨA) ---
    { word: "stop", meaning: "dừng lại", cat: "CAT_VI", form: "To V / V-ing", note: "Stop to V: dừng để làm gì khác | Stop V-ing: chấm dứt 1 việc đang làm" },
    { word: "try", meaning: "cố gắng / thử", cat: "CAT_VI", form: "To V / V-ing", note: "Try to V: cố gắng làm gì | Try V-ing: thử làm gì xem kết quả" },
    { word: "prefer", meaning: "thích hơn", cat: "CAT_VI", form: "To V / V-ing", note: "Prefer to V: thích làm việc cụ thể | Prefer V-ing: thích chung chung" },
    { word: "like", meaning: "thích, muốn", cat: "CAT_VI", form: "To V / V-ing", note: "Like to V: muốn/quen làm gì | Like V-ing: thích làm gì" },
    { word: "need", meaning: "cần", cat: "CAT_VI", form: "To V / V-ing", note: "Need to V: cần làm (chủ động) | Need V-ing: cần được làm (bị động)" },
    { word: "agree", meaning: "đồng ý", cat: "CAT_VI", form: "To V / V-ing", note: "Agree to V: đồng ý làm gì | Agree V-ing: đồng ý chuyện gì" },
    { word: "mean", meaning: "có ý định / có nghĩa là", cat: "CAT_VI", form: "To V / V-ing", note: "Mean to V: có ý định làm gì | Mean V-ing: có nghĩa là, yêu cầu" },
    { word: "propose", meaning: "có ý định / gợi ý", cat: "CAT_VI", form: "To V / V-ing", note: "Propose to V: có ý định làm gì | Propose V-ing: gợi ý/đề nghị" },
    { word: "remember/regret/forget", meaning: "nhớ / hối tiếc / quên", cat: "CAT_VI", form: "To V / V-ing", note: "+ To V: nhớ/tiếc/quên bổn phận phải làm | + V-ing: nhớ/tiếc/quên đã làm gì trong quá khứ" },

    // --- PHẦN VII: VERB + OBJECT + TO V ---
    { word: "persuade (sb)", meaning: "thuyết phục ai làm gì", cat: "CAT_VII", form: "sb + To V", note: "persuade sb to V" },
    { word: "remind (sb)", meaning: "nhắc nhở ai làm gì", cat: "CAT_VII", form: "sb + To V", note: "remind sb to V" },
    { word: "instruct (sb)", meaning: "dạy, chỉ thị ai làm gì", cat: "CAT_VII", form: "sb + To V", note: "instruct sb to V" },
    { word: "challenge (sb)", meaning: "thách thức ai làm gì", cat: "CAT_VII", form: "sb + To V", note: "challenge sb to V" },
    { word: "force (sb)", meaning: "buộc, ép ai làm gì", cat: "CAT_VII", form: "sb + To V", note: "force sb to V" },
    { word: "warn (sb)", meaning: "cảnh báo ai làm gì", cat: "CAT_VII", form: "sb + To V", note: "warn sb to V / not to V" },
    { word: "convince (sb)", meaning: "thuyết phục ai làm gì", cat: "CAT_VII", form: "sb + To V", note: "convince sb to V" },
    { word: "invite (sb)", meaning: "mời ai làm gì", cat: "CAT_VII", form: "sb + To V", note: "invite sb to V" }
  ],

  // 42 câu hỏi cấu trúc cố định chi tiết
  structureQuestions: [
    {
      id: "sq1",
      cat: "CAT_I",
      question: "Sau động từ 'avoid' (tránh), động từ theo sau được chia ở dạng nào?",
      options: ["V-ing", "To V", "V (bare infinitive)", "To be V-ing"],
      correct: 0,
      explanation: "Theo lý thuyết Phần I: avoid + V-ing (tránh làm việc gì). Ví dụ: He avoids meeting her."
    },
    {
      id: "sq2",
      cat: "CAT_I",
      question: "Cấu trúc 'can’t help' (không thể không) đi với dạng động từ nào?",
      options: ["To V", "V-ing", "V nguyên mẫu", "Having PP"],
      correct: 1,
      explanation: "Theo lý thuyết Phần I: can't help + V-ing (không thể nhịn được / không thể không làm gì)."
    },
    {
      id: "sq3",
      cat: "CAT_I",
      question: "Cấu trúc 'look forward to' (trông đợi) đi với hình thức động từ nào?",
      options: ["V (bare)", "To V", "V-ing", "V-ed"],
      correct: 2,
      explanation: "Theo Phần I: 'to' trong 'look forward to' là giới từ nên sau đó đi với V-ing (look forward to doing sth)."
    },
    {
      id: "sq4",
      cat: "CAT_I",
      question: "Cấu trúc 'It’s no use' (không ích gì) đi với dạng:",
      options: ["To V", "V-ing", "V nguyên thể", "To have PP"],
      correct: 1,
      explanation: "Theo Phần I: It's no use / It's no good / There's no point in + V-ing (vô ích khi làm gì)."
    },
    {
      id: "sq5",
      cat: "CAT_I",
      question: "Động từ theo sau các giới từ (in, on, at, about, with, without...) đều chia ở dạng nào?",
      options: ["To V", "V-ing", "V (bare)", "To have PP"],
      correct: 1,
      explanation: "Quy tắc cốt lõi: Các động từ theo sau giới từ đều chia ở V-ing."
    },
    {
      id: "sq6",
      cat: "CAT_I",
      question: "Sau 'postpone' (hoãn lại), ta dùng dạng động từ nào?",
      options: ["V (nguyên mẫu)", "To V", "V-ing", "Being PP"],
      correct: 2,
      explanation: "Theo lý thuyết Phần I: postpone + V-ing (hoãn lại việc làm gì)."
    },
    {
      id: "sq7",
      cat: "CAT_I",
      question: "Cấu trúc 'with a view to' (với mục đích/quan điểm) đi với dạng nào?",
      options: ["V-ing", "To V", "V (bare)", "To be PP"],
      correct: 0,
      explanation: "Theo lý thuyết Phần I: with a view to + V-ing."
    },
    {
      id: "sq8",
      cat: "CAT_I",
      question: "Cấu trúc 'have trouble / difficulty' (gặp khó khăn khi làm gì) đi với dạng:",
      options: ["To V", "V (bare)", "V-ing", "To have PP"],
      correct: 2,
      explanation: "Theo lý thuyết Phần I: have (difficulty/trouble/fun) + V-ing."
    },
    {
      id: "sq9",
      cat: "CAT_I",
      question: "Cấu trúc 'S + be/get used to' (quen với việc gì) theo sau là:",
      options: ["V-ing", "V (bare)", "To V", "Have PP"],
      correct: 0,
      explanation: "Theo Phần I: be/get used to + V-ing (khác với 'used to + V bare': đã từng làm gì)."
    },
    {
      id: "sq10",
      cat: "CAT_I",
      question: "Sau 'mind' (phiền, ngại, nề hà), động từ tiếp theo được chia ở dạng nào?",
      options: ["To V", "V-ing", "V bare", "To be V-ing"],
      correct: 1,
      explanation: "Theo Phần I: Do/Would you mind + V-ing."
    },
    {
      id: "sq11",
      cat: "CAT_II",
      question: "Sau động từ 'decide' (quyết định), động từ theo sau chia ở dạng nào?",
      options: ["V-ing", "To V", "V (bare)", "Being PP"],
      correct: 1,
      explanation: "Theo lý thuyết Phần II: decide + To V. Ví dụ: We decided to go home."
    },
    {
      id: "sq12",
      cat: "CAT_II",
      question: "Sau động từ 'afford' (đủ khả năng chi trả), ta dùng:",
      options: ["To V", "V-ing", "V bare", "Having PP"],
      correct: 0,
      explanation: "Theo Phần II: afford + To V. Ví dụ: I cannot afford to buy a new car."
    },
    {
      id: "sq13",
      cat: "CAT_II",
      question: "Sau 'hesitate' (ngần ngại, do dự), ta dùng dạng nào?",
      options: ["V-ing", "To V", "V bare", "To have PP"],
      correct: 1,
      explanation: "Theo lý thuyết Phần II: hesitate + To V. Ví dụ: Don't hesitate to ask."
    },
    {
      id: "sq14",
      cat: "CAT_II",
      question: "Sau động từ 'refuse' (từ chối), động từ chia ở dạng:",
      options: ["V-ing", "V (bare)", "To V", "V-ed"],
      correct: 2,
      explanation: "Theo Phần II: refuse + To V (từ chối làm gì)."
    },
    {
      id: "sq15",
      cat: "CAT_II",
      question: "Cấu trúc 'It’s + adj' (thật ... để làm gì) đi với dạng:",
      options: ["V-ing", "To V", "V (bare)", "Having PP"],
      correct: 1,
      explanation: "Theo Phần II: It's + adj + To V. Ví dụ: It's important to study hard."
    },
    {
      id: "sq16",
      cat: "CAT_II",
      question: "Sau 'manage' (xoay xở để làm gì), động từ chia ở dạng nào?",
      options: ["V-ing", "V bare", "To V", "To be V-ing"],
      correct: 2,
      explanation: "Theo Phần II: manage + To V. Ví dụ: He managed to pass the exam."
    },
    {
      id: "sq17",
      cat: "CAT_II",
      question: "Sau 'threaten' (đe dọa), cấu trúc chuẩn là:",
      options: ["threaten + To V", "threaten + V-ing", "threaten + V bare", "threaten + Having PP"],
      correct: 0,
      explanation: "Theo lý thuyết Phần II: threaten + To V."
    },
    {
      id: "sq18",
      cat: "CAT_II",
      question: "Sau 'used to' mang nghĩa 'đã từng (trong quá khứ)', ta dùng:",
      options: ["To V", "V-ing", "V (bare)", "V-ed"],
      correct: 2,
      explanation: "used to + V (bare) = đã từng làm gì trong quá khứ. (Chú ý: be/get used to + V-ing = quen với việc gì)."
    },
    {
      id: "sq19",
      cat: "CAT_III",
      question: "Cấu trúc với 'make' mang nghĩa bắt buộc: 'make + sb + ...' đi với dạng nào?",
      options: ["To V", "V (bare infinitive)", "V-ing", "To be PP"],
      correct: 1,
      explanation: "Theo lý thuyết Phần III: make + sb + V (bare). Ví dụ: The teacher made him clean the board."
    },
    {
      id: "sq20",
      cat: "CAT_III",
      question: "Cấu trúc 'let + sb' (cho phép ai làm gì) đi với dạng động từ nào?",
      options: ["V (bare infinitive)", "To V", "V-ing", "Having PP"],
      correct: 0,
      explanation: "Theo Phần III: let + sb + V (bare). Ví dụ: Let me go."
    },
    {
      id: "sq21",
      cat: "CAT_III",
      question: "Sau cấu trúc 'had better' (tốt hơn nên làm gì), ta dùng:",
      options: ["To V", "V-ing", "V (bare infinitive)", "To be PP"],
      correct: 2,
      explanation: "Theo Phần III: had better + V (bare). Ví dụ: You had better study hard."
    },
    {
      id: "sq22",
      cat: "CAT_III",
      question: "Sau cấu trúc 'would rather' (thích hơn/thà rằng), động từ chia ở dạng nào?",
      options: ["To V", "V-ing", "V (bare infinitive)", "To have PP"],
      correct: 2,
      explanation: "Theo Phần III: would rather + V (bare). Ví dụ: I would rather stay at home."
    },
    {
      id: "sq23",
      cat: "CAT_III",
      question: "Với động từ 'help' (giúp đỡ), cấu trúc nào sau đây được chấp nhận?",
      options: ["help sb + V (bare)", "help sb + to V", "Cả A và B đều đúng", "Chỉ dùng help sb + V-ing"],
      correct: 2,
      explanation: "Theo Phần III: 'help' có thể đi với cả V (bare) hoặc To V (help sb do / to do sth)."
    },
    {
      id: "sq24",
      cat: "CAT_III",
      question: "Cấu trúc nhờ vả chủ động với 'have': 'have + sb + ...' đi với dạng nào?",
      options: ["V (bare infinitive)", "To V", "V-ing", "V-ed"],
      correct: 0,
      explanation: "Theo Phần III: have + sb + V (bare) = nhờ ai làm gì."
    },
    {
      id: "sq25",
      cat: "CAT_IV",
      question: "Với động từ giác quan (see, hear, notice...), ta dùng 'Verb + sb + V (bare)' khi nào?",
      options: [
        "Khi thấy/nghe một phần hành động đang diễn ra",
        "Khi thấy/nghe toàn bộ hành động từ đầu đến cuối",
        "Khi hành động đã kết thúc từ lâu",
        "Khi mang ý nghĩa phỏng đoán"
      ],
      correct: 1,
      explanation: "Theo Phần IV: Dùng V-infi nếu nghe/thấy toàn bộ hành động từ đầu đến cuối (Ex: I saw my friend run down the street)."
    },
    {
      id: "sq26",
      cat: "CAT_IV",
      question: "Với động từ giác quan (see, hear, watch...), ta dùng 'Verb + sb + V-ing' khi nào?",
      options: [
        "Khi thấy/nghe 1 phần hành động đang xảy ra",
        "Khi thấy/nghe toàn bộ hành động",
        "Khi hành động là thói quen lâu năm",
        "Khi hành động là nhiệm vụ bắt buộc"
      ],
      correct: 0,
      explanation: "Theo Phần IV: Dùng V-ing nếu nghe/thấy 1 phần hành động đang xảy ra (Ex: I saw my friend running down the street)."
    },
    {
      id: "sq27",
      cat: "CAT_V",
      question: "Với các động từ như 'advise, allow, permit, forbid, recommend': Nếu KHÔNG có tân ngữ thì chia dạng nào?",
      options: ["To V", "V-ing", "V bare", "To be PP"],
      correct: 1,
      explanation: "Theo Phần V: Nếu sau những từ này KHÔNG có tân ngữ thì dùng V-ing. (Ví dụ: They don't allow smoking here)."
    },
    {
      id: "sq28",
      cat: "CAT_V",
      question: "Với các từ 'advise, allow, permit, forbid, recommend': Nếu CÓ tân ngữ (sb) thì bắt buộc chia dạng nào?",
      options: ["V-ing", "V bare", "To V", "Being PP"],
      correct: 2,
      explanation: "Theo Phần V: Nếu sau những từ này CÓ tân ngữ thì buộc phải dùng To V. (Ví dụ: They don't allow us to smoke here)."
    },
    {
      id: "sq29",
      cat: "CAT_V",
      question: "Trường hợp nào sau đây BẮT BUỘC phải dùng START / BEGIN với 'to V'?",
      options: [
        "Khi start/begin ở thì quá khứ đơn",
        "Khi start/begin đang dùng ở hình thức tiếp diễn (ví dụ: was beginning/starting)",
        "Khi câu có trạng từ chỉ thời gian",
        "Khi chủ ngữ là đại từ số nhiều"
      ],
      correct: 1,
      explanation: "Theo Phần V: Phải dùng START/BEGIN với 'to V' khi động từ START/BEGIN được dùng ở hình thức tiếp diễn (It was beginning to rain)."
    },
    {
      id: "sq30",
      cat: "CAT_V",
      question: "Theo sau START / BEGIN là động từ nào thì BẮT BUỘC phải dùng dạng 'to V'?",
      options: ["study, learn", "understand, realize", "read, write", "speak, listen"],
      correct: 1,
      explanation: "Theo Phần V: Theo sau động từ START/BEGIN là 2 động từ UNDERSTAND, REALIZE thì bắt buộc dùng To V (She began to understand what he wanted)."
    },
    {
      id: "sq31",
      cat: "CAT_VI",
      question: "Phân biệt 'Stop': Cấu trúc 'Stop to V' có nghĩa là gì?",
      options: [
        "Dừng/chấm dứt hẳn 1 việc đang làm",
        "Dừng lại để làm một việc khác",
        "Không thể dừng lại được",
        "Bắt đầu làm một việc mới"
      ],
      correct: 1,
      explanation: "Theo Phần VI: Stop to V: dừng lại để làm gì (He stopped to drink water). Stop V-ing: chấm dứt 1 việc gì (He stopped smoking)."
    },
    {
      id: "sq32",
      cat: "CAT_VI",
      question: "Phân biệt 'Try': Cấu trúc 'Try V-ing' có ý nghĩa gì?",
      options: [
        "Cố gắng, nỗ lực làm điều gì",
        "Thử làm một việc gì xem kết quả ra sao",
        "Không muốn làm việc gì",
        "Bỏ dở việc đang làm"
      ],
      correct: 1,
      explanation: "Theo Phần VI: Try to V = cố gắng làm điều gì. Try V-ing = thử làm gì xem kết quả ra sao."
    },
    {
      id: "sq33",
      cat: "CAT_VI",
      question: "Phân biệt 'Need': Khi chủ ngữ là vật, cấu trúc 'Need + V-ing' mang ý nghĩa gì?",
      options: [
        "Cần phải làm gì (chủ động)",
        "Cần phải được làm gì (nghĩa bị động)",
        "Không cần thiết phải làm",
        "Đã hoàn thành việc cần làm"
      ],
      correct: 1,
      explanation: "Theo Phần VI: Need to V: cần làm gì (chủ động). Need V-ing: cần phải được làm gì (bị động, tương đương need to be PP). Ví dụ: The car needs washing."
    },
    {
      id: "sq34",
      cat: "CAT_VI",
      question: "Cấu trúc 'Remember / Regret / Forget + to V' dùng khi nào?",
      options: [
        "Nhớ, tiếc, quên việc đã xảy ra trong quá khứ",
        "Nhớ, tiếc, quên làm một nhiệm vụ, trách nhiệm (sẽ hoặc phải làm)",
        "Thể hiện sở thích lâu dài",
        "Thể hiện sự ép buộc từ người khác"
      ],
      correct: 1,
      explanation: "Theo Phần VI: Remember/regret/forget + to V = nhớ/tiếc/quên làm nhiệm vụ, trách nhiệm. Còn + V-ing = nhớ/tiếc/quên đã làm gì trong quá khứ."
    },
    {
      id: "sq35",
      cat: "CAT_VI",
      question: "Phân biệt 'Mean': 'Mean to V' mang ý nghĩa gì?",
      options: [
        "Có nghĩa là, đòi hỏi",
        "Có ý định, kế hoạch làm gì",
        "Gợi ý một giải pháp",
        "Đồng ý với một quan điểm"
      ],
      correct: 1,
      explanation: "Theo Phần VI: Mean to V = có ý định/kế hoạch. Mean V-ing = yêu cầu, đòi hỏi, có nghĩa là."
    },
    {
      id: "sq36",
      cat: "CAT_VI",
      question: "Phân biệt 'Propose': 'Propose V-ing' mang ý nghĩa gì?",
      options: [
        "Có ý định / kế hoạch",
        "Gợi ý / đề nghị làm gì",
        "Bắt buộc người khác làm gì",
        "Từ chối lời mời"
      ],
      correct: 1,
      explanation: "Theo Phần VI: Propose to V = có ý định/kế hoạch. Propose V-ing = gợi ý/đề nghị."
    },
    {
      id: "sq37",
      cat: "CAT_VII",
      question: "Cấu trúc 'persuade + sb' (thuyết phục ai làm gì) đi với dạng:",
      options: ["V (bare)", "To V", "V-ing", "Having PP"],
      correct: 1,
      explanation: "Theo lý thuyết Phần VII: persuade + Object + to V (thuyết phục ai làm gì)."
    },
    {
      id: "sq38",
      cat: "CAT_VII",
      question: "Cấu trúc 'warn + sb' (cảnh báo ai làm gì) đi với dạng:",
      options: ["V-ing", "V bare", "to V (hoặc not to V)", "To have PP"],
      correct: 2,
      explanation: "Theo Phần VII: warn + Object + to V (hoặc not to V) (cảnh báo ai làm / không làm gì)."
    },
    {
      id: "sq39",
      cat: "CAT_VII",
      question: "Cấu trúc 'remind + sb' (nhắc nhở ai) đi với dạng nào?",
      options: ["To V", "V-ing", "V bare", "Having PP"],
      correct: 0,
      explanation: "Theo Phần VII: remind + Object + to V (nhắc nhở ai làm gì)."
    },
    {
      id: "sq40",
      cat: "CAT_VIII",
      question: "Dạng hoàn thành của To V (To have + PP) được dùng để diễn đạt điều gì?",
      options: [
        "Hành động xảy ra sau hành động của động từ chính",
        "Hành động xảy ra trước hành động của động từ chính",
        "Hành động đang tiếp diễn tại thời điểm nói",
        "Hành động mang tính bị động hoàn toàn"
      ],
      correct: 1,
      explanation: "Theo Phần VIII: V + TO HAVE + PP biểu thị hành động đã xảy ra trước động từ chính (Ví dụ: You seem to have lost weight)."
    },
    {
      id: "sq41",
      cat: "CAT_VIII",
      question: "Trong câu 'I appreciate now having had opportunity to meet the king', dạng 'HAVING + PP' là:",
      options: [
        "Dạng bị động của V-ing",
        "Dạng tiếp diễn của V-ing",
        "Dạng hoàn thành của V-ing (chủ động)",
        "Dạng bị động hoàn thành của V-ing"
      ],
      correct: 2,
      explanation: "Theo Phần VIII: V + HAVING + PP là dạng hoàn thành của Gerund (V-ing)."
    },
    {
      id: "sq42",
      cat: "CAT_VIII",
      question: "Dạng bị động của Gerund (V-ing) có cấu trúc chuẩn là gì?",
      options: ["V + BEING + PP", "V + TO BE + PP", "V + HAVING BEEN + PP", "V + NOT + V-ING"],
      correct: 0,
      explanation: "Theo Phần VIII: V-ing bị động là 'V + BEING + PP'. Ví dụ: I appreciated being invited to your home."
    },
    {
      id: "sq43",
      cat: "CAT_V",
      question: "When I got off the train, it was beginning ______ (rain). (Chọn dạng đúng của động từ)",
      options: ["to rain", "raining", "rain", "rained"],
      correct: 0,
      explanation: "Theo Phần V: Phải dùng START / BEGIN với 'to V' khi START / BEGIN đang được dùng ở thì tiếp diễn (was beginning)."
    },
    {
      id: "sq44",
      cat: "CAT_V",
      question: "She began ______ (understand) what he really wanted. (Chọn dạng đúng của động từ)",
      options: ["to understand", "understanding", "understand", "understood"],
      correct: 0,
      explanation: "Theo Phần V: Theo sau động từ START / BEGIN là 2 động từ UNDERSTAND, REALIZE thì bắt buộc dùng dạng To V."
    },
    {
      id: "sq45",
      cat: "CAT_VIII",
      question: "We decided ______ a car because of high maintenance costs. (Chọn dạng đúng)",
      options: ["not to buy", "to not buy", "not buying", "not buy"],
      correct: 0,
      explanation: "Theo Phần VIII: Cấu trúc phủ định chuẩn của To V là: V + NOT + TO V (We decided not to buy a car)."
    },
    {
      id: "sq46",
      cat: "CAT_VIII",
      question: "They were exhausted, so they pretended ______ when their mother came in.",
      options: ["to be sleeping", "sleeping", "to sleep", "sleep"],
      correct: 0,
      explanation: "Theo Phần VIII: Dạng tiếp diễn của To V: V + TO BE + V-ING (We pretended to be sleeping)."
    },
    {
      id: "sq47",
      cat: "CAT_VIII",
      question: "You look much thinner! You seem ______ weight. (Chọn dạng đúng)",
      options: ["to have lost", "to lose", "losing", "to be lost"],
      correct: 0,
      explanation: "Theo Phần VIII: Dạng hoàn thành của To V: V + TO HAVE + PP (You seem to have lost weight)."
    },
    {
      id: "sq48",
      cat: "CAT_VIII",
      question: "All the students expect ______ to the annual graduation party. (Chọn dạng đúng)",
      options: ["to be invited", "being invited", "to invite", "invited"],
      correct: 0,
      explanation: "Theo Phần VIII: Dạng bị động của To V: V + TO BE + PP (We expect to be invited to the party)."
    },
    {
      id: "sq49",
      cat: "CAT_VIII",
      question: "Jane is lucky now ______ a scholarship last month by her government.",
      options: ["to have been given", "to be given", "giving", "having been given"],
      correct: 0,
      explanation: "Theo Phần VIII: Dạng bị động hoàn thành của To V: V + TO HAVE BEEN + PP (Jane is lucky now to have been given a scholarship last month)."
    },
    {
      id: "sq50",
      cat: "CAT_VIII",
      question: "I am an introvert, so I enjoy ______ at noisy clubs. (Chọn dạng đúng)",
      options: ["not being", "not to be", "being not", "not be"],
      correct: 0,
      explanation: "Theo Phần VIII: Dạng phủ định của Gerund (V-ing): V + NOT + V-ING (I enjoy not being at home)."
    },
    {
      id: "sq51",
      cat: "CAT_VIII",
      question: "I appreciate now ______ opportunity to meet the king yesterday. (Chọn dạng đúng)",
      options: ["having had", "to have had", "have had", "had"],
      correct: 0,
      explanation: "Theo Phần VIII: Dạng hoàn thành của Gerund: V + HAVING + PP (I appreciate now having had opportunity to meet the king yesterday)."
    },
    {
      id: "sq52",
      cat: "CAT_VIII",
      question: "I appreciated ______ to your home last Sunday. (Chọn dạng đúng)",
      options: ["being invited", "to be invited", "inviting", "to have invited"],
      correct: 0,
      explanation: "Theo Phần VIII: Dạng bị động của Gerund (V-ing): V + BEING + PP (I appreciated being invited to your home)."
    },
    {
      id: "sq53",
      cat: "CAT_VI",
      question: "The car is terribly dirty. It needs ______ right away. (Chọn dạng đúng)",
      options: ["washing", "to wash", "wash", "washed"],
      correct: 0,
      explanation: "Theo Phần VI: S (vật) + need + V-ing mang nghĩa bị động (cần phải được làm gì = need to be PP). Ví dụ: The car needs washing."
    },
    {
      id: "sq54",
      cat: "CAT_VI",
      question: "On the way home, my father stopped ______ some newspaper at the kiosk.",
      options: ["to buy", "buying", "buy", "bought"],
      correct: 0,
      explanation: "Theo Phần VI: Stop to V = dừng lại để làm một việc khác (Stop to buy newspaper). Stop V-ing = dừng hẳn một việc đang làm (Stop smoking)."
    }
  ]
};

