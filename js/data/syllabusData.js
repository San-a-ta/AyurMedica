/**
 * AYUSH & NCISM Aligned BAMS Curriculum Data
 * Covers 1st, 2nd, 3rd, and 4th (Final) Professional Academic Years
 * Fully enriched with NCISM Prescribed Reference Books (Classical, Modern Ayurvedic, & Contemporary Science)
 */
window.BAMS_SYLLABUS = [
  {
    year: "1st Prof",
    yearTitle: "First Professional BAMS (Foundation & Pre-Clinical)",
    description: "Foundations of Ayurvedic Philosophy, Human Anatomy, Physiology, Classical Sanskrit, and Ancient Samhita literature.",
    subjects: [
      {
        id: "kriya-sharir",
        name: "Kriya Sharira",
        translation: "Ayurvedic & Modern Human Physiology",
        code: "AyUG-KS",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Dosha Vijnana (Vata, Pitta, Kapha functions & subtypes), Dhatu Vijnana (Rasa to Shukra), Upadhatu, Mala Vijnana, Prakriti Pariksha." },
          { paper: "Paper II", marks: 100, topics: "Modern Physiology: Biophysics, Hematology, Cardiovascular System, Respiration, Digestion & Metabolism, Endocrine & Nervous Systems." }
        ],
        theoryMarks: 200,
        practicalMarks: 100,
        totalMarks: 300,
        referenceBooks: {
          classical: [
            { title: "Charaka Samhita (Sutra & Sharirasthana)", author: "Agnivesha / Charaka", commentary: "Ayurveda Dipika by Chakrapanidatta", publisher: "Chaukhambha Sanskrit Sansthan",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            },
            { title: "Ashtanga Hridaya (Sharirasthana)", author: "Vagbhata", commentary: "Sarvangasundara by Arunadatta & Ayurvedarasayana by Hemadri", publisher: "Chaukhambha Orientalia",
              link: "https://archive.org/details/ashtanga-hridaya-of-vagbhata-with-sarvangasundari-commentary-of-arunadatta-and-ayurvedarasayana-of-hemadri-dr-anna-moreswara-kunte"
            },
            { title: "Sharangadhara Samhita (Purva Khanda)", author: "Sharangadhara", commentary: "Dipika Commentary by Adhamalla", publisher: "Chaukhambha Surbharati",
              link: "https://archive.org/details/sarngadhara-samhita-with-dipika-commentary"
            }
          ],
          modernAyurvedic: [
            { title: "Sharir Kriya Vijnan (Vols 1 & 2)", author: "Dr. Subhash Ranade", publisher: "Chaukhambha Sanskrit Series", focus: "Comprehensive correlation of Tridosha, Dhatu, and Mala with modern biophysics",
              link: "https://archive.org/search?query=Sharir+Kriya+Vijnan+Ranade"
            },
            { title: "Ayurvediya Kriya Sharir", author: "Acharya Priyavrat Sharma", publisher: "Chaukhambha Bharati Academy", focus: "Foundational Ayurvedic physiological doctrines & Prakriti evaluation",
              link: "https://archive.org/search?query=Ayurvediya+Kriya+Sharir+Sharma"
            },
            { title: "Concept of Agni in Ayurveda", author: "Prof. C. Dwarkanath", publisher: "Chowkhamba Sanskrit Series Office", focus: "Digestive fire, tissue enzymes, and intermediate metabolism",
              link: "https://archive.org/details/concept-of-agni-in-ayurveda-prof-c-dwarkanath"
            }
          ],
          contemporaryMedical: [
            { title: "Guyton and Hall Textbook of Medical Physiology", author: "John E. Hall & Michael E. Hall", edition: "14th Edition", publisher: "Elsevier", focus: "Gold-standard reference for cardiovascular, respiratory, renal, and neurophysiology",
              link: "https://www.google.com/search?tbm=bks&q=Guyton+and+Hall+Textbook+of+Medical+Physiology"
            },
            { title: "Essentials of Medical Physiology", author: "K. Sembulingam & Prema Sembulingam", edition: "8th Edition", publisher: "Jaypee Brothers", focus: "Student-friendly modern physiology with clear diagrams & summaries",
              link: "https://www.google.com/search?tbm=bks&q=Essentials+of+Medical+Physiology+Sembulingam"
            },
            { title: "Ganong's Review of Medical Physiology", author: "Kim E. Barrett et al.", edition: "26th Edition", publisher: "McGraw Hill", focus: "Cellular neurophysiology and endocrine regulation",
              link: "https://www.google.com/search?tbm=bks&q=Ganong%27s+Review+of+Medical+Physiology"
            }
          ]
        },
        competencies: ["Determine individual Sharirika & Manasika Prakriti", "Perform Dhatu Sara Pariksha & Agni Pariksha", "Examine Nadi (radial pulse) and vital signs", "Carry out routine hematological investigations"]
      },
      {
        id: "rachana-sharir",
        name: "Rachana Sharira",
        translation: "Ayurvedic & Modern Human Anatomy",
        code: "AyUG-RS",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Garbha Sharira (Embryology), Pramana Sharira (Anthropometry), Asthi (Osteology), Sandhi (Arthrology), Snayu & Peshi (Myology)." },
          { paper: "Paper II", marks: 100, topics: "Srotas Sharira, 107 Marma Sharira, Kostha & Kosthanga (Viscera/Organology), Neuroanatomy, Surface & Radiological Anatomy." }
        ],
        theoryMarks: 200,
        practicalMarks: 100,
        totalMarks: 300,
        referenceBooks: {
          classical: [
            { title: "Sushruta Samhita (Sharirasthana)", author: "Acharya Sushruta", commentary: "Nibandhasamgraha by Dalhanacharya & Nyayachandrika by Gayadasa", publisher: "Chaukhambha Sanskrit Sansthan",
              link: "https://archive.org/details/sushruta-samhita-with-nibandhasamgraha-of-dalhana"
            },
            { title: "Charaka Samhita (Sharirasthana)", author: "Agnivesha / Charaka", commentary: "Chakrapanidatta", publisher: "Chaukhambha Prakashan",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            }
          ],
          modernAyurvedic: [
            { title: "Sushruta Shariram with Ghanekar Tika", author: "Dr. Bhaskar Govind Ghanekar", publisher: "Meharchand Lachhmandas", focus: "Indispensable anatomical dissection commentary linking Sushruta with modern dissection landmarks",
              link: "https://archive.org/details/sushruta-samhita-sharirsthana-dr-bhaskar-govind-ghanekar"
            },
            { title: "Abhinava Shariram", author: "Dr. Damodar Sharma Gaur", publisher: "Chaukhambha Sanskrit Series", focus: "Comprehensive comparative human anatomy for Ayurvedic clinicians",
              link: "https://archive.org/search?query=Abhinava+Shariram+Damodar+Sharma+Gaur"
            },
            { title: "Pratyaksha Shariram", author: "Mahamahopadhyaya Kaviraj Gananath Sen", publisher: "Kalpataru Press", focus: "Pioneering synthesis of classical Ayurvedic osteology, myology, and neuroanatomy",
              link: "https://archive.org/details/pratyaksha-shariram-gangadhar-shastri"
            }
          ],
          contemporaryMedical: [
            { title: "B.D. Chaurasia's Human Anatomy (Vols 1, 2, 3 & 4)", author: "B.D. Chaurasia", edition: "8th Edition", publisher: "CBS Publishers", focus: "Standard Indian medical curriculum dissection manual, osteology, and clinical surface landmarks",
              link: "https://www.google.com/search?tbm=bks&q=BD+Chaurasia+Human+Anatomy"
            },
            { title: "Gray's Anatomy for Students", author: "Richard L. Drake et al.", edition: "4th Edition", publisher: "Elsevier", focus: "World-renowned clinical anatomy with surgical and radiological correlations",
              link: "https://www.google.com/search?tbm=bks&q=Gray%27s+Anatomy+for+Students"
            },
            { title: "Grant's Atlas of Anatomy", author: "Anne M. R. Agur & Arthur F. Dalley", edition: "15th Edition", publisher: "Wolters Kluwer", focus: "Cadaveric cross-sections and regional neurovascular dissection views",
              link: "https://www.google.com/search?tbm=bks&q=Grant%27s+Atlas+of+Anatomy"
            }
          ]
        },
        competencies: ["Perform cadaveric dissection and identify visceral landmarks", "Locate and demarcate 107 Marmas with anatomical correlates", "Identify all types of human bones (Asthi) and joint structures"]
      },
      {
        id: "padartha-vijnana",
        name: "Padartha Vijnanam evam Ayurveda Itihasa",
        translation: "Fundamental Principles of Ayurveda & History",
        code: "AyUG-PV",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Padartha Lakshana, Dravya, Guna, Karma, Samanya, Vishesha, Samavaya, Abhava, Paramanuvada, Saptapadartha." },
          { paper: "Paper II", marks: 100, topics: "Pramana Vijnana (Pratyaksha, Anumana, Aptopadesha, Yukti), Karya-Karana Vada, History & Evolution of Ayurveda, AYUSH policies." }
        ],
        theoryMarks: 200,
        practicalMarks: 100,
        totalMarks: 300,
        referenceBooks: {
          classical: [
            { title: "Tarka Sangraha with Nyaya Bodhini & Dipika", author: "Annambhatta", commentary: "Athalye & Bodas", publisher: "Bhandarkar Oriental Research Institute",
              link: "https://archive.org/details/tarka-sangraha-with-nyayabodhini"
            },
            { title: "Vaisheshika Darshana", author: "Maharshi Kanada", commentary: "Prashastapada Bhashya", publisher: "Chaukhambha Sanskrit Sansthan",
              link: "https://archive.org/details/vaisheshika-darshana-prashastapada"
            },
            { title: "Charaka Samhita Sutrasthana (Chapters 1, 8, 11)", author: "Charaka", commentary: "Chakrapani Tika", publisher: "Chaukhambha",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            }
          ],
          modernAyurvedic: [
            { title: "Introduction to Padartha Vijnana", author: "Prof. C. Dwarkanath", publisher: "Chaukhambha Orientalia", focus: "Epistemology, Pramana Vijnana, and its practical application in Ayurvedic clinical reasoning",
              link: "https://archive.org/search?query=Padartha+Vijnana+C+Dwarkanath"
            },
            { title: "Ayurvediya Padartha Vijnana", author: "Prof. R.D. Lele", publisher: "Popular Prakashan", focus: "Philosophical principles correlated with contemporary physics, atomic theory, and quantum logic",
              link: "https://archive.org/search?query=Ayurvediya+Padartha+Vijnana"
            },
            { title: "History of Indian Medicine (Vols 1-3)", author: "Dr. Jyotir Mitra", publisher: "Chaukhambha Sanskrit Series", focus: "Chronological documentation of ancient medical treatises, Nalanda/Taxila traditions, and AYUSH evolution",
              link: "https://archive.org/details/history-of-indian-medicine-girindranath-mukhopadhyaya"
            }
          ],
          contemporaryMedical: [
            { title: "Philosophy of Medicine & Clinical Epistemology", author: "Henrik R. Wulff et al.", publisher: "Oxford University Press", focus: "Scientific logic, evidence grading, diagnostic hypotheses, and inductive reasoning in medicine",
              link: "https://www.google.com/search?tbm=bks&q=Philosophy+of+Medicine+clinical+epistemology"
            }
          ]
        },
        competencies: ["Apply Epistemology (Pramanas) in Ayurvedic clinical diagnosis", "Correlate fundamental Nyayas (e.g., Ksheera Dadhi, Kedari Kulya) to bodily nourishment"]
      },
      {
        id: "samhita-adhyayana-1",
        name: "Samhita Adhyayana - 1",
        translation: "Classical Samhita Study (Ashtanga Hridaya & Charaka Purvardha)",
        code: "AyUG-SA1",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Ashtanga Hridaya Sutrasthana (Chapters 1 to 30) - Ayushkamiya, Dinacharya, Ritucharya, Roganutpadaniya, Dravyadravya Vijnaniya." },
          { paper: "Paper II", marks: 100, topics: "Charaka Samhita Sutrasthana (Chapters 1 to 12) - Deerghanjivitiya, Apamarga Tanduliya, Aragvadhiya, Shadvirechana Shatashritiya." }
        ],
        theoryMarks: 200,
        practicalMarks: 100,
        totalMarks: 300,
        referenceBooks: {
          classical: [
            { title: "Ashtanga Hridaya with Sarvangasundara & Ayurvedarasayana", author: "Vagbhata", commentary: "Arunadatta and Hemadri", publisher: "Chaukhambha Sanskrit Sansthan, Varanasi",
              link: "https://archive.org/details/ashtanga-hridaya-of-vagbhata-with-sarvangasundari-commentary-of-arunadatta-and-ayurvedarasayana-of-hemadri-dr-anna-moreswara-kunte"
            },
            { title: "Charaka Samhita with Ayurveda Dipika Commentary", author: "Agnivesha / Dridhabala", commentary: "Chakrapanidatta", publisher: "Chaukhambha Bharati Academy",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            }
          ],
          modernAyurvedic: [
            { title: "Illustrated Ashtanga Hridaya (English Translation)", author: "Prof. K.R. Srikantha Murthy", publisher: "Chaukhambha Orientalia", focus: "Comprehensive verse-by-verse English translation with clinical commentary",
              link: "https://archive.org/search?query=Illustrated+Ashtanga+Hridaya+K.R.+Srikantha+Murthy"
            },
            { title: "Charaka Samhita Text with English Translation (Vols 1-4)", author: "Prof. P.V. Sharma", publisher: "Chaukhambha Orientalia", focus: "Standard reference translation for undergraduate and postgraduate scholars",
              link: "https://archive.org/details/charaka-samhita-text-with-english-translation-p-v-sharma"
            },
            { title: "Vagbhata's Ashtanga Hridaya with Vidyotini Hindi Tika", author: "Kaviraj Atrideva Gupta", publisher: "Chaukhambha Prakashan", focus: "Accessible Hindi commentary ideal for student memorization and viva preparation",
              link: "https://archive.org/details/ashtanga-hridaya-vidyotini-tika-kaviraj-atridev-gupt"
            }
          ],
          contemporaryMedical: [
            { title: "Chronobiology and Lifestyle Medicine", author: "Roberto Refinetti", publisher: "CRC Press", focus: "Modern scientific validation of Dinacharya (circadian rhythms) and Ritucharya (seasonal biorhythms)",
              link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6400974/"
            }
          ]
        },
        competencies: ["Recite and interpret core classical shlokas with contextual clinical meaning", "Apply daily and seasonal regimens (Dinacharya/Ritucharya) for disease prevention"]
      },
      {
        id: "samskritam",
        name: "Samskritam",
        translation: "Classical Medical Sanskrit Language",
        code: "AyUG-SK",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Sanskrit Grammar: Sandhi, Samasa, Karaka, Shabdarupa, Dhaturupa, Anuvada (Translation of medical shlokas)." }
        ],
        theoryMarks: 100,
        practicalMarks: 50,
        totalMarks: 150,
        referenceBooks: {
          classical: [
            { title: "Laghusiddhanta Kaumudi", author: "Varadaraja", commentary: "Bhaimi Commentary by Bhimsena Shastri", publisher: "Bhaimi Prakashan",
              link: "https://archive.org/details/laghusiddhantakaumudi"
            },
            { title: "Sanskrit Bhasha Parichaya", author: "NCISM Curriculum Committee", publisher: "NCISM New Delhi",
              link: "https://archive.org/search?query=Sanskrit+Bhasha+Parichaya+Ayurveda"
            }
          ],
          modernAyurvedic: [
            { title: "Ayurvediya Sanskrit Bodhini", author: "Dr. B.L. Gaur", publisher: "Rashtriya Ayurveda Vidyapeeth", focus: "Medical Sanskrit grammar tailored specifically to Ayurvedic Samhita terminology",
              link: "https://archive.org/search?query=Ayurvediya+Sanskrit+Bodhini"
            }
          ],
          contemporaryMedical: []
        },
        competencies: ["Read and correctly decipher medical manuscripts and treatises in Devanagari script"]
      }
    ]
  },
  {
    year: "2nd Prof",
    yearTitle: "Second Professional BAMS (Para-Clinical & Pharmacology)",
    description: "Ayurvedic Materia Medica, Pharmacy, Mineral Alchemy, Diagnostics, and Pathology.",
    subjects: [
      {
        id: "dravyaguna",
        name: "Dravyaguna Vijnana",
        translation: "Ayurvedic Pharmacology & Materia Medica",
        code: "AyUG-DG",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Dravya, Guna, Rasa, Vipaka, Virya, Prabhava, Karma, Namarupa Vijnana, Drug adulteration, Pharmacology fundamentals." },
          { paper: "Paper II", marks: 100, topics: "Detailed study of 150+ medicinal plants: Haritaki, Amalaki, Ashwagandha, Guduchi, Shatavari, Arjuna, Guggulu, etc." }
        ],
        theoryMarks: 200,
        practicalMarks: 200,
        totalMarks: 400,
        referenceBooks: {
          classical: [
            { title: "Bhavaprakasha Nighantu", author: "Bhavamishra", commentary: "Dr. K.C. Chunekar & Dr. G.S. Pandey", publisher: "Chaukhambha Bharati Academy, Varanasi",
              link: "https://archive.org/details/bhavaprakasha-nighantu-with-chunekar-commentary"
            },
            { title: "Dhanwantari Nighantu", author: "Acharya Mahendra Bhogika", commentary: "Prof. P.V. Sharma", publisher: "Chaukhambha Orientalia",
              link: "https://archive.org/details/dhanvantari-nighantu-chaukhambha"
            },
            { title: "Raja Nighantu", author: "Pandita Narahari", commentary: "Dr. Indradeo Tripathi", publisher: "Chowkhamba Krishnadas Academy",
              link: "https://archive.org/details/raja-nighantu-narahari-pandita"
            }
          ],
          modernAyurvedic: [
            { title: "Dravyaguna Vijnana (Vols 1 to 5)", author: "Prof. Priyavrat Sharma", publisher: "Chaukhambha Bharati Academy", focus: "The definitive five-volume magnum opus of Ayurvedic pharmacology, botanical correlation, and therapeutics",
              link: "https://archive.org/details/dravyaguna-vijnana-p-v-sharma"
            },
            { title: "Database on Medicinal Plants Used in Ayurveda (Vols 1-8)", author: "CCRAS", publisher: "Ministry of AYUSH, Govt of India", focus: "Official pharmacognostical monographs, phytochemical profiles, and macroscopic standards",
              link: "http://www.ccras.nic.in/content/database-medicinal-plants"
            },
            { title: "Ayurvedic Pharmacopoeia of India (API - Parts I & II)", author: "Pharmacopoeia Commission for Indian Medicine & Homeopathy (PCIM&H)", publisher: "Ministry of AYUSH", focus: "Statutory standards for identity, purity, and strength of single and compound herbal drugs",
              link: "https://www.ayush.gov.in/ayurvedic-pharmacopoeia-of-india.html"
            }
          ],
          contemporaryMedical: [
            { title: "Trease and Evans Pharmacognosy", author: "William Charles Evans", edition: "16th Edition", publisher: "Elsevier", focus: "Phytochemistry, secondary metabolites (alkaloids, glycosides, flavonoids), and chromatographic analysis",
              link: "https://www.google.com/search?tbm=bks&q=Trease+and+Evans+Pharmacognosy"
            },
            { title: "Indian Medicinal Plants (Vols 1-4)", author: "K.R. Kirtikar & B.D. Basu", publisher: "International Book Distributors", focus: "Botanical taxonomy, illustrations, indigenous medicinal uses, and phytochemical constituents",
              link: "https://archive.org/details/indianmedicinalp01kirt"
            }
          ]
        },
        competencies: ["Identify crude herbal drugs in fresh and dry form", "Prepare herbarium sheets and determine botanical identity", "Prescribe rational single-herb and poly-herbal regimens based on Rasa Panchaka"]
      },
      {
        id: "rasashastra-bhaishajya",
        name: "Rasa Shastra evam Bhaishajya Kalpana",
        translation: "Ayurvedic Alchemy, Metallurgy & Pharmaceuticals",
        code: "AyUG-RSBK",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Rasa Shastra: Parada (Mercury) Ashtadasha Samskara, Maharasa, Uparasa, Sadharanarasa, Dhatu, Ratna, Bhasma Nirmana & Pariksha." },
          { paper: "Paper II", marks: 100, topics: "Bhaishajya Kalpana: Panchavidha Kashaya Kalpana (Swarasa, Kalka, Kwatha, Hima, Phanta), Churna, Vati, Avaleha, Asava-Arishta, Sneha Kalpana." }
        ],
        theoryMarks: 200,
        practicalMarks: 200,
        totalMarks: 400,
        referenceBooks: {
          classical: [
            { title: "Rasa Ratna Samucchaya", author: "Vagbhatacharya", commentary: "Prof. Dattatreya Ananta Kulkarni / Dr. Indradeo Tripathi", publisher: "Meharchand Lachhmandas",
              link: "https://archive.org/details/rasa-ratna-samucchaya-with-suratno-tika"
            },
            { title: "Rasa Tarangini", author: "Sadananda Sharma", commentary: "Pranacharya Haridatta Shastri", publisher: "Motilal Banarsidass",
              link: "https://archive.org/details/rasatarangini-sadananda-sharma"
            },
            { title: "Sharangadhara Samhita (Madhyama & Uttara Khanda)", author: "Acharya Sharangadhara", commentary: "Dipika by Adhamalla & Gudhartha Dipika by Kashirama", publisher: "Chaukhambha",
              link: "https://archive.org/details/sarngadhara-samhita-with-dipika-commentary"
            },
            { title: "Bhaishajya Ratnavali", author: "Kaviraj Govinda Das Sen", commentary: "Prof. Siddhinandan Mishra", publisher: "Chaukhambha Surbharati",
              link: "https://archive.org/details/bhaisajya-ratnavali-with-vidyotini-tika-chaukhambha"
            }
          ],
          modernAyurvedic: [
            { title: "Ayurvedic Rasa Shastra", author: "Dr. Damodar Joshi", publisher: "Chaukhambha Sanskrit Pratishthan", focus: "Authoritative text on metallic purification (Shodhana), calcination (Marana), and safety parameters",
              link: "https://archive.org/search?query=Ayurvedic+Rasa+Shastra+Damodar+Joshi"
            },
            { title: "Bhaishajya Kalpana Vijnana", author: "Prof. Siddhinandan Mishra", publisher: "Chaukhambha Surbharati", focus: "Detailed processing rules, shelf-life, drug proportions, and pharmaceutical apparatus",
              link: "https://archive.org/search?query=Bhaishajya+Kalpana+Vijnana+K+Rama+Chandra+Reddy"
            },
            { title: "Ayurvedic Formulary of India (AFI - Parts I, II, III)", author: "Ministry of AYUSH", publisher: "Govt of India Press", focus: "Official standard formulations, classical references, dose, and therapeutic indications",
              link: "https://www.ayush.gov.in/ayurvedic-formulary-of-india.html"
            }
          ],
          contemporaryMedical: [
            { title: "Remington: The Science and Practice of Pharmacy", author: "Adeboye Adejare", edition: "23rd Edition", publisher: "Academic Press", focus: "Industrial manufacturing, dosage formulation, stability testing, and particle size reduction",
              link: "https://www.google.com/search?tbm=bks&q=Remington+The+Science+and+Practice+of+Pharmacy"
            },
            { title: "Bentley's Textbook of Pharmaceutics", author: "E.A. Rawlins", edition: "8th Edition", publisher: "Bailliere Tindall", focus: "Sterilization, extraction, centrifugation, and liquid/solid dispersion physics",
              link: "https://www.google.com/search?tbm=bks&q=Bentley%27s+Textbook+of+Pharmaceutics"
            }
          ]
        },
        competencies: ["Perform Shodhana (purification) of metals and toxic minerals", "Perform classical Bhasma Parikshas (Varitara, Rekhapurna, etc.)", "Prepare standard pharmaceutical dosage forms like Kwatha, Taila, Ghrita, and Gutika"]
      },
      {
        id: "roga-nidana",
        name: "Roga Nidana evam Vikriti Vijnana",
        translation: "Ayurvedic Diagnostics & General Pathology",
        code: "AyUG-RN",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Dosha-Dushya Sammurchhana, Samprapti (Pathogenesis), Shat Kriya Kala, Rogi & Roga Pariksha (Trividha, Ashtavidha, Dashavidha Pariksha)." },
          { paper: "Paper II", marks: 100, topics: "Nidana Panchaka of clinical conditions (Jwara, Raktapitta, Rajayakshma, Prameha, Grahani, Pandu, etc.), Modern Diagnostic Pathology." }
        ],
        theoryMarks: 200,
        practicalMarks: 100,
        totalMarks: 300,
        referenceBooks: {
          classical: [
            { title: "Madhava Nidana (Rogavinischaya)", author: "Madhavakara", commentary: "Madhukosha by Vijayarakshita & Srikanthadatta", publisher: "Chaukhambha Sanskrit Sansthan",
              link: "https://archive.org/details/madhava-nidanam-with-madhukosa-commentary"
            },
            { title: "Charaka Samhita (Nidanasthana & Vimanasthana)", author: "Charaka", commentary: "Chakrapani Tika", publisher: "Chaukhambha Bharati Academy",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            },
            { title: "Yogaratnakara (Nidana Khanda)", author: "Yogaratnakara", commentary: "Ashtavidha Pariksha portions", publisher: "Chaukhambha",
              link: "https://archive.org/details/yogaratnakara-with-vidyotini-hindi-commentary"
            }
          ],
          modernAyurvedic: [
            { title: "Roga Vijnana evam Vikriti Vijnana (Vols 1 & 2)", author: "Prof. R.H. Singh & Dr. K. Nishteswar", publisher: "Chaukhambha Sanskrit Series", focus: "Ayurvedic clinical diagnostics integrated with bedside physical examination",
              link: "https://archive.org/search?query=Roga+Vijnana+evam+Vikriti+Vijnana+Nishteswar"
            },
            { title: "Clinical Methods in Ayurveda", author: "Prof. K.R. Srikantha Murthy", publisher: "Chaukhambha Orientalia", focus: "Comprehensive guide to Nadi Pariksha, Asthavidha Pariksha, and Dashavidha Pariksha",
              link: "https://archive.org/search?query=Clinical+Methods+in+Ayurveda+K.R.S.+Murthy"
            }
          ],
          contemporaryMedical: [
            { title: "Harsh Mohan's Textbook of Pathology", author: "Harsh Mohan", edition: "8th Edition", publisher: "Jaypee Brothers", focus: "General and systemic pathology, cellular injury, inflammation, hematology, and clinical pathology",
              link: "https://www.google.com/search?tbm=bks&q=Harsh+Mohan+Textbook+of+Pathology"
            },
            { title: "Hutchison's Clinical Methods", author: "Michael Glynn & William M. Drake", edition: "24th Edition", publisher: "Elsevier", focus: "Integrated physical examination of cardiovascular, respiratory, and abdominal systems",
              link: "https://www.google.com/search?tbm=bks&q=Hutchison%27s+Clinical+Methods"
            },
            { title: "Robbins & Cotran Pathologic Basis of Disease", author: "Vinay Kumar et al.", edition: "10th Edition", publisher: "Elsevier", focus: "Cellular pathophysiology, immunology, and genetic mechanisms of disease",
              link: "https://www.google.com/search?tbm=bks&q=Robbins+%26+Cotran+Pathologic+Basis+of+Disease"
            }
          ]
        },
        competencies: ["Conduct systematic Nadi Pariksha and Ashtavidha Pariksha", "Perform bedside urine and blood investigations", "Formulate definitive differential diagnosis based on Samprapti Ghataka"]
      },
      {
        id: "samhita-adhyayana-2",
        name: "Samhita Adhyayana - 2",
        translation: "Charaka Samhita Purvardha",
        code: "AyUG-SA2",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Charaka Samhita: Nidanasthana, Vimanasthana, Sharirasthana, and Indriyasthana (Prognostic signs & Arishta Lakshana)." }
        ],
        theoryMarks: 100,
        practicalMarks: 50,
        totalMarks: 150,
        referenceBooks: {
          classical: [
            { title: "Charaka Samhita Purvardha with Ayurveda Dipika", author: "Agnivesha / Charaka", commentary: "Chakrapanidatta", publisher: "Chaukhambha Sanskrit Pratishthan",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            }
          ],
          modernAyurvedic: [
            { title: "Charaka Samhita Purvardha with Vidyotini Hindi Tika", author: "Pt. Kashinath Shastri & Dr. Gorakhnath Chaturvedi", publisher: "Chaukhambha Bharati Academy", focus: "Exhaustive Hindi verse commentary with critical notes on Arishta Lakshanas",
              link: "https://archive.org/details/charaka-samhita-vidyotini-hindi-commentary"
            }
          ],
          contemporaryMedical: []
        },
        competencies: ["Analyze Trividha Roga Marga, Srotas Dushti, and Asadhya Lakshanas in clinical cases"]
      }
    ]
  },
  {
    year: "3rd Prof",
    yearTitle: "Third Professional BAMS (Clinical Specialties)",
    description: "Forensic Medicine, Toxicology, Preventive Health, Gynecology, Obstetrics, and Pediatrics.",
    subjects: [
      {
        id: "agada-tantra",
        name: "Agada Tantra, Vyavahara Ayurveda & Vidhivaidyaka",
        translation: "Ayurvedic Toxicology, Forensic Medicine & Medical Jurisprudence",
        code: "AyUG-AT",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Sthavara & Jangama Visha, Dushi Visha, Gara Visha, Sarpa Dashta Chikitsa, Agadas (anti-toxic formulations), Forensic toxicology." },
          { paper: "Paper II", marks: 100, topics: "Medical Jurisprudence: Consent, Medical Negligence, Consumer Protection Act, Post-Mortem changes, Thanatology, Hurt & Injury certification." }
        ],
        theoryMarks: 200,
        practicalMarks: 100,
        totalMarks: 300,
        referenceBooks: {
          classical: [
            { title: "Sushruta Samhita (Kalpasthana)", author: "Acharya Sushruta", commentary: "Dalhanacharya Nibandhasamgraha", publisher: "Chaukhambha Orientalia",
              link: "https://archive.org/details/sushruta-samhita-with-nibandhasamgraha-of-dalhana"
            },
            { title: "Charaka Samhita (Chikitsasthana Chapter 23 - Visha Chikitsa)", author: "Charaka", commentary: "Chakrapanidatta", publisher: "Chaukhambha",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            },
            { title: "Ashtanga Hridaya (Uttaratantra - Visha Pratishedha)", author: "Vagbhata", commentary: "Arunadatta", publisher: "Chaukhambha",
              link: "https://archive.org/details/ashtanga-hridaya-of-vagbhata-with-sarvangasundari-commentary-of-arunadatta-and-ayurvedarasayana-of-hemadri-dr-anna-moreswara-kunte"
            },
            { title: "Kriyakaumudi (Traditional Kerala Toxicology)", author: "Unknown Traditional Vaidya", publisher: "Government Ayurveda College, Thiruvananthapuram",
              link: "https://archive.org/search?query=Kriyakaumudi+Toxicology+Ayurveda"
            }
          ],
          modernAyurvedic: [
            { title: "A Text Book of Agada Tantra", author: "Dr. U.R. Sekhar Namboodiri", publisher: "Chaukhambha Sanskrit Pratishthan", focus: "Standard textbook incorporating Kerala Vishavaidya traditions and classical toxicology",
              link: "https://archive.org/search?query=Text+Book+of+Agada+Tantra+U.R.+Sekhar+Namburi"
            },
            { title: "Illustrated Agada Tantra", author: "Dr. R.C. Choudhary", publisher: "Chaukhambha Orientalia", focus: "Plant, animal, and chemical poisons with antivenom protocols and autopsy signs",
              link: "https://archive.org/search?query=Illustrated+Agada+Tantra+R.+Vidyanath"
            }
          ],
          contemporaryMedical: [
            { title: "The Essentials of Forensic Medicine and Toxicology", author: "Dr. K.S. Narayan Reddy & Dr. O.P. Murty", edition: "34th Edition", publisher: "Jaypee Brothers", focus: "The supreme textbook for Indian medical jurisprudence, IPC sections, thanatology, and toxicology",
              link: "https://www.google.com/search?tbm=bks&q=Essentials+of+Forensic+Medicine+and+Toxicology+Narayan+Reddy"
            },
            { title: "Parikh's Textbook of Medical Jurisprudence, Forensic Medicine and Toxicology", author: "C.K. Parikh", edition: "8th Edition", publisher: "CBS Publishers", focus: "Clinical forensic practice, medico-legal certificates, court procedures, and autopsy protocols",
              link: "https://www.google.com/search?tbm=bks&q=Parikh%27s+Textbook+of+Medical+Jurisprudence"
            }
          ]
        },
        competencies: ["Identify poisonous plants and minerals with antidotes", "Manage snakebite and scorpion sting emergency protocols", "Examine and document medico-legal cases and injury reports"]
      },
      {
        id: "swasthavritta-yoga",
        name: "Swasthavritta evam Yoga",
        translation: "Preventive, Social Medicine & Yogic Sciences",
        code: "AyUG-SWY",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Dinacharya, Ratricharya, Ritucharya, Vega-Dharana & Adharaniya Vegas, Trayopastambha, Environmental hygiene, Janapadodhvamsa." },
          { paper: "Paper II", marks: 100, topics: "Yoga: Ashtanga Yoga, Shatkarma, Pranayama, Bandhas, Mudras, Naturopathy, Epidemiology, Primary Healthcare & National Health Programs." }
        ],
        theoryMarks: 200,
        practicalMarks: 100,
        totalMarks: 300,
        referenceBooks: {
          classical: [
            { title: "Charaka Samhita (Sutrasthana Chapters 5 to 8)", author: "Charaka", commentary: "Chakrapanidatta", publisher: "Chaukhambha",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            },
            { title: "Hatha Yoga Pradipika", author: "Yogi Svatmarama", commentary: "Jyotsna by Brahmananda", publisher: "The Adyar Library and Research Centre",
              link: "https://archive.org/details/hatha-yoga-pradipika-with-jyotsna-commentary"
            },
            { title: "Gheranda Samhita", author: "Maharshi Gheranda", commentary: "Swami Niranjanananda Saraswati", publisher: "Yoga Publications Trust, Munger",
              link: "https://archive.org/details/gheranda-samhita-sanskrit-english"
            },
            { title: "Patanjala Yoga Sutra", author: "Maharshi Patanjali", commentary: "Vyasa Bhashya", publisher: "Chaukhambha",
              link: "https://archive.org/details/patanjala-yoga-sutra-with-vyasa-bhashya"
            }
          ],
          modernAyurvedic: [
            { title: "Swasthavritta Vijnana", author: "Dr. Ram Harsh Singh", publisher: "Chaukhambha Orientalia", focus: "Comprehensive treatise on individual hygiene, dietetics, and communal epidemic control (Janapadodhvamsa)",
              link: "https://archive.org/search?query=Swasthavritta+Vijnana+Ram+Harsh+Singh"
            },
            { title: "A Textbook of Swasthavritta", author: "Dr. Mangalagowri V. Rao", publisher: "Chaukhambha Orientalia", focus: "Covers the entire NCISM syllabus including Yoga therapy and public health programs",
              link: "https://archive.org/search?query=Textbook+of+Swasthavritta+Mangalagowri+V.+Rao"
            }
          ],
          contemporaryMedical: [
            { title: "Park's Textbook of Preventive and Social Medicine", author: "K. Park", edition: "26th Edition", publisher: "Banarsidas Bhanot Publishers", focus: "Official Indian reference for epidemiology, maternal-child health, national health programs, and biostatistics",
              link: "https://www.google.com/search?tbm=bks&q=Park%27s+Textbook+of+Preventive+and+Social+Medicine"
            }
          ]
        },
        competencies: ["Formulate personalized Swastha Dinacharya and Ritucharya counseling", "Instruct and demonstrate Shatkarmas, therapeutic Asanas, and Pranayamas", "Implement community health and communicable disease containment measures"]
      },
      {
        id: "prasuti-striroga",
        name: "Prasuti Tantra evam Stri Roga",
        translation: "Ayurvedic Obstetrics & Gynecology",
        code: "AyUG-PSR",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Prasuti Tantra: Garbhadhana, Garbhini Paricharya (Month-wise regimen), Garbha Vyapad (Abortion, IUGR), Prasava (Normal & Abnormal Labor)." },
          { paper: "Paper II", marks: 100, topics: "Stri Roga: 20 Yoni Vyapad, Artava Dosha, Asrigdara, Vandhyatva (Infertility), Sthanika Chikitsa (Yoni Prakshalana, Pichu, Varti, Uttarbasti)." }
        ],
        theoryMarks: 200,
        practicalMarks: 100,
        totalMarks: 300,
        referenceBooks: {
          classical: [
            { title: "Kashyapa Samhita (Garbhini & Sharira Sthanas)", author: "Vridha Jivaka", commentary: "Vidyotini Hindi Tika", publisher: "Chaukhambha Sanskrit Sansthan",
              link: "https://archive.org/details/kasyapa-samhita-with-vidyotini-hindi-commentary"
            },
            { title: "Charaka Samhita (Sharirasthana Chapter 8 - Jatisutriya)", author: "Charaka", commentary: "Chakrapanidatta", publisher: "Chaukhambha",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            },
            { title: "Sushruta Samhita (Sharirasthana Chapter 10 - Garbhini Vyakarana)", author: "Sushruta", commentary: "Dalhanacharya", publisher: "Chaukhambha",
              link: "https://archive.org/details/sushruta-samhita-with-nibandhasamgraha-of-dalhana"
            }
          ],
          modernAyurvedic: [
            { title: "Prasuti Tantra and Stri Roga (Vols 1 & 2)", author: "Prof. P.V. Tewari", publisher: "Chaukhambha Orientalia", focus: "The gold-standard Ayurvedic obstetrics & gynecology textbook across all Indian universities",
              link: "https://archive.org/search?query=Prasuti+Tantra+and+Stri+Roga+P.V.+Tewari"
            },
            { title: "Ayurvediya Prasuti Tantra evam Stri Roga", author: "Dr. Hemalatha K.", publisher: "Chaukhambha Publication", focus: "Practical handbook on Sthanika Chikitsa (Uttarbasti, Yoni Pichu) and labor management",
              link: "https://archive.org/search?query=Ayurvediya+Prasuti+Tantra+evam+Stri+Roga+Dr+Nirmala+Joshi"
            }
          ],
          contemporaryMedical: [
            { title: "DC Dutta's Textbook of Obstetrics", author: "Hiralal Konar", edition: "9th Edition", publisher: "Jaypee Brothers", focus: "Standard Indian medical guide for antenatal care, labor mechanisms, high-risk pregnancies, and puerperium",
              link: "https://www.google.com/search?tbm=bks&q=DC+Dutta+Textbook+of+Obstetrics"
            },
            { title: "Shaw's Textbook of Gynecology", author: "V.G. Padubidri & Shirish N. Daftary", edition: "17th Edition", publisher: "Elsevier", focus: "Reproductive endocrinology, pelvic infections, genital prolapse, and infertility evaluations",
              link: "https://www.google.com/search?tbm=bks&q=Shaw%27s+Textbook+of+Gynecology"
            }
          ]
        },
        competencies: ["Conduct antenatal checkups (ANC) and monitor labor progress", "Perform gynecological local therapies like Yoni Pichu and Uttarbasti", "Manage common menstrual disorders using classical Ayurvedic interventions"]
      },
      {
        id: "kaumarbhritya",
        name: "Kaumarbhritya / Bala Roga",
        translation: "Ayurvedic Pediatrics & Neonatology",
        code: "AyUG-KB",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Navajata Shishu Paricharya (Newborn care), Pranapratyagamana (Resuscitation), Lehana, Swarnaprashana, Growth & Development milestones, Pediatric disorders (Kukunaka, Phakka, Parigarbhika, Balagraha)." }
        ],
        theoryMarks: 100,
        practicalMarks: 50,
        totalMarks: 150,
        referenceBooks: {
          classical: [
            { title: "Kashyapa Samhita (Vridha Jivakiya Tantra)", author: "Maharshi Kashyapa", commentary: "Vidyotini Hindi Tika", publisher: "Chaukhambha Sanskrit Sansthan",
              link: "https://archive.org/details/kasyapa-samhita-with-vidyotini-hindi-commentary"
            },
            { title: "Arogya Kalpadruma", author: "Sankaran Namboothiri", publisher: "Government Ayurvedic College, Thiruvananthapuram",
              link: "https://archive.org/details/arogya-kalpadruma-kaumarbhritya"
            },
            { title: "Ashtanga Hridaya (Uttaratantra - Bala Chikitsa)", author: "Vagbhata", commentary: "Arunadatta", publisher: "Chaukhambha",
              link: "https://archive.org/details/ashtanga-hridaya-of-vagbhata-with-sarvangasundari-commentary-of-arunadatta-and-ayurvedarasayana-of-hemadri-dr-anna-moreswara-kunte"
            }
          ],
          modernAyurvedic: [
            { title: "A Textbook of Kaumarbhritya", author: "Prof. C.H.S. Sastry", publisher: "Chaukhambha Orientalia", focus: "Covers infant nutrition, childhood milestones, and Ayurvedic pediatric formulations",
              link: "https://archive.org/search?query=Textbook+of+Kaumarbhritya+C.H.S.+Sastry"
            },
            { title: "Principles & Practice of Kaumarbhritya", author: "Dr. Dinesh Kumar", publisher: "Chaukhambha Publications", focus: "Comprehensive neonatal assessment, Swarnaprashana, and pediatric dose calculations",
              link: "https://archive.org/search?query=Principles+Practice+of+Kaumarbhritya+Dinesh+K.S."
            }
          ],
          contemporaryMedical: [
            { title: "Ghai Essential Pediatrics", author: "Vinod K. Paul & Arvind Bagga", edition: "9th Edition", publisher: "CBS Publishers", focus: "Benchmark modern pediatric textbook for developmental milestones, immunization, and pediatric infections",
              link: "https://www.google.com/search?tbm=bks&q=Ghai+Essential+Pediatrics"
            },
            { title: "Nelson Textbook of Pediatrics", author: "Robert M. Kliegman et al.", edition: "21st Edition", publisher: "Elsevier", focus: "World reference for neonatology, congenital disorders, and pediatric clinical practice",
              link: "https://www.google.com/search?tbm=bks&q=Nelson+Textbook+of+Pediatrics"
            }
          ]
        },
        competencies: ["Perform neonatal examination and assess APGAR & developmental milestones", "Administer classical immunomodulation (Swarnaprashana)", "Manage pediatric malnutrition and gastrointestinal infections"]
      },
      {
        id: "samhita-adhyayana-3",
        name: "Samhita Adhyayana - 3",
        translation: "Charaka Samhita Uttarardha",
        code: "AyUG-SA3",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Charaka Samhita Chikitsasthana (Chapters 1 to 30), Kalpasthana (Formulations), and Siddhisthana (Panchakarma complications & management)." }
        ],
        theoryMarks: 100,
        practicalMarks: 50,
        totalMarks: 150,
        referenceBooks: {
          classical: [
            { title: "Charaka Samhita Uttarardha with Ayurveda Dipika", author: "Agnivesha / Charaka / Dridhabala", commentary: "Chakrapanidatta", publisher: "Chaukhambha Sanskrit Series Office",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            }
          ],
          modernAyurvedic: [
            { title: "Charaka Samhita with English Commentary (Vols 3 & 4)", author: "Prof. P.V. Sharma", publisher: "Chaukhambha Orientalia", focus: "Chikitsa, Kalpa, and Siddhi Sthanas with botanical identification and clinical notes",
              link: "https://archive.org/details/charaka-samhita-text-with-english-translation-p-v-sharma"
            },
            { title: "Charaka Samhita Chikitsasthana with Vidyotini Tika", author: "Pt. Rajeshwardatta Shastri", publisher: "Chaukhambha Bharati Academy", focus: "Hindi commentary explaining Chikitsa Sutras and clinical differential formulas",
              link: "https://archive.org/details/charaka-samhita-vidyotini-hindi-commentary"
            }
          ],
          contemporaryMedical: []
        },
        competencies: ["Master the treatment protocols for chronic diseases including Rasayana and Vajikarana"]
      }
    ]
  },
  {
    year: "4th Prof",
    yearTitle: "Fourth / Final Professional BAMS (Clinical Practice & Surgery)",
    description: "Internal Medicine, Panchakarma, Surgery, ENT & Ophthalmology, and Research Methodology.",
    subjects: [
      {
        id: "kayachikitsa",
        name: "Kayachikitsa",
        translation: "Ayurvedic Internal Medicine",
        code: "AyUG-KC",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Principles of Chikitsa, Shamana, Shodhana, Rasayana, Vajikarana, Jwara, Pandu, Raktapitta, Gulma, Prameha, Rajayakshma, Unmada, Apasmara." },
          { paper: "Paper II", marks: 100, topics: "Vatavyadhi (Pakshaghata, Gridhrasi, Amavata, Sandhigata Vata), Grahani, Arsha, Atisara, Udara Roga, Modern Internal Medicine correlates." }
        ],
        theoryMarks: 200,
        practicalMarks: 200,
        totalMarks: 400,
        referenceBooks: {
          classical: [
            { title: "Charaka Samhita (Chikitsasthana Chapters 1-30)", author: "Charaka", commentary: "Chakrapanidatta", publisher: "Chaukhambha Sanskrit Sansthan",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            },
            { title: "Chakradatta (Chikitsasamgraha)", author: "Chakrapanidatta", commentary: "Padartha Sandipika by Shiva Das Sen", publisher: "Chaukhambha Orientalia",
              link: "https://archive.org/details/chakradatta-with-bhavadasa-ratnaprabha-tika"
            },
            { title: "Bhaishajya Ratnavali", author: "Kaviraj Govinda Das Sen", commentary: "Vidyotini Tika by Rajeshwardatta Shastri", publisher: "Chaukhambha",
              link: "https://archive.org/details/bhaisajya-ratnavali-with-vidyotini-tika-chaukhambha"
            },
            { title: "Yoga Ratnakara (Chikitsa Khanda)", author: "Yogaratnakara", commentary: "Vidyotini Tika", publisher: "Chaukhambha Prakashan",
              link: "https://archive.org/details/yogaratnakara-with-vidyotini-hindi-commentary"
            }
          ],
          modernAyurvedic: [
            { title: "Kayachikitsa (Vols 1 to 4)", author: "Prof. Ajay Kumar Sharma", publisher: "Chaukhambha Sanskrit Pratishthan", focus: "Comprehensive final year standard textbook covering etiology, differential diagnosis, and stage-wise treatment",
              link: "https://archive.org/search?query=Kayachikitsa+Ajay+Kumar+Sharma"
            },
            { title: "Principles and Practice of Kayachikitsa", author: "Dr. Ram Harsh Singh", publisher: "Chaukhambha Orientalia", focus: "Integrative internal medicine blending classical Ayurvedic principles with contemporary diagnostics",
              link: "https://archive.org/search?query=Principles+and+Practice+of+Kayachikitsa+Ram+Harsh+Singh"
            },
            { title: "Ayurvediya Chikitsa Paddhati", author: "Acharya Priyavrat Sharma", publisher: "Chaukhambha", focus: "Classical dosage formulas, Anupana selection, and therapeutic dietary management",
              link: "https://archive.org/search?query=Ayurvediya+Chikitsa+Paddhati+Ghanekar"
            }
          ],
          contemporaryMedical: [
            { title: "Davidson's Principles and Practice of Medicine", author: "Ian D. Penman et al.", edition: "24th Edition", publisher: "Elsevier", focus: "Clinical internal medicine, metabolic syndromes, cardiovascular diseases, rheumatology, and neurology",
              link: "https://www.google.com/search?tbm=bks&q=Davidson%27s+Principles+and+Practice+of+Medicine"
            },
            { title: "Harrison's Principles of Internal Medicine", author: "Joseph Loscalzo et al.", edition: "21st Edition", publisher: "McGraw Hill", focus: "Global authority on pathophysiology, clinical signs, and differential diagnosis",
              link: "https://www.google.com/search?tbm=bks&q=Harrison%27s+Principles+of+Internal+Medicine"
            }
          ]
        },
        competencies: ["Take comprehensive clinical history and formulate Ayurvedic Shamana & Shodhana treatment", "Manage acute and chronic lifestyle diseases (Metabolic syndrome, Arthritis, Neuropathies)"]
      },
      {
        id: "panchakarma",
        name: "Panchakarma",
        translation: "Ayurvedic Bio-Purificatory & Detoxification Therapies",
        code: "AyUG-PK",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Purvakarma (Snehana, Swedana, Swedana types), Vamana Karma, Virechana Karma (Indications, Contraindications, Vegas, Complications)." },
          { paper: "Paper II", marks: 100, topics: "Basti Karma (Niruha, Anuvasana, Matra, Uttarabasti), Nasya Karma, Raktamokshana (Jalauka, Siravyadha, Pracchanna), Paschatkarma (Samsarjana Krama)." }
        ],
        theoryMarks: 200,
        practicalMarks: 100,
        totalMarks: 300,
        referenceBooks: {
          classical: [
            { title: "Charaka Samhita (Siddhisthana Chapters 1 to 12)", author: "Charaka / Dridhabala", commentary: "Chakrapanidatta", publisher: "Chaukhambha",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            },
            { title: "Sushruta Samhita (Chikitsasthana Chapters 31 to 38)", author: "Sushruta", commentary: "Dalhanacharya", publisher: "Chaukhambha Orientalia",
              link: "https://archive.org/details/sushruta-samhita-with-nibandhasamgraha-of-dalhana"
            },
            { title: "Ashtanga Hridaya (Sutrasthana Chapters 18 to 22)", author: "Vagbhata", commentary: "Arunadatta", publisher: "Chaukhambha",
              link: "https://archive.org/details/ashtanga-hridaya-of-vagbhata-with-sarvangasundari-commentary-of-arunadatta-and-ayurvedarasayana-of-hemadri-dr-anna-moreswara-kunte"
            }
          ],
          modernAyurvedic: [
            { title: "Panchakarma Illustrated", author: "Dr. G. Srinivasulu", publisher: "Chaukhambha Sanskrit Pratishthan", focus: "Step-by-step photographic procedural guide to all Purvakarma, Pradhanakarma, and Paschatkarma",
              link: "https://archive.org/search?query=Panchakarma+Illustrated+G.+Shrinivasa+Acharya"
            },
            { title: "Principles and Practice of Basti", author: "Dr. V.D. Mahajan", publisher: "Chaukhambha", focus: "Exhaustive manual on Niruha, Anuvasana, and Matra Basti formulation and clinical administration",
              link: "https://archive.org/search?query=Principles+and+Practice+of+Basti+Vasant+C+Patil"
            },
            { title: "Clinical Panchakarma", author: "Dr. Pulak Kanti Kar", publisher: "Chaukhambha Sanskrit Series", focus: "Hospital inpatient protocols, Vega monitoring sheets, and management of complications (Vyapad)",
              link: "https://archive.org/search?query=Clinical+Panchakarma+P.+Yadaiah"
            }
          ],
          contemporaryMedical: [
            { title: "Gastroenterology and Hepatology in Clinical Practice", author: "G.J. Mantzaris", publisher: "Springer", focus: "Entero-hepatic circulation, colonic absorption, mucosal immunology, and bio-cleansing parallels",
              link: "https://www.google.com/search?tbm=bks&q=Gastroenterology+and+Hepatology+in+Clinical+Practice"
            }
          ]
        },
        competencies: ["Plan and execute classical Vamana and Virechana protocols under supervision", "Prepare and administer Niruha & Matra Basti with authentic instruments", "Apply Jalaukavacharana (Leech Therapy) for dermatological and vascular ailments"]
      },
      {
        id: "shalya-tantra",
        name: "Shalya Tantra",
        translation: "Ayurvedic General Surgery & Surgical Techniques",
        code: "AyUG-ST",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Shalya Siddhanta: Yantra (101), Shastra (20), Anushastra, Ksharakarma, Agnikarma, Jalaukavacharana, Asthibhagna (Fractures & Dislocations), Wound care (Vrana)." },
          { paper: "Paper II", marks: 100, topics: "Anorectal Diseases (Arsha, Bhagandara, Parikartika), Ksharasutra preparation & application, Acute Abdomen, Hernias, Modern Surgical Techniques." }
        ],
        theoryMarks: 200,
        practicalMarks: 100,
        totalMarks: 300,
        referenceBooks: {
          classical: [
            { title: "Sushruta Samhita (Sutrasthana, Nidanasthana, & Chikitsasthana)", author: "Acharya Sushruta (Father of Surgery)", commentary: "Nibandhasamgraha by Dalhana", publisher: "Chaukhambha Sanskrit Sansthan",
              link: "https://archive.org/details/sushruta-samhita-with-nibandhasamgraha-of-dalhana"
            },
            { title: "Chakradatta (Arsho-Bhagandara Chikitsa)", author: "Chakrapanidatta", commentary: "Shiva Das Sen", publisher: "Chaukhambha",
              link: "https://archive.org/details/chakradatta-with-bhavadasa-ratnaprabha-tika"
            }
          ],
          modernAyurvedic: [
            { title: "Shalya Vijnana (Vols 1 & 2)", author: "Dr. K.R. Srikanta Murthy", publisher: "Chaukhambha Orientalia", focus: "Comprehensive textbook on Sushruta's operative procedures, surgical instruments, and wound management",
              link: "https://archive.org/search?query=Shalya+Vijnana+K.R.+Srikanta+Murthy"
            },
            { title: "Ksharasutra in Anorectal Diseases", author: "Prof. K.R. Sharma & Prof. P.J. Deshpande", publisher: "IMS BHU Publications", focus: "The landmark clinical trial monograph on standardized Ksharasutra preparation and fistula ligation",
              link: "https://archive.org/search?query=Ksharasutra+Management+in+Anorectal+Diseases+P.J.+Deshpande"
            },
            { title: "Agnikarma Technology & Principles", author: "Dr. P.D. Gupta", publisher: "Chaukhambha Surbharati", focus: "Thermal cautery, Dahanopakarana, and musculoskeletal pain management",
              link: "https://archive.org/search?query=Agnikarma+Technology+in+Ayurveda"
            }
          ],
          contemporaryMedical: [
            { title: "Bailey & Love's Short Practice of Surgery", author: "P. Ronan O'Connell et al.", edition: "28th Edition", publisher: "CRC Press", focus: "World standard undergraduate surgery textbook: wound healing, anorectal diseases, trauma, and sterilization",
              link: "https://www.google.com/search?tbm=bks&q=Bailey+%26+Love%27s+Short+Practice+of+Surgery"
            },
            { title: "SRB's Manual of Surgery", author: "Sriram Bhat M.", edition: "6th Edition", publisher: "Jaypee Brothers", focus: "Comprehensive clinical surgery with operative techniques, instruments, and surgical pathology",
              link: "https://www.google.com/search?tbm=bks&q=SRB%27s+Manual+of+Surgery"
            },
            { title: "Farquharson's Textbook of Operative General Surgery", author: "Margaret Farquharson et al.", edition: "10th Edition", publisher: "CRC Press", focus: "Surgical step-by-step technique, incisions, tissue dissection, and knot tying",
              link: "https://www.google.com/search?tbm=bks&q=Farquharson%27s+Textbook+of+Operative+General+Surgery"
            }
          ]
        },
        competencies: ["Identify surgical instruments (Yantra & Shastra) and sterilize operative field", "Prepare and apply Ksharasutra in anal fistula (Bhagandara)", "Perform therapeutic Agnikarma and minor surgical dressings"]
      },
      {
        id: "shalakya-tantra",
        name: "Shalakya Tantra",
        translation: "Ophthalmology, ENT, & Oro-Dental Diseases (Above Clavicle)",
        code: "AyUG-SKT",
        papers: [
          { paper: "Paper I", marks: 100, topics: "Netra Roga: Sandhigata, Vartmagata, Shuklagata, Krishnagata, Sarvagata, Drishtigata Roga (Timira, Linganasha/Cataract), Netra Kriya Kalpa (Tarpana, Putapaka, Aschyotana)." },
          { paper: "Paper II", marks: 100, topics: "Karna Roga (Badhirya, Karnasrava), Nasa Roga (Pratishyaya, Dushta Pratishyaya), Mukha & Danta Roga, Shiro Roga (Suryavarta, Ardhavabhedaka)." }
        ],
        theoryMarks: 200,
        practicalMarks: 100,
        totalMarks: 300,
        referenceBooks: {
          classical: [
            { title: "Sushruta Samhita (Uttaratantra Chapters 1 to 26 - Netra Roga; Chapters 27 to 37 - Karna/Nasa/Mukha Roga)", author: "Acharya Sushruta", commentary: "Nibandhasamgraha by Dalhana", publisher: "Chaukhambha Sanskrit Series",
              link: "https://archive.org/details/sushruta-samhita-with-nibandhasamgraha-of-dalhana"
            },
            { title: "Ashtanga Hridaya (Uttarasthana Chapters 8 to 24)", author: "Vagbhata", commentary: "Sarvangasundara by Arunadatta", publisher: "Chaukhambha Orientalia",
              link: "https://archive.org/details/ashtanga-hridaya-of-vagbhata-with-sarvangasundari-commentary-of-arunadatta-and-ayurvedarasayana-of-hemadri-dr-anna-moreswara-kunte"
            }
          ],
          modernAyurvedic: [
            { title: "Shalakya Tantra (Vols 1 & 2)", author: "Dr. Ramanath Dwivedi", publisher: "Chaukhambha Bharati Academy", focus: "The premier classical curriculum textbook for Netra, Karna, Nasa, and Mukha Rogas",
              link: "https://archive.org/search?query=Shalakya+Tantra+Ramanath+Dwivedi"
            },
            { title: "Netra Roga Vijnana", author: "Dr. Ravindra Angadi", publisher: "Chaukhambha Surbharati", focus: "Modern classification of eye diseases correlated with Sushruta's 76 Netra Rogas and Kriya Kalpas",
              link: "https://archive.org/search?query=Netra+Roga+Vijnana+Ravindra+Dhiman"
            },
            { title: "Kriya Kalpa Illustrated", author: "Dr. P.K. Santhakumari", publisher: "Government Ayurveda College, Thiruvananthapuram", focus: "Practical ocular procedures: Tarpana, Putapaka, Seka, Aschyotana, Anjana, Pindi, Bidalaka",
              link: "https://archive.org/search?query=Kriya+Kalpa+in+Shalakya+Tantra"
            }
          ],
          contemporaryMedical: [
            { title: "Parsons' Diseases of the Eye", author: "Ramanjit Sihota & Radhika Tandon", edition: "23rd Edition", publisher: "Elsevier", focus: "Standard textbook for ophthalmology: refraction, cataract, glaucoma, corneal ulcers, and retinal disorders",
              link: "https://www.google.com/search?tbm=bks&q=Parsons%27+Diseases+of+the+Eye"
            },
            { title: "Diseases of Ear, Nose and Throat & Head and Neck Surgery", author: "P.L. Dhingra & Shruti Dhingra", edition: "8th Edition", publisher: "Elsevier", focus: "Standard Indian medical guide for ENT examination, hearing tests, rhinitis, sinusitis, and tonsillitis",
              link: "https://www.google.com/search?tbm=bks&q=Diseases+of+Ear+Nose+and+Throat+Dhingra"
            }
          ]
        },
        competencies: ["Perform ocular local therapeutics (Netra Tarpana, Anjana, Seka)", "Examine ear, nose, and oral cavity using ENT diagnostic aids", "Formulate targeted formulations for supra-clavicular disorders (Urdhwajatrugata Roga)"]
      },
      {
        id: "research-methodology",
        name: "Research Methodology & Medical Statistics",
        translation: "Research Principles & AYUSH Biostatistics",
        code: "AyUG-RM",
        papers: [
          { paper: "Paper I", marks: 50, topics: "Types of research, Clinical trial designs, GCP-AYUSH guidelines, Pharmacovigilance, Biostatistics (Mean, Median, Mode, SD, t-test, Chi-square test, p-value)." }
        ],
        theoryMarks: 50,
        practicalMarks: 0,
        totalMarks: 50,
        referenceBooks: {
          classical: [
            { title: "Charaka Samhita (Vimanasthana Chapter 8 - Rogabhishagjitiya Adhyaya)", author: "Charaka", commentary: "Vada Maryada, Sambhasha Parishad, and Anumana Pramana criteria", publisher: "Chaukhambha",
              link: "https://archive.org/details/charakasamhitawithayurvedadipika"
            }
          ],
          modernAyurvedic: [
            { title: "Research Methodology for Ayurveda", author: "Central Council for Research in Ayurvedic Sciences (CCRAS)", publisher: "Ministry of AYUSH, New Delhi", focus: "Official guidelines for protocol development, literary research, and clinical validation",
              link: "https://archive.org/search?query=Research+Methodology+for+Ayurveda+B.+Ravishankar"
            },
            { title: "Good Clinical Practice Guidelines for Clinical Trials in Ayurveda (GCP-AYUSH)", author: "Ministry of AYUSH", publisher: "Govt of India", focus: "Ethical guidelines, safety documentation, informed consent, and adverse event reporting in Ayurveda",
              link: "https://www.ayush.gov.in/good-clinical-practice-guidelines-ayush.html"
            }
          ],
          contemporaryMedical: [
            { title: "Methods in Biostatistics for Medical Students & Research Workers", author: "B.K. Mahajan", edition: "9th Edition", publisher: "Jaypee Brothers", focus: "Standard medical statistics: probability, normal distribution, t-test, Chi-square, ANOVA, and p-value interpretation",
              link: "https://www.google.com/search?tbm=bks&q=Methods+in+Biostatistics+BK+Mahajan"
            },
            { title: "Designing Clinical Research", author: "Stephen B. Hulley et al.", edition: "4th Edition", publisher: "Lippincott Williams & Wilkins", focus: "Randomized controlled trials, cohort studies, blinding techniques, and sample size calculations",
              link: "https://www.google.com/search?tbm=bks&q=Designing+Clinical+Research+Hulley"
            }
          ]
        },
        competencies: ["Design research protocols for clinical validation of Ayurvedic therapies", "Interpret statistical outcomes and evidence-based clinical literature"]
      }
    ]
  }
];
