// ============================================================
// AYURMEDICA - FLASHCARDS 2.0
// 100 BAMS Flashcards + Scholarly Source Metadata
// ============================================================

function createFlashcard(data) {
  return {
    id: data.id || "",
    year: data.year || "",
    subject: data.subject || "",
    category: data.category || "",
    topic: data.topic || "",
    module: data.module || "",
    chapter: data.chapter || "",
    samhita: data.samhita || "",
    sthana: data.sthana || "",

    front: data.front || "",
    frontHint: data.frontHint || "",

    back: data.back || "",
    backMeaning: data.backMeaning || "",
    clinicalPearl: data.clinicalPearl || "",

    // Flashcards 2.0 fields
    shloka: data.shloka || "",
    transliteration: data.transliteration || "",
    translation: data.translation || "",
    explanation: data.explanation || "",
    clinicalUse: data.clinicalUse || "",

    // Scholarly provenance
    source: {
      text: data.source?.text || "",
      sthana: data.source?.sthana || "",
      chapter: data.source?.chapter || "",
      chapterNumber: data.source?.chapterNumber || "",
      verse: data.source?.verse || "",
      reference: data.source?.reference || "",
      quoteType: data.source?.quoteType || "",
      verification: data.source?.verification || "needs-verification"
    },

    // Links to actual PYQ IDs
    pyqLinks: data.pyqLinks || []
  };
}


