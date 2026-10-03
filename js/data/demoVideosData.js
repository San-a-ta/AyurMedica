/**
 * AI-Generated Practical Simulations & Virtual Laboratory Dataset
 * Ministry of AYUSH & NCISM Aligned Interactive Simulation Models
 */
window.BAMS_AI_SIMULATIONS = [
  {
    id: "demo-prakriti-pariksha",
    title: "AI Somatic Simulation: Deha Prakriti Biometric Assessment",
    year: "1st Prof",
    subject: "Kriya Sharira",
    duration: "12:00 AI Simulation",
    type: "AI Biometric Phenotype Simulator",
    aiMentor: {
      name: "Charaka-AI Clinical Mentor",
      badge: "AYUSH Certified Expert System",
      avatar: "🌿"
    },
    overview: "Interactive AI-powered somatic diagnostic simulator that evaluates phenotypic markers, metabolic tolerance, and neuromuscular traits to compute individual Sharirika & Manasika Prakriti.",
    simulationModel: {
      canvasType: "prakriti-scanner",
      parameters: [
        { name: "Body Texture", options: ["Ruksha / Dry (Vata)", "Snigdha / Warm (Pitta)", "Sandra / Moist (Kapha)"] },
        { name: "Agni Pattern", options: ["Vishamagni (Irregular)", "Tikshnagni (Sharp/Intense)", "Mandagni (Sluggish/Slow)"] },
        { name: "Kostha (Bowels)", options: ["Krura (Hard/Constipated)", "Mridu (Soft/Loose)", "Madhyama (Regular)"] },
        { name: "Physical Frame", options: ["Krisha (Lean/Slender)", "Madhyama (Athletic)", "Sthula (Broad/Heavy)"] }
      ]
    },
    chapters: [
      { time: "Phase 1", title: "AI Optical Scanning: Hair, Sclera, & Integumentary Signs" },
      { time: "Phase 2", title: "Metabolic Profiling: Agni, Kostha & Appetite Biorhythms" },
      { time: "Phase 3", title: "Neuromuscular & Joint Crepitus (Sandhisphutana) Analysis" },
      { time: "Phase 4", title: "Psychometric Assessment: Memory Cadence & Stress Response" },
      { time: "Phase 5", title: "AI Algorithmic Doshic Matrix & Final Prakriti Score" }
    ],
    aiDecisionCheckpoint: {
      scenario: "During examination, a patient presents with intense hunger (cannot tolerate skipped meals), loose stools after milk, reddish conjunctival angle, and high heat intolerance. How does the AI classify their predominant Doshic constitution?",
      options: [
        "Vata Prakriti due to bowel variability",
        "Pitta Prakriti due to Tikshnagni, Mridu Kostha, and Ushna intolerance",
        "Kapha Prakriti due to excess fluid in stools"
      ],
      correctIndex: 1,
      aiFeedback: "Precisely correct! Tikshnagni (hyper-metabolic fire), Mridu Kostha (rapid transit with loose stool), and intolerance to heat are cardinal characteristics of Pitta Prakriti ('पित्तलास्तूष्णासहा... मृदुकोष्ठाः')."
    },
    aiQuickQA: [
      {
        q: "Why does Vata Prakriti show joint crepitus (clicking sounds)?",
        a: "Vata is Ruksha (dry) and Khara (rough) by nature. In Vata constitutions, Shleshaka Kapha (synovial fluid) in Sandhis is naturally sparse, leading to intra-articular friction and classical clicking sounds (Sandhisphutana)."
      },
      {
        q: "Can an individual's fundamental Prakriti change over their lifespan?",
        a: "No. Classical texts explicitly establish that Janma Prakriti is Avyabhichari (immutable like the poison in a scorpion). What fluctuates with age, diet, and season is Vikriti (pathological deviation)."
      },
      {
        q: "Which Prakriti has the highest innate immunity (Vyadhikshamatwa)?",
        a: "Kapha Prakriti possesses the highest innate physiological Bala and Ojas due to abundant Snigdha and Somya qualities, followed by Pitta (medium), while Vata possesses the lowest baseline threshold (Alpa-bala)."
      }
    ],
    procedureChecklist: [
      "Natural daylight calibration for facial and scleral inspection",
      "Record baseline pulse contour (Nadi) at rest (60-80 bpm)",
      "Evaluate lifelong appetite pattern independent of acute illness",
      "Assess skin temperature on ventral forearm",
      "Run AI 30-parameter scoring algorithm to differentiate Dwandwaja vs Ekadoshaja"
    ],
    clinicalPearls: [
      "Never assess Prakriti during acute fever or severe systemic infection; wait for Niramavastha.",
      "Vata memory is Sheeghra Grahi-Sheeghra Vismari (learns instantly, forgets quickly); Kapha is Chiragrahi-Dridha Smriti (slow to learn, never forgets)."
    ]
  },
  {
    id: "demo-marma-sharir",
    title: "AI 3D Anatomy Simulation: 107 Vital Marma Hotspots & Dissection Layers",
    year: "1st Prof",
    subject: "Rachana Sharira",
    duration: "15:30 AI Simulation",
    type: "AI 3D Cadaveric & Cross-Sectional Simulator",
    aiMentor: {
      name: "Sushruta-AI Surgical Anatomist",
      badge: "Surgical Landmark Specialist",
      avatar: "⚕️"
    },
    overview: "3D virtual anatomical simulator tracing the precise coordinates, anatomical layers, tissue convergence (Mamsa-Sira-Snayu-Asthi-Sandhi), and trauma prognosis of Sadyah Pranahara and Kalantara Pranahara Marmas.",
    simulationModel: {
      canvasType: "marma-map",
      hotspots: [
        { name: "Hridaya Marma", region: "Thoracic", pramana: "4 Anguli", type: "Sira Marma / Sadyah Pranahara", anatomy: "Pericardium, myocardium, coronary arteries, cardiac plexus" },
        { name: "Nabhi Marma", region: "Abdominal", pramana: "4 Anguli", type: "Sira Marma / Sadyah Pranahara", anatomy: "Umbilicus, bifurcation of abdominal aorta & inferior vena cava" },
        { name: "Basti Marma", region: "Pelvic", pramana: "4 Anguli", type: "Snayu Marma / Sadyah Pranahara", anatomy: "Urinary bladder, pelvic fascia, internal iliac vascular plexus" },
        { name: "Shringataka Marma", region: "Cranial", pramana: "4 Anguli", type: "Sira Marma / Sadyah Pranahara", anatomy: "Cavernous sinus, internal carotid artery, Circle of Willis" },
        { name: "Sthapani Marma", region: "Forehead (Bhrumadhya)", pramana: "1/2 Anguli", type: "Sira Marma / Vishalyaghna", anatomy: "Glabella, frontal venous plexus, supraorbital vessels" }
      ]
    },
    chapters: [
      { time: "Layer 1", title: "Superficial Fascia & Cutaneous Innervation of Marma Coordinates" },
      { time: "Layer 2", title: "Myological & Tendinous Sheaths (Mamsa & Snayu Architecture)" },
      { time: "Layer 3", title: "Deep Vascular Confluence (Sira Marma & Arterio-Venous Anastomosis)" },
      { time: "Layer 4", title: "Osteo-Articular Base (Asthi & Sandhi Anchors)" },
      { time: "Layer 5", title: "AI Trauma Simulation: Traumatic Shock & Sadyah Marana Pathophysiology" }
    ],
    aiDecisionCheckpoint: {
      scenario: "A patient suffers an accidental penetrating trauma at Sthapani Marma (between the eyebrows). The foreign body (arrow tip / metal shard) is currently lodged tightly in the skull. What is the immediate surgical guideline according to Sushruta-AI?",
      options: [
        "Extract the weapon immediately in emergency triage without imaging",
        "Leave the foreign body in situ until surgical hemodynamic control is achieved, because Sthapani is Vishalyaghna (extracting it allows Vayu/blood to escape)",
        "Apply leech therapy directly over the foreign body"
      ],
      correctIndex: 1,
      aiFeedback: "Outstanding clinical judgment! Sthapani and Utkshepa are Vishalyaghna Marmas. As long as the shalya blocks the wound, air and fatal hemorrhage are arrested; extracting it prematurely leads to fatal cerebral hemorrhage unless performed in an equipped surgical theater with vascular control."
    },
    aiQuickQA: [
      {
        q: "What defines a Sadyah Pranahara Marma biologically?",
        a: "Sadyah Pranahara Marmas are Agneya (Fire Mahabhuta dominant). Injury causes destruction of vital Prana, resulting in irreversible neurogenic shock, exsanguination, or asphyxiation within 7 days."
      },
      {
        q: "What is Anguli Pramana and how is it measured on a live patient?",
        a: "Anguli Pramana is individual anthropometric measurement: 1 Anguli equals the breadth of the patient's own proximal interphalangeal joint of the middle finger (Sva-Anguli)."
      }
    ],
    procedureChecklist: [
      "Calibrate patient Sva-Anguli scale before landmark palpation",
      "Delineate sternal notch, xiphoid, and anterior superior iliac spines",
      "Inspect vascular pulses along carotid and femoral triangles",
      "Simulate protective surgical incision vectors parallel to Marma lines"
    ],
    clinicalPearls: [
      "All surgical incisions in Sushruta Samhita are planned to avoid dividing Marma centers directly (Marma-parirakshana).",
      "Extremity Marmas account for 44 out of 107 total points, making them vital in orthopedic reduction."
    ]
  },
  {
    id: "demo-hingula-shodhana",
    title: "AI Virtual Lab: Shodhana of Hingula (Cinnabar) via Nimbu Swarasa Bhavana",
    year: "2nd Prof",
    subject: "Rasa Shastra & Bhaishajya Kalpana",
    duration: "14:15 AI Simulation",
    type: "AI Pharmaceutical Chemistry Simulator",
    aiMentor: {
      name: "Rasa-Siddha AI Demonstrator",
      badge: "Ayurvedic Iatrochemistry Expert",
      avatar: "🔥"
    },
    overview: "Real-time AI laboratory simulation of triturating crude Red Mercuric Sulphide (HgS) in Khalva Yantra with fresh citrus juice through 7 continuous Bhavana cycles, tracking particle size reduction and detoxification.",
    simulationModel: {
      canvasType: "khalva-simulator",
      initialSubstance: "Crude Hingula (HgS) 100g",
      liquidMedia: "Citrus limon juice (pH 2.2)",
      bhavanaCyclesTotal: 7,
      targetParticleSize: "< 25 microns (Micro-fine powder)",
      tempThreshold: "Max 35°C (Friction only, Zero external heat)"
    },
    chapters: [
      { time: "Stage 1", title: "Spectroscopic Purity Verification of Hamsapaka Hingula" },
      { time: "Stage 2", title: "Khalva Yantra Setup: Coarse Pulverization & Mesh Sizing" },
      { time: "Stage 3", title: "Liquid Media Extraction: Double-Filtered Nimbu Swarasa" },
      { time: "Stage 4", title: "AI Trituration Physics: Continuous Rotary Mardana & Fluid Absorption" },
      { time: "Stage 5", title: "Bhavana Cycle Progression: 1st through 7th Saptadha Cycles" },
      { time: "Stage 6", title: "Quality Check: Particle Size, Color Transition, & Yield Analysis" }
    ],
    aiDecisionCheckpoint: {
      scenario: "During the 4th Bhavana cycle of Hingula, a student considers placing the Khalva Yantra over a gas burner to speed up drying. How does the AI Lab Mentor intervene?",
      options: [
        "Approves heating as long as it stays below 200°C",
        "Strictly halts the heating: Hingula contains volatile Mercury which sublimes into toxic mercurial vapors if heated openly; drying must occur strictly through Mardana friction and shade (Chhaya-shushka)",
        "Suggests adding water to counteract the heat"
      ],
      correctIndex: 1,
      aiFeedback: "Critical safety intervention! Heating Hingula in an open Khalva releases toxic mercury fumes and depletes the active elemental content. Shodhana of Hingula is strictly a cold wet-trituration process (Bhavana)."
    },
    aiQuickQA: [
      {
        q: "What is the chemical purpose of lemon juice (Nimbu Swarasa) in Hingula Shodhana?",
        a: "Nimbu Swarasa provides natural citric acid (pH ~2.2) and bio-surfactants that act as chelating agents. The continuous acid trituration cleanses free sulphur impurities, prevents aggregation, and reduces crystalline HgS into sub-micron particles with enhanced intestinal absorption."
      },
      {
        q: "How do you know when a single Bhavana cycle is officially complete?",
        a: "The Bhavana cycle is complete when the liquid media is entirely absorbed, the paste loses stickiness to the pestle, and rubs down to a dry, homogenous, velvet-smooth powder by the mechanical friction of Mardana alone."
      },
      {
        q: "What is the therapeutic dose of Shodhita Hingula?",
        a: "The standard clinical dosage of purified Hingula is 1/2 to 1 Ratti (62.5 mg to 125 mg), always co-prescribed with appropriate Anupana like honey, butter, or ginger juice."
      }
    ],
    procedureChecklist: [
      "Wear particle mask and nitrile gloves in pharmaceutical laboratory",
      "Calibrate Khalva Yantra surface cleanliness (porcelain or granite)",
      "Double-filter lemon juice through sterile muslin cloth to remove pulp and seed oil",
      "Maintain rhythmic rotary Mardana pressure across center and periphery",
      "Store final velvety crimson product in UV-protective amber glass container"
    ],
    clinicalPearls: [
      "Purified Hingula does not produce salivation, tremors, or nephrotoxicity when properly processed through 7 Bhavanas.",
      "Hamsapaka Hingula exhibits a natural fractured crystalline luster resembling a fresh pigeon's blood hue."
    ]
  },
  {
    id: "demo-dravyaguna-spotting",
    title: "AI Herbarium Simulator: Pharmacognostical Specimen Spotting & Rasa Panchaka",
    year: "2nd Prof",
    subject: "Dravyaguna Vijnana",
    duration: "16:45 AI Simulation",
    type: "AI Digital Pharmacognosy & Microscopic Spotter",
    aiMentor: {
      name: "Dravyaguna-AI Botanical Analyst",
      badge: "Medicinal Plant Taxonomist",
      avatar: "🌿"
    },
    overview: "Interactive AI botanical spotter simulator featuring high-magnification 10x surface views, transverse sections (T.S.), organoleptic tests, and automated Rasa-Panchaka profiling of high-yield medicinal plants.",
    simulationModel: {
      canvasType: "herbarium-scanner",
      spotterPlants: [
        { name: "Haritaki (Terminalia chebula)", family: "Combretaceae", diagnosticSign: "5 longitudinal pericarp ribs, yellowish-brown drupe", rasaPanchaka: "Kashaya-pradhana Pancharasa (Alavana), Ushna Virya, Madhura Vipaka" },
        { name: "Ashwagandha (Withania somnifera)", family: "Solanaceae", diagnosticSign: "Stout cylindrical root with horse-like equine odor", rasaPanchaka: "Tikta-Kashaya-Madhura, Ushna Virya, Madhura Vipaka" },
        { name: "Guduchi (Tinospora cordifolia)", family: "Menispermaceae", diagnosticSign: "Papery bark with warty lenticels & cartwheel ray T.S.", rasaPanchaka: "Tikta-Kashaya, Ushna Virya, Madhura Vipaka (Tridoshashamana)" },
        { name: "Arjuna (Terminalia arjuna)", family: "Combretaceae", diagnosticSign: "Pinkish-white smooth exfoliating bark flakes", rasaPanchaka: "Kashaya Rasa, Sheeta Virya, Katu Vipaka (Hridya)" }
      ]
    },
    chapters: [
      { time: "Station 1", title: "Namarupa Vijnana: Morphological Differentiation Rules" },
      { time: "Station 2", title: "Haritaki: Diagnostic Ribs & Microscopic Oxalate Crystals" },
      { time: "Station 3", title: "Ashwagandha: Equine Odor Bio-Test & Withanolide Profiles" },
      { time: "Station 4", title: "Guduchi: Corky Lenticels & Transverse Cartwheel Radiations" },
      { time: "Station 5", title: "Arjuna & Shatavari: Cortical Bark & Tuberous Root Spotting" },
      { time: "Station 6", title: "AI Rapid-Fire Spotter Exam: Automated Identification Scoring" }
    ],
    aiDecisionCheckpoint: {
      scenario: "Under 10x magnification, an examiner presents a dry stem piece with peeling papery brown bark, prominent corky lenticel warts on the exterior, and a transverse cut displaying radiating wheel-like medullary rays. What is the specimen?",
      options: [
        "Sariva root (Hemidesmus indicus)",
        "Guduchi stem (Tinospora cordifolia)",
        "Vidanga fruit (Embelia ribes)"
      ],
      correctIndex: 1,
      aiFeedback: "Spot on! The distinctive warty lenticels and radial cartwheel cross-section (Chakrakara) are pathognomonic diagnostic spotter criteria for genuine Guduchi stem."
    },
    aiQuickQA: [
      {
        q: "Why is Guduchi called 'Chinnaruha'?",
        a: "Chinnaruha signifies that even if a stem segment is cut off and suspended in air with minimal moisture, it has the biological potency to regenerate roots and foliage independently (supreme regenerative vitality)."
      },
      {
        q: "What is Ritu Haritaki and what is its physiological objective?",
        a: "Ritu Haritaki is the seasonal administration of Haritaki with specific adjuvants (Anupanas) across all 6 seasons to neutralize natural seasonal Doshic accumulation (e.g., with rock salt in monsoon, sugar in autumn, ginger in early winter)."
      }
    ],
    procedureChecklist: [
      "Calibrate 10x hand lens magnification against daylight",
      "Inspect longitudinal ribs and surface fissures",
      "Perform scratch-and-sniff test for aromatic and volatile markers",
      "Check transverse section under dissecting microscope",
      "Record botanical nomenclature, family, and therapeutic dosage"
    ],
    clinicalPearls: [
      "In Dravyaguna spotter viva, always recite: Botanical Name + Family + Part Used + Rasa Panchaka to secure 100% marks.",
      "Haritaki lacks only one taste: Lavana (salt); hence it is praised as 'Pancharasa Alavana'."
    ]
  },
  {
    id: "demo-jala-neti",
    title: "AI Fluid Simulation: Jala Neti & Sutra Neti Upper Respiratory Cleansing",
    year: "3rd Prof",
    subject: "Swasthavritta & Yoga",
    duration: "11:20 AI Simulation",
    type: "AI Otorhinolaryngological Cleansing Simulator",
    aiMentor: {
      name: "Yogacharya-AI Demonstrator",
      badge: "Shatkarma & Preventive Health Guide",
      avatar: "💧"
    },
    overview: "Interactive fluid dynamics simulation illustrating correct cranial tilt angles, mouth respiration mechanics, sinus flush hydraulics, and post-cleansing Kapalabhati drying to protect the middle ear.",
    simulationModel: {
      canvasType: "neti-flow",
      salineConcentration: "0.9% NaCl (Isotonic to blood serum)",
      waterTemp: "37°C (Normal body core temperature)",
      tiltAngle: "45 degrees forward, 30 degrees lateral",
      breathingMode: "Exclusively oral (Mouth open)"
    },
    chapters: [
      { time: "Step 1", title: "AI Osmotic Calculator: Formulating 0.9% Isotonic Warm Saline" },
      { time: "Step 2", title: "Cranial Ergonomics: Mathematical 45° Postural Forward Tilt" },
      { time: "Step 3", title: "Oral Respiration Lock: Preventing Eustachian Tube Aspiration" },
      { time: "Step 4", title: "Laminar Nasal Flow: Conchal Flushing & Paranasal Drainage" },
      { time: "Step 5", title: "Post-Neti Drying Protocol: Kapalabhati & Dynamic Angle Shifts" }
    ],
    aiDecisionCheckpoint: {
      scenario: "While practicing Jala Neti, a student accidentally takes a breath through their nose instead of their mouth, causing sudden ear fullness and sharp pain. What happened according to the AI demonstrator?",
      options: [
        "Normal therapeutic reflex that clears wax",
        "Negative pressure opened the Eustachian tube, drawing unsterilized fluid into the middle ear cavity; irrigation must immediately stop and gentle standing drying must be performed",
        "Water entered the frontal lobe of the brain"
      ],
      correctIndex: 1,
      aiFeedback: "Accurate! Nasal breathing creates negative nasopharyngeal pressure that forces fluid through the pharyngeal orifice of the auditory (Eustachian) tube into the middle ear. This is why strict oral breathing is mandatory during Jala Neti."
    },
    aiQuickQA: [
      {
        q: "Why must pure rock salt (Saindhava) be used rather than tap water alone?",
        a: "Plain fresh water is hypotonic compared to human nasal mucosa, causing rapid osmotic swelling (edema), burning pain, and mucosal congestion. Adding 0.9% rock salt matches physiological osmolarity, allowing painless soothing irrigation."
      },
      {
        q: "What is the classical therapeutic significance of Neti in Hatha Yoga?",
        a: "Neti purifies the Kapha from cranial passages ('कपालशोधिनी चैव दिव्यदृष्टिप्रदायिनी'), sharpens visual acuity, and prevents recurrent allergic rhinitis (Pratishyaya)."
      }
    ],
    procedureChecklist: [
      "Verify water is sterilized and strictly body-warm (37°C)",
      "Add 1 level teaspoon of rock salt per 500 ml water",
      "Maintain mouth relaxed and gently open throughout flow",
      "Perform active standing Kapalabhati forward exhalations after irrigation",
      "Avoid sleeping or stepping out in cold air immediately following practice"
    ],
    clinicalPearls: [
      "Complete drying of the sinuses after Neti is more important than the wash itself.",
      "Instilling 2 drops of Anu Taila into each nostril 30 minutes after Neti restores the mucosal barrier."
    ]
  },
  {
    id: "demo-vamana-karma",
    title: "AI Clinical Theatre: Vamana Karma Real-Time Inpatient Monitoring",
    year: "4th Prof",
    subject: "Panchakarma",
    duration: "18:00 AI Simulation",
    type: "AI Clinical Procedure & Hemodynamic Simulator",
    aiMentor: {
      name: "Panchakarma-AI Clinical Director",
      badge: "Hospital Inpatient Protocol Specialist",
      avatar: "🏥"
    },
    overview: "Real-time AI hospital theatre simulator monitoring inpatient Snehana saturation, Akantha Pana volume dynamics, Madanaphala Vamaka administration, Vega trajectory, and Antiki Shuddhi determination.",
    simulationModel: {
      canvasType: "vamana-monitor",
      vitals: { bp: "120/80 mmHg", pulse: "74 bpm", spo2: "99%" },
      vamakaYoga: "Madanaphala Pippali Churna (3g) + Yashtimadhu Kwatha + Madhu + Saindhava",
      stages: ["Samyak Snigdha Verification", "Akantha Pana (Milk/Yashtimadhu)", "Vamaka Administration", "Vega Monitoring (Bouts 1-8)", "Antiki Shuddhi (Pitta-Anta)", "Samsarjana Diet Initiation"]
    },
    chapters: [
      { time: "Stage 1", title: "Pre-Procedural Criteria: Confirming Samyak Snigdha & Svedana Signs" },
      { time: "Stage 2", title: "Akantha Pana: Gastric Loading with Warm Milk & Herb Infusion" },
      { time: "Stage 3", title: "Vamaka Yoga Delivery: Madanaphala Pharmacodynamics" },
      { time: "Stage 4", title: "Vega Trajectory: Counting Emetic Bouts & Recording Upavegas" },
      { time: "Stage 5", title: "Antiki Verification: Transition from Mucus (Kapha) to Bile (Pitta)" },
      { time: "Stage 6", title: "Paschat Karma: Medicated Dhumapana & Graded Samsarjana Diet" }
    ],
    aiDecisionCheckpoint: {
      scenario: "During Vamana Karma, a patient completes 6 projectile emetic bouts (Vegas). In the 7th bout, clear, bitter, bright yellow bile appears in the collection basin, and the patient reports immediate chest lightness. What is the AI Clinical Director's instruction?",
      options: [
        "Force the patient to drink more water to reach 10 bouts",
        "Terminate the Vamana procedure immediately: Appearance of bile (Pitta-Anta) is the classical cardinal marker of optimal completion (Samyak Shuddhi); continuing emesis beyond this causes Pittatiyoga and hematemesis",
        "Administer a purgative immediately"
      ],
      correctIndex: 1,
      aiFeedback: "Perfect clinical mastery! Classical texts declare 'पित्ते विरेचनं नृणां वमनं श्लेष्मणि स्मृतम्... वमने पित्तोद्रेकः' — Vamana terminates when Pitta appears (Pitta-Anta). Pushing beyond this stage damages gastric mucosa and leads to complications (Vyapad)."
    },
    aiQuickQA: [
      {
        q: "What is the physiological role of honey and rock salt in the Vamaka Yoga?",
        a: "Rock salt (Saindhava) is Tikshna and Sukshma; it liquefies thick adherent Kapha and breaks down cellular clumps. Honey acts as Yogavahi (carrier) and prevents mucosal abrasion while stimulating reverse peristalsis."
      },
      {
        q: "Why is Samsarjana Krama mandatory after Vamana?",
        a: "Vamana temporarily suppresses digestive fire (Agni Mandya), resembling a tiny spark covered in ashes. Administering heavy food causes immediate indigestion; the dietetic ladder (Peya -> Vilepi -> Yusha -> Mamsarasa) rekindles Agni gradually over 3 to 7 days."
      }
    ],
    procedureChecklist: [
      "Confirm loose unctuous stools and aversion to ghee (Samyak Snigdha)",
      "Administer Vamana in early morning Kapha Kala (approx 6:30 - 8:30 AM)",
      "Maintain continuous hemodynamic monitoring (BP, Pulse, Respiratory Rate)",
      "Support forehead and lumbar spine during emetic contractions",
      "Verify Antiki (Pitta appearance) and Laingiki (sensory clarity, thoracic lightness)"
    ],
    clinicalPearls: [
      "Never leave a patient unmonitored during the observation phase following Vamaka administration.",
      "Vamana cleanses the root seat of Kapha (Amashaya), uprooting chronic asthma, skin diseases, and metabolic syndrome."
    ]
  },
  {
    id: "demo-ksharasutra-application",
    title: "AI Surgical Simulation: Ksharasutra Preparation & Fistula-in-Ano Ligation",
    year: "4th Prof",
    subject: "Shalya Tantra",
    duration: "17:10 AI Simulation",
    type: "AI Operative Surgical Simulator",
    aiMentor: {
      name: "Sushruta-AI Surgical Director",
      badge: "Anorectal Operative Specialist",
      avatar: "✂️"
    },
    overview: "3D virtual anorectal operative simulator detailing the 21 coats of standardized Apamarga Ksharasutra, Goodsall's rule anatomical mapping, fistulous probing, and railroad weekly thread replacement.",
    simulationModel: {
      canvasType: "ksharasutra-hanger",
      threadSpec: "Barbour Linen Thread No. 20 (Alkaline pH 9.8)",
      coatingLayers: "11 Snuhi + 7 Apamarga Kshara + 3 Haridra = 21 Coats",
      cuttingRate: "Unit Cutting Time (UCT) ≈ 1 cm per 7 days",
      sphincterPreservation: "100% (Zero post-operative incontinence)"
    },
    chapters: [
      { time: "Phase 1", title: "Automated Cabinet: Thread Mounting & 11 Snuhi Ksheera Coatings" },
      { time: "Phase 2", title: "Alkaline Ash Fusion: 7 Apamarga Kshara Coats with UV Sterilization" },
      { time: "Phase 3", title: "Antiseptic Finishing: 3 Curcuma Longa (Haridra) Coats & Packaging" },
      { time: "Phase 4", title: "Surgical Topography: Goodsall's Rule & Anorectal Crypt Anatomy" },
      { time: "Phase 5", title: "Malleable Probing & Railroad Ligation Through External-Internal Openings" },
      { time: "Phase 6", title: "Post-Operative Management: Sitz Bath & Weekly Thread Replacement" }
    ],
    aiDecisionCheckpoint: {
      scenario: "During evaluation of a high anal fistula, Goodsall's rule reveals an external opening located 3 cm posterior to the transverse anal line at the 5 o'clock position. Where does the AI surgical model predict the internal opening to be located?",
      options: [
        "Directly radially inward at the 5 o'clock position",
        "Following a curved path toward the posterior midline crypt at the 6 o'clock position",
        "At the anterior 12 o'clock position"
      ],
      correctIndex: 1,
      aiFeedback: "Outstanding surgical precision! According to Goodsall's rule, all fistulous openings situated posterior to the transverse anal line travel along a curved path to open into the posterior midline anal crypt at the 6 o'clock position."
    },
    aiQuickQA: [
      {
        q: "Why does Ksharasutra cut through the fistulous tract without causing fecal incontinence?",
        a: "Ksharasutra exerts slow mechanical pressure necrosis, cutting roughly 1 cm per week. As it cuts through sphincter fibers, simultaneous chemical debridement stimulates dense fibrosis and healing behind it, keeping the anal sphincter rings permanently anchored together."
      },
      {
        q: "What role does turmeric (Haridra) play in the final 3 coats?",
        a: "Haridra (Curcuma longa) contains curcuminoids with powerful anti-inflammatory, antimicrobial, and soothing properties that buffer the intensely caustic alkaline action of Apamarga Kshara, preventing chemical dermatitis."
      }
    ],
    procedureChecklist: [
      "Confirm linen thread tensile strength before mounting",
      "Sterilize dried threads inside UV Ksharasutra cabinet for 20 minutes",
      "Place patient in lithotomy position with perineal illumination",
      "Perform gentle digital rectal examination (DRE) with gloved index finger",
      "Ligate thread with moderate tension outside anal verge without sphincter strangulation"
    ],
    clinicalPearls: [
      "Standard Apamarga Ksharasutra has an alkaline pH between 9.5 and 10.2.",
      "Weekly thread change utilizes the old thread as a guide to draw the new thread through the tract (Railroad technique)."
    ]
  },
  {
    id: "demo-akshi-tarpana",
    title: "AI Ophthalmic Simulator: Akshi Tarpana Dough Well & Ghee Immersion",
    year: "4th Prof",
    subject: "Shalakya Tantra",
    duration: "13:40 AI Simulation",
    type: "AI Ocular Therapeutics Simulator",
    aiMentor: {
      name: "Shalakya-AI Ophthalmic Specialist",
      badge: "Netra Kriya Kalpa Expert",
      avatar: "👁️"
    },
    overview: "Interactive ocular simulation modeling leak-proof dough dam engineering with black gram flour, thermal calibration of Triphala Ghrita to 37°C, timed Matra Kala blink tracking, and post-procedure photo-protection.",
    simulationModel: {
      canvasType: "tarpana-well",
      doughMaterial: "Phaseolus mungo (Masha) flour + warm water",
      medicatedGhee: "Triphala Ghrita / Jeevantyadi Ghrita",
      temperatureTarget: "37°C - 38°C (Strictly lukewarm)",
      matraKalaDuration: "800 to 1000 Matra (Approx 15-20 minutes for refractive errors)"
    },
    chapters: [
      { time: "Stage 1", title: "Indications Review: Shushkakshipaka (Dry Eye) & Timira (Myopia)" },
      { time: "Stage 2", title: "Masha Dough Engineering: Constructing Anatomical Periorbital Wells" },
      { time: "Stage 3", title: "Water Bath Thermal Gauge: Melting Triphala Ghrita to Exactly 37°C" },
      { time: "Stage 4", title: "Gentle Instillation & Submersion of Ciliary Margins and Cornea" },
      { time: "Stage 5", title: "Timed Blinking Exercises: Unmesha-Nimesha Matra Kala Timer" },
      { time: "Stage 6", title: "Canthal Drainage, Warm Moist Fomentation, & Screen Protection" }
    ],
    aiDecisionCheckpoint: {
      scenario: "Before pouring medicated Triphala Ghrita into the ocular dough well, what is the mandatory safety step flagged by the AI ophthalmic safety monitor?",
      options: [
        "Add lemon juice to check acidity",
        "Test ghee temperature directly on the physician's and patient's inner forearm to ensure it is comfortable and lukewarm (37°C), preventing thermal corneal epithelial damage",
        "Refrigerate the ghee until solid"
      ],
      correctIndex: 1,
      aiFeedback: "Critical safety protocol! Instilling hot ghee can produce irreversible corneal thermal burns and severe epithelial damage. Testing temperature on the sensitive flexor surface of the forearm ensures strict patient safety."
    },
    aiQuickQA: [
      {
        q: "Why is medicated ghee (Ghrita) superior to aqueous eye drops in chronic ocular disorders?",
        a: "The corneal epithelium and cell membranes are lipophilic lipid bilayers that resist water-soluble drugs. Medicated Ghrita easily penetrates across corneal barriers into the anterior chamber and deeper ocular tissues, nourishing ciliary muscles and tear film."
      },
      {
        q: "What is the contraindication for Akshi Tarpana?",
        a: "Akshi Tarpana is strictly contraindicated in acute infectious conjunctivitis (Taruna Abhishyanda), corneal ulcers, cloudy/rainy days without clear skies, and extreme fatigue."
      }
    ],
    procedureChecklist: [
      "Examine patient in supine posture in windless, dust-free treatment room",
      "Knead black gram dough to uniform elasticity without cracks",
      "Test ghee temperature on inner forearm prior to orbital instillation",
      "Instruct patient to open and close eyelids rhythmically while submerged",
      "Drain ghee cleanly from outer canthus puncture into collection cup",
      "Advise 24 hours of rest from direct bright sunlight and digital screens"
    ],
    clinicalPearls: [
      "Akshi Tarpana translates literally to 'Nourishment of the Eye'.",
      "Triphala Ghrita contains potent antioxidants, lutein, and flavonoids that revitalize fatigued photoreceptors in Computer Vision Syndrome."
    ]
  }
];

// Backwards compatibility alias
window.BAMS_DEMO_VIDEOS = window.BAMS_AI_SIMULATIONS;
