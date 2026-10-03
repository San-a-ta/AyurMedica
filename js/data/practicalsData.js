/**
 * AYUSH / NCISM Practical Manual & Viva Voce Q&A Data
 * Structured for BAMS 1st to 4th Professional Years
 */
window.BAMS_PRACTICALS = [
  // 1st Prof: Kriya Sharira
  {
    id: "prac-ks-prakriti",
    year: "1st Prof",
    subject: "Kriya Sharira",
    subjectId: "kriya-sharir",
    title: "Assessment of Deha Prakriti (Physical Constitution Assessment)",
    aim: "To determine the individual somatic constitution (Vata, Pitta, Kapha or Dwandwaja/Sannipataja) through clinical examination and validated questionnaire.",
    classicalRef: "Charaka Samhita Vimanasthana 8/96-98 ('तत्र प्रकृत्या वातलाः... पित्तलाः... श्लेष्मलाः...')",
    apparatus: "Prakriti assessment proforma, anthropometric measuring tape, weighing scale, skin caliper, diagnostic torch.",
    principle: "Prakriti is formed at the time of Shukra-Shonita Samyoga (fertilization) according to the predominance of Doshas and remains constant throughout life (Avyabhichari). Understanding Prakriti is vital for Svāsthyarakshaṇa (preventive health) and Rogaprashamana (tailored therapeutics).",
    steps: [
      { stepNumber: 1, title: "Physical Parameter Inspection (Sharirika Lakshana)", detail: "Observe body frame (Krisha/Sthula), skin texture (Ruksha/Snigdha/Ushna), hair quality (Khara/Pingala/Snigdha-ghana), eyes (Chanchala/Rakta-anta/Snigdha-shukla), and dentition." },
      { stepNumber: 2, title: "Physiological & Functional Assessment (Karmatmaka Lakshana)", detail: "Inquire regarding Agni (Vishamagni/Tikshnagni/Mandagni), Kostha (Krura/Mrida/Madhyama), perspiration tolerance to heat/cold, appetite pattern, and sleep quality." },
      { stepNumber: 3, title: "Psychological / Behavioral Evaluation (Manasika Lakshana)", detail: "Evaluate memory type (Sheeghra Grahi-Sheeghra Vismari vs Chirakaari), anger onset & subsidence, speech cadence, and dream contents (flying/fire/water bodies)." },
      { stepNumber: 4, title: "Scoring & Categorization", detail: "Calculate percentage scores for Vata, Pitta, and Kapha components to designate Doshika predominance (e.g., Pitta-Kaphaja, Vata-Pittaja, or Ekadoshaja)." }
    ],
    observations: "Standard clinical documentation table recording 30 classical attributes categorized under Sharirika, Karmatmaka, and Manasika parameters.",
    precautions: [
      "Ensure the subject is examined in natural daylight without artificial makeup or cosmetic hydration.",
      "Inquire regarding lifelong baseline tendencies rather than transient pathological symptoms (Vikriti vs Prakriti distinction)."
    ],
    demoVideoId: "demo-prakriti-pariksha",
    vivaQuestions: [
      {
        question: "When is Deha Prakriti determined according to Ayurveda?",
        answer: "Prakriti is determined at the precise moment of conception (Shukra-Shonita Samyoga) based on the dominant Dosha in the sperm, ovum, maternal diet/lifestyle, uterus (Garbhashaya), and season (Kala).",
        examinerTip: "Quote 'शुक्रशोणितसंयोगे यो भवेद्दोष उत्कटः। प्रकृत्या जायते तेन...' (Sushruta Sharirasthana 4/63)."
      },
      {
        question: "What is the difference between Prakriti and Vikriti?",
        answer: "Prakriti is the natural, healthy baseline constitution established at birth. Vikriti is the acquired pathological imbalance or deviation of Doshas from the baseline due to improper diet (Mithyahara) and lifestyle (Mithyavihara).",
        examinerTip: "Highlight that Chikitsa aims to bring Vikriti back toward Prakriti equilibrium."
      },
      {
        question: "Which Prakriti is considered Shrestha (superior) and which is Nindya (least desirable)?",
        answer: "Sama-Dhatu (Sannipataja/Equilibrium) Prakriti is Shrestha (superior/ideal). Ekadoshaja Prakritis are Nindya (prone to disease), and Vata Prakriti is considered Hina (lowest threshold for diseases).",
        examinerTip: "Mention that pure Sama Prakriti is rare in contemporary clinical practice."
      },
      {
        question: "Explain the Kostha and Agni characteristic of a Pitta Prakriti individual.",
        answer: "A Pitta Prakriti individual typically exhibits Mridu Kostha (soft bowel habit, easily purged by mild laxatives like warm milk) and Tikshnagni (sharp, intense digestive capacity with inability to tolerate delayed meals).",
        examinerTip: "Contrast with Vata's Krura Kostha & Vishamagni, and Kapha's Madhyama Kostha & Mandagni."
      }
    ]
  },

  // 1st Prof: Rachana Sharira
  {
    id: "prac-rs-marma",
    year: "1st Prof",
    subject: "Rachana Sharira",
    subjectId: "rachana-sharir",
    title: "Identification and Demarcation of 107 Marma Points (Focus: Sadyah Pranahara Marmas)",
    aim: "To palpate, measure, and anatomically delineate critical vital points (Marma Sharira) with emphasis on Sadyah Pranahara (fatal) Marmas on human subjects and anatomical models.",
    classicalRef: "Sushruta Samhita Sharirasthana Chapter 6 ('सप्तोत्तरं मर्मशतम्... मर्माणि नाम मांससिरास्नाय्वस्थिसन्धिसन्निपाताः')",
    apparatus: "Human anatomical skeleton, cadaveric specimen, metric skin-marking pen, goniometer, Marma measurement chart in Anguli Pramana.",
    principle: "Marmas are vital anatomical junctions where Mamsa (muscle), Sira (vessels), Snayu (ligaments), Asthi (bones), and Sandhi (joints) converge, and where Prana (vital life essence) resides. Injury leads to instant fatality, disability, or excruciating pain.",
    steps: [
      { stepNumber: 1, title: "Locate Shringataka Marma", detail: "Identify the confluence of vessels supplying the nose, ear, eye, and tongue inside the cranial vault (anatomically correlated with Cavernous Sinus / Circle of Willis)." },
      { stepNumber: 2, title: "Demarcate Hridaya Marma", detail: "Palpate the anterior thoracic wall between the two breasts (Stana) above the Amashaya. Correlates with the anatomical heart and pericardial sac. Pramana: 4 Anguli (Pani-tala)." },
      { stepNumber: 3, title: "Demarcate Nabhi Marma", detail: "Locate the umbilical region between Pakwashaya and Amashaya, representing the root of all Siras (correlates with Inferior Vena Cava and Abdominal Aorta bifurcations)." },
      { stepNumber: 4, title: "Locate Basti Marma", detail: "Palpate the suprapubic pelvic cavity corresponding to the urinary bladder. Traumatic puncture produces rapid extravasation of urine and Sadyah Marana (instant death)." },
      { stepNumber: 5, title: "Measure Sthapani Marma", detail: "Locate the Glabella between the two eyebrows (Bhrumadhya), measuring 1/2 Anguli. Correlates with the nasion and frontal venous plexus." }
    ],
    observations: "Exact anatomical surface landmarks recorded with corresponding Anguli Pramana, structural classification, and prognosis upon trauma (Viddha Lakshana).",
    precautions: [
      "Avoid applying excessive pressure during live palpation of cervical and carotid triangle Marmas (Manya, Matrika).",
      "Correlate classical Anguli measurement with patient's own finger breadth (Sva-Anguli Pramana)."
    ],
    demoVideoId: "demo-marma-sharir",
    vivaQuestions: [
      {
        question: "How many total Marmas are described in Sushruta Samhita, and how are they classified according to prognosis (Parinama)?",
        answer: "There are 107 Marmas classified into 5 prognostic types: 1. Sadyah Pranahara (19 - causes death within 7 days), 2. Kalantara Pranahara (33 - causes death within 15 days to 1 month), 3. Vishalyaghna (3 - fatal if foreign body is extracted), 4. Vaikalyakara (44 - causes permanent disability), 5. Rujakara (8 - causes severe chronic pain).",
        examinerTip: "Memorize the count: 19 + 33 + 3 + 44 + 8 = 107."
      },
      {
        question: "Why is a Vishalyaghna Marma fatal upon extraction of the shalya (foreign body)?",
        answer: "When an arrow or foreign body impacts a Vishalyaghna Marma (e.g., Utkshepa), it plugs the injured vessel and traps the Vayu/Prana inside. As long as the Shalya remains in situ, the patient lives; upon extraction, Vayu escapes, massive hemorrhage occurs, and death ensues.",
        examinerTip: "Connect this directly to modern emergency surgical principles of impaled objects."
      },
      {
        question: "Name the anatomical structures comprising the five components of any Marma.",
        answer: "Mamsa (Muscles), Sira (Blood vessels), Snayu (Tendons/Ligaments), Asthi (Bones), and Sandhi (Joints). Even if named by its predominant tissue (e.g. Mamsa Marma), all five tissues are inherently present.",
        examinerTip: "Sushruta specifically emphasizes this pan-tissue convergence."
      }
    ]
  },

  // 2nd Prof: Rasa Shastra & Bhaishajya Kalpana
  {
    id: "prac-rs-hingula-shodhana",
    year: "2nd Prof",
    subject: "Rasa Shastra & Bhaishajya Kalpana",
    subjectId: "rasashastra-bhaishajya",
    title: "Shodhana of Hingula (Purification of Cinnabar / Red Mercuric Sulphide)",
    aim: "To carry out classical purification (Shodhana) of crude Hingula (HgS) using Nimbu Swarasa (lemon juice) or Ardraka Swarasa (ginger juice) by Bhavana method.",
    classicalRef: "Rasa Tarangini Taranga 9/16-18 ('दरदः शोधितः सम्यग् भावनाभिस्तु सप्तभिः। निम्बूकरससंयुक्ते...')",
    apparatus: "Khalva Yantra (porcelain or stone mortar and pestle), stainless steel spatula, measuring cylinder, muslin cloth, airtight amber glass jar.",
    principle: "Crude Hingula contains physical and chemical impurities (toxic sulfur compounds and heavy metals). Trituration (Bhavana) with acidic citrus media (Nimbu Swarasa) chemically detoxifies, breaks down crystalline particle size (micro-fine subdivision), and enhances therapeutic bioavailability.",
    steps: [
      { stepNumber: 1, title: "Coarse Powdering", detail: "Weigh 100g of genuine crude Hingula (Hingula should show bright cochineal-red or pigeon-blood hue) and crush into a fine powder in the Khalva Yantra." },
      { stepNumber: 2, title: "Media Preparation", detail: "Express fresh Nimbu Swarasa (lemon juice), filter through two folds of clean muslin cloth to remove pulp and seeds." },
      { stepNumber: 3, title: "Bhavana (Wet Trituration)", detail: "Add sufficient Nimbu Swarasa to completely submerge the Hingula powder. Triturate vigorously until the liquid is entirely absorbed and dried by friction." },
      { stepNumber: 4, title: "Repeat Cycles", detail: "Repeat the addition of fresh juice and trituration for a total of 7 consecutive Bhavanas (Saptadha Bhavana). Each cycle takes approximately 5-6 hours of continuous grinding." },
      { stepNumber: 5, title: "Drying and Storage", detail: "Dry the purified Hingula in shade (Chhaya-shushka), test for uniform micro-fine luster, weigh to calculate percentage yield, and preserve in an airtight glass container." }
    ],
    observations: "Color shifts from bright crystalline scarlet to deep uniform velvety crimson powder. Weight loss observed typically between 2% to 4% due to removal of impurities.",
    precautions: [
      "Wear protective gloves and laboratory face mask during dry powdering to avoid inhalation of mercurial dust.",
      "Never apply external direct heat during Hingula Shodhana as mercury volatilizes above 356°C."
    ],
    demoVideoId: "demo-hingula-shodhana",
    vivaQuestions: [
      {
        question: "What is the chemical composition of Hingula and what are its two classical varieties?",
        answer: "Hingula is Red Mercuric Sulphide (HgS). Classical texts describe two varieties: 1. Charmaara (inferior, yellowish-red, brick-like), 2. Shakatottha or Hamsapaka (superior, deep cochineal/pigeon-blood red with glistening crystalline fracture).",
        examinerTip: "Hamsapaka is preferred for Rasayana and medicinal formulations."
      },
      {
        question: "Why is Hingula considered an alternative source for obtaining Parada (Hingulottha Parada)?",
        answer: "When Hingula is subjected to sublimation in a Damaru Yantra or Patana Yantra with heat, pure metallic Mercury (Parada) condenses on the upper cooler surface while sulfur burns off or remains below. This Hingulottha Parada is equal in purity to Ashtadasha Samskarita Parada.",
        examinerTip: "Quote Rasa Tarangini: 'हिंगुलोत्थः सूतोऽयं सर्वदोषविवर्जितः'."
      },
      {
        question: "What is the therapeutic dose of Shodhita Hingula?",
        answer: "The therapeutic therapeutic dosage of Shodhita Hingula is 1/2 to 1 Ratti (62.5 mg to 125 mg) administered with appropriate Anupana like honey, ginger juice, or butter.",
        examinerTip: "Always mention the standard metric conversion (1 Ratti ≈ 125 mg)."
      }
    ]
  },

  // 2nd Prof: Dravyaguna Vijnana
  {
    id: "prac-dg-haritaki",
    year: "2nd Prof",
    subject: "Dravyaguna Vijnana",
    subjectId: "dravyaguna",
    title: "Pharmacognostical & Macroscopic Identification of Haritaki (Terminalia chebula Retz.)",
    aim: "To identify, evaluate organoleptic characters, examine macroscopic features, and record the Rasa Panchaka of Haritaki fruit.",
    classicalRef: "Bhavaprakasha Nighantu Haritakyadi Varga Shloka 1-38 ('हरीतकी पञ्चरसाऽलवणा तुवरा परा...')",
    apparatus: "Magnifying hand lens (10x), dissecting microscope, dissection tray, razor blade, glass slides, sample specimens of fresh and dry Haritaki.",
    principle: "Haritaki is the foremost drug in Ayurveda, revered as 'Mother to Humanity' (Yatha Mata Stanyada). It possesses five Rasas (excluding Lavana) with dominant Kashaya (astringent) and Madhura Anurasa, exhibiting Tridoshahara and Anulomana actions.",
    steps: [
      { stepNumber: 1, title: "Morphological Inspection", detail: "Examine dry drupe fruit: yellowish-brown to dark brown, oval/obovate, 2 to 4 cm long, displaying 5 to 6 longitudinal ribs on the wrinkled outer pericarp." },
      { stepNumber: 2, title: "Transverse Section (T.S.)", detail: "Make a neat transverse section across the fruit pericarp. Inspect epicarp with stomata, parenchymatous mesocarp embedded with vascular bundles and rosette calcium oxalate crystals." },
      { stepNumber: 3, title: "Organoleptic Tasting", detail: "Perform organoleptic taste test: First taste perceived is Kashaya (astringent), followed by Tikta and Katu, with an enduring sweet aftertaste (Madhura Anurasa). Salt (Lavana) taste is entirely absent." },
      { stepNumber: 4, title: "Variety Differentiation", detail: "Categorize among the seven classical varieties: Vijaya (oval, all diseases), Rohini (round, wound healing), Putana (small, external use), Amrita (thick mesocarp, purgative), Abhaya (five ribs, eye ailments), Jivanti (golden, all diseases), and Chetaki (three ribs, strong laxative)." }
    ],
    observations: "Document fruit dimensions, seed stone (endocarp) hardness, moisture content, and absence of insect infestation or fungal rot.",
    precautions: [
      "Ensure the fruit pulp is free from weevil holes or internal mould.",
      "Discard the hard stone/seed kernel when preparing medicinal churna unless specifically indicated."
    ],
    demoVideoId: "demo-dravyaguna-spotting",
    vivaQuestions: [
      {
        question: "State the complete Rasa Panchaka of Haritaki.",
        answer: "Rasa: Kashaya-pradhana, Pancharasa (Alavana - lacks salt taste); Guna: Laghu, Ruksha; Virya: Ushna; Vipaka: Madhura; Prabhava: Tridoshahara (specifically Vata Anulomana).",
        examinerTip: "Emphasize that despite being Ushna Virya, it does not aggravate Pitta due to Kashaya-Madhura combination."
      },
      {
        question: "What is Ritu Haritaki (Seasonal administration of Haritaki with different Anupanas)?",
        answer: "In order to maintain health throughout the year, Haritaki is consumed with specific adjuvants: Varsha (monsoon) with Saindhava (rock salt); Sharad (autumn) with Sharkara (sugar); Hemanta (early winter) with Shunthi (dry ginger); Shishira (late winter) with Pippali (long pepper); Vasanta (spring) with Madhu (honey); Grishma (summer) with Guda (jaggery).",
        examinerTip: "Memorize the mnemonic: 'सैन्धवं शर्करां शुण्ठीं पिप्पलीं मधुना गुडे। वर्षार्व्येषु क्रमेणैव हरीतकीं निषेवयेत्॥'"
      },
      {
        question: "Name 3 prominent classical formulations containing Haritaki as a primary ingredient.",
        answer: "1. Triphala Churna, 2. Abhayarishta, 3. Agastya Haritaki Rasayana (also Brahma Rasayana and Chitraka Haritaki).",
        examinerTip: "Mention Abhayarishta's main indication in Arsha (hemorrhoids) and constipation."
      }
    ]
  },

  // 3rd Prof: Swasthavritta & Yoga
  {
    id: "prac-sw-shatkarma-neti",
    year: "3rd Prof",
    subject: "Swasthavritta & Yoga",
    subjectId: "swasthavritta-yoga",
    title: "Demonstration and Clinical Evaluation of Jala Neti and Sutra Neti (Nasal Cleansing Shatkarmas)",
    aim: "To demonstrate the clinical technique of nasal irrigation (Jala Neti) and catheter cleansing (Sutra Neti) for upper respiratory tract hygiene and ENT disease prevention.",
    classicalRef: "Hatha Yoga Pradipika 2/29-30 ('घ्राणरन्ध्रे प्रवेश्यैकं हस्तप्रान्तं विनिर्गमेत्... कपालशोधिनी चैव दिव्यदृष्टिप्रदायिनी')",
    apparatus: "Neti pot with conical nozzle, lukewarm isotonic sterile saline solution (0.9% NaCl), sterile rubber catheter (Size 3 or 4) or waxed cotton thread, antiseptic bowl, clean tissues.",
    principle: "Neti flushes accumulated mucus, allergens, and airborne pollutants from the nasal passages, stimulates the olfactory nerve endings, promotes reflex drainage of paranasal sinuses, and purifies Kapha from the supra-clavicular region (Urdhwajatru).",
    steps: [
      { stepNumber: 1, title: "Solution Preparation", detail: "Dissolve 1 level teaspoon of pure rock salt (Saindhava) in 500 ml of lukewarm sterile water (37°C body temperature). Verify non-irritating isotonicity." },
      { stepNumber: 2, title: "Postural Positioning", detail: "Instruct the subject to stand with feet apart, lean forward at 45° from the waist, tilt the head sideways over a wash basin, and keep the mouth gently open for oral breathing." },
      { stepNumber: 3, title: "Jala Neti Irrigation", detail: "Insert the spout into the upper nostril. Water flows smoothly through one nasal cavity, passes over the nasal septum, and drains out continuously through the lower nostril. Repeat for the opposite side." },
      { stepNumber: 4, title: "Nasal Drying (Drying Phase)", detail: "Perform Kapalabhati and gentle alternate nostril exhalations while leaning forward to clear all trapped droplets from paranasal sinuses." },
      { stepNumber: 5, title: "Sutra Neti (Advanced Technique)", detail: "Gently insert the lubricated rubber catheter through the nostril until it reaches the nasopharynx; catch the tip with index and middle fingers via the mouth and gently floss back and forth 2-3 times." }
    ],
    observations: "Immediate clearance of nasal obstruction, improved patency score, and stimulation of lacrimal secretions without mucosal bleeding.",
    precautions: [
      "Crucial: The subject MUST breathe exclusively through the mouth during the entire procedure to prevent water aspiration into the Eustachian tube.",
      "Never leave residual saline trapped in the sinuses; incomplete drying can trigger acute headache or sinusitis."
    ],
    demoVideoId: "demo-jala-neti",
    vivaQuestions: [
      {
        question: "List the 6 classical Shatkarmas mentioned in Hatha Yoga.",
        answer: "1. Dhauti (internal cleansing), 2. Basti (colonic irrigation), 3. Neti (nasal cleansing), 4. Trataka (gazing), 5. Nauli (abdominal churning), 6. Kapalabhati (frontal brain cleansing).",
        examinerTip: "Remember the shloka: 'धौतिर्बस्तिस्तथा नेतिस्त्राटकं नौलिकं तथा। कपालभातिश्चैतानि षट्कर्माणि प्रचक्षते॥'"
      },
      {
        question: "What are the specific clinical indications and contraindications for Jala Neti?",
        answer: "Indications: Chronic Pratishyaya (allergic rhinitis), Sinusitis, Headache due to Kapha, Eye fatigue. Contraindications: Active epistaxis (nasal bleeding), acute middle ear infection (Otitis media), and severe deviated nasal septum (DNS) with total obstruction.",
        examinerTip: "Highlight that rock salt prevents mucosal osmotic edema."
      },
      {
        question: "Which Ayurvedic Srotas and Dosha does Neti primarily target?",
        answer: "It primarily targets the Pranavaha Srotas and cleanses aggravated Kapha Dosha from the Shiro-Greeva region, balancing Prana Vayu.",
        examinerTip: "Connect this to the classical principle: 'नासा हि शिरसो द्वारम्' (The nose is the gateway to the head)."
      }
    ]
  },

  // 4th Prof: Panchakarma
  {
    id: "prac-pk-vamana",
    year: "4th Prof",
    subject: "Panchakarma",
    subjectId: "panchakarma",
    title: "Clinical Protocol & Supervision of Vamana Karma (Therapeutic Emesis)",
    aim: "To demonstrate the clinical execution, monitoring of Vega (emetic bouts), and assessment of Shuddhi Lakshana during classical Vamana Karma.",
    classicalRef: "Charaka Samhita Siddhisthana Chapter 1 & Ashtanga Hridaya Sutrasthana 18 ('वमनं कफपित्तहरे... प्रातर्भुक्ते...')",
    apparatus: "Vamana peetha (emesis chair), calibrated emesis collection basin, measuring jars, blood pressure monitor, pulse oximeter, emergency tray, warm water dispenser, Vamaka yoga ingredients.",
    principle: "Vamana is the prime purificatory measure for expelling aggravated Kapha Dosha (along with associated Pitta) lodged in the Amashaya (stomach) and whole body via the upper tract (Urdhwa Marga).",
    steps: [
      { stepNumber: 1, title: "Purva Karma (Preparatory Phase)", detail: "Administer Deepana-Pachana (Trikatu/Chitrakadi Vati) until Nirama state. Execute Abhyantara Snehana (increasing doses of medicated ghee for 3-7 days until Samyak Snigdha signs appear). Perform Sarvanga Abhyanga & Bashpa Swedana for 1-2 days. Provide Kapha-provoking diet (Urad dal, curd, fish) on previous night." },
      { stepNumber: 2, title: "Pradhana Karma - Akantha Pana", detail: "On the morning of Vamana (between 6:00 AM - 9:00 AM, Kapha Kala), feed the patient warm milk (Ksheera), sugarcane juice (Ikshu Rasa), or Yashtimadhu Phanta to total stomach capacity (Akantha Pana)." },
      { stepNumber: 3, title: "Administration of Vamaka Yoga", detail: "Administer Madanaphala Pippali Churna (3-6g) triturated with Yashtimadhu Kwatha, Saindhava Lavana, and honey. Have the patient wait 1 Muhurta (48 minutes) while sweating on forehead and goosebumps appear." },
      { stepNumber: 4, title: "Vega Monitoring & Collection", detail: "Encourage vomiting in a forward-seated posture with head supported. Record each Vega (projectile emetic bout) and Upavega (retching without full vomit). Measure total volume of intake vs output." },
      { stepNumber: 5, title: "Assessment of Antiki Lakshana", detail: "Inspect output: First food contents emerge, followed by thick viscous Kapha, and finally yellowish-green bile (Pitta-Anta Vamana). Appearance of Pitta marks successful completion (Samyak Shuddhi)." },
      { stepNumber: 6, title: "Paschat Karma (Post-treatment Care)", detail: "Perform Dhumapana (medicated smoking to clear residual throat Kapha), Kavala/Gandusha with warm water, complete physical rest, and initiate strict dietetic ladder (Samsarjana Krama: Peya, Vilepi, Akrita Yusha, Krita Yusha) for 3 to 7 days." }
    ],
    observations: "Measure Antiki (Pitta-anta), Vaigiki (8, 6, or 4 Vegas for Pravara, Madhyama, Avara Shuddhi), Maniki (volume measurement), and Laingiki (chest lightness, sensory clarity, appetite restoration).",
    precautions: [
      "Contraindicated in pregnant women, children, aged, cardiac patients, hematemesis, hypertension, and Krura Kostha with severe Vata.",
      "Keep emergency anti-emetic / anti-shock protocol ready (Himavantha Dravyas, IV cannula in situ)."
    ],
    demoVideoId: "demo-vamana-karma",
    vivaQuestions: [
      {
        question: "Why is Madanaphala considered the best among all Vamaka Dravyas (emetics)?",
        answer: "Madanaphala (Randia dumetorum) is declared 'Shrestha' because it possesses Anapayitvat (freedom from adverse toxic effects), Sukhavirechakatvat (induces effortless vomiting without causing shock), and balances Doshas without depleting vital Ojas.",
        examinerTip: "Quote Charaka Kalpasthana 1/13: 'फलानि फलसंज्ञाया विशेषात् फलमुच्यते... अनपायित्वात्'."
      },
      {
        question: "What are the three grades of Shuddhi in Vamana based on Vega count (Vaigiki)?",
        answer: "1. Pravara Shuddhi (Superior): 8 major Vegas; 2. Madhyama Shuddhi (Medium): 6 Vegas; 3. Avara Shuddhi (Minimum): 4 Vegas.",
        examinerTip: "Remind the examiner that Antiki (appearance of Pitta) and Laingiki (lightness of chest) are more definitive than pure numbers."
      },
      {
        question: "What is Samsarjana Krama and why is it mandatory after Vamana?",
        answer: "Samsarjana Krama is the graded re-introduction of easily digestible liquid-to-solid diet (Peya -> Vilepi -> Yusha -> Mamsarasa) over 3, 5, or 7 days. It is mandatory because Vamana temporarily extinguishes digestive fire (Agni Mandya like a tiny ember that must be rekindled gradually with dry grass).",
        examinerTip: "Use the classic metaphor of rekindling a small flame step by step."
      },
      {
        question: "What is the management if Vamana Vega does not initiate after consuming the Vamaka Yoga?",
        answer: "Administer warm water with Saindhava Lavana and Pippali churna; gently tickle the posterior uvula/soft palate with a clean lotus leaf stalk or gloved finger, and apply gentle fomentation (Swedana) over the epigastrium and back.",
        examinerTip: "Stress patient comfort and avoiding panic."
      }
    ]
  },

  // 4th Prof: Shalya Tantra
  {
    id: "prac-st-ksharasutra",
    year: "4th Prof",
    subject: "Shalya Tantra",
    subjectId: "shalya-tantra",
    title: "Standard Preparation and Clinical Application of Ksharasutra in Bhagandara (Fistula-in-ano)",
    aim: "To prepare standardized medicated alkaline thread (Ksharasutra) using Snuhi Ksheera, Apamarga Kshara, and Haridra Churna, and demonstrate its threading procedure.",
    classicalRef: "Chakradatta Arsho-Bhagandara Rogadhikara & Rasakamadhenu ('स्नुहीक्षीरेण संलिप्तं सूत्रं... पुनः पुनः क्षारैर्हरिद्राचूर्णेन...')",
    apparatus: "Ksharasutra drying cabinet (controlled temperature 35-40°C with UV sterilizer), Barbour linen surgical thread (size 20), sterile porcelain bowls, gloves, glass rod, graduated probe, airtight sterile glass tubes.",
    principle: "Ksharasutra acts through concurrent mechanical pressure necrosis, alkaline debridement (Kshara), antiseptic antibacterial action (Haridra), and proteolytic tissue lysis (Snuhi). It cuts and heals the fistulous tract simultaneously without damaging the anal sphincter.",
    steps: [
      { stepNumber: 1, title: "Thread Mounting & Snuhi Coating", detail: "Mount Barbour surgical linen thread No. 20 on the wooden Ksharasutra hangers. Coat evenly with fresh Euphorbia neriifolia latex (Snuhi Ksheera) 11 times. Allow the thread to dry in the Ksharasutra cabinet after each single coat." },
      { stepNumber: 2, title: "Apamarga Kshara Coating", detail: "Coat the thread with Snuhi Ksheera and immediately pass it through fine Apamarga Kshara (Achyranthes aspera ash alkaline extract) powder for 7 consecutive coats with inter-coat drying." },
      { stepNumber: 3, title: "Haridra Churna Coating", detail: "Apply Snuhi Ksheera and immediately coat with micro-pulverized Curcuma longa (Haridra) churna for 3 final coats to impart anti-inflammatory and antiseptic qualities and prevent excessive burning." },
      { stepNumber: 4, title: "Total Coated Count & Sterilization", detail: "Total number of coatings = 11 (Snuhi) + 7 (Snuhi + Kshara) + 3 (Snuhi + Haridra) = 21 coatings. Sterilize the dry thread under UV radiation and store in sterile glass tubes." },
      { stepNumber: 5, title: "Clinical Ligation in Bhagandara", detail: "Under local/spinal anesthesia and lithotomy position, pass a malleable copper/stainless steel fistula probe from external opening into the internal anal opening. Thread Ksharasutra through the eye of the probe, pull through the tract, and tie outside the anal verge with moderate tension." }
    ],
    observations: "Standard Ksharasutra shows uniform thickness (approx 1.75 - 1.9 mm), pH around 9.5 to 10.2 (strongly alkaline), and steady Unit Cutting Time (UCT) of approximately 1 cm per 7 days.",
    precautions: [
      "Harvest Snuhi Ksheera before sunrise during dry season to prevent moisture dilution.",
      "The thread must be changed once every 7 days (Primary and subsequent threading) until total tract cut-through occurs."
    ],
    demoVideoId: "demo-ksharasutra-application",
    vivaQuestions: [
      {
        question: "What is the total number of coatings applied to prepare standard Apamarga Ksharasutra?",
        answer: "A total of 21 coatings: 11 coatings of pure Snuhi Ksheera, followed by 7 coatings of Snuhi Ksheera + Apamarga Kshara, followed by 3 coatings of Snuhi Ksheera + Haridra Churna.",
        examinerTip: "Memorize the sequence: 11 + 7 + 3 = 21 coats."
      },
      {
        question: "Why is Ksharasutra considered superior to modern conventional fistulectomy?",
        answer: "Conventional fistulectomy carries a high risk of anal incontinence due to accidental division of the sphincter muscles, and high recurrence rates. Ksharasutra cuts through the tract very slowly while allowing fibrosis and healing behind it, preserving sphincter tone with virtually zero incontinence and under 1.5% recurrence.",
        examinerTip: "Mention the ICMR (Indian Council of Medical Research) multicentric clinical trial that validated Ksharasutra."
      },
      {
        question: "What alternatives are used if a patient is hypersensitive to Apamarga Kshara or Snuhi Ksheera?",
        answer: "For sensitive patients, Guggulu-based Ksharasutra, Udumbara Ksharasutra, or Gomutra-processed Ksharasutras are prepared as gentler alternatives.",
        examinerTip: "Guggulu-based thread causes significantly less initial post-ligation pain and burning."
      }
    ]
  },

  // 4th Prof: Shalakya Tantra
  {
    id: "prac-sk-akshi-tarpana",
    year: "4th Prof",
    subject: "Shalakya Tantra",
    subjectId: "shalakya-tantra",
    title: "Clinical Execution of Akshi Tarpana (Ocular Rejuvenation Therapy)",
    aim: "To demonstrate the preparation of dough enclosure and administration of medicated ghee (Ghrita) for Akshi Tarpana in refractive errors and dry eye syndrome.",
    classicalRef: "Sushruta Samhita Uttaratantra Chapter 18 ('अथातो नेत्रक्रियाकल्पविज्ञानीयमध्यायं व्याख्यास्यामः... तर्पणं पुटपाकश्च...')",
    apparatus: "Black gram flour (Masha Churna), warm water, sterile medicated ghee (Triphala Ghrita / Jeevantyadi Ghrita), water bath heater, thermometer, cotton pads, eye wash cups.",
    principle: "Akshi Tarpana is the supreme ocular nourishment therapy. The lipid-soluble phytoconstituents of medicated Ghrita penetrate the cornea and sclera into deeper ocular tissues, strengthening ciliary muscles, revitalizing optical photoreceptors, and stabilizing tear film.",
    steps: [
      { stepNumber: 1, title: "Dough Dam Construction", detail: "Knead fine Masha Churna (black gram flour) with lukewarm water into an elastic firm dough. Construct two leak-proof circular rims (approx 2 finger-breadths height) encircling both orbital margins." },
      { stepNumber: 2, title: "Ghee Liquefaction & Temperature Check", detail: "Gently melt Triphala Ghrita using an indirect water bath. Ensure the temperature is strictly maintained between 37°C - 38°C (lukewarm, never hot)." },
      { stepNumber: 3, title: "Instillation into Dough Enclosure", detail: "With patient lying supine in a windless room, pour the lukewarm Ghrita steadily along the outer wall until eye lashes are completely submerged." },
      { stepNumber: 4, title: "Controlled Blinking Protocol", detail: "Instruct patient to steadily open and close eyelids (Unmesha-Nimesha) for a timed duration according to the disease (500 to 1000 Matra Kala; approx 15 to 20 minutes)." },
      { stepNumber: 5, title: "Drainage & Post-Procedure Care", detail: "Drain the ghee through a puncture made at the outer canthus. Remove the dough rim, wipe lids with warm moist cotton pads, apply light fomentation, and caution patient against looking at bright lights, sun, or digital screens for 24 hours." }
    ],
    observations: "Soothed sensation in eyes (Prakasha Kshamata), reduction in dry eye scratchiness, visual lightness, and lustrous scleral sheen (Netra Prasada).",
    precautions: [
      "Strictly check temperature on patient's forearm before eye instillation to eliminate any risk of corneal thermal burn.",
      "Contraindicated in active conjunctivitis (Abhishyanda in acute inflammatory stage), corneal ulcers, and rainy/cloudy days."
    ],
    demoVideoId: "demo-akshi-tarpana",
    vivaQuestions: [
      {
        question: "What are the indications (Arha) for Akshi Tarpana?",
        answer: "Shushkakshipaka (Dry Eye Syndrome), Timira (Refractive errors & early cataract), Krichronmeelana (Difficulty opening eyes), Abhighata (Post-traumatic convalescence), and Vata-Pitta ocular degeneration.",
        examinerTip: "Highlight that it is contraindicated in acute exudative eye diseases (Taruna Abhishyanda)."
      },
      {
        question: "Define Matra Kala as used for measuring the duration of Netra Tarpana.",
        answer: "One Matra Kala is the time taken to blink the eye once naturally, or the time taken to snap the fingers once after circling one's knee comfortably (approx 1 to 1.5 seconds).",
        examinerTip: "For Drishtigata Roga (refractive errors), 800-1000 Matra duration is prescribed."
      },
      {
        question: "Name 2 prime classical Ghritas used in Akshi Tarpana.",
        answer: "1. Triphala Ghrita, 2. Jeevantyadi Ghrita (and Mahatriphala Ghrita).",
        examinerTip: "Explain why ghee is the vehicle: Ocular barriers (lipophilic corneal epithelium) permit lipid-based drug penetration far better than aqueous drops."
      }
    ]
  }
];