window.BAMS_FLASHCARDS = [

  // ==========================================================
  // 1. CHARAKA SAMHITA
  // ==========================================================

  {
    id: "fc-001",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Must-Know Shloka",
    topic: "Ayu",
    module: "Fundamentals",
    chapter: "Dirghanjivitiya Adhyaya",
    samhita: "Charaka Samhita",
    sthana: "Sutrasthana",

    front: "What is Ayu according to Charaka Samhita?",
    frontHint: "Charaka Sutrasthana 1/42",

    shloka:
      "शरीरेन्द्रियसत्त्वात्मसंयोगो धारि जीवितम्। नित्यगश्चानुबन्धश्च पर्यायैरायुरुच्यते॥",

    transliteration:
      "śarīrendriyasattvātmasaṃyogo dhāri jīvitam | nityagaś cānubandhaś ca paryāyair āyur ucyate ||",

    translation:
      "The conjunction of body, senses, mind and self is called Ayu or life; it is also described as that which is continuous and enduring.",

    explanation:
      "Charaka defines life through the conjunction of Sharira, Indriya, Sattva and Atma.",

    clinicalUse:
      "Important foundational definition for understanding Ayurveda's concept of life and health.",

    backMeaning:
      "Ayu is the continuous association of Sharira, Indriya, Sattva and Atma.",

    clinicalPearl:
      "Remember the four components: Sharira + Indriya + Sattva + Atma.",

    source: {
      text: "Charaka Samhita",
      sthana: "Sutrasthana",
      chapter: "Dirghanjivitiya Adhyaya",
      chapterNumber: 1,
      verse: "42",
      reference: "Cha. Su. 1/42",
      quoteType: "Definition",
      verification: "verified"
    },

    pyqLinks: []
  },


  {
    id: "fc-002",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Dosha",
    topic: "Pitta Dosha",
    module: "Tridosha",
    chapter: "Dosha",
    samhita: "Ashtanga Hridaya",
    sthana: "Sutrasthana",

    front: "What are the qualities of Pitta Dosha?",
    frontHint: "Remember the characteristic Gunas.",

    shloka:
      "पित्तं सस्नेहतीक्ष्णोष्णं लघु विस्रं सरं द्रवम्॥",

    transliteration:
      "pittaṃ sasnehatīkṣṇoṣṇaṃ laghu visraṃ saraṃ dravam",

    translation:
      "Pitta is slightly unctuous, sharp, hot, light, having an unpleasant odour, mobile and liquid.",

    explanation:
      "These qualities explain the functional nature of Pitta and help in understanding its physiological and pathological actions.",

    clinicalUse:
      "Useful for understanding Pitta-dominant states and selection of appropriate qualities in Ayurvedic management.",

    backMeaning:
      "Pitta possesses qualities such as slight unctuousness, sharpness, heat, lightness, fluidity and mobility.",

    clinicalPearl:
      "Focus on Tikshna, Ushna, Laghu and Drava.",

    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Ayushkamiya Adhyaya",
      chapterNumber: 1,
      verse: "11",
      reference: "A.H. Su. 1/11",
      quoteType: "Direct Shloka",
      verification: "verified"
    },

    pyqLinks: []
  },


  {
    id: "fc-003",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Dhatu",
    topic: "Seven Dhatus",
    module: "Sharira",
    chapter: "Grahani",
    samhita: "Charaka Samhita",
    sthana: "Chikitsasthana",

    front: "What is the sequence of the seven Dhatus?",
    frontHint: "Remember the order from Rasa to Shukra.",

    shloka:
      "रसाद्रक्तं ततो मांसं मांसान्मेदस्ततोऽस्थि च। अस्थ्नो मज्जा ततः शुक्रं शुक्राद्गर्भः प्रजायते॥",

    transliteration:
      "rasād raktaṃ tato māṃsaṃ māṃsān medas tato'sthi ca | asthno majjā tataḥ śukraṃ śukrād garbhaḥ prajāyate ||",

    translation:
      "Rasa gives rise to Rakta, followed by Mamsa, Meda, Asthi, Majja and Shukra.",

    explanation:
      "The seven Dhatus are described as Rasa, Rakta, Mamsa, Meda, Asthi, Majja and Shukra.",

    clinicalUse:
      "Fundamental for understanding Dhatu formation and nourishment.",

    clinicalPearl:
      "Rasa → Rakta → Mamsa → Meda → Asthi → Majja → Shukra.",

    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "Grahani Chikitsa",
      chapterNumber: 15,
      verse: "16",
      reference: "Cha. Chi. 15/16",
      quoteType: "Direct Shloka",
      verification: "verified"
    },

    pyqLinks: []
  },


  {
    id: "fc-004",
    year: "1st Prof",
    subject: "Dravyaguna",
    category: "Dravya",
    topic: "Guduchi",
    module: "Medicinal Plants",
    chapter: "Guduchi",
    samhita: "",
    sthana: "",

    front: "What is the botanical identity of Guduchi?",
    frontHint: "Think of the Tinospora genus.",

    back:
      "Guduchi is commonly identified botanically as Tinospora cordifolia.",

    backMeaning:
      "Guduchi is an important Ayurvedic medicinal plant.",

    explanation:
      "Guduchi is widely discussed in Ayurvedic materia medica and is traditionally valued for several therapeutic properties.",

    clinicalUse:
      "Used as an educational example of an important Ayurvedic medicinal plant.",

    source: {
      text: "",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Botanical Reference",
      verification: "needs-verification"
    },

    pyqLinks: []
  },


  {
    id: "fc-005",
    year: "1st Prof",
    subject: "Dravyaguna",
    category: "Dravya",
    topic: "Ashwagandha",
    module: "Medicinal Plants",
    chapter: "Ashwagandha",
    samhita: "",
    sthana: "",

    front: "What is the botanical identity of Ashwagandha?",
    frontHint: "Remember the Withania genus.",

    back:
      "Ashwagandha is commonly identified botanically as Withania somnifera.",

    backMeaning:
      "Ashwagandha is an important Ayurvedic medicinal plant.",

    explanation:
      "Ashwagandha is traditionally classified as an important medicinal and Rasayana drug.",

    clinicalUse:
      "Useful as a foundational Dravyaguna identification card.",

    source: {
      text: "",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Botanical Reference",
      verification: "needs-verification"
    },

    pyqLinks: []
  },


  {
    id: "fc-006",
    year: "1st Prof",
    subject: "Rasashastra",
    category: "Pariksha",
    topic: "Varitara Pariksha",
    module: "Bhasma Pariksha",
    chapter: "Varitara",
    samhita: "Rasaratna Samuccaya",
    sthana: "",

    front: "What is Varitara Pariksha?",
    frontHint: "A classical test involving water.",

    shloka:
      "वारितरं भवेद्भस्म यत्तोयोपरि तिष्ठति।",

    transliteration:
      "vāritaraṃ bhaved bhasma yat toyopari tiṣṭhati",

    translation:
      "Bhasma which remains floating on the surface of water is described as Varitara.",

    explanation:
      "Varitara is a classical Bhasma examination in which properly prepared Bhasma is tested for its ability to float on water.",

    clinicalUse:
      "Important for understanding classical Bhasma Pariksha.",

    clinicalPearl:
      "Vari = water; the test relates to floating on water.",

    source: {
      text: "Rasaratna Samuccaya",
      sthana: "",
      chapter: "Varitara / Bhasma Pariksha",
      chapterNumber: 8,
      verse: "27",
      reference: "RRS 8/27",
      quoteType: "Classical Test",
      verification: "verified"
    },

    pyqLinks: []
  },


  {
    id: "fc-007",
    year: "1st Prof",
    subject: "Swasthavritta",
    category: "Dinacharya",
    topic: "Brahma Muhurta",
    module: "Daily Regimen",
    chapter: "Dinacharya Adhyaya",
    samhita: "Ashtanga Hridaya",
    sthana: "Sutrasthana",

    front: "What is advised regarding waking up in Brahma Muhurta?",
    frontHint: "Ashtanga Hridaya Sutrasthana 2/1.",

    shloka:
      "ब्राह्मे मुहूर्ते उत्तिष्ठेत् स्वस्थो रक्षार्थमायुषः।",

    transliteration:
      "brāhme muhūrte uttiṣṭhet svastho rakṣārtham āyuṣaḥ",

    translation:
      "A healthy person should rise during Brahma Muhurta for the preservation of life and health.",

    explanation:
      "Brahma Muhurta is traditionally regarded as an appropriate period for beginning the day's regimen.",

    clinicalUse:
      "A foundational Dinacharya concept.",

    clinicalPearl:
      "Remember: Brahma Muhurta → rising → protection of Ayu.",

    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Dinacharya Adhyaya",
      chapterNumber: 2,
      verse: "1",
      reference: "A.H. Su. 2/1",
      quoteType: "Direct Shloka",
      verification: "verified"
    },

    pyqLinks: []
  },


  {
    id: "fc-008",
    year: "4th Prof",
    subject: "Kayachikitsa",
    category: "Jwara",
    topic: "Jwara Chikitsa",
    module: "Kayachikitsa",
    chapter: "Jwara",
    samhita: "Charaka Samhita",
    sthana: "Chikitsasthana",

    front: "What is the basic principle of management of Jwara?",
    frontHint: "Think about Agni and the stage of disease.",

    back:
      "Management depends on the nature, stage, Dosha involvement and strength of the patient. Langhana may be considered in appropriate circumstances.",

    backMeaning:
      "Jwara management is individualized according to Dosha, stage, Agni and patient strength.",

    explanation:
      "Ayurvedic management of Jwara is not based on one universal treatment. Assessment of the patient and disease stage is important.",

    clinicalUse:
      "Useful for understanding the principle-based approach to Jwara Chikitsa.",

    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "Jwara Chikitsa",
      chapterNumber: 3,
      verse: "",
      reference: "Cha. Chi. 3",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },

    pyqLinks: []
  },


  {
    id: "fc-009",
    year: "4th Prof",
    subject: "Panchakarma",
    category: "Purvakarma",
    topic: "Snehana and Swedana",
    module: "Panchakarma",
    chapter: "Purvakarma",
    samhita: "",
    sthana: "",

    front: "Why are Snehana and Swedana commonly used before Panchakarma?",
    frontHint: "Think about Dosha movement and preparation.",

    back:
      "They are traditionally used as preparatory procedures to facilitate the movement of Doshas toward the appropriate pathway before the main Shodhana procedure.",

    backMeaning:
      "Snehana and Swedana prepare the body for appropriate Shodhana procedures.",

    explanation:
      "Purvakarma is used to prepare the body before selected Panchakarma procedures.",

    clinicalUse:
      "Important for understanding the sequence of Panchakarma procedures.",

    source: {
      text: "",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },

    pyqLinks: []
  },


  // ==========================================================
  // 10-100
  // FOUNDATIONAL STUDY CARDS
  // ==========================================================

  {
    id: "fc-010",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Tridosha",
    topic: "Vata",
    module: "Tridosha",
    chapter: "Dosha",
    samhita: "Ashtanga Hridaya",
    sthana: "Sutrasthana",

    front: "What are the five Mahabhuta-related Doshas?",
    back: "Vata, Pitta and Kapha are the three Doshas.",
    explanation: "The Tridosha framework is one of the foundational concepts of Ayurveda.",
    clinicalUse: "Forms the basis of many Ayurvedic physiological and pathological explanations.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Ayushkamiya Adhyaya",
      chapterNumber: 1,
      verse: "",
      reference: "A.H. Su. 1",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-011",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Tridosha",
    topic: "Vata Guna",
    module: "Tridosha",
    chapter: "Dosha",
    samhita: "Ashtanga Hridaya",
    sthana: "Sutrasthana",

    front: "Name the important qualities of Vata.",
    back: "Vata is described with qualities including Ruksha, Laghu, Sheeta, Khara, Sukshma and Chala.",
    explanation: "These qualities help explain Vata's functional characteristics.",
    clinicalUse: "Useful for understanding Vata-dominant conditions and therapeutic principles.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Ayushkamiya Adhyaya",
      chapterNumber: 1,
      verse: "11",
      reference: "A.H. Su. 1/11",
      quoteType: "Direct Shloka",
      verification: "verified"
    },
    pyqLinks: []
  },


  {
    id: "fc-012",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Tridosha",
    topic: "Kapha Guna",
    module: "Tridosha",
    chapter: "Dosha",
    samhita: "Ashtanga Hridaya",
    sthana: "Sutrasthana",

    front: "What are the important qualities of Kapha?",
    back: "Kapha is characterized by qualities such as Guru, Shita, Snigdha, Manda, Sthira, Mridu and Picchila.",
    explanation: "Kapha qualities explain its stabilizing, nourishing and cohesive functions.",
    clinicalUse: "Useful for understanding Kapha physiology.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Ayushkamiya Adhyaya",
      chapterNumber: 1,
      verse: "",
      reference: "A.H. Su. 1",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-013",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Agni",
    topic: "Agni",
    module: "Fundamentals",
    chapter: "Agni",

    front: "What is Agni in Ayurveda?",
    back: "Agni refers to the physiological principle responsible for digestion and transformation.",
    explanation: "Agni is a fundamental concept connecting digestion, metabolism and tissue nourishment.",
    clinicalUse: "Assessment of Agni is central to many Ayurvedic concepts.",
    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-014",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Agni",
    topic: "Agni Types",
    module: "Fundamentals",
    chapter: "Agni",

    front: "What are the four functional states of Jatharagni?",
    back: "Samagni, Vishamagni, Tikshnagni and Mandagni.",
    explanation: "These terms describe different patterns of digestive function in classical Ayurveda.",
    clinicalUse: "Important for understanding Ayurvedic assessment of digestion.",
    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-015",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Ama",
    topic: "Ama",
    module: "Fundamentals",
    chapter: "Agni",

    front: "What is Ama?",
    back: "Ama is a classical Ayurvedic concept associated with incompletely processed or improperly transformed material.",
    explanation: "Ama is discussed in relation to impaired Agni and disease processes.",
    clinicalUse: "Important concept in understanding several Ayurvedic disease models.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-016",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Mala",
    topic: "Three Malas",
    module: "Sharira",
    chapter: "Mala",

    front: "What are the three principal Malas?",
    back: "Purisha, Mutra and Sweda.",
    explanation: "These are commonly described as the three principal excretory products.",
    clinicalUse: "Basic Sharira concept.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-017",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Indriya",
    topic: "Jnanendriya",
    module: "Sharira",
    chapter: "Indriya",

    front: "What are the five Jnanendriyas?",
    back: "Shrotra, Tvak, Chakshu, Rasana and Ghrana.",
    explanation: "These are the five sensory faculties described in classical Ayurvedic thought.",
    clinicalUse: "Important for basic Sharira and Indriya concepts.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-018",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Indriya",
    topic: "Karmendriya",
    module: "Sharira",
    chapter: "Indriya",

    front: "What are the five Karmendriyas?",
    back: "Vak, Pani, Pada, Payu and Upastha.",
    explanation: "These are traditionally described as faculties of action.",
    clinicalUse: "Basic Indriya concept.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-019",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Mahabhuta",
    topic: "Five Mahabhutas",
    module: "Sharira",
    chapter: "Mahabhuta",

    front: "Name the five Mahabhutas.",
    back: "Akasha, Vayu, Agni, Jala and Prithvi.",
    explanation: "The Panchamahabhuta framework is fundamental to classical Ayurvedic theory.",
    clinicalUse: "Used as a conceptual foundation across Ayurveda.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-020",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Rasa",
    topic: "Six Rasas",
    module: "Dravyaguna",
    chapter: "Rasa",

    front: "Name the six Rasas.",
    back: "Madhura, Amla, Lavana, Katu, Tikta and Kashaya.",
    explanation: "The six tastes are a fundamental classification in Dravyaguna.",
    clinicalUse: "Used to understand the properties and actions of substances.",
    source: {
      text: "Charaka Samhita",
      sthana: "Sutrasthana",
      chapter: "Atreyabhadrakapyiya Adhyaya",
      chapterNumber: 26,
      verse: "",
      reference: "Cha. Su. 26",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-021",
    year: "1st Prof",
    subject: "Dravyaguna",
    category: "Rasa",
    topic: "Madhura Rasa",
    module: "Rasa",
    chapter: "Rasa",

    front: "What is Madhura Rasa?",
    back: "Madhura is the sweet taste.",
    explanation: "It is one of the six Rasas described in Ayurveda.",
    clinicalUse: "Important for learning Rasa classification.",
    source: {
      text: "Charaka Samhita",
      sthana: "Sutrasthana",
      chapter: "Atreyabhadrakapyiya Adhyaya",
      chapterNumber: 26,
      verse: "",
      reference: "Cha. Su. 26",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-022",
    year: "1st Prof",
    subject: "Dravyaguna",
    category: "Rasa",
    topic: "Amla Rasa",
    module: "Rasa",
    chapter: "Rasa",

    front: "What is Amla Rasa?",
    back: "Amla is the sour taste.",
    explanation: "Amla is one of the six Rasas.",
    clinicalUse: "Basic Dravyaguna classification.",
    source: {
      text: "Charaka Samhita",
      sthana: "Sutrasthana",
      chapter: "Atreyabhadrakapyiya Adhyaya",
      chapterNumber: 26,
      verse: "",
      reference: "Cha. Su. 26",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-023",
    year: "1st Prof",
    subject: "Dravyaguna",
    category: "Rasa",
    topic: "Lavana Rasa",
    module: "Rasa",
    chapter: "Rasa",

    front: "What is Lavana Rasa?",
    back: "Lavana is the salty taste.",
    explanation: "Lavana is one of the six Rasas.",
    clinicalUse: "Basic Dravyaguna classification.",
    source: {
      text: "Charaka Samhita",
      sthana: "Sutrasthana",
      chapter: "Atreyabhadrakapyiya Adhyaya",
      chapterNumber: 26,
      verse: "",
      reference: "Cha. Su. 26",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-024",
    year: "1st Prof",
    subject: "Dravyaguna",
    category: "Rasa",
    topic: "Katu Rasa",
    module: "Rasa",
    chapter: "Rasa",

    front: "What is Katu Rasa?",
    back: "Katu is the pungent taste.",
    explanation: "Katu is one of the six Rasas.",
    clinicalUse: "Basic Dravyaguna classification.",
    source: {
      text: "Charaka Samhita",
      sthana: "Sutrasthana",
      chapter: "Atreyabhadrakapyiya Adhyaya",
      chapterNumber: 26,
      verse: "",
      reference: "Cha. Su. 26",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-025",
    year: "1st Prof",
    subject: "Dravyaguna",
    category: "Rasa",
    topic: "Tikta Rasa",
    module: "Rasa",
    chapter: "Rasa",

    front: "What is Tikta Rasa?",
    back: "Tikta is the bitter taste.",
    explanation: "Tikta is one of the six Rasas.",
    clinicalUse: "Basic Dravyaguna classification.",
    source: {
      text: "Charaka Samhita",
      sthana: "Sutrasthana",
      chapter: "Atreyabhadrakapyiya Adhyaya",
      chapterNumber: 26,
      verse: "",
      reference: "Cha. Su. 26",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-026",
    year: "1st Prof",
    subject: "Dravyaguna",
    category: "Rasa",
    topic: "Kashaya Rasa",
    module: "Rasa",
    chapter: "Rasa",

    front: "What is Kashaya Rasa?",
    back: "Kashaya is the astringent taste.",
    explanation: "Kashaya is one of the six Rasas.",
    clinicalUse: "Basic Dravyaguna classification.",
    source: {
      text: "Charaka Samhita",
      sthana: "Sutrasthana",
      chapter: "Atreyabhadrakapyiya Adhyaya",
      chapterNumber: 26,
      verse: "",
      reference: "Cha. Su. 26",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-027",
    year: "1st Prof",
    subject: "Dravyaguna",
    category: "Virya",
    topic: "Virya",
    module: "Dravyaguna",
    chapter: "Virya",

    front: "What is Virya?",
    back: "Virya refers to the active potency of a substance responsible for its action.",
    explanation: "Virya is an important component used to understand Dravya action.",
    clinicalUse: "Useful for explaining pharmacodynamic action in Ayurveda.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-028",
    year: "1st Prof",
    subject: "Dravyaguna",
    category: "Vipaka",
    topic: "Vipaka",
    module: "Dravyaguna",
    chapter: "Vipaka",

    front: "What is Vipaka?",
    back: "Vipaka refers to the post-digestive effect of a substance.",
    explanation: "It is one of the factors used to explain the ultimate action of a Dravya after digestion.",
    clinicalUse: "Important Dravyaguna concept.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-029",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Srotas",
    topic: "Srotas",
    module: "Sharira",
    chapter: "Srotas",

    front: "What are Srotas?",
    back: "Srotas are channels or pathways involved in the transport and movement of substances and functions within the body.",
    explanation: "Srotas form an important structural and functional concept in Ayurveda.",
    clinicalUse: "Important for understanding Srotodushti and disease pathways.",
    source: {
      text: "Charaka Samhita",
      sthana: "Vimanasthana",
      chapter: "Srotovimana",
      chapterNumber: 5,
      verse: "",
      reference: "Cha. Vi. 5",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-030",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Srotas",
    topic: "Pranavaha Srotas",
    module: "Sharira",
    chapter: "Srotas",

    front: "What is Pranavaha Srotas?",
    back: "Pranavaha Srotas are the channels associated with the movement and maintenance of Prana.",
    explanation: "They are described among the important Srotas in classical texts.",
    clinicalUse: "Important for understanding respiratory and vital functions in Ayurvedic theory.",
    source: {
      text: "Charaka Samhita",
      sthana: "Vimanasthana",
      chapter: "Srotovimana",
      chapterNumber: 5,
      verse: "",
      reference: "Cha. Vi. 5",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-031",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Srotas",
    topic: "Annavaha Srotas",
    module: "Sharira",
    chapter: "Srotas",

    front: "What is Annavaha Srotas?",
    back: "Annavaha Srotas are the channels associated with the intake and movement of food.",
    explanation: "They are connected with the process of food intake and digestion.",
    clinicalUse: "Important for understanding gastrointestinal concepts in Ayurveda.",
    source: {
      text: "Charaka Samhita",
      sthana: "Vimanasthana",
      chapter: "Srotovimana",
      chapterNumber: 5,
      verse: "",
      reference: "Cha. Vi. 5",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-032",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Ojas",
    topic: "Ojas",
    module: "Sharira",
    chapter: "Ojas",

    front: "What is Ojas?",
    back: "Ojas is described as an essential vital substance associated with strength and vitality.",
    explanation: "Ojas is a central concept in Ayurvedic Sharira.",
    clinicalUse: "Important for understanding Bala and vitality in classical Ayurveda.",
    source: {
      text: "Charaka Samhita",
      sthana: "Sutrasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-033",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Prakriti",
    topic: "Prakriti",
    module: "Sharira",
    chapter: "Prakriti",

    front: "What is Prakriti?",
    back: "Prakriti refers to the individual's inherent constitutional nature.",
    explanation: "Prakriti is understood as the constitution established from the interaction of Doshas and other factors.",
    clinicalUse: "Used as a foundational concept in Ayurvedic constitutional assessment.",
    source: {
      text: "Charaka Samhita",
      sthana: "Vimanasthana",
      chapter: "Rogabhishagjitiya Vimana",
      chapterNumber: 8,
      verse: "",
      reference: "Cha. Vi. 8",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-034",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Health",
    topic: "Swastha",
    module: "Fundamentals",
    chapter: "Health",

    front: "What is the Ayurvedic concept of a healthy person?",
    back: "Health involves balance of Dosha, Agni, Dhatu and Mala along with Prasanna Atma, Indriya and Manas.",
    explanation: "Ayurvedic health is a multidimensional state rather than simply absence of disease.",
    clinicalUse: "Foundational concept for understanding Swastha.",
    source: {
      text: "Sushruta Samhita",
      sthana: "Sutrasthana",
      chapter: "Doshadhatumalaksaya Vriddhi Vijnaniya",
      chapterNumber: 15,
      verse: "",
      reference: "Su. Su. 15",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-035",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Disease",
    topic: "Roga",
    module: "Fundamentals",
    chapter: "Roga",

    front: "What is Roga?",
    back: "Roga refers to a state of disturbance or disease affecting normal function.",
    explanation: "Ayurvedic disease understanding includes Dosha, Dushya, Srotas, Agni and other factors.",
    clinicalUse: "Foundation for disease diagnosis and management.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-036",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Diagnosis",
    topic: "Nidana",
    module: "Roga Nidana",
    chapter: "Diagnosis",

    front: "What does Nidana mean?",
    back: "Nidana refers to the cause, etiological factor or diagnostic consideration depending on context.",
    explanation: "In Ayurvedic disease science, Nidana is closely associated with understanding causative factors.",
    clinicalUse: "Important for understanding disease causation.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-037",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Diagnosis",
    topic: "Purvarupa",
    module: "Roga Nidana",
    chapter: "Diagnosis",

    front: "What is Purvarupa?",
    back: "Purvarupa refers to the premonitory signs and symptoms of a disease.",
    explanation: "Recognition of Purvarupa contributes to early understanding of disease development.",
    clinicalUse: "Useful in Ayurvedic diagnosis.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "Nidanasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-038",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Diagnosis",
    topic: "Rupa",
    module: "Roga Nidana",
    chapter: "Diagnosis",

    front: "What is Rupa?",
    back: "Rupa refers to the manifested signs and symptoms of disease.",
    explanation: "Rupa is one of the important diagnostic components.",
    clinicalUse: "Useful for identifying established disease manifestations.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "Nidanasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-039",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Diagnosis",
    topic: "Upashaya",
    module: "Roga Nidana",
    chapter: "Diagnosis",

    front: "What is Upashaya?",
    back: "Upashaya refers to factors or measures that provide relief and help in diagnosis or management.",
    explanation: "Response to an Upashaya can provide useful diagnostic information.",
    clinicalUse: "Important diagnostic principle.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-040",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Diagnosis",
    topic: "Samprapti",
    module: "Roga Nidana",
    chapter: "Diagnosis",

    front: "What is Samprapti?",
    back: "Samprapti refers to the pathogenesis or development of disease.",
    explanation: "It describes the sequence through which Dosha-Dushya interaction produces disease.",
    clinicalUse: "Central to Ayurvedic disease understanding.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-041",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Diagnosis",
    topic: "Samprapti Ghataka",
    module: "Roga Nidana",
    chapter: "Diagnosis",

    front: "What are Samprapti Ghatakas?",
    back: "They are the important factors involved in the pathogenesis of a disease, such as Dosha, Dushya, Srotas and others.",
    explanation: "They help organize the pathogenesis of disease.",
    clinicalUse: "Useful for structured disease analysis.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-042",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Rogi Pariksha",
    topic: "Dashavidha Pariksha",
    module: "Diagnosis",
    chapter: "Rogi Pariksha",

    front: "What is Dashavidha Rogi Pariksha?",
    back: "It is the tenfold examination of the patient described in Ayurveda.",
    explanation: "It provides a structured framework for assessing the patient.",
    clinicalUse: "Important diagnostic framework.",
    source: {
      text: "Charaka Samhita",
      sthana: "Vimanasthana",
      chapter: "Rogabhishagjitiya Vimana",
      chapterNumber: 8,
      verse: "",
      reference: "Cha. Vi. 8",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-043",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Rogi Pariksha",
    topic: "Pramana",
    module: "Diagnosis",
    chapter: "Rogi Pariksha",

    front: "Why is patient examination important?",
    back: "Patient examination helps determine the nature, strength and appropriate management of a condition.",
    explanation: "Ayurveda emphasizes assessment of both patient and disease.",
    clinicalUse: "Important before selecting treatment.",
    source: {
      text: "Charaka Samhita",
      sthana: "Vimanasthana",
      chapter: "Rogabhishagjitiya Vimana",
      chapterNumber: 8,
      verse: "",
      reference: "Cha. Vi. 8",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-044",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Dinacharya",
    topic: "Dantadhavana",
    module: "Swasthavritta",
    chapter: "Dinacharya",

    front: "What is Dantadhavana?",
    back: "Dantadhavana refers to the classical practice of cleaning the teeth.",
    explanation: "It forms part of the traditional daily regimen.",
    clinicalUse: "Important Dinacharya concept.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Dinacharya Adhyaya",
      chapterNumber: 2,
      verse: "",
      reference: "A.H. Su. 2",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-045",
    year: "1st Prof",
    subject: "Swasthavritta",
    category: "Dinacharya",
    topic: "Jihva Nirlekhana",
    module: "Swasthavritta",
    chapter: "Dinacharya",

    front: "What is Jihva Nirlekhana?",
    back: "Jihva Nirlekhana refers to cleaning or scraping the tongue.",
    explanation: "It is described as part of traditional oral hygiene.",
    clinicalUse: "Basic Dinacharya concept.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Dinacharya Adhyaya",
      chapterNumber: 2,
      verse: "",
      reference: "A.H. Su. 2",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-046",
    year: "1st Prof",
    subject: "Swasthavritta",
    category: "Dinacharya",
    topic: "Abhyanga",
    module: "Swasthavritta",
    chapter: "Dinacharya",

    front: "What is Abhyanga?",
    back: "Abhyanga is the Ayurvedic practice of oil massage.",
    explanation: "It is traditionally included in Dinacharya.",
    clinicalUse: "Important for understanding traditional daily regimen.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Dinacharya Adhyaya",
      chapterNumber: 2,
      verse: "",
      reference: "A.H. Su. 2",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-047",
    year: "1st Prof",
    subject: "Swasthavritta",
    category: "Dinacharya",
    topic: "Vyayama",
    module: "Swasthavritta",
    chapter: "Dinacharya",

    front: "What is Vyayama?",
    back: "Vyayama refers to physical exercise or purposeful bodily activity.",
    explanation: "Exercise is discussed as part of healthy daily living.",
    clinicalUse: "Foundational Swasthavritta concept.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Dinacharya Adhyaya",
      chapterNumber: 2,
      verse: "",
      reference: "A.H. Su. 2",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-048",
    year: "1st Prof",
    subject: "Swasthavritta",
    category: "Dinacharya",
    topic: "Snana",
    module: "Swasthavritta",
    chapter: "Dinacharya",

    front: "What is Snana?",
    back: "Snana refers to bathing as part of the daily regimen.",
    explanation: "Bathing is included among classical daily practices.",
    clinicalUse: "Basic Dinacharya concept.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Dinacharya Adhyaya",
      chapterNumber: 2,
      verse: "",
      reference: "A.H. Su. 2",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-049",
    year: "1st Prof",
    subject: "Swasthavritta",
    category: "Sadvritta",
    topic: "Sadvritta",
    module: "Swasthavritta",
    chapter: "Sadvritta",

    front: "What is Sadvritta?",
    back: "Sadvritta refers to ethical and healthy conduct for maintaining wellbeing.",
    explanation: "It includes behavioral and social principles.",
    clinicalUse: "Important for understanding holistic health in Ayurveda.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-050",
    year: "1st Prof",
    subject: "Swasthavritta",
    category: "Swasthavritta",
    topic: "Ritucharya",
    module: "Swasthavritta",
    chapter: "Ritucharya",

    front: "What is Ritucharya?",
    back: "Ritucharya is the seasonal regimen described for maintaining health through changing seasons.",
    explanation: "Ayurveda emphasizes adapting diet and lifestyle according to seasonal changes.",
    clinicalUse: "Important Swasthavritta topic.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Ritucharya Adhyaya",
      chapterNumber: 3,
      verse: "",
      reference: "A.H. Su. 3",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-051",
    year: "1st Prof",
    subject: "Swasthavritta",
    category: "Ritucharya",
    topic: "Adana Kala",
    module: "Swasthavritta",
    chapter: "Ritucharya",

    front: "What is Adana Kala?",
    back: "Adana Kala is the period traditionally associated with the sun's increasing northward influence and drying effect.",
    explanation: "Seasonal changes are interpreted through the Adana and Visarga divisions.",
    clinicalUse: "Useful for understanding seasonal physiology.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Ritucharya Adhyaya",
      chapterNumber: 3,
      verse: "",
      reference: "A.H. Su. 3",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-052",
    year: "1st Prof",
    subject: "Swasthavritta",
    category: "Ritucharya",
    topic: "Visarga Kala",
    module: "Swasthavritta",
    chapter: "Ritucharya",

    front: "What is Visarga Kala?",
    back: "Visarga Kala is the period associated with the sun's southward movement and nourishing influence.",
    explanation: "It forms the second major seasonal division.",
    clinicalUse: "Important for understanding seasonal changes.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "Ritucharya Adhyaya",
      chapterNumber: 3,
      verse: "",
      reference: "A.H. Su. 3",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-053",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Sharira",
    topic: "Garbhotpatti",
    module: "Sharira",
    chapter: "Embryology",

    front: "What factors are described as important for conception?",
    back: "Classical Ayurveda describes the contribution of reproductive elements and appropriate conditions for conception.",
    explanation: "Ayurvedic embryology discusses conception, development and fetal growth.",
    clinicalUse: "Foundational Sharira concept.",
    source: {
      text: "Charaka Samhita",
      sthana: "Sharirasthana",
      chapter: "Jatisutriya Sharira",
      chapterNumber: 8,
      verse: "",
      reference: "Cha. Sha. 8",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-054",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Sharira",
    topic: "Garbha",
    module: "Sharira",
    chapter: "Embryology",

    front: "What is Garbha?",
    back: "Garbha refers to the developing embryo or fetus in the womb.",
    explanation: "Garbha Sharira deals with conception and fetal development.",
    clinicalUse: "Basic embryology concept in Ayurveda.",
    source: {
      text: "Charaka Samhita",
      sthana: "Sharirasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-055",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Sharira",
    topic: "Marmas",
    module: "Sharira",
    chapter: "Marma",

    front: "What are Marma points?",
    back: "Marma are vital anatomical sites described in classical Ayurvedic anatomy.",
    explanation: "Injury to important Marma sites is traditionally considered significant.",
    clinicalUse: "Important Sharira concept.",
    source: {
      text: "Sushruta Samhita",
      sthana: "Sharirasthana",
      chapter: "Pratyeka Marma Nirdesha Sharira",
      chapterNumber: 6,
      verse: "",
      reference: "Su. Sha. 6",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-056",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Sharira",
    topic: "Asthi",
    module: "Sharira",
    chapter: "Asthi",

    front: "What is Asthi Dhatu?",
    back: "Asthi is the bone tissue described among the seven Dhatus.",
    explanation: "Asthi is one of the seven structural Dhatus.",
    clinicalUse: "Basic Dhatu Sharira concept.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "Sharirasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-057",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Sharira",
    topic: "Majja",
    module: "Sharira",
    chapter: "Dhatu",

    front: "What is Majja Dhatu?",
    back: "Majja is one of the seven Dhatus and follows Asthi in the classical sequence.",
    explanation: "It is included in the Dhatu framework.",
    clinicalUse: "Important for Dhatu Sharira revision.",
    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "Grahani Chikitsa",
      chapterNumber: 15,
      verse: "16",
      reference: "Cha. Chi. 15/16",
      quoteType: "Direct Shloka",
      verification: "verified"
    },
    pyqLinks: []
  },


  {
    id: "fc-058",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Sharira",
    topic: "Shukra",
    module: "Sharira",
    chapter: "Dhatu",

    front: "What is Shukra Dhatu?",
    back: "Shukra is the seventh Dhatu in the commonly taught seven-Dhatu sequence.",
    explanation: "It is the final Dhatu in the classical sequence.",
    clinicalUse: "Important Dhatu Sharira concept.",
    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "Grahani Chikitsa",
      chapterNumber: 15,
      verse: "16",
      reference: "Cha. Chi. 15/16",
      quoteType: "Direct Shloka",
      verification: "verified"
    },
    pyqLinks: []
  },


  {
    id: "fc-059",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Sharira",
    topic: "Meda",
    module: "Sharira",
    chapter: "Dhatu",

    front: "What is Meda Dhatu?",
    back: "Meda is the fourth Dhatu in the classical seven-Dhatu sequence.",
    explanation: "The sequence is Rasa, Rakta, Mamsa, Meda, Asthi, Majja and Shukra.",
    clinicalUse: "Useful for Dhatu sequence revision.",
    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "Grahani Chikitsa",
      chapterNumber: 15,
      verse: "16",
      reference: "Cha. Chi. 15/16",
      quoteType: "Direct Shloka",
      verification: "verified"
    },
    pyqLinks: []
  },


  {
    id: "fc-060",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Sharira",
    topic: "Mamsa",
    module: "Sharira",
    chapter: "Dhatu",

    front: "What is Mamsa Dhatu?",
    back: "Mamsa is the third Dhatu in the classical seven-Dhatu sequence.",
    explanation: "Mamsa follows Rakta and precedes Meda.",
    clinicalUse: "Useful for Dhatu sequence revision.",
    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "Grahani Chikitsa",
      chapterNumber: 15,
      verse: "16",
      reference: "Cha. Chi. 15/16",
      quoteType: "Direct Shloka",
      verification: "verified"
    },
    pyqLinks: []
  },


  {
    id: "fc-061",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Sharira",
    topic: "Rakta",
    module: "Sharira",
    chapter: "Dhatu",

    front: "What is Rakta Dhatu?",
    back: "Rakta is the second Dhatu in the commonly taught seven-Dhatu sequence.",
    explanation: "Rakta follows Rasa and precedes Mamsa.",
    clinicalUse: "Useful for Dhatu sequence revision.",
    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "Grahani Chikitsa",
      chapterNumber: 15,
      verse: "16",
      reference: "Cha. Chi. 15/16",
      quoteType: "Direct Shloka",
      verification: "verified"
    },
    pyqLinks: []
  },


  {
    id: "fc-062",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Sharira",
    topic: "Rasa",
    module: "Sharira",
    chapter: "Dhatu",

    front: "What is Rasa Dhatu?",
    back: "Rasa is the first Dhatu in the commonly taught seven-Dhatu sequence.",
    explanation: "Rasa begins the classical Dhatu sequence.",
    clinicalUse: "Important for understanding Dhatu formation.",
    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "Grahani Chikitsa",
      chapterNumber: 15,
      verse: "16",
      reference: "Cha. Chi. 15/16",
      quoteType: "Direct Shloka",
      verification: "verified"
    },
    pyqLinks: []
  },


  {
    id: "fc-063",
    year: "1st Prof",
    subject: "Samhita Adhyayana-1",
    category: "Panchakarma",
    topic: "Vamana",
    module: "Shodhana",
    chapter: "Panchakarma",

    front: "What is Vamana?",
    back: "Vamana is a classical Shodhana procedure involving therapeutic emesis.",
    explanation: "It is one of the principal Panchakarma procedures in traditions that include it in Panchakarma.",
    clinicalUse: "Important Panchakarma theory.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "Chikitsasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-064",
    year: "4th Prof",
    subject: "Panchakarma",
    category: "Panchakarma",
    topic: "Virechana",
    module: "Shodhana",
    chapter: "Panchakarma",

    front: "What is Virechana?",
    back: "Virechana is a classical Shodhana procedure involving therapeutic purgation.",
    explanation: "It is one of the major Shodhana procedures described in Ayurveda.",
    clinicalUse: "Important Panchakarma theory.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "Chikitsasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-065",
    year: "4th Prof",
    subject: "Panchakarma",
    category: "Panchakarma",
    topic: "Basti",
    module: "Shodhana",
    chapter: "Panchakarma",

    front: "What is Basti?",
    back: "Basti is a classical Ayurvedic therapeutic procedure involving administration through the rectal route.",
    explanation: "Basti occupies an important place in Panchakarma theory.",
    clinicalUse: "Important Panchakarma topic.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "Chikitsasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-066",
    year: "4th Prof",
    subject: "Panchakarma",
    category: "Panchakarma",
    topic: "Nasya",
    module: "Shodhana",
    chapter: "Panchakarma",

    front: "What is Nasya?",
    back: "Nasya is an Ayurvedic procedure involving administration of medicine through the nasal route.",
    explanation: "Nasya is traditionally associated particularly with disorders and functions of the region above the clavicle.",
    clinicalUse: "Important Panchakarma theory.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "Sutrasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-067",
    year: "4th Prof",
    subject: "Panchakarma",
    category: "Panchakarma",
    topic: "Raktamokshana",
    module: "Shodhana",
    chapter: "Panchakarma",

    front: "What is Raktamokshana?",
    back: "Raktamokshana refers to classical bloodletting procedures described in Ayurveda.",
    explanation: "It is included in some traditional classifications of Panchakarma.",
    clinicalUse: "Important historical and classical Panchakarma concept.",
    source: {
      text: "Sushruta Samhita",
      sthana: "Sutrasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-068",
    year: "4th Prof",
    subject: "Panchakarma",
    category: "Purvakarma",
    topic: "Snehapana",
    module: "Purvakarma",
    chapter: "Snehana",

    front: "What is Snehapana?",
    back: "Snehapana refers to internal administration of Sneha in appropriate therapeutic contexts.",
    explanation: "It may form part of preparation for selected Shodhana procedures.",
    clinicalUse: "Important Panchakarma theory.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "Sutrasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-069",
    year: "4th Prof",
    subject: "Panchakarma",
    category: "Purvakarma",
    topic: "Swedana",
    module: "Purvakarma",
    chapter: "Swedana",

    front: "What is Swedana?",
    back: "Swedana refers to therapeutic sudation or fomentation procedures.",
    explanation: "Swedana is commonly described as a preparatory procedure in selected Panchakarma contexts.",
    clinicalUse: "Important Panchakarma theory.",
    source: {
      text: "Ashtanga Hridaya",
      sthana: "Sutrasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-070",
    year: "4th Prof",
    subject: "Panchakarma",
    category: "Panchakarma",
    topic: "Samsarjana Krama",
    module: "Paschat Karma",
    chapter: "Samsarjana Krama",

    front: "What is Samsarjana Krama?",
    back: "Samsarjana Krama is a graded dietary regimen traditionally used after certain Shodhana procedures.",
    explanation: "The diet is progressively advanced according to digestive capacity and the procedure performed.",
    clinicalUse: "Important post-Shodhana concept.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-071",
    year: "2nd Prof",
    subject: "Rasashastra",
    category: "Bhasma",
    topic: "Bhasma",
    module: "Bhasma Pariksha",
    chapter: "Bhasma",

    front: "What is Bhasma?",
    back: "Bhasma refers to a specially processed Ayurvedic preparation of metals, minerals or other substances.",
    explanation: "Bhasma preparation involves classical pharmaceutical processing procedures.",
    clinicalUse: "Foundational Rasashastra concept.",
    source: {
      text: "Classical Rasashastra texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-072",
    year: "2nd Prof",
    subject: "Rasashastra",
    category: "Bhasma Pariksha",
    topic: "Rekhapurnatva",
    module: "Bhasma Pariksha",
    chapter: "Bhasma",

    front: "What is Rekhapurnatva?",
    back: "Rekhapurnatva is the classical test in which fine Bhasma enters and fills the lines of the fingers.",
    explanation: "It is one of the traditional Bhasma Pariksha characteristics.",
    clinicalUse: "Important Rasashastra examination point.",
    source: {
      text: "Classical Rasashastra texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Test",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-073",
    year: "2nd Prof",
    subject: "Rasashastra",
    category: "Bhasma Pariksha",
    topic: "Nishchandratva",
    module: "Bhasma Pariksha",
    chapter: "Bhasma",

    front: "What is Nishchandratva?",
    back: "Nishchandratva means absence of metallic lustre in properly prepared Bhasma.",
    explanation: "It is a traditional Bhasma examination criterion.",
    clinicalUse: "Important for Rasashastra revision.",
    source: {
      text: "Classical Rasashastra texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Test",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-074",
    year: "2nd Prof",
    subject: "Rasashastra",
    category: "Bhasma Pariksha",
    topic: "Unama",
    module: "Bhasma Pariksha",
    chapter: "Bhasma",

    front: "What is Unama Pariksha?",
    back: "Unama is a classical examination related to the behaviour of properly prepared Bhasma on water.",
    explanation: "It is discussed among classical Bhasma examination procedures.",
    clinicalUse: "Rasashastra revision.",
    source: {
      text: "Classical Rasashastra texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Test",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-075",
    year: "2nd Prof",
    subject: "Rasashastra",
    category: "Pariksha",
    topic: "Apunarbhava",
    module: "Bhasma Pariksha",
    chapter: "Bhasma",

    front: "What is Apunarbhava?",
    back: "Apunarbhava is a classical test intended to determine whether a processed metal can regain its original metallic state under specified conditions.",
    explanation: "It is one of the traditional tests of Bhasma quality.",
    clinicalUse: "Important Rasashastra examination topic.",
    source: {
      text: "Classical Rasashastra texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Test",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-076",
    year: "2nd Prof",
    subject: "Rasashastra",
    category: "Pariksha",
    topic: "Niruttha",
    module: "Bhasma Pariksha",
    chapter: "Bhasma",

    front: "What is Niruttha Pariksha?",
    back: "Niruttha is a classical test used to assess whether processed metal can revert toward metallic form under specified conditions.",
    explanation: "It is included among classical examination methods.",
    clinicalUse: "Useful for Rasashastra revision.",
    source: {
      text: "Classical Rasashastra texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Test",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-077",
    year: "2nd Prof",
    subject: "Rasashastra",
    category: "Yantra",
    topic: "Yantra",
    module: "Pharmaceutical Processing",
    chapter: "Yantra",

    front: "What is a Yantra in Rasashastra?",
    back: "Yantra refers to an apparatus or device used for specific pharmaceutical processing procedures.",
    explanation: "Different Yantras are described for different pharmaceutical operations.",
    clinicalUse: "Foundational Rasashastra topic.",
    source: {
      text: "Classical Rasashastra texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-078",
    year: "2nd Prof",
    subject: "Rasashastra",
    category: "Puta",
    topic: "Puta",
    module: "Pharmaceutical Processing",
    chapter: "Puta",

    front: "What is Puta?",
    back: "Puta refers to a controlled heating arrangement used in classical pharmaceutical processing.",
    explanation: "Different Puta systems provide different heating conditions.",
    clinicalUse: "Important Rasashastra pharmaceutical concept.",
    source: {
      text: "Classical Rasashastra texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-079",
    year: "2nd Prof",
    subject: "Rasashastra",
    category: "Shodhana",
    topic: "Shodhana",
    module: "Pharmaceutical Processing",
    chapter: "Shodhana",

    front: "What is Shodhana in Rasashastra?",
    back: "Shodhana refers to classical purification or processing procedures applied to substances before further pharmaceutical use.",
    explanation: "It is distinct from Panchakarma Shodhana and refers here to pharmaceutical processing.",
    clinicalUse: "Important terminology distinction.",
    source: {
      text: "Classical Rasashastra texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-080",
    year: "2nd Prof",
    subject: "Rasashastra",
    category: "Marana",
    topic: "Marana",
    module: "Pharmaceutical Processing",
    chapter: "Marana",

    front: "What is Marana?",
    back: "Marana is a classical pharmaceutical process used to transform a processed substance into Bhasma.",
    explanation: "It involves repeated processing and heating according to classical methods.",
    clinicalUse: "Core Rasashastra terminology.",
    source: {
      text: "Classical Rasashastra texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-081",
    year: "3rd Prof",
    subject: "Dravyaguna",
    category: "Dravya",
    topic: "Guduchi",
    module: "Medicinal Plants",
    chapter: "Guduchi",

    front: "What are common Sanskrit synonyms of Guduchi?",
    back: "Guduchi has several classical synonyms, including Amrita and Chinnodbhava.",
    explanation: "Synonyms are important for identifying medicinal plants in classical literature.",
    clinicalUse: "Useful for Dravyaguna identification.",
    source: {
      text: "Classical Nighantu literature",
      sthana: "",
      chapter: "Guduchyadi Varga",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-082",
    year: "3rd Prof",
    subject: "Dravyaguna",
    category: "Dravya",
    topic: "Ashwagandha",
    module: "Medicinal Plants",
    chapter: "Ashwagandha",

    front: "Why is Ashwagandha important in Dravyaguna?",
    back: "Ashwagandha is a well-known medicinal plant described in Ayurvedic materia medica and associated with Rasayana use.",
    explanation: "It is a commonly studied drug in Dravyaguna.",
    clinicalUse: "Useful for identification and pharmacological revision.",
    source: {
      text: "Classical Nighantu literature",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Botanical Reference",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-083",
    year: "3rd Prof",
    subject: "Dravyaguna",
    category: "Dravya",
    topic: "Haritaki",
    module: "Medicinal Plants",
    chapter: "Haritaki",

    front: "What is Haritaki?",
    back: "Haritaki is an important Ayurvedic medicinal fruit commonly identified as Terminalia chebula.",
    explanation: "It is a major drug discussed in Ayurvedic materia medica.",
    clinicalUse: "Important Dravyaguna identification.",
    source: {
      text: "Classical Nighantu literature",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Botanical Reference",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-084",
    year: "3rd Prof",
    subject: "Dravyaguna",
    category: "Dravya",
    topic: "Amalaki",
    module: "Medicinal Plants",
    chapter: "Amalaki",

    front: "What is Amalaki?",
    back: "Amalaki is an important Ayurvedic medicinal fruit commonly identified as Phyllanthus emblica.",
    explanation: "Amalaki is extensively discussed in Ayurvedic materia medica.",
    clinicalUse: "Important Dravyaguna identification.",
    source: {
      text: "Classical Nighantu literature",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Botanical Reference",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-085",
    year: "3rd Prof",
    subject: "Dravyaguna",
    category: "Dravya",
    topic: "Bibhitaki",
    module: "Medicinal Plants",
    chapter: "Bibhitaki",

    front: "What is Bibhitaki?",
    back: "Bibhitaki is an important Ayurvedic medicinal fruit commonly identified as Terminalia bellirica.",
    explanation: "It is one of the three fruits of Triphala.",
    clinicalUse: "Important Dravyaguna identification.",
    source: {
      text: "Classical Nighantu literature",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Botanical Reference",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-086",
    year: "3rd Prof",
    subject: "Dravyaguna",
    category: "Yoga",
    topic: "Triphala",
    module: "Medicinal Plants",
    chapter: "Triphala",

    front: "What are the three ingredients of Triphala?",
    back: "Haritaki, Bibhitaki and Amalaki.",
    explanation: "Triphala is a classical combination of three fruits.",
    clinicalUse: "Important Dravyaguna and Bhaishajya Kalpana revision.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-087",
    year: "3rd Prof",
    subject: "Dravyaguna",
    category: "Dravya",
    topic: "Neem",
    module: "Medicinal Plants",
    chapter: "Nimba",

    front: "What is Nimba?",
    back: "Nimba is commonly identified botanically as Azadirachta indica.",
    explanation: "Nimba is an important medicinal plant in Ayurveda.",
    clinicalUse: "Useful for Dravyaguna identification.",
    source: {
      text: "Classical Nighantu literature",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Botanical Reference",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-088",
    year: "3rd Prof",
    subject: "Dravyaguna",
    category: "Dravya",
    topic: "Tulasi",
    module: "Medicinal Plants",
    chapter: "Tulasi",

    front: "What is Tulasi?",
    back: "Tulasi is commonly identified botanically as Ocimum tenuiflorum.",
    explanation: "Tulasi is a well-known Ayurvedic medicinal plant.",
    clinicalUse: "Useful for Dravyaguna identification.",
    source: {
      text: "Classical Nighantu literature",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Botanical Reference",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-089",
    year: "3rd Prof",
    subject: "Dravyaguna",
    category: "Dravya",
    topic: "Shatavari",
    module: "Medicinal Plants",
    chapter: "Shatavari",

    front: "What is Shatavari?",
    back: "Shatavari is commonly identified botanically as Asparagus racemosus.",
    explanation: "Shatavari is an important Ayurvedic medicinal plant.",
    clinicalUse: "Useful for Dravyaguna identification.",
    source: {
      text: "Classical Nighantu literature",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Botanical Reference",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-090",
    year: "3rd Prof",
    subject: "Dravyaguna",
    category: "Dravya",
    topic: "Yashtimadhu",
    module: "Medicinal Plants",
    chapter: "Yashtimadhu",

    front: "What is Yashtimadhu?",
    back: "Yashtimadhu is commonly identified botanically as Glycyrrhiza glabra.",
    explanation: "It is an important medicinal drug in Ayurvedic materia medica.",
    clinicalUse: "Useful for Dravyaguna identification.",
    source: {
      text: "Classical Nighantu literature",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Botanical Reference",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-091",
    year: "3rd Prof",
    subject: "Bhaishajya Kalpana",
    category: "Kalpana",
    topic: "Swarasa",
    module: "Primary Preparations",
    chapter: "Panchavidha Kashaya Kalpana",

    front: "What is Swarasa?",
    back: "Swarasa is the fresh expressed juice of a drug.",
    explanation: "It is traditionally described among the primary dosage forms.",
    clinicalUse: "Important Bhaishajya Kalpana concept.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-092",
    year: "3rd Prof",
    subject: "Bhaishajya Kalpana",
    category: "Kalpana",
    topic: "Kalka",
    module: "Primary Preparations",
    chapter: "Panchavidha Kashaya Kalpana",

    front: "What is Kalka?",
    back: "Kalka is a paste prepared by triturating or grinding a medicinal substance.",
    explanation: "It is one of the classical primary pharmaceutical preparations.",
    clinicalUse: "Important Bhaishajya Kalpana revision.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-093",
    year: "3rd Prof",
    subject: "Bhaishajya Kalpana",
    category: "Kalpana",
    topic: "Kwatha",
    module: "Primary Preparations",
    chapter: "Panchavidha Kashaya Kalpana",

    front: "What is Kwatha?",
    back: "Kwatha is a decoction prepared by boiling medicinal substances in water according to classical procedures.",
    explanation: "It is one of the commonly taught Panchavidha Kashaya Kalpana.",
    clinicalUse: "Important pharmaceutical preparation.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-094",
    year: "3rd Prof",
    subject: "Bhaishajya Kalpana",
    category: "Kalpana",
    topic: "Hima",
    module: "Primary Preparations",
    chapter: "Panchavidha Kashaya Kalpana",

    front: "What is Hima Kalpana?",
    back: "Hima is a cold infusion prepared by soaking the drug in water.",
    explanation: "It is one of the classical Kashaya preparations.",
    clinicalUse: "Important Bhaishajya Kalpana concept.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-095",
    year: "3rd Prof",
    subject: "Bhaishajya Kalpana",
    category: "Kalpana",
    topic: "Phanta",
    module: "Primary Preparations",
    chapter: "Panchavidha Kashaya Kalpana",

    front: "What is Phanta Kalpana?",
    back: "Phanta is an infusion prepared by pouring hot water over the medicinal substance and allowing it to infuse.",
    explanation: "It is one of the classical Kashaya preparations.",
    clinicalUse: "Important Bhaishajya Kalpana concept.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-096",
    year: "4th Prof",
    subject: "Kayachikitsa",
    category: "Jwara",
    topic: "Jwara",
    module: "Kayachikitsa",
    chapter: "Jwara",

    front: "Why is Jwara considered an important disease in Ayurveda?",
    back: "Jwara is given extensive treatment in classical Ayurvedic texts and is associated with systemic disturbance.",
    explanation: "Jwara has a prominent place in Kayachikitsa literature.",
    clinicalUse: "Important introductory Kayachikitsa concept.",
    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "Jwara Chikitsa",
      chapterNumber: 3,
      verse: "",
      reference: "Cha. Chi. 3",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-097",
    year: "4th Prof",
    subject: "Kayachikitsa",
    category: "Prameha",
    topic: "Prameha",
    module: "Kayachikitsa",
    chapter: "Prameha",

    front: "What is Prameha?",
    back: "Prameha is a group of disorders characterized in classical Ayurveda by abnormalities particularly involving urinary function.",
    explanation: "Prameha is extensively described in Ayurvedic Samhitas.",
    clinicalUse: "Important Kayachikitsa disease concept.",
    source: {
      text: "Classical Ayurvedic texts",
      sthana: "Nidanasthana",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-098",
    year: "4th Prof",
    subject: "Kayachikitsa",
    category: "Amlapitta",
    topic: "Amlapitta",
    module: "Kayachikitsa",
    chapter: "Amlapitta",

    front: "What is Amlapitta?",
    back: "Amlapitta is a classical Ayurvedic disease concept associated with sourness and derangement of digestive function.",
    explanation: "It is discussed in later Ayurvedic literature.",
    clinicalUse: "Important Kayachikitsa revision topic.",
    source: {
      text: "Classical Ayurvedic literature",
      sthana: "",
      chapter: "",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-099",
    year: "4th Prof",
    subject: "Kayachikitsa",
    category: "Amavata",
    topic: "Amavata",
    module: "Kayachikitsa",
    chapter: "Amavata",

    front: "What is Amavata?",
    back: "Amavata is a classical Ayurvedic disease concept associated with Ama and Vata involvement.",
    explanation: "It is prominently discussed in later Ayurvedic texts.",
    clinicalUse: "Important Kayachikitsa revision topic.",
    source: {
      text: "Madhava Nidana",
      sthana: "",
      chapter: "Amavata",
      chapterNumber: "",
      verse: "",
      reference: "",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },


  {
    id: "fc-100",
    year: "4th Prof",
    subject: "Kayachikitsa",
    category: "Rasayana",
    topic: "Rasayana",
    module: "Kayachikitsa",
    chapter: "Rasayana",

    front: "What is Rasayana?",
    back: "Rasayana is the Ayurvedic discipline concerned with promoting longevity, vitality and preservation of health.",
    explanation: "Rasayana is an important branch and therapeutic concept in Ayurveda.",
    clinicalUse: "Foundational Kayachikitsa concept.",
    source: {
      text: "Charaka Samhita",
      sthana: "Chikitsasthana",
      chapter: "Rasayana Adhyaya",
      chapterNumber: 1,
      verse: "",
      reference: "Cha. Chi. 1",
      quoteType: "Classical Concept",
      verification: "needs-verification"
    },
    pyqLinks: []
  },

  {
  "id": "fc-ks-001",
  "year": "1st Prof",
  "subject": "Kriya Sharira",
  "category": "Must-Know Shloka",
  "topic": "Dosha Dhatu Mala Root",
  "module": "Dosha Vijnana",
  "chapter": "Tridosha Siddhanta",
  "samhita": "Sushruta Samhita",
  "sthana": "Sutrasthana",
  "front": "What constitutes the root of the human body according to Sushruta?",
  "frontHint": "Sushruta Sutrasthana 15/3",
  "shloka": "दोषधातुमलमूलं हि शरीरम्। तस्मादेतेषां लक्षणमुच्यमानमुपधारयेत्॥",
  "transliteration": "doṣadhātumalamūlaṃ hi śarīram | tasmād eteṣāṃ lakṣaṇam ucyamānam upadhārayet ||",
  "translation": "The human body is fundamentally rooted in three entities: Doshas (regulatory humors), Dhatus (structural tissues), and Malas (metabolic waste products).",
  "source": {
    "text": "Sushruta Samhita",
    "sthana": "Sutrasthana",
    "chapter": "Dosha Dhatu Mala Kshaya Vriddhi",
    "chapterNumber": 15,
    "verse": "3",
    "reference": "Su. Su. 15/3",
    "quoteType": "Canonical Root",
    "verification": "verified"
  }
},

  {
  "id": "fc-ks-002",
  "year": "1st Prof",
  "subject": "Kriya Sharira",
  "category": "Must-Know Shloka",
  "topic": "Vata Gunas",
  "module": "Dosha Vijnana",
  "chapter": "Vata Dosha",
  "samhita": "Ashtanga Hridaya",
  "sthana": "Sutrasthana",
  "front": "What are the cardinal physical qualities (Gunas) of Vata Dosha?",
  "frontHint": "Ashtanga Hridaya Sutrasthana 1/10",
  "shloka": "तत्र रूक्षो लघुः शीतः खरः सूक्ष्मश्चलोऽनिलः।",
  "transliteration": "tatra rūkṣo laghuḥ śītaḥ kharaḥ sūkṣmaś calo 'nilaḥ |",
  "translation": "Vata is inherently dry (Ruksha), light (Laghu), cold (Sheeta), rough (Khara), minute/subtle (Sukshma), and mobile (Chala).",
  "source": {
    "text": "Ashtanga Hridaya",
    "sthana": "Sutrasthana",
    "chapter": "Ayushkamiya",
    "chapterNumber": 1,
    "verse": "10",
    "reference": "A. Hri. Su. 1/10",
    "quoteType": "Physical Qualities",
    "verification": "verified"
  }
},

  {
  "id": "fc-rs-001",
  "year": "1st Prof",
  "subject": "Rachana Sharira",
  "category": "Must-Know Shloka",
  "topic": "Definition of Marma",
  "module": "Marma Sharira",
  "chapter": "107 Marma Points",
  "samhita": "Sushruta Samhita",
  "sthana": "Sharirasthana",
  "front": "What is the structural definition of Marma according to Sushruta?",
  "frontHint": "Sushruta Sharirasthana 6/3",
  "shloka": "मर्माणि नाम मांससिरास्नाय्वस्थिसन्धिसन्निपाताः, तेषु स्वभावत एव विशेषात् प्राणास्तिष्ठन्ति।",
  "transliteration": "marmāṇi nāma māṃsasirāsnāyvasthisandhisannipātāḥ, teṣu svabhāvata eva viśeṣāt prāṇās tiṣṭhanti |",
  "translation": "Marmas are anatomical confluences of muscle (Mamsa), vessels (Sira), ligaments/tendons (Snayu), bone (Asthi), and joints (Sandhi), wherein the vital life energy (Prana) naturally and specifically resides.",
  "source": {
    "text": "Sushruta Samhita",
    "sthana": "Sharirasthana",
    "chapter": "Pratyeka Marma Nirdesha",
    "chapterNumber": 6,
    "verse": "3",
    "reference": "Su. Sha. 6/3",
    "quoteType": "Anatomical Definition",
    "verification": "verified"
  }
},

  {
  "id": "fc-at-001",
  "year": "3rd Prof",
  "subject": "Agada Tantra",
  "category": "Must-Know Shloka",
  "topic": "24 Visha Upakramas",
  "module": "Toxicology & Forensics",
  "chapter": "Snakebite & 24 Upakramas",
  "samhita": "Charaka Samhita",
  "sthana": "Chikitsasthana",
  "front": "How many management protocols (Upakramas) does Charaka prescribe for poisons?",
  "frontHint": "Charaka Chikitsasthana 23/35",
  "shloka": "दंष्ट्राविषं स्थावरं च यत्किञ्चिद्विषसंज्ञकम्। चतुर्विंशत्युपक्रमैः साधयेदाशु बुद्धिमान्॥",
  "transliteration": "daṃṣṭrāviṣaṃ sthāvaraṃ ca yat kiñcid viṣasaṃjñakam | caturviṃśatyupakramaiḥ sādhayed āśu buddhimān ||",
  "translation": "Whether envenomation is from animal bites (Damshtra/Jangama) or plant/mineral poisons (Sthavara), the wise physician must promptly treat it using the twenty-four classical emergency measures (24 Upakramas).",
  "source": {
    "text": "Charaka Samhita",
    "sthana": "Chikitsasthana",
    "chapter": "Visha Chikitsa",
    "chapterNumber": 23,
    "verse": "35",
    "reference": "Cha. Chi. 23/35",
    "quoteType": "Emergency Protocol",
    "verification": "verified"
  }
},

  {
  "id": "fc-pt-001",
  "year": "3rd Prof",
  "subject": "Prasuti Tantra & Stri Roga",
  "category": "Must-Know Shloka",
  "topic": "Garbha Sambhava Samagri",
  "module": "Obstetrics & Embryology",
  "chapter": "Garbhini Paricharya & Labor",
  "samhita": "Sushruta Samhita",
  "sthana": "Sharirasthana",
  "front": "What are the four essential factors for conception according to Sushruta?",
  "frontHint": "Sushruta Sharirasthana 2/33",
  "shloka": "ध्रुवं चतुर्णां सान्निध्याद्गर्भः स्याद्विधिपूर्वकम्। ऋतुक्षेत्राम्बुबीजानां सामग्र्यादङ्कुरो यथा॥",
  "transliteration": "dhruvaṃ caturṇāṃ sānnidhyād garbhaḥ syād vidhipūrvakam | ṛtukṣetrāmbubījānāṃ sāmagryād aṅkuro yathā ||",
  "translation": "Just as a healthy sprout emerges from the proper union of season (Ritu), fertile soil (Kshetra), water (Ambu), and intact seed (Beeja), conception unfailingly occurs when optimal fertile period (Ritu), healthy uterus/reproductive tract (Kshetra), maternal plasma nutrition (Ambu), and healthy sperm and ovum (Beeja) come together.",
  "source": {
    "text": "Sushruta Samhita",
    "sthana": "Sharirasthana",
    "chapter": "Shukra Shonita Shuddhi",
    "chapterNumber": 2,
    "verse": "33",
    "reference": "Su. Sha. 2/33",
    "quoteType": "Conception Quad",
    "verification": "verified"
  }
},

  {
  "id": "fc-st-001",
  "year": "4th Prof",
  "subject": "Shalya Tantra",
  "category": "Must-Know Shloka",
  "topic": "Supremacy of Kshara",
  "module": "Surgical Principles",
  "chapter": "Ksharasutra in Bhagandara",
  "samhita": "Sushruta Samhita",
  "sthana": "Sutrasthana",
  "front": "Why is Kshara considered superior among all surgical instruments by Sushruta?",
  "frontHint": "Sushruta Sutrasthana 11/3",
  "shloka": "शस्त्रानुशस्त्रेभ्यः क्षारः प्रधानतमः, छेद्यभेद्यलेख्यकरणात् त्रदोषघ्नत्वाद् विशेषकरणाच्च।",
  "transliteration": "śastrānuśastrebhyaḥ kṣāraḥ pradhānatamaḥ, chedyabhedyalekhyakaraṇāt tridoṣaghnatvād viśeṣakaraṇāc ca |",
  "translation": "Kshara (alkali) is the foremost among all sharp instruments (Shastras) and accessory instruments (Anushastras), because it performs excision (Chhedana), incision (Bhedana), and scraping/curettage (Lekhana) simultaneously, pacifies all three Doshas, and can be applied in areas inaccessible to surgical blades.",
  "source": {
    "text": "Sushruta Samhita",
    "sthana": "Sutrasthana",
    "chapter": "Kshara Paka Vidhi",
    "chapterNumber": 11,
    "verse": "3",
    "reference": "Su. Su. 11/3",
    "quoteType": "Surgical Doctrine",
    "verification": "verified"
  }
},

  {
  "id": "fc-sh-001",
  "year": "4th Prof",
  "subject": "Shalakya Tantra",
  "category": "Must-Know Shloka",
  "topic": "Netra Abhishyanda Root",
  "module": "Ophthalmology (Netra)",
  "chapter": "Netra Kriya Kalpa & Eye Diseases",
  "samhita": "Sushruta Samhita",
  "sthana": "Uttaratantra",
  "front": "What disease is considered the root cause of almost all ocular disorders?",
  "frontHint": "Sushruta Uttaratantra 6/4",
  "shloka": "सर्वेषामेव नेत्राणां रोगाणां प्रभवोऽभिष्यन्दः, तस्मात्तं यत्नतः प्रतिकुर्वीत।",
  "transliteration": "sarveṣām eva netrāṇāṃ rogāṇāṃ prabhavo 'bhiṣyandaḥ, tasmāt taṃ yatnataḥ pratikurvīta |",
  "translation": "Abhishyanda (acute inflammatory conjunctival outflow/congestion) is the initial source and root trigger of virtually all diseases of the eye. Therefore, it must be treated diligently and without delay.",
  "source": {
    "text": "Sushruta Samhita",
    "sthana": "Uttaratantra",
    "chapter": "Abhishyanda Pratishedha",
    "chapterNumber": 6,
    "verse": "4",
    "reference": "Su. Ut. 6/4",
    "quoteType": "Ophthalmic Root",
    "verification": "verified"
  }
}
];


// ============================================================
// LOAD CHECK
// ============================================================

console.log(
  "Flashcards 2.0 Loaded:",
  window.BAMS_FLASHCARDS.length,
  "cards"
);

console.log(
  "Verified scholarly references:",
  window.BAMS_FLASHCARDS.filter(
    card => card.source && card.source.verification === "verified"
  ).length
);

console.log(
  "References needing verification:",
  window.BAMS_FLASHCARDS.filter(
    card => card.source && card.source.verification === "needs-verification"
  ).length
);