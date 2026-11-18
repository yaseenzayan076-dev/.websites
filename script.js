// Exact Menu Database extracted directly from Casa Rasa official menu cards
let menuData = JSON.parse(localStorage.getItem('casarasa_custom_menu') || 'null') || [
    // Kuzhimandi
    { id: 1, name: "CHICKEN MANDI", category: "Kuzhimandi", desc: "Authentic Arabian spiced rice with tender chicken", prices: { "QTR": 240, "HALF": 440, "FULL": 800 }, popular: true, img: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "BEEF MANDI", category: "Kuzhimandi", desc: "Slow-cooked succulent beef with aromatic Mandi rice", prices: { "QTR": 290, "HALF": 530, "FULL": 990 }, popular: true, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "MUTTON MANDI", category: "Kuzhimandi", desc: "Tender juicy mutton pieces served with flavored rice", prices: { "QTR": 400, "HALF": 750, "FULL": 1450 }, popular: false, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "MIXED TIKKA MANDI", category: "Kuzhimandi", desc: "Achari Tikka, Chicken Tikka, Afghani Tikka, Hyderabadi Tikka (5 pcs each)", prices: { "FULL": 550 }, popular: false, img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "MIXED CHICKEN MANDI", category: "Kuzhimandi", desc: "Tandoori Chicken, Peri Peri Alfaham, Normal Alfaham, Masala Shawaya", prices: { "FULL": 990 }, popular: true, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "TANDOORI MANDI", category: "Kuzhimandi", desc: "Smoky tandoori chicken served with fragrant rice", prices: { "QTR": 240, "HALF": 430, "FULL": 800 }, popular: false, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "PLATTER MANDI", category: "Kuzhimandi", desc: "Grand assortment of grilled meats with special mandi rice", prices: { "FULL": 1300 }, popular: true, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "ALFAHAM MANDI", category: "Kuzhimandi", desc: "Juicy Arabian grilled alfaham chicken with rice", prices: { "QTR": 240, "HALF": 450, "FULL": 880 }, popular: false, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80" },
    { id: 9, name: "PERI PERI MANDI", category: "Kuzhimandi", desc: "Spicy peri peri flavored chicken mandi", prices: { "QTR": 250, "HALF": 460, "FULL": 900 }, popular: true, img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=500&q=80" },
    { id: 10, name: "SHAWAYA MANDI", category: "Kuzhimandi", desc: "Special shawaya seasoned chicken with mandi rice", prices: { "QTR": 250, "HALF": 460, "FULL": 900 }, popular: false, img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80" },
    { id: 11, name: "CHICKEN MANDI PIECE", category: "Kuzhimandi", desc: "Extra single chicken piece", prices: { "PLATE": 430 }, popular: false, img: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=500&q=80" },
    { id: 12, name: "BEEF MANDI PIECE", category: "Kuzhimandi", desc: "Extra single beef piece", prices: { "PLATE": 570 }, popular: false, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
    { id: 13, name: "MUTTON MANDI PIECE", category: "Kuzhimandi", desc: "Extra single mutton piece", prices: { "PLATE": 1000 }, popular: false, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },
    { id: 14, name: "MANDI RICE", category: "Kuzhimandi", desc: "Flavorful long-grain Arabian mandi rice", prices: { "QTR": 130, "HALF": 220, "FULL": 400 }, popular: false, img: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=500&q=80" },

    // Platers
    { id: 15, name: "CHICKEN PLATTER", category: "Platers", desc: "4 Pc Chicken Tikka, 4 Pc Malai Tikka, 4 Pc Chicken Seekh Kebab, 1 Pc Tandoori Chicken, 1 Pc Alfaham, 4 Pc Wings, 4 Kuboos, Mayonnaise, Red Mayonnaise, Hummus", prices: { "FULL": 690 }, popular: true, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
    { id: 16, name: "NON-VEG MIXED PLATTER", category: "Platers", desc: "4 Pc Chicken Tikka, 4 Pc Beef Seekh Kebab, 4 Pc Mutton Seekh Kebab, 1 Pc Alfaham, 1 Pc Tandoori Chicken, 1 Pc Afghani Tandoori, 4 Pc Wings, 4 Kuboos, Mayonnaise, Red Mayonnaise, Hummus", prices: { "FULL": 990 }, popular: true, img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80" },
    { id: 17, name: "TIKKA MIXED PLATTER", category: "Platers", desc: "Paneer Tikka, Fish Tikka, Achari Tikka, Chicken Malai Tikka, Pahadi Tikka, Hyderabadi Tikka, Crushed Potato, Honey Chilli Pineapple, Mushroom Tikka, Kuboos, Salad, Hummus", prices: { "FULL": 990 }, popular: false, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },
    { id: 18, name: "CASA RASA NON-VEG PLATTER", category: "Platers", desc: "4 Pc Chicken Tikka, 4 Pc Beef, Chicken & Mutton Seekh Kebab, 1 Pc Alfaham, 1 Pc Afghani Tandoori, 1 Pc Tandoori Chicken, 4 Pc Prawn Tikka, 4 Pc Fish Tikka, 2 Pc Drumstick, 4 Pc Malai Tikka, 4 Pc Wings, 4 Kuboos, Fattoush Salad, Hummus", prices: { "FULL": 1550 }, popular: true, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },

    // Arabic Grills
    { id: 19, name: "ALFAHAM", category: "Arabic Grills", desc: "Classic Arabian charcoal grilled chicken", prices: { "QTR": 140, "HALF": 280, "FULL": 550 }, popular: false, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 20, name: "PERI PERI ALFAHAM", category: "Arabic Grills", desc: "Spicy peri peri marinated grilled chicken", prices: { "QTR": 160, "HALF": 290, "FULL": 580 }, popular: true, img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=500&q=80" },
    { id: 21, name: "HONEY CHILLY ALFAHAM", category: "Arabic Grills", desc: "Sweet & spicy glazed grilled alfaham", prices: { "QTR": 170, "HALF": 300, "FULL": 590 }, popular: false, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80" },
    { id: 22, name: "KANDHARI ALFAHAM", category: "Arabic Grills", desc: "Rich spicy special kandhari grill", prices: { "QTR": 160, "HALF": 290, "FULL": 580 }, popular: false, img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80" },
    { id: 23, name: "ARABIC SEEKH KEBAB", category: "Arabic Grills", desc: "Juicy minced meat skewers", prices: { "PLATE": 390 }, popular: false, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80" },
    { id: 24, name: "CHICKEN SEEKH KEBAB", category: "Arabic Grills", desc: "Spiced minced chicken skewers", prices: { "PLATE": 310 }, popular: false, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
    { id: 25, name: "BEEF SEEKH KEBAB", category: "Arabic Grills", desc: "Flavorful minced beef skewers", prices: { "PLATE": 340 }, popular: false, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },
    { id: 26, name: "MUTTON SEEKH KEBAB", category: "Arabic Grills", desc: "Rich mutton seekh kebab", prices: { "PLATE": 400 }, popular: false, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 27, name: "MIXED SEEKH KEBAB", category: "Arabic Grills", desc: "Assorted chicken, beef and mutton seekh kebabs", prices: { "PLATE": 490 }, popular: true, img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80" },

    // Tandoori Tikka
    { id: 28, name: "GULAFIC TIKKA", category: "Tandoori Tikka", desc: "Special tandoori chicken tikka", prices: { "PLATE": 320 }, popular: false, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 29, name: "LEMON TIKKA", category: "Tandoori Tikka", desc: "Zesty lemon infused chicken tikka", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80" },
    { id: 30, name: "ALISHAN TIKKA", category: "Tandoori Tikka", desc: "Chef special rich spiced tikka", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=500&q=80" },
    { id: 31, name: "CHICKEN TIKKA", category: "Tandoori Tikka", desc: "Classic boneless chicken tikka", prices: { "PLATE": 280 }, popular: true, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
    { id: 32, name: "AFGHANI TIKKA", category: "Tandoori Tikka", desc: "Creamy mild afghani chicken tikka", prices: { "PLATE": 270 }, popular: false, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 33, name: "MALAI TIKKA", category: "Tandoori Tikka", desc: "Melt-in-mouth creamy malai tikka", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80" },
    { id: 34, name: "TANDOORI CHICKEN", category: "Tandoori Tikka", desc: "Traditional clay oven roasted chicken", prices: { "QTR": 150, "HALF": 290, "FULL": 520 }, popular: true, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 35, name: "TANDOORI AFGHANI", category: "Tandoori Tikka", desc: "Creamy tandoori chicken", prices: { "QTR": 160, "HALF": 290, "FULL": 540 }, popular: false, img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80" },
    { id: 36, name: "TANDOORI PRAWNS", category: "Tandoori Tikka", desc: "Juicy prawns roasted in tandoor", prices: { "PLATE": 360 }, popular: true, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },

    // Soups & Salads
    { id: 37, name: "CHICKEN MANCHOW SOUP", category: "Soups & Salads", desc: "Spicy Chinese chicken soup with noodles", prices: { "VEG": 130, "CHICKEN": 150 }, popular: false, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" },
    { id: 38, name: "CREAM OF SOUP", category: "Soups & Salads", desc: "Choice of Tomato, Mushroom or Chicken", prices: { "TOMATO": 140, "MUSHROOM": 150, "CHICKEN": 170 }, popular: false, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" },
    { id: 39, name: "HOT & SOUR SOUP", category: "Soups & Salads", desc: "Classic hot & sour soup", prices: { "VEG": 130, "CHICKEN": 150 }, popular: true, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" },
    { id: 40, name: "LEMON CORIANDER SOUP", category: "Soups & Salads", desc: "Refreshing lemon coriander broth", prices: { "VEG": 130, "CHICKEN": 150 }, popular: false, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" },
    { id: 41, name: "SWEET CORN SOUP", category: "Soups & Salads", desc: "Mild sweet corn soup", prices: { "VEG": 130, "CHICKEN": 150 }, popular: false, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" },
    { id: 42, name: "FRESH GREEN SALAD", category: "Soups & Salads", desc: "Crisp fresh garden vegetables", prices: { "PLATE": 100 }, popular: false, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80" },
    { id: 43, name: "FATTOUSH SALAD", category: "Soups & Salads", desc: "Traditional Arabian bread salad", prices: { "PLATE": 140 }, popular: true, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80" },
    { id: 44, name: "RUSSIAN SALAD", category: "Soups & Salads", desc: "Classic creamy Russian salad", prices: { "PLATE": 150 }, popular: false, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80" },

    // Starters
    { id: 45, name: "GOBI 65", category: "Starters", desc: "Crispy fried cauliflower florets", prices: { "PLATE": 180 }, popular: false, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" },
    { id: 46, name: "MUSHROOM 65", category: "Starters", desc: "Spicy crisp fried mushrooms", prices: { "PLATE": 240 }, popular: false, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" },
    { id: 47, name: "PANEER 65", category: "Starters", desc: "Crispy spiced paneer cubes", prices: { "PLATE": 260 }, popular: false, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" },
    { id: 48, name: "ORANGE CHICKEN (SEMI DRY)", category: "Starters", desc: "Tangy orange flavored chicken", prices: { "PLATE": 310 }, popular: false, img: "https://images.unsplash.com/photo-1526318896980-cf78c08b2474?auto=format&fit=crop&w=500&q=80" },
    { id: 49, name: "KUNFU CHICKEN (SEMI DRY)", category: "Starters", desc: "Special oriental kung fu chicken", prices: { "PLATE": 310 }, popular: false, img: "https://images.unsplash.com/photo-1526318896980-cf78c08b2474?auto=format&fit=crop&w=500&q=80" },
    { id: 50, name: "HONG KONG CHICKEN (SEMI DRY)", category: "Starters", desc: "Hong Kong style special chicken", prices: { "PLATE": 310 }, popular: false, img: "https://images.unsplash.com/photo-1526318896980-cf78c08b2474?auto=format&fit=crop&w=500&q=80" },
    { id: 51, name: "HONEY TOASTED WINGS", category: "Starters", desc: "Crispy wings in honey glaze", prices: { "PLATE": 240 }, popular: true, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 52, name: "DRAGON CHICKEN", category: "Starters", desc: "Spicy oriental dragon chicken", prices: { "PLATE": 280 }, popular: true, img: "https://images.unsplash.com/photo-1526318896980-cf78c08b2474?auto=format&fit=crop&w=500&q=80" },
    { id: 53, name: "CHICKEN LOLLIPOP", category: "Starters", desc: "Crispy fried chicken lollipops", prices: { "PLATE": 260 }, popular: true, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 54, name: "CHICKEN 65", category: "Starters", desc: "Classic chicken 65", prices: { "PLATE": 280 }, popular: false, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
    { id: 55, name: "CHICKEN DRUMSTICK", category: "Starters", desc: "Crispy chicken drumsticks", prices: { "PLATE": 280 }, popular: false, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
    { id: 56, name: "CHICKEN KONDATTAM", category: "Starters", desc: "Kerala style crispy spiced chicken", prices: { "PLATE": 290 }, popular: true, img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80" },

    // Beef
    { id: 57, name: "CHILLY BEEF", category: "Beef", desc: "Classic stir-fried spicy beef", prices: { "PLATE": 280 }, popular: false, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
    { id: 58, name: "HOT & SPICY BEEF", category: "Beef", desc: "Extra spicy hot beef preparation", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
    { id: 59, name: "BEEF DRY FRY", category: "Beef", desc: "Traditional Kerala style beef roast", prices: { "PLATE": 310 }, popular: true, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 60, name: "BEEF KONDATTAM", category: "Beef", desc: "Crispy deep-fried spicy beef", prices: { "PLATE": 310 }, popular: false, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },
    { id: 61, name: "DRAGON BEEF", category: "Beef", desc: "Hot and spicy dragon beef", prices: { "PLATE": 310 }, popular: false, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80" },

    // Prawns
    { id: 62, name: "PRAWNS DRY FRY", category: "Prawns", desc: "Spicy roasted prawns", prices: { "PLATE": 340 }, popular: false, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },
    { id: 63, name: "DRAGON PRAWNS", category: "Prawns", desc: "Spicy dragon prawns", prices: { "PLATE": 360 }, popular: false, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },
    { id: 64, name: "PRAWNS BUTTER PEPPER GARLIC", category: "Prawns", desc: "Prawns tossed in rich butter garlic sauce", prices: { "PLATE": 360 }, popular: true, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },
    { id: 65, name: "CHILLY PRAWNS", category: "Prawns", desc: "Classic spicy chilly prawns", prices: { "PLATE": 340 }, popular: false, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },

    // Rice & Noodles
    { id: 66, name: "FRIED RICE", category: "Rice & Noodles", desc: "Choice of Mix, Beef, Chicken, Egg or Veg", prices: { "VEG": 150, "EGG": 170, "CHICKEN": 190, "BEEF": 190, "MIX": 220 }, popular: true, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80" },
    { id: 67, name: "SCHEZWAN FRIED RICE", category: "Rice & Noodles", desc: "Spicy Schezwan style fried rice", prices: { "VEG": 160, "EGG": 170, "CHICKEN": 190, "BEEF": 210, "MIX": 220 }, popular: false, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80" },
    { id: 68, name: "NOODLES", category: "Rice & Noodles", desc: "Stir-fried Hakka noodles", prices: { "VEG": 150, "EGG": 170, "CHICKEN": 190, "BEEF": 200, "MIX": 220 }, popular: false, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80" },
    { id: 69, name: "SCHEZWAN NOODLES", category: "Rice & Noodles", desc: "Spicy Schezwan noodles", prices: { "VEG": 160, "EGG": 170, "CHICKEN": 200, "BEEF": 210, "MIX": 220 }, popular: true, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80" },
    { id: 70, name: "PLAIN RICE", category: "Rice & Noodles", desc: "Steamed plain rice", prices: { "PLATE": 100 }, popular: false, img: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=500&q=80" },
    { id: 71, name: "CHICKEN PULAO", category: "Rice & Noodles", desc: "Fragrant spiced chicken pulao", prices: { "PLATE": 180 }, popular: false, img: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=500&q=80" },
    { id: 72, name: "CURD RICE", category: "Rice & Noodles", desc: "Soothing south Indian curd rice", prices: { "PLATE": 110 }, popular: false, img: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=500&q=80" },
    { id: 73, name: "JEERA RICE", category: "Rice & Noodles", desc: "Tempered cumin rice", prices: { "PLATE": 120 }, popular: false, img: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=500&q=80" },

    // Chinese Gravy
    { id: 74, name: "AMERICAN CHOPSY", category: "Chinese Gravy", desc: "Crispy noodles with American gravy", prices: { "PLATE": 360 }, popular: false, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80" },
    { id: 75, name: "CHINEESE CHOPSY", category: "Chinese Gravy", desc: "Traditional Chinese chopsuey", prices: { "PLATE": 310 }, popular: false, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80" },
    { id: 76, name: "CHILLY CHICKEN", category: "Chinese Gravy", desc: "Classic Chinese chilly chicken gravy", prices: { "HALF": 240, "FULL": 480 }, popular: true, img: "https://images.unsplash.com/photo-1526318896980-cf78c08b2474?auto=format&fit=crop&w=500&q=80" },
    { id: 77, name: "GARLIC CHICKEN", category: "Chinese Gravy", desc: "Flavorful garlic chicken gravy", prices: { "PLATE": 280 }, popular: false, img: "https://images.unsplash.com/photo-1526318896980-cf78c08b2474?auto=format&fit=crop&w=500&q=80" },
    { id: 78, name: "CHICKEN MANCHURIAN", category: "Chinese Gravy", desc: "Classic chicken manchurian", prices: { "PLATE": 280 }, popular: false, img: "https://images.unsplash.com/photo-1526318896980-cf78c08b2474?auto=format&fit=crop&w=500&q=80" },
    { id: 79, name: "GINGERCHICKEN", category: "Chinese Gravy", desc: "Ginger flavored chicken gravy", prices: { "PLATE": 280 }, popular: false, img: "https://images.unsplash.com/photo-1526318896980-cf78c08b2474?auto=format&fit=crop&w=500&q=80" },
    { id: 80, name: "SHCHEZWAN CHICKEN", category: "Chinese Gravy", desc: "Spicy Schezwan chicken gravy", prices: { "PLATE": 280 }, popular: false, img: "https://images.unsplash.com/photo-1526318896980-cf78c08b2474?auto=format&fit=crop&w=500&q=80" },

    // Chicken Gravy
    { id: 81, name: "CHICKEN LABAB DAR", category: "Chicken", desc: "Rich gravy chicken specialty", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 82, name: "CHICKEN MAKHANI", category: "Chicken", desc: "Classic makhani chicken", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 83, name: "PEPPER CHICKEN", category: "Chicken", desc: "Spicy black pepper chicken", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=500&q=80" },
    { id: 84, name: "KADAI CHICKEN", category: "Chicken", desc: "Spiced kadai chicken curry", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 85, name: "HYDERABADI CHICKEN", category: "Chicken", desc: "Hyderabadi style chicken curry", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 86, name: "CHICKEN MUGHLAI", category: "Chicken", desc: "Rich royal mughlai chicken", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 87, name: "CHICKEN TIKKA MASALA", category: "Chicken", desc: "Tikka pieces in spiced masala gravy", prices: { "PLATE": 290 }, popular: true, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 88, name: "CHICKEN PATIYALA", category: "Chicken", desc: "Special patiyala chicken curry", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 89, name: "BUTTER CHICKEN", category: "Chicken", desc: "Classic creamy tomato butter chicken", prices: { "PLATE": 290 }, popular: true, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 90, name: "AFGHANI CHICKEN MASALA", category: "Chicken", desc: "Mild creamy afghani chicken masala", prices: { "PLATE": 290 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },

    // Mutton
    { id: 91, name: "MUTTON ROGAN JOSH", category: "Mutton", desc: "Traditional Kashmiri mutton curry", prices: { "PLATE": 380 }, popular: true, img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=500&q=80" },
    { id: 92, name: "MUTTON PEPPER FRY", category: "Mutton", desc: "Spicy roasted mutton pepper fry", prices: { "PLATE": 380 }, popular: false, img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=500&q=80" },
    { id: 93, name: "MUTTON PEPPER MASALA", category: "Mutton", desc: "Rich mutton pepper masala gravy", prices: { "PLATE": 380 }, popular: false, img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=500&q=80" },

    // Special Biriyani
    { id: 94, name: "CHICKEN DUM BIRIYANI", category: "Special Biriyani", desc: "Aromatic authentic chicken dum biriyani", prices: { "REGULAR": 140, "FULL": 200 }, popular: true, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 95, name: "CHICKEN DUM BIRIYANI FAMILY PACK", category: "Special Biriyani", desc: "Large family pack biriyani", prices: { "HALF FAMILY": 400, "FULL FAMILY": 750 }, popular: true, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 96, name: "BIRIYANI PIECE", category: "Special Biriyani", desc: "Extra biriyani chicken piece", prices: { "PIECE": 60 }, popular: false, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 97, name: "BIRIYANI RICE", category: "Special Biriyani", desc: "Flavored biriyani rice only", prices: { "PLATE": 100 }, popular: false, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 98, name: "FISH BIRIYANI", category: "Special Biriyani", desc: "Special aromatic fish biriyani", prices: { "PLATE": 250 }, popular: false, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },

    // Indian Gravy & Veg
    { id: 99, name: "VEGETABLE KURMA", category: "Indian Gravy", desc: "Mild mixed vegetable kurma", prices: { "PLATE": 180 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 100, name: "KADAI VEGETABLE", category: "Indian Gravy", desc: "Spicy kadai vegetable curry", prices: { "PLATE": 190 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 101, name: "MIXED VEGETABLE CURRY", category: "Indian Gravy", desc: "Assorted vegetables in gravy", prices: { "PLATE": 190 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 102, name: "PANEER TIKKA MASALA", category: "Indian Gravy", desc: "Paneer tikka in rich masala gravy", prices: { "PLATE": 280 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 103, name: "PANEER BUTTER MASALA", category: "Indian Gravy", desc: "Creamy butter paneer curry", prices: { "PLATE": 240 }, popular: true, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 104, name: "KADAI PANEER", category: "Indian Gravy", desc: "Spicy kadai paneer curry", prices: { "PLATE": 230 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 105, name: "MUSHROOM MASALA", category: "Indian Gravy", desc: "Rich mushroom curry", prices: { "PLATE": 200 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 106, name: "GOBI MANCHURIAN", category: "Indian Gravy", desc: "Gobi manchurian dry/gravy", prices: { "PLATE": 190 }, popular: false, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" },
    { id: 107, name: "CHILLY GOBI", category: "Indian Gravy", desc: "Spicy chilly gobi", prices: { "PLATE": 170 }, popular: false, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" },
    { id: 108, name: "CHILLY MUSHROOM", category: "Indian Gravy", desc: "Spicy chilly mushroom", prices: { "PLATE": 190 }, popular: false, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" },
    { id: 109, name: "CHILLY PANEER", category: "Indian Gravy", desc: "Classic chilly paneer", prices: { "PLATE": 200 }, popular: false, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" },

    // Breads, Rolls & Dips
    { id: 110, name: "TURKISH ROLL", category: "Breads", desc: "Choice of Chicken, Beef or Mutton", prices: { "CHICKEN": 90, "BEEF": 100, "MUTTON": 120 }, popular: true, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 111, name: "CHICKEN TIKKA ROLLS", category: "Breads", desc: "Wrapped chicken tikka roll", prices: { "PLATE": 120 }, popular: false, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 112, name: "MASALA SHAWAYA", category: "Breads", desc: "Shawaya roll / plate", prices: { "QTR": 140, "HALF": 270, "FULL": 530 }, popular: false, img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80" },
    { id: 113, name: "KERALA PORATTA", category: "Breads", desc: "Flaky layered Kerala parotta", prices: { "PIECE": 15 }, popular: true, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 114, name: "NOOL PORATTA", category: "Breads", desc: "Shredded string parotta", prices: { "PIECE": 18 }, popular: false, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 115, name: "WHEAT PORATTA", category: "Breads", desc: "Whole wheat parotta", prices: { "PIECE": 20 }, popular: false, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 116, name: "CHAPPATHI", category: "Breads", desc: "Soft wheat chappathi", prices: { "PIECE": 15 }, popular: false, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },
    { id: 117, name: "KUBOOS", category: "Breads", desc: "Soft Arabian bread", prices: { "PIECE": 10 }, popular: false, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" },
    { id: 118, name: "TANDOORI ROTI / BUTTER ROTI", category: "Breads", desc: "Clay oven tandoori wheat roti", prices: { "ROTI": 25, "BUTTER": 30 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 119, name: "PLAIN NAAN / BUTTER NAAN", category: "Breads", desc: "Soft tandoori naan", prices: { "PLAIN": 30, "BUTTER": 35 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 120, name: "GARLIC NAAN", category: "Breads", desc: "Garlic flavored naan", prices: { "PIECE": 40 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 121, name: "CHEESE NAAN", category: "Breads", desc: "Stuffed cheese naan", prices: { "PIECE": 40 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 122, name: "KASHMIRI NAAN", category: "Breads", desc: "Sweet dry fruits stuffed naan", prices: { "PIECE": 45 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 123, name: "KULCHA / BUTTER", category: "Breads", desc: "Soft tandoori kulcha", prices: { "PLAIN": 30, "BUTTER": 35 }, popular: false, img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80" },
    { id: 124, name: "HUMMUS", category: "Breads", desc: "Classic chickpea dip", prices: { "SMALL": 60, "LARGE": 120 }, popular: true, img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80" },
    { id: 125, name: "MAYONISE", category: "Breads", desc: "Creamy garlic mayonnaise", prices: { "SMALL": 20, "LARGE": 50 }, popular: false, img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80" },
    { id: 126, name: "RED MAYONISE", category: "Breads", desc: "Spicy red mayonnaise dip", prices: { "SMALL": 20, "LARGE": 50 }, popular: false, img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80" },
    { id: 127, name: "MINT CHUTNY", category: "Breads", desc: "Fresh green mint chutney", prices: { "SMALL": 20, "LARGE": 50 }, popular: false, img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80" },
    { id: 128, name: "TOMATO CHUTNY", category: "Breads", desc: "Tangy tomato chutney", prices: { "SMALL": 20, "LARGE": 50 }, popular: false, img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80" }
];

let cart = [];
let currentCategory = 'All';
let currentLang = 'en';
let discountPercent = 0;

// Initialize App
window.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    updateCartBadge();
});

// Language Toggle
window.toggleLanguage = function() {
    currentLang = currentLang === 'en' ? 'ml' : 'en';
    const langLabel = document.getElementById('lang-label');
    if (langLabel) langLabel.innerText = currentLang === 'en' ? 'മലയാളം' : 'English';
    
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) el.innerText = text;
    });
};

// Render Menu Grid
window.renderMenu = function() {
    const grid = document.getElementById('menu-grid');
    const searchInput = document.getElementById('search-input');
    const searchVal = searchInput ? searchInput.value.toLowerCase() : '';
    
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = menuData.filter(item => {
        const matchesCat = currentCategory === 'All' || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchVal) || item.desc.toLowerCase().includes(searchVal);
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-gray-500">
                <i class="fa-solid fa-bowl-food text-4xl mb-3 text-casared"></i>
                <p class="font-semibold">No delicious dishes found matching your search.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const priceKeys = Object.keys(item.prices);
        const defaultKey = priceKeys[0];
        const defaultPrice = item.prices[defaultKey];

        let optionsHtml = '';
        if (priceKeys.length > 1) {
            optionsHtml = `
                <select id="size-${item.id}" class="text-xs border border-gray-300 rounded-lg px-2 py-1 bg-white focus:outline-none focus:border-casared">
                    ${priceKeys.map(k => `<option value="${k}">${k} - ₹${item.prices[k]}</option>`).join('')}
                </select>
            `;
        } else {
            optionsHtml = `<span class="text-sm font-bold text-casared">₹${defaultPrice}</span>`;
        }

        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-xl transition duration-300 group";
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden bg-gray-100">
                <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/400x300/8B2613/FFFFFF?text=Casa+Rasa'">
                ${item.popular ? '<span class="absolute top-3 left-3 bg-casared text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow">Popular</span>' : ''}
                <span class="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg">${item.category}</span>
            </div>
            <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                    <h4 class="font-bold text-gray-900 text-base">${item.name}</h4>
                    <p class="text-gray-500 text-xs mt-1 line-clamp-2">${item.desc}</p>
                </div>
                <div class="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        ${optionsHtml}
                    </div>
                    <button onclick="addToCart(${item.id})" class="bg-casadark hover:bg-casared text-casagold hover:text-white p-2.5 rounded-xl text-xs font-bold transition shadow flex items-center space-x-1.5">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>Add</span>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
};

// Filter by Category
window.switchCategory = function(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        if (btn.innerText.includes(cat) || (cat === 'All' && btn.innerText.includes('All'))) {
            btn.className = "cat-btn px-5 py-2 rounded-xl text-sm font-semibold transition bg-casared text-white shadow-sm whitespace-nowrap";
        } else {
            btn.className = "cat-btn px-5 py-2 rounded-xl text-sm font-semibold transition bg-white text-gray-700 hover:bg-gray-100 shadow-sm whitespace-nowrap";
        }
    });
    renderMenu();
};

window.filterMenu = function() {
    renderMenu();
};

// Add to Cart Logic
window.addToCart = function(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    const priceKeys = Object.keys(item.prices);
    let selectedSize = priceKeys[0];
    let itemPrice = item.prices[selectedSize];

    if (priceKeys.length > 1) {
        const selectEl = document.getElementById(`size-${itemId}`);
        if (selectEl) {
            selectedSize = selectEl.value;
            itemPrice = item.prices[selectedSize];
        }
    }

    const cartKey = `${item.id}-${selectedSize}`;
    const existing = cart.find(c => c.cartKey === cartKey);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            cartKey: cartKey,
            id: item.id,
            name: item.name,
            size: selectedSize,
            price: itemPrice,
            qty: 1
        });
    }

    updateCartBadge();
    showToast(`${item.name} (${selectedSize}) added to cart!`);
};

// Update Cart Badge
window.updateCartBadge = function() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        badge.innerText = totalQty;
    }
};

// Toggle Cart Drawer
window.toggleCart = function() {
    const modal = document.getElementById('cart-modal');
    const box = document.getElementById('cart-content-box');
    
    if (!modal || !box) return;

    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            box.classList.remove('translate-x-full');
        }, 10);
        renderCartItems();
    } else {
        box.classList.add('translate-x-full');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
};

// Render Cart Items
window.renderCartItems = function() {
    const container = document.getElementById('cart-items');
    if (!container) return;
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="py-12 text-center text-gray-400">
                <i class="fa-solid fa-basket-shopping text-4xl mb-2 text-gray-300"></i>
                <p class="text-sm font-medium">Your cart is currently empty.</p>
            </div>
        `;
        const sub = document.getElementById('cart-subtotal');
        const disc = document.getElementById('cart-discount');
        const tot = document.getElementById('cart-total');
        if (sub) sub.innerText = '₹0';
        if (disc) disc.innerText = '-₹0';
        if (tot) tot.innerText = '₹40';
        return;
    }

    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        const div = document.createElement('div');
        div.className = "py-3 flex items-center justify-between";
        div.innerHTML = `
            <div class="flex-1 pr-2">
                <h5 class="font-bold text-gray-900 text-sm">${item.name}</h5>
                <p class="text-xs text-gray-500">${item.size} • ₹${item.price} each</p>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button onclick="updateQty('${item.cartKey}', -1)" class="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold">-</button>
                    <span class="px-3 text-xs font-bold text-gray-800">${item.qty}</span>
                    <button onclick="updateQty('${item.cartKey}', 1)" class="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold">+</button>
                </div>
                <span class="font-bold text-sm text-gray-900 w-14 text-right">₹${itemTotal}</span>
                <button onclick="removeCartItem('${item.cartKey}')" class="text-red-500 hover:text-red-700 p-1 text-xs"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        container.appendChild(div);
    });

    const discountAmount = Math.round((subtotal * discountPercent) / 100);
    const deliveryCharge = 40;
    const grandTotal = subtotal - discountAmount + deliveryCharge;

    const subEl = document.getElementById('cart-subtotal');
    const discEl = document.getElementById('cart-discount');
    const totEl = document.getElementById('cart-total');
    if (subEl) subEl.innerText = `₹${subtotal}`;
    if (discEl) discEl.innerText = `-₹${discountAmount}`;
    if (totEl) totEl.innerText = `₹${grandTotal}`;
};

window.applyCoupon = function() {
    const couponInput = document.getElementById('coupon-code');
    const code = couponInput ? couponInput.value.trim().toUpperCase() : '';
    if (code === 'CASA10' || code === 'RASA10') {
        discountPercent = 10;
        showToast("10% Discount Coupon Applied Successfully!");
        renderCartItems();
    } else {
        showToast("Invalid coupon code! Try CASA10", "error");
    }
};

// Modify Quantity in Cart
window.updateQty = function(cartKey, delta) {
    const item = cart.find(c => c.cartKey === cartKey);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.cartKey !== cartKey);
    }
    updateCartBadge();
    renderCartItems();
};

window.removeCartItem = function(cartKey) {
    cart = cart.filter(c => c.cartKey !== cartKey);
    updateCartBadge();
    renderCartItems();
};

// Checkout Order & WhatsApp Dispatch
window.checkoutOrder = function() {
    if (cart.length === 0) {
        showToast("Your cart is empty!", "error");
        return;
    }

    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const location = document.getElementById('cust-location').value.trim();
    const orderType = document.getElementById('order-type').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (!name || !phone || !location) {
        showToast("Please fill in your Name, Phone Number, and Location!", "error");
        return;
    }

    const now = new Date();
    const timeString = now.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountAmount = Math.round((subtotal * discountPercent) / 100);
    const deliveryCharge = 40;
    const grandTotal = subtotal - discountAmount + deliveryCharge;

    const orderObj = {
        id: 'CR-' + Math.floor(1000 + Math.random() * 9000),
        name,
        phone,
        location,
        orderType,
        paymentMethod,
        items: [...cart],
        subtotal,
        discountAmount,
        grandTotal,
        time: timeString
    };

    let allOrders = JSON.parse(localStorage.getItem('casarasa_orders') || '[]');
    allOrders.unshift(orderObj);
    localStorage.setItem('casarasa_orders', JSON.stringify(allOrders));

    let custOrders = JSON.parse(localStorage.getItem('casarasa_customer_orders') || '[]');
    custOrders.unshift(orderObj);
    localStorage.setItem('casarasa_customer_orders', JSON.stringify(custOrders));

    let msg = `🍽️ *NEW ORDER - CASA RASA* 🍽️\n\n`;
    msg += `🆔 *Order ID:* ${orderObj.id}\n`;
    msg += `🕒 *Time:* ${timeString}\n`;
    msg += `👤 *Customer Name:* ${name}\n`;
    msg += `📞 *Phone:* ${phone}\n`;
    msg += `📍 *Location / Place:* ${location}\n`;
    msg += `🛵 *Delivery Option:* ${orderType}\n`;
    msg += `💳 *Payment Method:* ${paymentMethod}\n\n`;
    msg += `🛒 *Ordered Items:*\n`;
    cart.forEach((item, index) => {
        msg += `${index + 1}. ${item.name} (${item.size}) x ${item.qty} = ₹${item.price * item.qty}\n`;
    });
    msg += `\n📦 *Subtotal:* ₹${subtotal}\n`;
    if (discountAmount > 0) msg += `🏷️ *Discount:* -₹${discountAmount}\n`;
    msg += `🚚 *Delivery Charge:* ₹${deliveryCharge}\n`;
    msg += `💰 *Total Bill Amount:* ₹${grandTotal}\n\n`;
    if (paymentMethod.includes('GPay')) {
        msg += `✅ *Payment Status:* Paid via GPay/UPI Online.\n`;
    } else {
        msg += `💵 *Payment Status:* Cash on Delivery / Counter.\n`;
    }
    msg += `\nThank you for ordering from Casa Rasa Taliparamba!`;

    const encodedMsg = encodeURIComponent(msg);
    const restaurantWhatsApp = "919645835050";
    const whatsappUrl = `https://wa.me/${restaurantWhatsApp}?text=${encodedMsg}`;

    cart = [];
    discountPercent = 0;
    updateCartBadge();
    toggleCart();

    showToast("Order placed successfully! Redirecting to WhatsApp...");
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 1000);
};

// Table Reservation Submission
window.submitReservation = function() {
    const name = document.getElementById('res-name').value.trim();
    const phone = document.getElementById('res-phone').value.trim();
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;

    if (!name || !phone || !date || !time) {
        showToast("Please fill in all table reservation details!", "error");
        return;
    }

    const resObj = {
        id: 'RES-' + Math.floor(100 + Math.random() * 900),
        name,
        phone,
        date,
        time,
        guests,
        timeCreated: new Date().toLocaleString()
    };

    let allRes = JSON.parse(localStorage.getItem('casarasa_reservations') || '[]');
    allRes.unshift(resObj);
    localStorage.setItem('casarasa_reservations', JSON.stringify(allRes));

    showToast("Table booked successfully! Our team will contact you shortly.");
    document.getElementById('res-name').value = '';
    document.getElementById('res-phone').value = '';
    document.getElementById('res-date').value = '';
    document.getElementById('res-time').value = '';
};

// Customer Profile Modal
window.openProfileModal = function() {
    const profileModal = document.getElementById('profile-modal');
    if (profileModal) profileModal.classList.remove('hidden');
    const listEl = document.getElementById('customer-orders-list');
    const custOrders = JSON.parse(localStorage.getItem('casarasa_customer_orders') || '[]');
    
    if (!listEl) return;
    listEl.innerHTML = '';
    if (custOrders.length === 0) {
        listEl.innerHTML = `<p class="text-xs text-gray-500 italic">No recent orders in this browser session.</p>`;
        return;
    }

    custOrders.forEach(ord => {
        const div = document.createElement('div');
        div.className = "bg-gray-50 p-3 rounded-xl border border-gray-100 flex justify-between items-center text-xs";
        div.innerHTML = `
            <div>
                <p class="font-bold text-gray-800">${ord.id} • <span class="text-casared">₹${ord.grandTotal}</span></p>
                <p class="text-gray-500">${ord.time} (${ord.orderType})</p>
            </div>
            <span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded">Confirmed</span>
        `;
        listEl.appendChild(div);
    });
};

window.closeProfileModal = function() {
    const profileModal = document.getElementById('profile-modal');
    if (profileModal) profileModal.classList.add('hidden');
};

// Admin Authentication & Dashboard
window.openAdminLogin = function() {
    const loginModal = document.getElementById('admin-login-modal');
    if (loginModal) loginModal.classList.remove('hidden');
};

window.closeAdminLogin = function() {
    const loginModal = document.getElementById('admin-login-modal');
    const passInput = document.getElementById('admin-pass-input');
    if (loginModal) loginModal.classList.add('hidden');
    if (passInput) passInput.value = '';
};

window.verifyAdmin = function() {
    const passInput = document.getElementById('admin-pass-input');
    const pass = passInput ? passInput.value.trim() : '';
    if (pass === '2121') {
        closeAdminLogin();
        openAdminDashboard();
    } else {
        showToast("Incorrect Admin Password! Try 2121", "error");
    }
};

window.openAdminDashboard = function() {
    const dash = document.getElementById('admin-dashboard-modal');
    if (dash) dash.classList.remove('hidden');
    renderAdminOverview();
    renderAdminOrders();
    renderAdminReservations();
    populateEditDishSelect();
    populateCardEditSelect();
};

window.closeAdminDashboard = function() {
    const dash = document.getElementById('admin-dashboard-modal');
    if (dash) dash.classList.add('hidden');
};

window.switchAdminTab = function(tab) {
    const tabs = ['overview', 'orders', 'reservations', 'menu', 'editmenu'];
    tabs.forEach(t => {
        const btn = document.getElementById(`admin-tab-${t}`);
        const content = document.getElementById(`admin-content-${t}`);
        if (!btn || !content) return;
        if (t === tab) {
            btn.className = "px-4 py-2 text-xs sm:text-sm font-bold bg-white text-casadark rounded-t-xl border-t border-x border-gray-200 shadow-sm";
            content.classList.remove('hidden');
        } else {
            btn.className = "px-4 py-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-casadark rounded-t-xl transition";
            content.classList.add('hidden');
        }
    });
};

window.renderAdminOverview = function() {
    const orders = JSON.parse(localStorage.getItem('casarasa_orders') || '[]');
    const reservations = JSON.parse(localStorage.getItem('casarasa_reservations') || '[]');
    
    const totalSales = orders.reduce((sum, o) => sum + o.grandTotal, 0);
    const stSales = document.getElementById('stat-total-sales');
    const stOrd = document.getElementById('stat-total-orders');
    const stRes = document.getElementById('stat-total-bookings');
    const totOrdCount = document.getElementById('admin-total-orders-count');
    const totResCount = document.getElementById('admin-total-res-count');

    if (stSales) stSales.innerText = `₹${totalSales}`;
    if (stOrd) stOrd.innerText = orders.length;
    if (stRes) stRes.innerText = reservations.length;
    if (totOrdCount) totOrdCount.innerText = orders.length;
    if (totResCount) totResCount.innerText = reservations.length;
};

window.addNewDish = function() {
    const nameEl = document.getElementById('new-item-name');
    const catEl = document.getElementById('new-item-cat');
    const priceEl = document.getElementById('new-item-price');
    const imgEl = document.getElementById('new-item-img');
    const descEl = document.getElementById('new-item-desc');

    const name = nameEl ? nameEl.value.trim() : '';
    const category = catEl ? catEl.value : 'Kuzhimandi';
    const price = priceEl ? parseFloat(priceEl.value) : NaN;
    let img = imgEl ? imgEl.value.trim() : '';
    const desc = descEl ? descEl.value.trim() : '';

    if (!name || isNaN(price)) {
        showToast("Please fill in Dish Name and Price!", "error");
        return;
    }

    if (!img) {
        img = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80";
    }

    const newItem = {
        id: Date.now(),
        name: name.toUpperCase(),
        category: category,
        desc: desc || "Delicious specialty dish from Casa Rasa.",
        prices: { "PLATE": price },
        popular: true,
        img: img
    };

    menuData.unshift(newItem);
    localStorage.setItem('casarasa_custom_menu', JSON.stringify(menuData));
    renderMenu();
    populateEditDishSelect();
    populateCardEditSelect();

    if (nameEl) nameEl.value = '';
    if (priceEl) priceEl.value = '';
    if (imgEl) imgEl.value = '';
    const fileEl = document.getElementById('new-item-file');
    if (fileEl) fileEl.value = '';
    if (descEl) descEl.value = '';

    showToast("New dish with photo added successfully to live menu!");
};

window.previewUploadedPhoto = function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgEl = document.getElementById('new-item-img');
            if (imgEl) imgEl.value = e.target.result;
            showToast("Photo loaded successfully from file!");
        };
        reader.readAsDataURL(file);
    }
};

window.previewEditUploadedPhoto = function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const editImgEl = document.getElementById('edit-dish-img');
            if (editImgEl) editImgEl.value = e.target.result;
            showToast("New photo loaded successfully from file!");
        };
        reader.readAsDataURL(file);
    }
};

window.populateEditDishSelect = function() {
    const selectEl = document.getElementById('edit-dish-select');
    if (!selectEl) return;
    selectEl.innerHTML = '';
    menuData.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.innerText = `${item.name} (${item.category})`;
        selectEl.appendChild(opt);
    });
};

window.populateCardEditSelect = function() {
    const selectEl = document.getElementById('card-edit-select');
    if (!selectEl) return;
    selectEl.innerHTML = '';
    menuData.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.innerText = `${item.name} (${item.category})`;
        selectEl.appendChild(opt);
    });
    loadDishDetailsForEdit();
};

window.loadDishDetailsForEdit = function() {
    const selectEl = document.getElementById('card-edit-select');
    if (!selectEl) return;
    const dishId = parseInt(selectEl.value);
    const dish = menuData.find(i => i.id === dishId);
    if (dish) {
        const nameEl = document.getElementById('card-edit-name');
        const priceEl = document.getElementById('card-edit-price');
        const descEl = document.getElementById('card-edit-desc');
        if (nameEl) nameEl.value = dish.name;
        const firstKey = Object.keys(dish.prices)[0];
        if (priceEl) priceEl.value = dish.prices[firstKey];
        if (descEl) descEl.value = dish.desc;
    }
};

window.saveDishCardEdits = function() {
    const selectEl = document.getElementById('card-edit-select');
    if (!selectEl) return;
    const dishId = parseInt(selectEl.value);
    const nameEl = document.getElementById('card-edit-name');
    const priceEl = document.getElementById('card-edit-price');
    const descEl = document.getElementById('card-edit-desc');

    const newName = nameEl ? nameEl.value.trim() : '';
    const newPrice = priceEl ? parseFloat(priceEl.value) : NaN;
    const newDesc = descEl ? descEl.value.trim() : '';

    if (!newName || isNaN(newPrice)) {
        showToast("Please enter a valid dish name and price!", "error");
        return;
    }

    const dish = menuData.find(i => i.id === dishId);
    if (dish) {
        dish.name = newName.toUpperCase();
        const firstKey = Object.keys(dish.prices)[0] || "PLATE";
        dish.prices[firstKey] = newPrice;
        dish.desc = newDesc;

        localStorage.setItem('casarasa_custom_menu', JSON.stringify(menuData));
        renderMenu();
        populateEditDishSelect();
        populateCardEditSelect();
        showToast(`Menu card updated successfully for ${dish.name}!`);
    }
};

window.updateDishPhoto = function() {
    const selectEl = document.getElementById('edit-dish-select');
    if (!selectEl) return;
    const dishId = parseInt(selectEl.value);
    const imgInput = document.getElementById('edit-dish-img');
    const newImgUrl = imgInput ? imgInput.value.trim() : '';

    if (!newImgUrl) {
        showToast("Please enter or upload a valid photo image URL!", "error");
        return;
    }

    const dish = menuData.find(i => i.id === dishId);
    if (dish) {
        dish.img = newImgUrl;
        localStorage.setItem('casarasa_custom_menu', JSON.stringify(menuData));
        renderMenu();
        if (imgInput) imgInput.value = '';
        const fileEl = document.getElementById('edit-dish-file');
        if (fileEl) fileEl.value = '';
        showToast(`Photo updated successfully for ${dish.name}!`);
    }
};

window.renderAdminOrders = function() {
    const listContainer = document.getElementById('admin-content-orders');
    if (!listContainer) return;
    const orders = JSON.parse(localStorage.getItem('casarasa_orders') || '[]');
    
    listContainer.innerHTML = '';
    if (orders.length === 0) {
        listContainer.innerHTML = `
            <div class="py-12 text-center text-gray-400">
                <i class="fa-solid fa-clipboard-list text-4xl mb-2 text-gray-300"></i>
                <p class="text-sm font-medium">No customer orders recorded yet.</p>
            </div>
        `;
        return;
    }

    orders.forEach(ord => {
        const div = document.createElement('div');
        div.className = "py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm";
        let itemsListText = ord.items.map(i => `${i.name} (${i.size}) x ${i.qty}`).join(', ');

        div.innerHTML = `
            <div class="space-y-1">
                <div class="flex items-center space-x-2">
                    <span class="bg-casadark text-casagold text-xs font-bold px-2 py-0.5 rounded">${ord.id}</span>
                    <span class="text-xs text-gray-500"><i class="fa-regular fa-clock mr-1"></i>${ord.time}</span>
                </div>
                <h5 class="font-bold text-gray-900 text-sm">${ord.name} • <span class="text-casared">${ord.phone}</span></h5>
                <p class="text-xs text-gray-600"><i class="fa-solid fa-location-dot text-casared mr-1"></i>${ord.location} (${ord.orderType})</p>
                <p class="text-xs text-gray-700 bg-gray-50 p-2 rounded-lg mt-1"><span class="font-semibold">Items:</span> ${itemsListText}</p>
            </div>
            <div class="flex flex-col sm:items-end space-y-1">
                <span class="text-base font-bold text-casared">₹${ord.grandTotal}</span>
                <span class="text-xs px-2.5 py-1 rounded-full font-semibold ${ord.paymentMethod.includes('GPay') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                    <i class="fa-solid fa-wallet mr-1"></i>${ord.paymentMethod}
                </span>
            </div>
        `;
        listContainer.appendChild(div);
    });
};

window.renderAdminReservations = function() {
    const listContainer = document.getElementById('admin-content-reservations');
    if (!listContainer) return;
    const reservations = JSON.parse(localStorage.getItem('casarasa_reservations') || '[]');
    
    listContainer.innerHTML = '';
    if (reservations.length === 0) {
        listContainer.innerHTML = `
            <div class="py-12 text-center text-gray-400">
                <i class="fa-solid fa-chair text-4xl mb-2 text-gray-300"></i>
                <p class="text-sm font-medium">No table reservations recorded yet.</p>
            </div>
        `;
        return;
    }

    reservations.forEach(res => {
        const div = document.createElement('div');
        div.className = "py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm";
        div.innerHTML = `
            <div class="space-y-1">
                <div class="flex items-center space-x-2">
                    <span class="bg-casared text-white text-xs font-bold px-2 py-0.5 rounded">${res.id}</span>
                    <span class="text-xs text-gray-500">${res.timeCreated}</span>
                </div>
                <h5 class="font-bold text-gray-900 text-sm">${res.name} • <span class="text-casared">${res.phone}</span></h5>
                <p class="text-xs text-gray-600"><i class="fa-regular fa-calendar mr-1"></i>Date: ${res.date} at ${res.time} (${res.guests})</p>
            </div>
            <span class="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-xs">Table Reserved</span>
        `;
        listContainer.appendChild(div);
    });
};

// Toast Notification Helper
window.showToast = function(message, type = 'success') {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toast-message');
    const iconEl = document.getElementById('toast-icon');

    if (!toast || !msgEl || !iconEl) return;

    msgEl.innerText = message;
    if (type === 'error') {
        iconEl.className = "fa-solid fa-triangle-exclamation text-red-400 text-lg";
    } else {
        iconEl.className = "fa-solid fa-check-circle text-emerald-400 text-lg";
    }

    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3500);
};