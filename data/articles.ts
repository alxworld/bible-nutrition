export interface BibleVerse {
  ref: string
  text: string
}

export interface ArticleSection {
  heading?: string
  body?: string
  bullets?: string[]
  quote?: BibleVerse
  highlight?: string
  tableHeaders?: string[]
  tableRows?: string[][]
}

export interface Article {
  slug: string
  number: number
  title: string
  subtitle: string
  category: string
  accent: string        // Tailwind bg class for card accent strip
  accentHex: string     // hex for inline styles
  image: string         // hero image URL
  cardImage: string     // card thumbnail URL
  imageAlt: string
  verse: BibleVerse
  excerpt: string
  readTime: string
  sections: ArticleSection[]
}

export const articles: Article[] = [
  {
    slug: 'bible-gods-nutrition-manual',
    number: 1,
    title: "The Bible: God's Original Nutrition Manual",
    subtitle: 'How the Creator designed our diet thousands of years before modern science',
    category: 'Foundation',
    accent: 'bg-emerald-800',
    accentHex: '#065f46',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Open Bible with wheat in golden light',
    verse: { ref: 'Hosea 8:12', text: 'I wrote for them the many things of my law, but they regarded them as something foreign.' },
    excerpt: 'Long before nutrition labels and dietitians, God provided a complete dietary framework in scripture. Modern science is only now catching up.',
    readTime: '7 min read',
    sections: [
      {
        heading: 'The Maker\'s Instruction Manual',
        body: 'Every complex machine comes with an instruction manual written by its maker. The human body — the most complex biological machine ever designed — is no exception. The Bible serves as exactly that: a comprehensive guide from our Creator on how to fuel, maintain, and protect the body He designed.',
      },
      {
        quote: { ref: 'Hosea 8:12', text: 'I wrote for them the many things of my law, but they regarded them as something foreign.' },
      },
      {
        body: 'This verse captures a profound irony that applies directly to nutrition today. God\'s dietary instructions have existed for thousands of years, yet modern society largely ignores them — and pays the price in epidemic levels of obesity, diabetes, and heart disease.',
      },
      {
        heading: 'God as Our Nutritional Designer',
        body: 'Scripture reveals four roles God plays in our nutritional life:',
        bullets: [
          'Creator — He designed the human body and knows its exact needs (Genesis 1:29)',
          'Designer — He prescribed specific foods suited to our physiology',
          'Provider — He promises to supply nourishing food to those who trust Him (Psalm 104:14-15)',
          'Protector — His dietary laws guard us from disease and harm',
        ],
      },
      {
        heading: 'What the Bible Says to Eat',
        body: 'The scriptures explicitly endorse a rich and varied diet that modern nutritionists would call remarkably balanced:',
        bullets: [
          'Bread and grains — "Give us this day our daily bread" (Matthew 6:11)',
          'Eggs — Jesus calls them good gifts (Luke 11:12)',
          'Fish — eaten by Jesus himself after the resurrection (Luke 24:42)',
          'Milk and dairy — "a land flowing with milk and honey" (Exodus 3:8)',
          'Meat — God gave Noah every living creature for food (Genesis 9:3)',
          'Olive oil — used for food, anointing, and medicine throughout scripture',
          'Nuts — almonds and pistachios cited as gifts of quality (Genesis 43:11)',
          'Fruits — grapes, figs, pomegranates, dates mentioned throughout',
          'Vegetables — Daniel\'s famous vegetable experiment (Daniel 1:12)',
          'Honey — "eat honey, my son, for it is good" (Proverbs 24:13)',
        ],
      },
      {
        heading: 'What the Bible Says to Avoid',
        body: 'Equally important are the biblical prohibitions. Each has a sound scientific basis:',
        bullets: [
          'Blood — "You must not eat the blood" (Leviticus 17:14); blood carries pathogens and toxins',
          'Strangled animals — meat from animals not properly slaughtered retains blood',
          'Unclean meats — animals like pigs and shellfish are natural waste processors',
          'Intoxicants — alcohol is a neurotoxin (Ephesians 5:18)',
          'Excess fat — "It shall be a perpetual statute... you shall eat neither fat nor blood" (Leviticus 3:17)',
          'Excess honey — "If you find honey, eat just enough—too much of it, and you will vomit" (Proverbs 25:16)',
        ],
      },
      {
        highlight: 'The Bible is not merely a spiritual guide. It is a practical, scientifically sound nutritional framework written by the One who designed human biology.',
      },
      {
        heading: 'Why This Matters Today',
        body: 'Modern chronic diseases — obesity, type 2 diabetes, cardiovascular disease, cancer — are largely the result of departing from the dietary patterns scripture endorses. Populations that eat closer to the biblical model consistently show lower rates of these diseases. The evidence is clear: God\'s nutritional wisdom was correct all along.',
      },
    ],
  },

  {
    slug: 'carbohydrates-sweet-truth',
    number: 2,
    title: 'Carbohydrates: Friend or Foe?',
    subtitle: 'What the Bible and modern science say about carbs, sugar, and the glycemic index',
    category: 'Macronutrients',
    accent: 'bg-amber-600',
    accentHex: '#d97706',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Golden honeycomb dripping with honey',
    verse: { ref: 'Proverbs 24:13', text: 'Eat honey, my son, for it is good; honey from the comb is sweet to your taste.' },
    excerpt: 'Carbohydrates are not the enemy — the wrong kind in the wrong quantity is. The Bible understood this balance perfectly thousands of years ago.',
    readTime: '9 min read',
    sections: [
      {
        heading: 'The Carbohydrate Basics',
        body: 'Carbohydrates are the body\'s primary energy currency. Every carb you eat is ultimately broken down into glucose — the fuel your brain depends on almost exclusively. But not all carbohydrates behave the same way in your body.',
        bullets: [
          'Simple carbohydrates (sugars): quickly digested, rapid blood sugar spike',
          'Complex carbohydrates (starches, fiber): slowly digested, gradual energy release',
          'Fiber: not digested at all; feeds gut bacteria and aids bowel health',
        ],
      },
      {
        heading: 'Caloric Values You Should Know',
        body: 'Understanding caloric density helps you make informed food choices:',
        tableHeaders: ['Macronutrient', 'Calories per gram'],
        tableRows: [
          ['Carbohydrates', '3.75 cal/g'],
          ['Protein', '4.0 cal/g'],
          ['Fat', '9.0 cal/g'],
        ],
      },
      {
        heading: 'The Insulin-Fat Connection',
        body: 'When you eat carbohydrates, your blood sugar rises. Your pancreas responds by releasing insulin — the hormone that moves glucose out of the blood and into cells. When cells are full, insulin directs the excess glucose to be stored as fat. This mechanism, not dietary fat, is the primary driver of obesity in modern society.',
        bullets: [
          'Excess carbs → blood sugar rise → insulin spike',
          'Insulin drives glucose into fat cells for storage',
          'Chronically high insulin → insulin resistance → Type 2 diabetes',
          'A high-starch diet is the root cause of the modern obesity epidemic',
        ],
      },
      {
        heading: 'The Glycemic Index: Not All Carbs Are Equal',
        body: 'The Glycemic Index (GI) measures how quickly a food raises blood sugar relative to pure glucose (GI = 100). The Glycemic Load (GL) takes portion size into account — it is the more practical number.',
        tableHeaders: ['Food', 'GI', 'GL per 100g'],
        tableRows: [
          ['Glucose (reference)', '100', '100'],
          ['Cooked rice', '86', '25'],
          ['Honey', '58', '47'],
          ['Mango', '60', '10'],
          ['Grapes', '49', '9'],
          ['Orange', '40', '5'],
          ['Ice cream (vanilla)', '61', '6.2'],
          ['Laddu (Indian sweet)', '29', '3.4'],
          ['Fructose', '23', '5.8'],
        ],
      },
      {
        highlight: 'Starch (tasteless rice) has a higher glycemic load than most sweets. Sweetness is not the same as blood sugar.',
      },
      {
        heading: 'The Bible\'s Sweet Wisdom',
        body: 'The Bible\'s guidance on sweetness is nutritionally precise:',
        bullets: [
          'Exodus 16:31 — God gave manna that tasted like honey (sweet is natural and God-given)',
          'Proverbs 24:13 — "Eat honey, my son, for it is good"',
          'Proverbs 25:16 — "If you find honey, eat just enough — too much of it, and you will vomit"',
          'Proverbs 25:27 — "It is not good to eat too much honey"',
          'Deuteronomy 32:13 — God nourished his people with honey from the rock',
        ],
      },
      {
        quote: { ref: 'Proverbs 25:16', text: 'If you find honey, eat just enough — too much of it, and you will vomit.' },
      },
      {
        heading: 'Practical Guidelines',
        body: 'The research supports a simple framework:',
        bullets: [
          'Reduce plain rice and refined starches — they have the highest glycemic load',
          'Fruits are NOT bad — all fruits have a lower GL than plain rice',
          'Sweets made with milk, eggs, ghee, and fruit are acceptable in moderation (GL < 15)',
          'Taking 50–100g of sweets or fruits maintains GL well under control',
          'Favor low-GI sweeteners like honey and fructose-containing natural fruits over refined sugar',
        ],
      },
    ],
  },

  {
    slug: 'protein-amino-acids',
    number: 3,
    title: 'Protein & Amino Acids: Building Blocks God Designed',
    subtitle: 'Why complete proteins matter and which biblical foods provide them',
    category: 'Macronutrients',
    accent: 'bg-rose-700',
    accentHex: '#be123c',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Fresh eggs on a rustic wooden surface',
    verse: { ref: 'Luke 11:11–12', text: 'Which of you fathers, if your son asks for a fish, will give him a snake instead? Or if he asks for an egg, will give him a scorpion?' },
    excerpt: 'Protein is in every single cell of your body. The quality of protein you eat determines how well your body builds, repairs, and maintains itself.',
    readTime: '8 min read',
    sections: [
      {
        heading: 'The Protein Imperative',
        body: 'Protein is not optional. It forms the structural foundation of every cell in your body — from muscle fibers to enzymes, from antibodies to hormones. Collagen alone, the most abundant protein in the body, makes up 30% of total body protein and gives strength to bones, skin, and tendons.',
        bullets: [
          'Daily protein requirement: 1g per kg of body weight (minimum)',
          'Athletes and growing children need 1.5–2g per kg',
          'Protein from food is broken down into amino acids, then reassembled for body needs',
        ],
      },
      {
        heading: 'The 22 Amino Acids',
        body: 'Proteins are built from 22 amino acids. Of these, 8 are "essential" — meaning your body cannot manufacture them and they must come from food. If even one essential amino acid is absent or insufficient (the "limiting amino acid"), protein synthesis stalls.',
        tableHeaders: ['Essential Amino Acid', 'Key Function'],
        tableRows: [
          ['Isoleucine', 'Muscle repair, hemoglobin production'],
          ['Leucine', 'Muscle protein synthesis, blood sugar regulation'],
          ['Lysine', 'Calcium absorption, collagen formation, immune function'],
          ['Methionine', 'Liver health, antioxidant (precursor to glutathione)'],
          ['Phenylalanine', 'Neurotransmitter precursor (dopamine, norepinephrine)'],
          ['Threonine', 'Connective tissue, immune system support'],
          ['Tryptophan', 'Serotonin and melatonin precursor (mood and sleep)'],
          ['Valine', 'Muscle metabolism, mental focus'],
        ],
      },
      {
        heading: 'Complete vs Incomplete Proteins',
        body: 'Animal proteins — eggs, meat, fish, dairy — are "complete proteins" containing all 8 essential amino acids in the right proportions. Plant proteins are typically "incomplete," lacking or low in one or more essential amino acids.',
        highlight: 'Eggs and chicken are unique: they have NO limiting amino acid. They provide all 8 essential amino acids in ideal proportions — making them the gold standard of dietary protein.',
      },
      {
        quote: { ref: 'Luke 11:11–12', text: 'Which of you fathers, if your son asks for a fish, will give him a snake instead? Or if he asks for an egg, will give him a scorpion?' },
      },
      {
        heading: 'The Vegetarian Protein Gap',
        body: 'Exclusively vegetarian diets present real challenges for protein utilization:',
        bullets: [
          'Essential amino acids in plant foods are limited and imbalanced',
          'Low utilization efficiency leads to food craving and overeating',
          'Proteins may be burned as energy rather than used for muscle building',
          'Increased urea production places higher burden on kidneys',
          'Animal sources (meat, poultry, dairy, fish, eggs) supply complete amino acids with minimum waste',
        ],
      },
      {
        heading: 'Biblical Protein Sources',
        body: 'The Bible repeatedly endorses high-quality animal protein. God provided manna, quail, fish, eggs, and dairy to His people — not by accident, but because these are the most bioavailable, complete protein sources available.',
        bullets: [
          'Fish — Jesus fed thousands with fish; eaten after His resurrection',
          'Eggs — cited by Jesus as a good gift from a loving father (Luke 11:12)',
          'Lamb and beef — honored at feasts and celebrations throughout scripture',
          'Dairy — milk, yogurt, and cheese provided to Abraham\'s heavenly visitors',
          'Chicken and poultry — referenced in Nehemiah 5:18 at the governor\'s table',
        ],
      },
    ],
  },

  {
    slug: 'fat-not-the-enemy',
    number: 4,
    title: 'Fat Is Not the Enemy',
    subtitle: 'The truth about dietary fat, the Lipid Hypothesis fraud, and cholesterol\'s essential role',
    category: 'Macronutrients',
    accent: 'bg-blue-800',
    accentHex: '#1e40af',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Olive oil poured over fresh herbs',
    verse: { ref: 'Psalm 104:15', text: 'Wine that gladdens human hearts, oil to make their faces shine, and bread that sustains their hearts.' },
    excerpt: 'For 50 years we were told fat causes heart disease. The science says otherwise. The Bible knew this all along.',
    readTime: '10 min read',
    sections: [
      {
        heading: 'Why Your Body Needs Fat',
        body: 'Dietary fat is not a health hazard — it is a biological necessity. Your body depends on fat for critical functions that no other nutrient can perform:',
        bullets: [
          'Every cell membrane is 50% saturated fat — fat gives cells their structure and integrity',
          'Fat-soluble vitamins (A, D, E, K) can only be absorbed in the presence of dietary fat',
          'The heart\'s preferred fuel is fat — not glucose',
          'Hormones including testosterone, estrogen, and cortisol are synthesized from fat',
          'Fat provides satiety — fat-containing meals reduce overeating by signaling fullness',
          'Brain tissue is approximately 60% fat',
        ],
      },
      {
        heading: 'The Great Fat Lie: Ancel Keys and the Lipid Hypothesis',
        body: 'In 1953, American physiologist Ancel Keys proposed the "diet-heart hypothesis": that dietary saturated fat raises blood cholesterol, which causes heart disease. This single idea has driven nutritional policy for decades — and it was based on fraudulent science.',
        bullets: [
          'Keys had data from 22 countries but published only the 7 that fit his theory',
          'The remaining 15 countries contradicted his hypothesis entirely',
          'His original paper has been widely criticized for cherry-picking data',
        ],
      },
      {
        highlight: 'Population after population contradicts the Lipid Hypothesis: The Masai eat a diet 60% animal fat and have virtually no heart disease. The Eskimos consume enormous quantities of animal fat and have among the lowest heart disease rates ever recorded.',
      },
      {
        heading: 'The French Paradox',
        body: 'France has one of the highest intakes of saturated fat in the world — butter, cheese, cream, foie gras — yet consistently records among the lowest rates of heart disease in Europe. This "French Paradox" thoroughly dismantles the fat-heart disease narrative.',
      },
      {
        heading: 'Cholesterol: Misunderstood and Essential',
        body: 'Cholesterol is not a poison — it is one of the most important molecules in your body:',
        bullets: [
          'Your liver manufactures approximately 1 gram of cholesterol per day because the body needs it',
          'Cholesterol repairs damaged blood vessel walls — it is a healing response, not a cause',
          'It is the precursor to all steroid hormones (testosterone, estrogen, progesterone)',
          'Vitamin D is synthesized from cholesterol via sunlight exposure',
          'The myelin sheath that insulates nerve fibres is made of cholesterol',
          'Serotonin receptors in the brain require cholesterol to function properly',
          'Mother\'s milk is rich in cholesterol — essential for infant brain development',
        ],
      },
      {
        heading: 'Low Cholesterol Is Dangerous',
        body: 'Far from being desirable, low cholesterol is associated with serious health consequences:',
        bullets: [
          'Depression and aggressive behavior (low serotonin receptor function)',
          'Increased risk of cancer (cholesterol is needed for immune cell membranes)',
          'Hormonal deficiency (reduced steroid hormone synthesis)',
          'Memory and cognitive decline (brain depends on cholesterol)',
        ],
      },
      {
        heading: 'Fats to Embrace and Fats to Avoid',
        tableHeaders: ['Fat Type', 'Best Sources', 'Action'],
        tableRows: [
          ['Saturated fat (short/medium chain)', 'Coconut oil, butter, ghee', 'EMBRACE — beneficial'],
          ['Monounsaturated (MUFA)', 'Olive oil (73g/100g), almonds', 'EMBRACE — heart protective'],
          ['Polyunsaturated omega-3', 'Sardine, mackerel, tuna', 'EMBRACE — anti-inflammatory'],
          ['Polyunsaturated omega-6', 'Corn, sunflower, soybean oils', 'AVOID — pro-inflammatory'],
          ['Trans fats (hydrogenated)', 'Margarine, Dalda, Vanaspathy', 'STRICTLY AVOID — toxic'],
        ],
      },
      {
        quote: { ref: 'Psalm 104:15', text: 'Wine that gladdens human hearts, oil to make their faces shine, and bread that sustains their hearts.' },
      },
    ],
  },

  {
    slug: 'metabolism-krebs-cycle',
    number: 5,
    title: 'How Your Body Uses Food',
    subtitle: 'Understanding metabolism, the Krebs cycle, and why calorie control is the real crux',
    category: 'Science',
    accent: 'bg-teal-700',
    accentHex: '#0f766e',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Colorful healthy food spread for energy',
    verse: { ref: 'Proverbs 25:16', text: 'If you find honey, eat just enough — too much of it, and you will vomit.' },
    excerpt: 'Your body runs on a universal energy system. Understanding it reveals why the Bible\'s call for moderation is not just spiritual advice — it is biochemical fact.',
    readTime: '8 min read',
    sections: [
      {
        heading: 'Metabolism: The Body\'s Energy Economy',
        body: 'Metabolism encompasses every chemical reaction that occurs in your body. It has two complementary phases:',
        bullets: [
          'Anabolism — building up: synthesizing proteins, building new tissues, storing energy',
          'Catabolism — breaking down: extracting energy from food, dismantling old cells',
          'The balance between these two determines whether you gain, maintain, or lose weight',
        ],
      },
      {
        heading: 'ATP: The Energy Currency',
        body: 'All energy in your body flows through a molecule called ATP (Adenosine Triphosphate). Think of ATP as the body\'s rechargeable battery — food charges it, and every cellular process spends it. Whether you are contracting a muscle, thinking a thought, or digesting your last meal, you are spending ATP.',
      },
      {
        heading: 'The Krebs Cycle: The Universal Convergence Point',
        body: 'Here is the most important metabolic truth: all three macronutrients — carbohydrates, proteins, and fats — are ultimately converted to a molecule called Acetyl-CoA, which then enters the Krebs Cycle (also called the Citric Acid Cycle).',
        bullets: [
          'Carbohydrates → glucose → pyruvate → Acetyl-CoA → Krebs Cycle',
          'Proteins → amino acids → various entry points → Krebs Cycle',
          'Fats → fatty acids → Acetyl-CoA → Krebs Cycle',
          'The final output of the Krebs Cycle: CO₂ + H₂O + ATP (energy)',
        ],
      },
      {
        highlight: 'This is the most important fact in all of nutrition: EXCESS of ANY food — whether carbs, protein, or fat — is ultimately converted to fat and stored. There is no "safe" macronutrient to overeat.',
      },
      {
        heading: 'Glucose Regulation: Three Key Processes',
        body: 'Your body manages glucose levels through three elegant mechanisms:',
        bullets: [
          'Glycogenesis — converting excess glucose to glycogen for storage in liver and muscles',
          'Glycogenolysis — breaking down glycogen back to glucose when blood sugar drops',
          'Gluconeogenesis — manufacturing glucose from non-carbohydrate sources (amino acids, glycerol) during fasting',
        ],
      },
      {
        heading: 'The Brain\'s Exclusive Fuel',
        body: 'Your brain is unusual among body organs: it depends almost exclusively on glucose as its fuel. It cannot use fatty acids directly. This is why extreme low-carbohydrate diets can cause brain fog, and why the body will break down muscle protein to manufacture glucose when dietary carbs are severely restricted.',
      },
      {
        heading: 'The B Vitamin Connection',
        body: 'Carbohydrate metabolism cannot proceed without B vitamins as coenzymes. This is why refined starches (which have had their B vitamins stripped away) are metabolically problematic — they demand B vitamins for processing but provide none. Key cofactors for metabolism include:',
        bullets: [
          'B1 (Thiamine), B2 (Riboflavin), B3 (Niacin), B5 (Pantothenic acid) — all Krebs cycle cofactors',
          'Phosphorus, Magnesium — ATP synthesis',
          'Iron, Copper — electron transport chain',
          'Zinc, Chromium — insulin function and glucose metabolism',
        ],
      },
      {
        quote: { ref: 'Proverbs 13:25', text: 'The righteous eat to their hearts\' content, but the stomach of the wicked goes hungry.' },
      },
      {
        body: 'The biblical principle of eating to satisfy without excess is not merely spiritual wisdom — it is precise metabolic advice. "Control of food intake is the crux for well-being."',
      },
    ],
  },

  {
    slug: 'vitamins-minerals-antioxidants',
    number: 6,
    title: 'Vitamins, Minerals & Antioxidants',
    subtitle: "God's micronutrient toolkit: the invisible machinery keeping you alive",
    category: 'Micronutrients',
    accent: 'bg-purple-700',
    accentHex: '#7e22ce',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Vibrant assortment of colorful vegetables',
    verse: { ref: 'Daniel 1:15', text: 'At the end of the ten days they looked healthier and better nourished than any of the young men who ate the royal food.' },
    excerpt: 'Vitamins and minerals are not optional extras — they are the cofactors that make every chemical reaction in your body possible.',
    readTime: '9 min read',
    sections: [
      {
        heading: '13 Essential Vitamins',
        body: 'There are 13 vitamins your body cannot manufacture in sufficient quantities and must obtain from food. They divide into two critical groups:',
        bullets: [
          'Fat-soluble (A, D, E, K) — stored in body fat; require dietary fat for absorption',
          'Water-soluble (Vitamin C + 8 B vitamins) — not stored; need daily replenishment',
        ],
      },
      {
        heading: 'Fat-Soluble Vitamins: Why You Must Eat Fat',
        body: 'This is a critical point that destroys the logic of fat-free diets: vitamins A, D, E, and K can only be absorbed into your body when dietary fat is present. Remove fat from your diet and these vitamins pass through unused.',
        tableHeaders: ['Vitamin', 'Key Functions', 'Best Food Sources'],
        tableRows: [
          ['A (Retinol)', 'Vision, immune function, skin health', 'Egg yolk, liver, butter, carrot'],
          ['D (Calciferol)', 'Calcium absorption, bone health, immune regulation', 'Sardine (272 IU/100g), egg yolk, sunlight'],
          ['E (Tocopherol)', 'Antioxidant, protects cell membranes, fertility', 'Almonds (26.2mg/100g), sunflower seeds'],
          ['K (Phylloquinone)', 'Blood clotting, bone mineralization', 'Broccoli (141mcg/100g), olive oil (60.2mcg)'],
        ],
      },
      {
        heading: 'Key Minerals and Their Roles',
        tableHeaders: ['Mineral', 'Function', 'Food Source'],
        tableRows: [
          ['Calcium', 'Bone/teeth structure, nerve signalling, muscle contraction', 'Dairy, almonds (264mg/100g)'],
          ['Magnesium', 'ATP synthesis, 300+ enzyme reactions', 'Cashew (292mg), almonds, dark leafy greens'],
          ['Iron', 'Oxygen transport in haemoglobin', 'Red meat, sardines, lentils'],
          ['Zinc', 'Immune function, wound healing, testosterone', 'Lamb (4.53mg), cashew, pumpkin seeds'],
          ['Selenium', 'Antioxidant enzyme glutathione peroxidase', 'Garlic, Brazil nuts, sardines'],
          ['Potassium', 'Fluid balance, heart rhythm, blood pressure', 'Tuna (569mg), lamb (319mg), plantain'],
          ['Phosphorus', 'ATP energy molecule, bone matrix', 'Cashew (593mg), fish, meat'],
        ],
      },
      {
        heading: 'Antioxidants: Your Body\'s Defence System',
        body: 'Free radicals are unstable molecules produced during normal metabolism. In excess, they damage DNA, proteins, and cell membranes — a process called oxidative stress, linked to cancer, heart disease, and accelerated ageing. Antioxidants neutralise free radicals before they cause damage.',
        bullets: [
          'Selenium — activates glutathione peroxidase, your body\'s primary antioxidant enzyme',
          'Vitamin C — water-soluble antioxidant; regenerates Vitamin E',
          'Vitamin E — protects cell membranes from lipid peroxidation',
          'Beta-carotene — found in carrots (8332 mcg/100g), converts to Vitamin A',
          'Lycopene — in tomatoes (3041 mcg/100g), twice as efficient as beta-carotene against cancer',
          'Flavonoids — in onions (quercetin), grapes (resveratrol), spices',
        ],
      },
      {
        heading: 'Spices: God\'s Anti-Inflammatory Pharmacy',
        body: 'The Bible frequently references spices — and modern research confirms they are among the most potent sources of bioactive phytochemicals available:',
        bullets: [
          'Turmeric — curcumin is one of the most studied anti-inflammatory compounds',
          'Garlic — high selenium content, allicin provides antimicrobial and anti-cancer effects',
          'Ginger — anti-nausea, anti-inflammatory, digestive aid',
          'Cinnamon — improves insulin sensitivity, lowers blood sugar',
          'Black pepper — piperine enhances absorption of other nutrients by up to 2000%',
        ],
      },
      {
        quote: { ref: 'Daniel 1:15', text: 'At the end of the ten days they looked healthier and better nourished than any of the young men who ate the royal food.' },
      },
    ],
  },

  {
    slug: 'biblical-superfoods',
    number: 7,
    title: 'Biblical Superfoods',
    subtitle: 'Eggs, dairy, coconut oil, and grapes — four foods Scripture endorses and science validates',
    category: 'Superfoods',
    accent: 'bg-green-700',
    accentHex: '#15803d',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Dairy, eggs and coconut arranged together',
    verse: { ref: 'Isaiah 7:15', text: 'He will eat curds and honey when he knows enough to reject the wrong and choose the right.' },
    excerpt: 'These four biblical foods were trusted for thousands of years — then condemned by modern nutrition. Now science is vindicating them one by one.',
    readTime: '10 min read',
    sections: [
      {
        heading: 'Eggs: The Perfect Protein',
        body: 'Of all foods available to humanity, the egg comes closest to nutritional perfection. With a protein quality score of 93.7% (second only to mother\'s milk), the egg provides complete nutrition in a compact package.',
        bullets: [
          'Egg white: 93.7% protein quality — contains all 8 essential amino acids',
          'Egg yolk: Vitamins A, D, E, K (all fat-soluble vitamins in one package)',
          'Lecithin in yolk: essential for brain health, memory, and liver function',
          'Choline: 682mg per yolk — critical for foetal brain development',
          'B12: present in yolk — essential for nerve health',
          'Minerals: Calcium, Phosphorus, Manganese, Iron, Copper, Zinc, Selenium',
        ],
      },
      {
        quote: { ref: 'Luke 11:11–12', text: 'Which of you fathers, if your son asks for a fish, will give him a snake instead? Or if he asks for an egg, will give him a scorpion?' },
      },
      {
        highlight: 'Eggs do NOT raise bad cholesterol. Multiple large studies have found no link between egg consumption and cardiovascular disease. Eating 4–12 eggs per week is safe and nutritionally beneficial.',
      },
      {
        heading: 'Dairy: A Covenant Food',
        body: 'The Bible describes the Promised Land as "a land flowing with milk and honey" — a phrase that appears over 20 times in scripture. Dairy was a divine provision, not a dietary afterthought.',
        bullets: [
          'Genesis 18:8 — Abraham served curds and milk to his heavenly visitors',
          'Deuteronomy 32:14 — "Curds from the herd and milk from the flock"',
          'Isaiah 7:15 — The Messiah would eat curds and honey',
          '2 Samuel 17:29 — Provisions for David included curds, sheep, and cheese',
        ],
      },
      {
        body: 'Modern research reveals why God endorsed dairy so strongly. Full-fat dairy contains three remarkable compounds:',
        bullets: [
          'Butyric acid — a short-chain fatty acid with proven anti-cancer properties; inhibits tumor cell growth',
          'Lauric acid — a medium-chain fatty acid with potent antimicrobial, antiviral, and antifungal effects',
          'CLA (Conjugated Linoleic Acid) — found in grass-fed dairy; proven to reduce cancer risk and body fat',
        ],
      },
      {
        highlight: 'Children should NEVER drink skim or low-fat milk. The fat in milk is essential for absorbing Vitamins A, D, E, and K — and for healthy brain development.',
      },
      {
        heading: 'Coconut Oil: The Multi-Purpose Miracle',
        body: 'Coconut oil has been misunderstood and maligned — primarily because of its high saturated fat content. But the saturated fats in coconut oil are medium-chain fatty acids (MCFAs) that behave completely differently from long-chain saturated fats.',
        bullets: [
          '1 Timothy 4:4 — "For everything God created is good, and nothing is to be rejected if it is received with thanksgiving"',
          'Psalm 104:15 — "Oil to make their faces shine"',
          'Lauric acid (44.6g/100g) — converts to monolaurin; destroys bacteria, viruses, and fungi',
          'MCFAs go directly to the liver and are burned as energy — they do NOT cause fat storage',
          'Speeds thyroid function and metabolism',
          'Has NO cholesterol',
          'Best cooking oil — highly stable, does not oxidise at cooking temperatures unlike polyunsaturated oils',
        ],
      },
      {
        heading: 'Grapes: The Antioxidant Powerhouse',
        body: 'Grapes appear over 50 times in scripture. Modern research has identified why they deserve this prominence — grapes (particularly purple/red grapes) contain the most concentrated collection of bioactive phytochemicals of any common fruit:',
        bullets: [
          'Resveratrol — crosses the blood-brain barrier; extends lifespan in multiple organisms; anti-cancer, anti-aging',
          'Pterostilbene — inhibits breast cancer, reduces LDL, anti-diabetic properties',
          'Ellagic Acid — neutralises carcinogens before they damage DNA',
          'Quercetin — anti-inflammatory, anti-viral, found also in onions and apples',
          'Anthocyanins — give grapes their purple colour; powerful antioxidants',
          'OPCs (Oligomeric Proanthocyanidins) — 20x more potent than Vitamin C as antioxidant',
        ],
      },
      {
        quote: { ref: 'Zechariah 9:17', text: 'Grain will make the young men thrive, and new wine the young women.' },
      },
    ],
  },

  {
    slug: 'vegetables-fruits-nuts-grains',
    number: 8,
    title: 'Vegetables, Fruits, Nuts & Grains',
    subtitle: "The plant kingdom's nutritional gifts and what the USDA data reveals",
    category: 'Food Guide',
    accent: 'bg-orange-600',
    accentHex: '#ea580c',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Colourful produce at a fresh food market',
    verse: { ref: 'Genesis 1:29', text: 'I give you every seed-bearing plant on the face of the whole earth and every tree that has fruit with seed in it. They will be yours for food.' },
    excerpt: 'From Lycopene in tomatoes to Resveratrol in grapes, God packed extraordinary healing compounds into every colour of the plant kingdom.',
    readTime: '9 min read',
    sections: [
      {
        heading: 'Eat the Rainbow — It\'s Not Just Pretty',
        body: 'The pigments that give plants their colours are not decorative — they are phytochemicals with specific health-protective functions. Each colour represents different compounds:',
        bullets: [
          'Red (tomatoes, pomegranate) — Lycopene, Anthocyanins',
          'Orange (carrot, sweet potato) — Beta-carotene, Alpha-carotene',
          'Yellow-green (broccoli, cabbage) — Sulforaphane, Indoles, Lutein',
          'Purple (grapes, eggplant) — Resveratrol, Anthocyanins, OPCs',
          'White (garlic, onion) — Allicin, Quercetin, Selenium',
        ],
      },
      {
        heading: 'Vegetables: Star Players',
        tableHeaders: ['Vegetable', 'Key Nutrient', 'Health Benefit'],
        tableRows: [
          ['Carrot', 'Beta-carotene 8332 mcg, Vit A 17033 IU', 'Vision, immune function, skin health'],
          ['Tomato', 'Lycopene 3041 mcg (2× more efficient than carotene)', 'Prostate cancer protection, cardiovascular'],
          ['Broccoli', 'Vit C 64.9mg, Vit K 141mcg, Selenium', 'Anti-cancer, bone health, liver detox'],
          ['Garlic', 'High Selenium, Allicin', 'Antimicrobial, anti-cancer, cholesterol-lowering'],
          ['Onion', 'Quercetin flavonoid', 'Anti-inflammatory, antioxidant, anti-viral'],
          ['Cabbage', 'Vit C, Indole-3-carbinol', 'Hormone balance, cancer prevention'],
        ],
      },
      {
        heading: 'Fruits: Naturally Low Glycemic Load',
        body: 'One of the most persistent nutrition myths is that diabetics should avoid fruit. The glycemic load data tells a different story — every common fruit has a lower glycemic load than plain cooked rice.',
        tableHeaders: ['Fruit', 'Notable Nutrients', 'GL (per 100g)'],
        tableRows: [
          ['Grapes (purple)', 'Resveratrol, Pterostilbene, OPCs', '9'],
          ['Orange', 'Vitamin C, Hesperidin, Folate', '5'],
          ['Papaya', 'Vit C 61.8mg, Vit A 1094 IU, Papain', '4'],
          ['Mango', 'Beta-carotene, Vit C, Vit B6', '10'],
          ['Pomegranate', 'Ellagic acid, Punicalagin', '6'],
          ['Plain cooked rice (comparison)', 'Mostly starch', '25'],
        ],
      },
      {
        highlight: 'All fruits are better than plain rice. Worry about your rice portions, not your fruit intake.',
      },
      {
        heading: 'Nuts: Nutrient Density in Miniature',
        body: 'Nuts are calorie-dense but micronutrient-rich. A small daily portion provides fatty acids, minerals, and protein that are otherwise hard to obtain:',
        tableHeaders: ['Nut', 'Standout Nutrient', 'RDA Coverage (10g serving)'],
        tableRows: [
          ['Almond', 'Vitamin E 26.2mg/100g', '17% Vit E, 2.6% Ca'],
          ['Cashew', 'Magnesium 292mg/100g', '7% Mg, 2% Se'],
          ['Coconut (raw)', 'Lauric acid (MCT)', 'Antimicrobial, quick energy'],
          ['Peanut', 'High protein, niacin', 'Caution: aflatoxin risk if improperly stored'],
        ],
      },
      {
        heading: 'Grains: Far Less Than You Think',
        body: 'Grains are not the nutritional foundation they are made out to be. Data from USDA shows that for a 50kg person on a balanced diet, the required grain intake is far below what most people consume daily.',
        bullets: [
          'Rice and corn: high in carbohydrates but relatively low in vitamins and minerals',
          'Oats, Bengal gram, Black gram: significantly richer in protein, fat, and minerals',
          'Wheat: moderate glycemic load; far better than plain rice',
          'Reducing grain intake and increasing vegetables, fish, eggs, and dairy produces a more complete nutrient profile',
        ],
      },
      {
        quote: { ref: 'Genesis 1:29', text: 'I give you every seed-bearing plant on the face of the whole earth and every tree that has fruit with seed in it. They will be yours for food.' },
      },
    ],
  },

  {
    slug: 'know-your-numbers',
    number: 9,
    title: 'Know Your Numbers',
    subtitle: 'BMI, BMR, calorie values, and how to build your personalised biblical diet plan',
    category: 'Practical',
    accent: 'bg-indigo-700',
    accentHex: '#4338ca',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Fresh balanced meal with vegetables and protein',
    verse: { ref: 'Proverbs 27:23', text: 'Be sure you know the condition of your flocks, give careful attention to your herds.' },
    excerpt: 'Wisdom requires knowing your body\'s actual needs. These practical numbers will help you eat intentionally rather than reactively.',
    readTime: '10 min read',
    sections: [
      {
        heading: 'Body Mass Index (BMI)',
        body: 'BMI was developed by Belgian mathematician Adolphe Quetelet as a simple tool to screen for weight-related health risks. It compares your weight to your height.',
        bullets: [
          'Formula: BMI = Weight (kg) ÷ Height² (m²)',
          'Example: 70kg, 1.75m → 70 ÷ (1.75 × 1.75) = 22.9 (Normal)',
        ],
      },
      {
        tableHeaders: ['Category', 'BMI Range (kg/m²)'],
        tableRows: [
          ['Starvation', '< 14.9'],
          ['Underweight', '15.0 – 18.4'],
          ['Normal', '18.5 – 22.9'],
          ['Overweight', '23.0 – 27.5'],
          ['Obese', '27.6 – 40.0'],
          ['Morbidly Obese', '> 40'],
        ],
      },
      {
        heading: 'Basal Metabolic Rate (BMR)',
        body: 'BMR is the energy your body needs at complete rest to keep your vital organs functioning. It accounts for roughly 60–70% of total daily energy expenditure.',
        bullets: [
          'Liver: 27% of resting energy expenditure',
          'Brain: 19%',
          'Other organs: 19%',
          'Skeletal muscle: 18%',
          'Kidneys: 10%',
          'Heart: 7%',
        ],
      },
      {
        body: 'BMR Formula (Mifflin-St Jeor equation):',
        highlight: 'BMR = (9.99 × weight in kg) + (6.25 × height in cm) − (4.92 × age) + 5 for men  |  − 161 for women',
      },
      {
        body: 'BMR decreases with age and loss of lean body mass. The most effective way to maintain a higher BMR is to preserve and build skeletal muscle through physical activity.',
      },
      {
        heading: 'Calorific Values of Common Foods',
        tableHeaders: ['Food Item', 'Portion', 'Calories'],
        tableRows: [
          ['Ghee & oils', '100g', '900'],
          ['Butter', '100g', '755'],
          ['Dates', '100g', '280'],
          ['Chapatti', '100g', '340'],
          ['Poori / Parotta', '100g', '500'],
          ['Cooked rice', '100g', '120'],
          ['Egg (whole)', '1 number', '75'],
          ['Honey', '100g', '304'],
          ['Cow milk', '100g', '65'],
          ['Grapes', '100g', '30–70'],
          ['Papaya', '100g', '40'],
          ['Cucumber', '100g', '15'],
        ],
      },
      {
        heading: 'Sample Balanced Daily Diet (50kg person, 2208 kcal)',
        tableHeaders: ['Meal', 'Foods', 'Calories'],
        tableRows: [
          ['Breakfast (774 cal)', 'Milk 250g + Egg 50g + Wheat 75g + Plantain 100g + Coconut 50g', '774'],
          ['Lunch (580 cal)', 'Rice 150g + Pulse 25g + Vegetable 100g + Oil 12.5g + Fish 50g + Coconut 25g + Carrot 25g', '580'],
          ['Snacks (274 cal)', 'Milk 250g + Grapes 100g + Nuts 10g', '274'],
          ['Supper (580 cal)', 'Same as lunch', '580'],
        ],
      },
      {
        body: 'This diet achieves: Carbohydrates 45% | Fat 41% | Protein 14%. The glycemic load is well under control except where wheat and rice are consumed — reinforce the importance of moderation with grains.',
      },
      {
        quote: { ref: 'Proverbs 27:23', text: 'Be sure you know the condition of your flocks, give careful attention to your herds.' },
      },
    ],
  },

  {
    slug: 'myths-busted-healthy-living',
    number: 10,
    title: 'Busting Nutrition Myths',
    subtitle: 'Common dietary taboos debunked — and biblical wisdom for truly healthy living',
    category: 'Practical',
    accent: 'bg-rose-800',
    accentHex: '#9f1239',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Healthy cooking in a modern kitchen',
    verse: { ref: '1 Timothy 4:4', text: 'For everything God created is good, and nothing is to be rejected if it is received with thanksgiving.' },
    excerpt: 'Modern nutrition has been plagued by myths. The Bible debunks most of them with simple, timeless wisdom about food, moderation, and the goodness of what God created.',
    readTime: '10 min read',
    sections: [
      {
        heading: 'Myths vs Facts',
        tableHeaders: ['Common Myth', 'The Fact'],
        tableRows: [
          ['All sweets are bad', 'All sweets have a lower glycemic load than plain rice'],
          ['Fruits raise blood sugar', 'All fruits have a lower GL than plain rice — eat freely'],
          ['Fatty foods make you fat', 'Excess calories from ANY food cause fat storage. Starchy diets are the biggest driver of obesity'],
          ['Milk cream is bad', 'Milk cream contains beta-carotene — an antioxidant that prevents heart attack'],
          ['Cholesterol is bad', 'Cholesterol is essential. The body makes ~1g/day because it needs it'],
          ['All oils are bad', 'Oils are needed to absorb fat-soluble vitamins A, D, E, K. Zero glycemic impact'],
          ['Coconut oil contains cholesterol', 'Coconut oil has NO cholesterol. It is the best cooking oil available'],
          ['Egg yolk is bad', 'Egg yolk contains all fat-soluble vitamins and good fats in emulsion form — highly bioavailable'],
          ['Non-veg foods overload kidneys', 'Animal proteins are more efficient — less waste, more complete amino acids'],
        ],
      },
      {
        heading: 'The DOs: Practical Biblical Living',
        bullets: [
          'Control calorie intake to match your body\'s need and activity level (BMR × activity factor)',
          'Eat a balanced diet — carbohydrates, protein, and fat at every meal',
          'Use all food groups: fish, dairy, meat/poultry, vegetables, fruits, nuts, oils, grains',
          'Eat naturally coloured and flavoured foods — colour = antioxidants',
          'Use spices liberally: Ginger, Turmeric, Garlic, Cinnamon, Pepper, Coriander',
          'When eating sweets, reduce rice/starch portion correspondingly',
          'Eat vegetables raw when possible (tomato, carrot, onion, garlic, green leaves)',
          'Cook vegetables at low heat to preserve nutrients',
          'Use coconut oil for all cooking — take 50g raw coconut daily',
          'Take 100g purple grapes daily for Resveratrol and Pterostilbene',
          'Take 10–20g of nuts daily (cashew or almond) for MUFA and PUFA',
        ],
      },
      {
        heading: 'The DON\'Ts: Clear Avoidances',
        bullets: [
          'Avoid refined and hydrogenated vegetable oils (Dalda, Vanaspathy, Margarine) — contain toxic trans fats',
          'Avoid bakery items made with hydrogenated oils',
          'Avoid regular cane sugar — provides only empty calories with zero nutrients',
          'Avoid synthetic drinks (cola, soda) — contain High Fructose Corn Syrup; cause obesity',
          'Avoid deep frying protein foods — denatures the protein structure',
          'Never reuse cooking oils — oxidised oils are carcinogenic',
          'Avoid non-stick cookware — PFOA coating releases carcinogenic fumes above 230°C',
          'Avoid aluminium cookware — reacts with acidic foods; implicated in Alzheimer\'s disease',
          'Use ceramic or silica cookware instead',
        ],
      },
      {
        heading: 'Alcohol: Biblical and Scientific Verdict',
        body: 'The Bible is unambiguous about alcohol — and modern neuroscience agrees:',
        bullets: [
          'Ephesians 5:18 — "Do not get drunk on wine, which leads to debauchery"',
          'Luke 21:34 — Jesus cautions against drunkenness',
          'Galatians 5:21 — Drunkenness excludes from the kingdom',
          'Isaiah 5:11 — "Woe to those who rise early in the morning to run after their drinks"',
          'Medically: alcohol is a neurotoxin — causes structural brain damage even in small amounts',
          'Linked to cancer of liver, pancreas, breast, and colon',
          'Disrupts hormonal balance and immune function',
        ],
      },
      {
        heading: 'What About Red Wine?',
        body: 'Red wine is often promoted for its resveratrol content. But the bioflavonoids are in the grape and grape skin — NOT in the alcohol produced by fermenting the grape pulp. Consuming purple grapes directly gives you all the benefits of resveratrol without the harm of alcohol.',
        highlight: '"Everything God created is good, and nothing is to be rejected if it is received with thanksgiving" — 1 Timothy 4:4. The grape was created good. The fermented version introduces harm.',
      },
      {
        quote: { ref: '1 Timothy 4:4', text: 'For everything God created is good, and nothing is to be rejected if it is received with thanksgiving.' },
      },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAdjacentArticles(slug: string): {
  prev: Article | null
  next: Article | null
} {
  const idx = articles.findIndex((a) => a.slug === slug)
  return {
    prev: idx > 0 ? articles[idx - 1] : null,
    next: idx < articles.length - 1 ? articles[idx + 1] : null,
  }
}
