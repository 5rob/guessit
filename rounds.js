// Each round: a shared theme + two things to guess (one per player).
// `wiki` is the exact English Wikipedia page title used to fetch the image.
// Generated/curated set — every title was verified to resolve to a lead image.
// To regenerate after editing scratch batches: node scripts/build-rounds.mjs
export const ROUNDS = [
  { theme: "You both rise in the oven…", items: [
    { label: "Muffin", wiki: "Muffin" },
    { label: "Bagel", wiki: "Bagel" } ] },
  { theme: "You're both Egyptian gods…", items: [
    { label: "Anubis", wiki: "Anubis" },
    { label: "Ra", wiki: "Ra" } ] },
  { theme: "You both have a peel…", items: [
    { label: "Orange", wiki: "Orange (fruit)" },
    { label: "Avocado", wiki: "Avocado" } ] },
  { theme: "You both dominate the golf course…", items: [
    { label: "Tiger Woods", wiki: "Tiger Woods" },
    { label: "Golf ball", wiki: "Golf ball" } ] },
  { theme: "You're both symbols of peace…", items: [
    { label: "The Dove", wiki: "Doves as symbols" },
    { label: "Mahatma Gandhi", wiki: "Mahatma Gandhi" } ] },
  { theme: "You're both ancient libraries and learning…", items: [
    { label: "The Library of Alexandria", wiki: "Library of Alexandria" },
    { label: "Aristotle", wiki: "Aristotle" } ] },
  { theme: "You both have a screen…", items: [
    { label: "Television", wiki: "Television set" },
    { label: "Smartphone", wiki: "Smartphone" } ] },
  { theme: "You both come from a cow…", items: [
    { label: "Steak", wiki: "Steak" },
    { label: "Yogurt", wiki: "Yogurt" } ] },
  { theme: "You're both clocks of the world…", items: [
    { label: "Big Ben", wiki: "Big Ben" },
    { label: "The Prague Astronomical Clock", wiki: "Prague astronomical clock" } ] },
  { theme: "You both clean your teeth…", items: [
    { label: "Toothpaste", wiki: "Toothpaste" },
    { label: "Dental Floss", wiki: "Dental floss" } ] },
  { theme: "You're both Greek philosophers…", items: [
    { label: "Socrates", wiki: "Socrates" },
    { label: "Plato", wiki: "Plato" } ] },
  { theme: "You're both pharaohs of Egypt…", items: [
    { label: "Tutankhamun", wiki: "Tutankhamun" },
    { label: "Ramesses II", wiki: "Ramesses II" } ] },
  { theme: "You both keep you warm…", items: [
    { label: "Blanket", wiki: "Blanket" },
    { label: "Sweater", wiki: "Sweater" } ] },
  { theme: "You both come in a bottle…", items: [
    { label: "Ketchup", wiki: "Ketchup" },
    { label: "Shampoo", wiki: "Shampoo" } ] },
  { theme: "You're both tiny and round candies…", items: [
    { label: "M&M's", wiki: "M&M's" },
    { label: "Skittles", wiki: "Skittles (confectionery)" } ] },
  { theme: "You're both symbols of New Year's Eve…", items: [
    { label: "Fireworks", wiki: "Fireworks" },
    { label: "Times Square", wiki: "Times Square" } ] },
  { theme: "You're both moon explorers…", items: [
    { label: "Neil Armstrong", wiki: "Neil Armstrong" },
    { label: "The Apollo Lunar Module", wiki: "Apollo Lunar Module" } ] },
  { theme: "You both belong in a sushi roll…", items: [
    { label: "Salmon", wiki: "Salmon as food" },
    { label: "Seaweed", wiki: "Nori" } ] },
  { theme: "You're both Indian palaces and tombs…", items: [
    { label: "The Taj Mahal", wiki: "Taj Mahal" },
    { label: "The Red Fort", wiki: "Red Fort" } ] },
  { theme: "You both belong in a lunchbox…", items: [
    { label: "Granola Bar", wiki: "Granola" },
    { label: "Juice Box", wiki: "Juicebox" } ] },
  { theme: "You both wake people up…", items: [
    { label: "Espresso", wiki: "Espresso" },
    { label: "Rooster", wiki: "Rooster" } ] },
  { theme: "You both have a handle…", items: [
    { label: "Mug", wiki: "Mug" },
    { label: "Frying Pan", wiki: "Frying pan" } ] },
  { theme: "You're both pop royalty…", items: [
    { label: "Michael Jackson", wiki: "Michael Jackson" },
    { label: "Madonna", wiki: "Madonna" } ] },
  { theme: "You're both white and fluffy…", items: [
    { label: "Marshmallow", wiki: "Marshmallow" },
    { label: "Cotton Ball", wiki: "Cotton ball" } ] },
  { theme: "You're both famous writers…", items: [
    { label: "William Shakespeare", wiki: "William Shakespeare" },
    { label: "Charles Dickens", wiki: "Charles Dickens" } ] },
  { theme: "You're both covered in scales…", items: [
    { label: "Dragon", wiki: "Dragon" },
    { label: "Crocodile", wiki: "Crocodile" } ] },
  { theme: "You both have big ears…", items: [
    { label: "Mickey Mouse", wiki: "Mickey Mouse" },
    { label: "Rabbit", wiki: "Rabbit" } ] },
  { theme: "You're both purple…", items: [
    { label: "Eggplant", wiki: "Eggplant" },
    { label: "Grape", wiki: "Grape" } ] },
  { theme: "You both sit on a desk…", items: [
    { label: "Stapler", wiki: "Stapler" },
    { label: "Computer Keyboard", wiki: "Computer keyboard" } ] },
  { theme: "You're both sweet…", items: [
    { label: "Honey", wiki: "Honey" },
    { label: "Maple Syrup", wiki: "Maple syrup" } ] },
  { theme: "You're both icons of the American road…", items: [
    { label: "Route 66", wiki: "U.S. Route 66" },
    { label: "The Harley-Davidson", wiki: "Harley-Davidson" } ] },
  { theme: "You're both yellow…", items: [
    { label: "Homer Simpson", wiki: "Homer Simpson" },
    { label: "Winnie the Pooh", wiki: "Winnie-the-Pooh" } ] },
  { theme: "You're both famous pirates…", items: [
    { label: "Blackbeard", wiki: "Blackbeard" },
    { label: "Captain Kidd", wiki: "William Kidd" } ] },
  { theme: "You both have spots…", items: [
    { label: "Dalmatian", wiki: "Dalmatian (dog)" },
    { label: "Leopard", wiki: "Leopard" } ] },
  { theme: "You both honk by the pond…", items: [
    { label: "Goose", wiki: "Goose" },
    { label: "Duck", wiki: "Duck" } ] },
  { theme: "You both have spiky quills…", items: [
    { label: "Porcupine", wiki: "Porcupine" },
    { label: "Hedgehog", wiki: "Hedgehog" } ] },
  { theme: "You both protect you from rain…", items: [
    { label: "Umbrella", wiki: "Umbrella" },
    { label: "Raincoat", wiki: "Raincoat" } ] },
  { theme: "You both have a famous green grin…", items: [
    { label: "Kermit the Frog", wiki: "Kermit the Frog" },
    { label: "Green tree frog", wiki: "Australian green tree frog" } ] },
  { theme: "You're both rock and roll legends…", items: [
    { label: "Elvis Presley", wiki: "Elvis Presley" },
    { label: "Chuck Berry", wiki: "Chuck Berry" } ] },
  { theme: "You both have webbed feet…", items: [
    { label: "Platypus", wiki: "Platypus" },
    { label: "Frog", wiki: "Frog" } ] },
  { theme: "You both rise over the horizon…", items: [
    { label: "Sun", wiki: "Sun" },
    { label: "Moon", wiki: "Moon" } ] },
  { theme: "You both eat dots in a maze…", items: [
    { label: "Pac-Man", wiki: "Pac-Man" },
    { label: "Ms. Pac-Man", wiki: "Ms. Pac-Man (character)" } ] },
  { theme: "You're both Italian classics…", items: [
    { label: "Pizza", wiki: "Pizza" },
    { label: "Spaghetti", wiki: "Spaghetti" } ] },
  { theme: "You're both orange…", items: [
    { label: "Goldfish", wiki: "Goldfish" },
    { label: "Basketball", wiki: "Basketball (ball)" } ] },
  { theme: "You both froth up milk…", items: [
    { label: "Cappuccino", wiki: "Cappuccino" },
    { label: "Milkshake", wiki: "Milkshake" } ] },
  { theme: "You both are famous yellow birds…", items: [
    { label: "Tweety", wiki: "Tweety" },
    { label: "Canary", wiki: "Domestic canary" } ] },
  { theme: "You both have a striped shell…", items: [
    { label: "Garden snail", wiki: "Cornu aspersum" },
    { label: "Nautilus", wiki: "Nautilus" } ] },
  { theme: "You're both purple…", items: [
    { label: "Thanos", wiki: "Thanos" },
    { label: "Grapes", wiki: "Grape" } ] },
  { theme: "You both write on paper…", items: [
    { label: "Pen", wiki: "Pen" },
    { label: "Crayon", wiki: "Crayon" } ] },
  { theme: "You're both green…", items: [
    { label: "Kermit the Frog", wiki: "Kermit the Frog" },
    { label: "Shrek", wiki: "Shrek (character)" } ] },
  { theme: "You're both blue…", items: [
    { label: "Cookie Monster", wiki: "Cookie Monster" },
    { label: "Blue whale", wiki: "Blue whale" } ] },
  { theme: "You're both swinging at home runs…", items: [
    { label: "Baseball", wiki: "Baseball (ball)" },
    { label: "Baseball bat", wiki: "Baseball bat" } ] },
  { theme: "You both keep the beat…", items: [
    { label: "Drum kit", wiki: "Drum kit" },
    { label: "Bongo drum", wiki: "Bongo drum" } ] },
  { theme: "You're both sidekicks…", items: [
    { label: "Robin", wiki: "Robin (character)" },
    { label: "Olaf", wiki: "Olaf (Frozen)" } ] },
  { theme: "You're both Mexican favorites…", items: [
    { label: "Taco", wiki: "Taco" },
    { label: "Burrito", wiki: "Burrito" } ] },
  { theme: "You both leap from tree to tree…", items: [
    { label: "Flying squirrel", wiki: "Flying squirrel" },
    { label: "Gibbon", wiki: "Gibbon" } ] },
  { theme: "You both have a magic lamp connection…", items: [
    { label: "Aladdin", wiki: "Aladdin (Disney character)" },
    { label: "Genie", wiki: "Genie (Aladdin)" } ] },
  { theme: "You're both legendary aircraft…", items: [
    { label: "The Spitfire", wiki: "Supermarine Spitfire" },
    { label: "The Boeing 747", wiki: "Boeing 747" } ] },
  { theme: "You're both Jordanian wonders…", items: [
    { label: "Petra", wiki: "Petra" },
    { label: "Wadi Rum", wiki: "Wadi Rum" } ] },
  { theme: "You both rumble in a storm…", items: [
    { label: "Thunder cloud", wiki: "Cumulonimbus cloud" },
    { label: "Tornado", wiki: "Tornado" } ] },
  { theme: "You both have a cork…", items: [
    { label: "Wine Bottle", wiki: "Wine bottle" },
    { label: "Thermos", wiki: "Vacuum flask" } ] },
  { theme: "You're both spicy…", items: [
    { label: "Chili Pepper", wiki: "Chili pepper" },
    { label: "Wasabi", wiki: "Wasabi" } ] },
  { theme: "You're both orange…", items: [
    { label: "Tigger", wiki: "Tigger" },
    { label: "Orange", wiki: "Orange (fruit)" } ] },
  { theme: "You're both symbols of Easter…", items: [
    { label: "The Easter Bunny", wiki: "Easter Bunny" },
    { label: "The Easter Egg", wiki: "Easter egg" } ] },
  { theme: "You're both green…", items: [
    { label: "The Hulk", wiki: "Hulk" },
    { label: "Broccoli", wiki: "Broccoli" } ] },
  { theme: "You're both sprinting to the finish line…", items: [
    { label: "Florence Griffith Joyner", wiki: "Florence Griffith Joyner" },
    { label: "Carl Lewis", wiki: "Carl Lewis" } ] },
  { theme: "You both are tiny crawling builders…", items: [
    { label: "Ant", wiki: "Ant" },
    { label: "Termite", wiki: "Termite" } ] },
  { theme: "You both go in the microwave…", items: [
    { label: "Frozen Pizza", wiki: "Frozen pizza" },
    { label: "Microwave Popcorn", wiki: "Popcorn" } ] },
  { theme: "You both have a wick…", items: [
    { label: "Candle", wiki: "Candle" },
    { label: "Firecracker", wiki: "Firecracker" } ] },
  { theme: "You're both golden…", items: [
    { label: "Golden Retriever", wiki: "Golden Retriever" },
    { label: "Gold bar", wiki: "Gold bar" } ] },
  { theme: "You're both yellow…", items: [
    { label: "Pikachu", wiki: "Pikachu" },
    { label: "Banana", wiki: "Banana" } ] },
  { theme: "You're both pink…", items: [
    { label: "Peppa Pig", wiki: "Peppa Pig" },
    { label: "Cotton candy", wiki: "Cotton candy" } ] },
  { theme: "You both rule the basketball court…", items: [
    { label: "Michael Jordan", wiki: "Michael Jordan" },
    { label: "LeBron James", wiki: "LeBron James" } ] },
  { theme: "You're both yellow…", items: [
    { label: "Big Bird", wiki: "Big Bird" },
    { label: "Rubber duck", wiki: "Rubber duck" } ] },
  { theme: "You're both famous dogs…", items: [
    { label: "Snoopy", wiki: "Snoopy" },
    { label: "Goofy", wiki: "Goofy" } ] },
  { theme: "You're both boxing legends…", items: [
    { label: "Muhammad Ali", wiki: "Muhammad Ali" },
    { label: "Mike Tyson", wiki: "Mike Tyson" } ] },
  { theme: "You're both ways to fly…", items: [
    { label: "The Hot Air Balloon", wiki: "Hot air balloon" },
    { label: "The Helicopter", wiki: "Helicopter" } ] },
  { theme: "You're both Scottish icons…", items: [
    { label: "Edinburgh Castle", wiki: "Edinburgh Castle" },
    { label: "The Loch Ness Monster", wiki: "Loch Ness Monster" } ] },
  { theme: "You're both red…", items: [
    { label: "Mario", wiki: "Mario" },
    { label: "Fire truck", wiki: "Fire engine" } ] },
  { theme: "You're both silver…", items: [
    { label: "Tin Man", wiki: "Tin Woodman" },
    { label: "Aluminium can", wiki: "Drink can" } ] },
  { theme: "You both go in a cup of tea…", items: [
    { label: "Lemon Slice", wiki: "Lemon" },
    { label: "Honey", wiki: "Honey" } ] },
  { theme: "You're both legendary monsters…", items: [
    { label: "The Loch Ness Monster", wiki: "Loch Ness Monster" },
    { label: "Bigfoot", wiki: "Bigfoot" } ] },
  { theme: "You're both black and white…", items: [
    { label: "Skunk", wiki: "Skunk" },
    { label: "Piano keys", wiki: "Piano" } ] },
  { theme: "You both ride a dragon…", items: [
    { label: "Hiccup", wiki: "Hiccup Horrendous Haddock III" },
    { label: "Daenerys Targaryen", wiki: "Daenerys Targaryen" } ] },
  { theme: "You both have a straw…", items: [
    { label: "Bubble Tea", wiki: "Bubble tea" },
    { label: "Lemonade", wiki: "Lemonade" } ] },
  { theme: "You're both Turkish landmarks…", items: [
    { label: "The Hagia Sophia", wiki: "Hagia Sophia" },
    { label: "The Blue Mosque", wiki: "Sultan Ahmed Mosque" } ] },
  { theme: "You're both Renaissance geniuses…", items: [
    { label: "Leonardo da Vinci", wiki: "Leonardo da Vinci" },
    { label: "Michelangelo", wiki: "Michelangelo" } ] },
  { theme: "You're both famous physicists…", items: [
    { label: "Marie Curie", wiki: "Marie Curie" },
    { label: "Albert Einstein", wiki: "Albert Einstein" } ] },
  { theme: "You're both purple…", items: [
    { label: "Barney the Dinosaur", wiki: "Barney & Friends" },
    { label: "Eggplant", wiki: "Eggplant" } ] },
  { theme: "You're both classic flying machines…", items: [
    { label: "The Zeppelin", wiki: "Zeppelin" },
    { label: "The Biplane", wiki: "Biplane" } ] },
  { theme: "You're both yellow…", items: [
    { label: "Winnie the Pooh", wiki: "Winnie-the-Pooh" },
    { label: "Sunflower", wiki: "Common sunflower" } ] },
  { theme: "You're both famous cats…", items: [
    { label: "Sylvester", wiki: "Sylvester (Looney Tunes)" },
    { label: "Felix the Cat", wiki: "Felix the Cat" } ] },
  { theme: "You're both orange…", items: [
    { label: "Garfield", wiki: "Garfield" },
    { label: "Carrot", wiki: "Carrot" } ] },
  { theme: "You're both supersonic dreams…", items: [
    { label: "Concorde", wiki: "Concorde" },
    { label: "The Space Shuttle", wiki: "Space Shuttle" } ] },
  { theme: "You both go on your feet…", items: [
    { label: "Sock", wiki: "Sock" },
    { label: "Sneaker", wiki: "Sneakers" } ] },
  { theme: "You're both scientists who changed the world…", items: [
    { label: "Albert Einstein", wiki: "Albert Einstein" },
    { label: "Isaac Newton", wiki: "Isaac Newton" } ] },
  { theme: "You're both red…", items: [
    { label: "Elmo", wiki: "Elmo" },
    { label: "Ladybug", wiki: "Coccinellidae" } ] },
  { theme: "You're both kings of England…", items: [
    { label: "Henry VIII", wiki: "Henry VIII" },
    { label: "Richard the Lionheart", wiki: "Richard I of England" } ] },
  { theme: "You both shoot webs…", items: [
    { label: "Spider-Man", wiki: "Spider-Man" },
    { label: "Charlotte", wiki: "Charlotte's Web" } ] },
  { theme: "You're both round…", items: [
    { label: "Pokeball", wiki: "Poké Ball" },
    { label: "Globe", wiki: "Globe" } ] },
  { theme: "You both go with pasta…", items: [
    { label: "Meatball", wiki: "Meatball" },
    { label: "Parmesan Cheese", wiki: "Parmesan cheese" } ] },
  { theme: "You both have a snowy white coat…", items: [
    { label: "Arctic fox", wiki: "Arctic fox" },
    { label: "Snowy owl", wiki: "Snowy owl" } ] },
  { theme: "You're both ancient wonders…", items: [
    { label: "The Great Pyramid", wiki: "Great Pyramid of Giza" },
    { label: "The Colossus of Rhodes", wiki: "Colossus of Rhodes" } ] },
  { theme: "You're both famous civil rights heroes…", items: [
    { label: "Martin Luther King Jr.", wiki: "Martin Luther King Jr." },
    { label: "Nelson Mandela", wiki: "Nelson Mandela" } ] },
  { theme: "You both go with chips…", items: [
    { label: "Salsa", wiki: "Salsa (sauce)" },
    { label: "Guacamole", wiki: "Guacamole" } ] },
  { theme: "You both hop around the garden…", items: [
    { label: "Grasshopper", wiki: "Grasshopper" },
    { label: "Toad", wiki: "Toad" } ] },
  { theme: "You're both huge…", items: [
    { label: "King Kong", wiki: "King Kong" },
    { label: "Elephant", wiki: "Elephant" } ] },
  { theme: "You both carry a long trunk…", items: [
    { label: "African elephant", wiki: "African bush elephant" },
    { label: "Tapir", wiki: "Tapir" } ] },
  { theme: "You're both symbols of Halloween…", items: [
    { label: "The Jack-o'-lantern", wiki: "Jack-o'-lantern" },
    { label: "Dracula", wiki: "Count Dracula" } ] },
  { theme: "You're both gods of thunder and sky…", items: [
    { label: "Zeus", wiki: "Zeus" },
    { label: "Thor", wiki: "Thor" } ] },
  { theme: "You both are gentle giants of the sea…", items: [
    { label: "Whale shark", wiki: "Whale shark" },
    { label: "Sea turtle", wiki: "Sea turtle" } ] },
  { theme: "You both have horns…", items: [
    { label: "Hellboy", wiki: "Hellboy" },
    { label: "Goat", wiki: "Goat" } ] },
  { theme: "You both ride a broomstick…", items: [
    { label: "Harry Potter", wiki: "Harry Potter (character)" },
    { label: "Kiki", wiki: "Kiki's Delivery Service" } ] },
  { theme: "You're both jet black…", items: [
    { label: "Black cat", wiki: "Black cat" },
    { label: "Raven", wiki: "Common raven" } ] },
  { theme: "You both have a big belly…", items: [
    { label: "Santa Claus", wiki: "Santa Claus" },
    { label: "Hippopotamus", wiki: "Hippopotamus" } ] },
  { theme: "You're both found in Berlin…", items: [
    { label: "The Brandenburg Gate", wiki: "Brandenburg Gate" },
    { label: "The Berlin Wall", wiki: "Berlin Wall" } ] },
  { theme: "You both have twitchy whiskers…", items: [
    { label: "Cat", wiki: "Cat" },
    { label: "Seal", wiki: "Pinniped" } ] },
  { theme: "You're both Russian landmarks…", items: [
    { label: "Saint Basil's Cathedral", wiki: "Saint Basil's Cathedral" },
    { label: "The Kremlin", wiki: "Moscow Kremlin" } ] },
  { theme: "You both are big friendly apes…", items: [
    { label: "Gorilla", wiki: "Gorilla" },
    { label: "King Kong", wiki: "King Kong" } ] },
  { theme: "You both live in a galaxy far, far away…", items: [
    { label: "Luke Skywalker", wiki: "Luke Skywalker" },
    { label: "Yoda", wiki: "Yoda" } ] },
  { theme: "You're both princesses…", items: [
    { label: "Cinderella", wiki: "Cinderella (Disney character)" },
    { label: "Princess Peach", wiki: "Princess Peach" } ] },
  { theme: "You both show up at breakfast…", items: [
    { label: "Pancakes", wiki: "Pancake" },
    { label: "Bacon", wiki: "Bacon" } ] },
  { theme: "You're both clowns…", items: [
    { label: "Ronald McDonald", wiki: "Ronald McDonald" },
    { label: "Krusty the Clown", wiki: "Krusty the Clown" } ] },
  { theme: "You're both Cambodian treasures…", items: [
    { label: "Angkor Wat", wiki: "Angkor Wat" },
    { label: "Angkor Thom", wiki: "Angkor Thom" } ] },
  { theme: "You both spike it over the net…", items: [
    { label: "Volleyball", wiki: "Volleyball (ball)" },
    { label: "Badminton", wiki: "Badminton" } ] },
  { theme: "You both belong on the tennis court…", items: [
    { label: "Tennis ball", wiki: "Tennis ball" },
    { label: "Tennis racket", wiki: "Racket (sports equipment)" } ] },
  { theme: "You're both superheroes in red and gold…", items: [
    { label: "Iron Man", wiki: "Iron Man" },
    { label: "The Flash", wiki: "Flash (Barry Allen)" } ] },
  { theme: "You both stick to things…", items: [
    { label: "Tape", wiki: "Adhesive tape" },
    { label: "Sticky Note", wiki: "Post-it note" } ] },
  { theme: "You both erupt with fire and smoke…", items: [
    { label: "Volcano", wiki: "Volcano" },
    { label: "Geyser", wiki: "Geyser" } ] },
  { theme: "You both stack up high…", items: [
    { label: "Pancakes", wiki: "Pancake" },
    { label: "Building Blocks", wiki: "Toy block" } ] },
  { theme: "You both make a lot of noise…", items: [
    { label: "Alarm Clock", wiki: "Alarm clock" },
    { label: "Whistle", wiki: "Whistle" } ] },
  { theme: "You both have a zipper…", items: [
    { label: "Backpack", wiki: "Backpack" },
    { label: "Jacket", wiki: "Jacket" } ] },
  { theme: "You're both basketball giants…", items: [
    { label: "Kobe Bryant", wiki: "Kobe Bryant" },
    { label: "Shaquille O'Neal", wiki: "Shaquille O'Neal" } ] },
  { theme: "You both have wheels…", items: [
    { label: "Skateboard", wiki: "Skateboard" },
    { label: "Shopping Cart", wiki: "Shopping cart" } ] },
  { theme: "You're both bears…", items: [
    { label: "Baloo", wiki: "Baloo" },
    { label: "Yogi Bear", wiki: "Yogi Bear" } ] },
  { theme: "You both clean the floor…", items: [
    { label: "Mop", wiki: "Mop" },
    { label: "Vacuum Cleaner", wiki: "Vacuum cleaner" } ] },
  { theme: "You both belong in a spice rack…", items: [
    { label: "Cinnamon", wiki: "Cinnamon" },
    { label: "Black Pepper", wiki: "Black pepper" } ] },
  { theme: "You both look like dragons…", items: [
    { label: "Komodo dragon", wiki: "Komodo dragon" },
    { label: "Dragon", wiki: "Dragon" } ] },
  { theme: "You're both ways to cross the ocean…", items: [
    { label: "The Cruise Ship", wiki: "Cruise ship" },
    { label: "Concorde", wiki: "Concorde" } ] },
  { theme: "You both gallop across the plains…", items: [
    { label: "Horse", wiki: "Horse" },
    { label: "Bison", wiki: "American bison" } ] },
  { theme: "You both roll across the green felt…", items: [
    { label: "Billiard ball", wiki: "Billiard ball" },
    { label: "Bowling ball", wiki: "Bowling ball" } ] },
  { theme: "You both flap great wings…", items: [
    { label: "Swan", wiki: "Swan" },
    { label: "Butterfly", wiki: "Butterfly" } ] },
  { theme: "You both blow water from your top…", items: [
    { label: "Humpback whale", wiki: "Humpback whale" },
    { label: "Orca", wiki: "Orca" } ] },
  { theme: "You both build cozy dams…", items: [
    { label: "Beaver", wiki: "Beaver" },
    { label: "Muskrat", wiki: "Muskrat" } ] },
  { theme: "You're both small, round and red…", items: [
    { label: "Cherry", wiki: "Cherry" },
    { label: "Raspberry", wiki: "Raspberry" } ] },
  { theme: "You both blow air…", items: [
    { label: "Hair Dryer", wiki: "Hair dryer" },
    { label: "Electric Fan", wiki: "Fan (machine)" } ] },
  { theme: "You're both Dutch icons…", items: [
    { label: "The Windmill", wiki: "Windmill" },
    { label: "The Tulip", wiki: "Tulip" } ] },
  { theme: "You both glow in the dark…", items: [
    { label: "Firefly", wiki: "Firefly" },
    { label: "Anglerfish", wiki: "Anglerfish" } ] },
  { theme: "You both have powerful jaws…", items: [
    { label: "Hippopotamus", wiki: "Hippopotamus" },
    { label: "Alligator", wiki: "American alligator" } ] },
  { theme: "You both fly silently at night…", items: [
    { label: "Owl", wiki: "Owl" },
    { label: "Moth", wiki: "Moth" } ] },
  { theme: "You're both kings of the arctic…", items: [
    { label: "Polar bear", wiki: "Polar bear" },
    { label: "Penguin", wiki: "Penguin" } ] },
  { theme: "You're both Roman gods…", items: [
    { label: "Jupiter", wiki: "Jupiter (god)" },
    { label: "Venus", wiki: "Venus (mythology)" } ] },
  { theme: "You both wear glasses…", items: [
    { label: "Gru", wiki: "Felonious Gru" },
    { label: "Mr. Magoo", wiki: "Mr. Magoo" } ] },
  { theme: "You're both symbols of Christmas…", items: [
    { label: "Santa Claus", wiki: "Santa Claus" },
    { label: "The Christmas Tree", wiki: "Christmas tree" } ] },
  { theme: "You're both Greek gods…", items: [
    { label: "Zeus", wiki: "Zeus" },
    { label: "Poseidon", wiki: "Poseidon" } ] },
  { theme: "You're both wonderfully slow…", items: [
    { label: "Sloth", wiki: "Sloth" },
    { label: "Tortoise", wiki: "Tortoise" } ] },
  { theme: "You both honk and waddle by the water…", items: [
    { label: "Mallard", wiki: "Mallard" },
    { label: "Mute swan", wiki: "Mute swan" } ] },
  { theme: "You're both ancient Roman wonders…", items: [
    { label: "The Pantheon", wiki: "Pantheon, Rome" },
    { label: "The Roman Forum", wiki: "Roman Forum" } ] },
  { theme: "You both have powerful kicking legs…", items: [
    { label: "Ostrich", wiki: "Common ostrich" },
    { label: "Donkey", wiki: "Donkey" } ] },
  { theme: "You're both yellow and live in the sea or sky…", items: [
    { label: "Tweety", wiki: "Tweety" },
    { label: "Woodstock", wiki: "Woodstock (Peanuts)" } ] },
  { theme: "You both have a pouch for your baby…", items: [
    { label: "Kangaroo", wiki: "Kangaroo" },
    { label: "Opossum", wiki: "Opossum" } ] },
  { theme: "You both wear a crown…", items: [
    { label: "King Triton", wiki: "King Triton" },
    { label: "Princess Peach", wiki: "Princess Peach" } ] },
  { theme: "You both live in a galaxy far, far away…", items: [
    { label: "Chewbacca", wiki: "Chewbacca" },
    { label: "Han Solo", wiki: "Han Solo" } ] },
  { theme: "You both come in a box…", items: [
    { label: "Cereal", wiki: "Breakfast cereal" },
    { label: "Tissues", wiki: "Facial tissue" } ] },
  { theme: "You both rule the pop charts today…", items: [
    { label: "Taylor Swift", wiki: "Taylor Swift" },
    { label: "Beyoncé", wiki: "Beyoncé" } ] },
  { theme: "You both wear a hard shell…", items: [
    { label: "Crab", wiki: "Crab" },
    { label: "Armadillo", wiki: "Armadillo" } ] },
  { theme: "You're both love and beauty in myth…", items: [
    { label: "Aphrodite", wiki: "Aphrodite" },
    { label: "Cupid", wiki: "Cupid" } ] },
  { theme: "You're both found in Venice…", items: [
    { label: "The Gondola", wiki: "Gondola" },
    { label: "St Mark's Basilica", wiki: "St Mark's Basilica" } ] },
  { theme: "You're both fuzzy and brown…", items: [
    { label: "Paddington Bear", wiki: "Paddington Bear" },
    { label: "Grizzly bear", wiki: "Grizzly bear" } ] },
  { theme: "You're both vegetables…", items: [
    { label: "Carrot", wiki: "Carrot" },
    { label: "Broccoli", wiki: "Broccoli" } ] },
  { theme: "You both have giant tusks…", items: [
    { label: "Elephant", wiki: "Elephant" },
    { label: "Walrus", wiki: "Walrus" } ] },
  { theme: "You're both Norse gods…", items: [
    { label: "Thor", wiki: "Thor" },
    { label: "Odin", wiki: "Odin" } ] },
  { theme: "You both come on a stick…", items: [
    { label: "Lollipop", wiki: "Lollipop" },
    { label: "Popsicle", wiki: "Ice pop" } ] },
  { theme: "You both wear glasses…", items: [
    { label: "Ned Flanders", wiki: "Ned Flanders" },
    { label: "Velma", wiki: "Velma Dinkley" } ] },
  { theme: "You both belong on a hamburger…", items: [
    { label: "Mustard", wiki: "Mustard (condiment)" },
    { label: "Pickle", wiki: "Pickled cucumber" } ] },
  { theme: "You both go in a salad…", items: [
    { label: "Lettuce", wiki: "Lettuce" },
    { label: "Bell Pepper", wiki: "Bell pepper" } ] },
  { theme: "You're both silver…", items: [
    { label: "Silver Surfer", wiki: "Silver Surfer" },
    { label: "Spoon", wiki: "Spoon" } ] },
  { theme: "You both live in the ocean…", items: [
    { label: "Seahorse", wiki: "Seahorse" },
    { label: "Sea urchin", wiki: "Sea urchin" } ] },
  { theme: "You're both green…", items: [
    { label: "Yoda", wiki: "Yoda" },
    { label: "Cucumber", wiki: "Cucumber" } ] },
  { theme: "You're both feathered birds…", items: [
    { label: "Flamingo", wiki: "Flamingo" },
    { label: "Ostrich", wiki: "Common ostrich" } ] },
  { theme: "You both have a wrinkly grey hide…", items: [
    { label: "Rhinoceros", wiki: "Rhinoceros" },
    { label: "Manatee", wiki: "Manatee" } ] },
  { theme: "You're both Pokémon…", items: [
    { label: "Pikachu", wiki: "Pikachu" },
    { label: "Charizard", wiki: "Charizard" } ] },
  { theme: "You're both bright green and slimy…", items: [
    { label: "Slimer", wiki: "Slimer" },
    { label: "Frog", wiki: "Frog" } ] },
  { theme: "You both live underwater…", items: [
    { label: "SpongeBob SquarePants", wiki: "SpongeBob SquarePants (character)" },
    { label: "Ariel", wiki: "Ariel (The Little Mermaid)" } ] },
  { theme: "You're both serpents of legend…", items: [
    { label: "Medusa", wiki: "Medusa" },
    { label: "The Basilisk", wiki: "Basilisk" } ] },
  { theme: "You're both legendary outlaws and rebels…", items: [
    { label: "Robin Hood", wiki: "Robin Hood" },
    { label: "William Tell", wiki: "William Tell" } ] },
  { theme: "You both score with your feet…", items: [
    { label: "Pelé", wiki: "Pelé" },
    { label: "Diego Maradona", wiki: "Diego Maradona" } ] },
  { theme: "You both keep your head warm…", items: [
    { label: "Beanie", wiki: "Knit cap" },
    { label: "Earmuffs", wiki: "Earmuffs" } ] },
  { theme: "You're both Australian icons…", items: [
    { label: "The Sydney Opera House", wiki: "Sydney Opera House" },
    { label: "Uluru", wiki: "Uluru" } ] },
  { theme: "You both carry pollen between blooms…", items: [
    { label: "Bumblebee", wiki: "Bumblebee" },
    { label: "Monarch butterfly", wiki: "Monarch butterfly" } ] },
  { theme: "You're both fairies…", items: [
    { label: "Tinker Bell", wiki: "Tinker Bell" },
    { label: "The Blue Fairy", wiki: "The Blue Fairy" } ] },
  { theme: "You're both football GOATs…", items: [
    { label: "Lionel Messi", wiki: "Lionel Messi" },
    { label: "Cristiano Ronaldo", wiki: "Cristiano Ronaldo" } ] },
  { theme: "You both glide across the ice…", items: [
    { label: "Ice hockey", wiki: "Ice hockey" },
    { label: "Ice skate", wiki: "Ice skate" } ] },
  { theme: "You both belong in the swimming pool…", items: [
    { label: "Swimming", wiki: "Swimming (sport)" },
    { label: "Goggles", wiki: "Goggles" } ] },
  { theme: "You both are spotty fawns…", items: [
    { label: "Deer", wiki: "Deer" },
    { label: "Bambi", wiki: "Bambi (character)" } ] },
  { theme: "You're both world leaders of war…", items: [
    { label: "Winston Churchill", wiki: "Winston Churchill" },
    { label: "Napoleon", wiki: "Napoleon" } ] },
  { theme: "You're both Italian landmarks…", items: [
    { label: "The Leaning Tower of Pisa", wiki: "Leaning Tower of Pisa" },
    { label: "The Colosseum", wiki: "Colosseum" } ] },
  { theme: "You're both spooky Halloween figures…", items: [
    { label: "The Witch", wiki: "Witch" },
    { label: "The Ghost", wiki: "Ghost" } ] },
  { theme: "You can both fly…", items: [
    { label: "Mary Poppins", wiki: "Mary Poppins (character)" },
    { label: "Buzz Lightyear", wiki: "Buzz Lightyear" } ] },
  { theme: "You're both yellow…", items: [
    { label: "SpongeBob SquarePants", wiki: "SpongeBob SquarePants (character)" },
    { label: "Lemon", wiki: "Lemon" } ] },
  { theme: "You both belong at a tea party…", items: [
    { label: "Teapot", wiki: "Teapot" },
    { label: "Scone", wiki: "Scone" } ] },
  { theme: "You both have wings…", items: [
    { label: "Pegasus", wiki: "Pegasus" },
    { label: "Eagle", wiki: "Eagle" } ] },
  { theme: "You're both icons of San Francisco…", items: [
    { label: "The Golden Gate Bridge", wiki: "Golden Gate Bridge" },
    { label: "The Cable Car", wiki: "San Francisco cable car system" } ] },
  { theme: "You're both villains…", items: [
    { label: "Joker", wiki: "Joker (character)" },
    { label: "Maleficent", wiki: "Maleficent" } ] },
  { theme: "You're both very tall…", items: [
    { label: "The Burj Khalifa", wiki: "Burj Khalifa" },
    { label: "The Empire State Building", wiki: "Empire State Building" } ] },
  { theme: "You both have a shell…", items: [
    { label: "Egg", wiki: "Egg as food" },
    { label: "Walnut", wiki: "Walnut" } ] },
  { theme: "You're both found in the garage…", items: [
    { label: "Hammer", wiki: "Hammer" },
    { label: "Wrench", wiki: "Wrench" } ] },
  { theme: "You're both maidens of legend and history…", items: [
    { label: "Joan of Arc", wiki: "Joan of Arc" },
    { label: "Cleopatra", wiki: "Cleopatra" } ] },
  { theme: "You both raise a wild child or beast…", items: [
    { label: "Mowgli", wiki: "Mowgli" },
    { label: "Hagrid", wiki: "Rubeus Hagrid" } ] },
  { theme: "You're both famous castles…", items: [
    { label: "Neuschwanstein Castle", wiki: "Neuschwanstein Castle" },
    { label: "Edinburgh Castle", wiki: "Edinburgh Castle" } ] },
  { theme: "You're both robots…", items: [
    { label: "Bender", wiki: "Bender (Futurama)" },
    { label: "Baymax", wiki: "Baymax" } ] },
  { theme: "You're both robots…", items: [
    { label: "R2-D2", wiki: "R2-D2" },
    { label: "WALL-E", wiki: "WALL-E" } ] },
  { theme: "You're both Greek goddesses…", items: [
    { label: "Athena", wiki: "Athena" },
    { label: "Aphrodite", wiki: "Aphrodite" } ] },
  { theme: "You're both half-human, half-beast…", items: [
    { label: "The Centaur", wiki: "Centaur" },
    { label: "The Minotaur", wiki: "Minotaur" } ] },
  { theme: "You're both giant wheels and rides…", items: [
    { label: "The London Eye", wiki: "London Eye" },
    { label: "The Ferris Wheel", wiki: "Ferris wheel" } ] },
  { theme: "You both have a famous laugh or trickster spirit…", items: [
    { label: "Woody Woodpecker", wiki: "Woody Woodpecker" },
    { label: "Bugs Bunny", wiki: "Bugs Bunny" } ] },
  { theme: "You're both tiny…", items: [
    { label: "Ant-Man", wiki: "Ant-Man" },
    { label: "Ant", wiki: "Ant" } ] },
  { theme: "You both grow in the forest…", items: [
    { label: "Mushroom", wiki: "Mushroom" },
    { label: "Fern", wiki: "Fern" } ] },
  { theme: "You both are clever woodland tricksters…", items: [
    { label: "Coyote", wiki: "Coyote" },
    { label: "Crow", wiki: "Crow" } ] },
  { theme: "You both dive for fish…", items: [
    { label: "Kingfisher", wiki: "Kingfisher" },
    { label: "Pelican", wiki: "Pelican" } ] },
  { theme: "You're both kings of the ring…", items: [
    { label: "Floyd Mayweather", wiki: "Floyd Mayweather Jr." },
    { label: "Manny Pacquiao", wiki: "Manny Pacquiao" } ] },
  { theme: "You're both Brazilian icons…", items: [
    { label: "Christ the Redeemer", wiki: "Christ the Redeemer (statue)" },
    { label: "Pelé", wiki: "Pelé" } ] },
  { theme: "You both have a forked tongue…", items: [
    { label: "Cobra", wiki: "Cobra" },
    { label: "Monitor lizard", wiki: "Monitor lizard" } ] },
  { theme: "You're both bouncing all over the court…", items: [
    { label: "Basketball", wiki: "Basketball (ball)" },
    { label: "Stephen Curry", wiki: "Stephen Curry" } ] },
  { theme: "You both fizz and bubble…", items: [
    { label: "Soda Pop", wiki: "Soft drink" },
    { label: "Champagne", wiki: "Champagne" } ] },
  { theme: "You're both football icons with magic feet…", items: [
    { label: "Neymar", wiki: "Neymar" },
    { label: "Kylian Mbappé", wiki: "Kylian Mbappé" } ] },
  { theme: "You both love to clown around in the sea…", items: [
    { label: "Nemo", wiki: "Finding Nemo" },
    { label: "Clownfish", wiki: "Clownfish" } ] },
  { theme: "You both have bristles…", items: [
    { label: "Broom", wiki: "Broom" },
    { label: "Paintbrush", wiki: "Paintbrush" } ] },
  { theme: "You both can puff up bigger…", items: [
    { label: "Pufferfish", wiki: "Tetraodontidae" },
    { label: "Blowfish toad", wiki: "Toad" } ] },
  { theme: "You're both purple…", items: [
    { label: "Spyro", wiki: "Spyro (character)" },
    { label: "Thanos", wiki: "Thanos" } ] },
  { theme: "You both have a famous mustache…", items: [
    { label: "Mario", wiki: "Mario" },
    { label: "Wario", wiki: "Wario" } ] },
  { theme: "You both are red all over…", items: [
    { label: "Cardinal", wiki: "Northern cardinal" },
    { label: "Ladybug", wiki: "Coccinellidae" } ] },
  { theme: "You both perch on a branch and sing…", items: [
    { label: "Nightingale", wiki: "Common nightingale" },
    { label: "Sparrow", wiki: "House sparrow" } ] },
  { theme: "You're both famous dogs…", items: [
    { label: "Scooby-Doo", wiki: "Scooby-Doo (character)" },
    { label: "Pluto", wiki: "Pluto (Disney)" } ] },
  { theme: "You're both famous ducks…", items: [
    { label: "Donald Duck", wiki: "Donald Duck" },
    { label: "Daffy Duck", wiki: "Daffy Duck" } ] },
  { theme: "You both glow in the dark…", items: [
    { label: "Tinker Bell", wiki: "Tinker Bell" },
    { label: "Firefly", wiki: "Firefly" } ] },
  { theme: "You both have a ringed tail…", items: [
    { label: "Ring-tailed lemur", wiki: "Ring-tailed lemur" },
    { label: "Red panda", wiki: "Red panda" } ] },
  { theme: "You're both fluffy…", items: [
    { label: "Chewbacca", wiki: "Chewbacca" },
    { label: "Cloud", wiki: "Cloud" } ] },
  { theme: "You're both Egyptian wonders…", items: [
    { label: "The Great Pyramid", wiki: "Great Pyramid of Giza" },
    { label: "The Great Sphinx", wiki: "Great Sphinx of Giza" } ] },
  { theme: "You both go in a blender…", items: [
    { label: "Smoothie", wiki: "Smoothie" },
    { label: "Banana", wiki: "Banana" } ] },
  { theme: "You're both famous queens…", items: [
    { label: "Cleopatra", wiki: "Cleopatra" },
    { label: "Queen Victoria", wiki: "Queen Victoria" } ] },
  { theme: "You both have a famous mustache…", items: [
    { label: "Wario", wiki: "Wario" },
    { label: "Yosemite Sam", wiki: "Yosemite Sam" } ] },
  { theme: "You're both things in the night sky…", items: [
    { label: "The Moon", wiki: "Moon" },
    { label: "The Northern Lights", wiki: "Aurora" } ] },
  { theme: "You're both old and stony monuments…", items: [
    { label: "Stonehenge", wiki: "Stonehenge" },
    { label: "The Moai", wiki: "Moai" } ] },
  { theme: "You're both famous warships…", items: [
    { label: "HMS Victory", wiki: "HMS Victory" },
    { label: "USS Constitution", wiki: "USS Constitution" } ] },
  { theme: "You're both Time Lords…", items: [
    { label: "The Doctor", wiki: "The Doctor (Doctor Who)" },
    { label: "The Master", wiki: "The Master (Doctor Who)" } ] },
  { theme: "You're both famous explorers…", items: [
    { label: "Christopher Columbus", wiki: "Christopher Columbus" },
    { label: "Marco Polo", wiki: "Marco Polo" } ] },
  { theme: "You both wear a hat…", items: [
    { label: "Woody", wiki: "Sheriff Woody" },
    { label: "The Cat in the Hat", wiki: "The Cat in the Hat" } ] },
  { theme: "You both are cold treats…", items: [
    { label: "Frozen Yogurt", wiki: "Frozen yogurt" },
    { label: "Snow Cone", wiki: "Snow cone" } ] },
  { theme: "You both belong on the soccer pitch…", items: [
    { label: "Football", wiki: "Ball (association football)" },
    { label: "Goal", wiki: "Goal (sports)" } ] },
  { theme: "You both have a mane…", items: [
    { label: "Horse", wiki: "Horse" },
    { label: "Fabio", wiki: "Fabio Lanzoni" } ] },
  { theme: "You both live on Sesame Street…", items: [
    { label: "Big Bird", wiki: "Big Bird" },
    { label: "Cookie Monster", wiki: "Cookie Monster" } ] },
  { theme: "You both belong at a barbecue…", items: [
    { label: "Hot Dog", wiki: "Hot dog" },
    { label: "Corn on the Cob", wiki: "Corn on the cob" } ] },
  { theme: "You're both gymnastics superstars…", items: [
    { label: "Simone Biles", wiki: "Simone Biles" },
    { label: "Nadia Comăneci", wiki: "Nadia Comăneci" } ] },
  { theme: "You're both daring sea explorers…", items: [
    { label: "Ferdinand Magellan", wiki: "Ferdinand Magellan" },
    { label: "Captain James Cook", wiki: "James Cook" } ] },
  { theme: "You both have a lid…", items: [
    { label: "Cooking Pot", wiki: "Cookware and bakeware" },
    { label: "Jar", wiki: "Jar" } ] },
  { theme: "You're both French treats…", items: [
    { label: "Croissant", wiki: "Croissant" },
    { label: "Macaron", wiki: "Macaron" } ] },
  { theme: "You're both classic cars…", items: [
    { label: "The Volkswagen Beetle", wiki: "Volkswagen Beetle" },
    { label: "The Ford Model T", wiki: "Ford Model T" } ] },
  { theme: "You're both pink…", items: [
    { label: "Piglet", wiki: "Piglet (Winnie-the-Pooh)" },
    { label: "Pig", wiki: "Pig" } ] },
  { theme: "You're both famous composers…", items: [
    { label: "Beethoven", wiki: "Ludwig van Beethoven" },
    { label: "Mozart", wiki: "Wolfgang Amadeus Mozart" } ] },
  { theme: "You're both founders of nations…", items: [
    { label: "George Washington", wiki: "George Washington" },
    { label: "Simón Bolívar", wiki: "Simón Bolívar" } ] },
  { theme: "You're both famous walls…", items: [
    { label: "Hadrian's Wall", wiki: "Hadrian's Wall" },
    { label: "The Berlin Wall", wiki: "Berlin Wall" } ] },
  { theme: "You both prowl the savanna…", items: [
    { label: "Lion", wiki: "Lion" },
    { label: "Hyena", wiki: "Spotted hyena" } ] },
  { theme: "You both wear all black…", items: [
    { label: "Batman", wiki: "Batman" },
    { label: "Ninja", wiki: "Ninja" } ] },
  { theme: "You're both Japanese dishes…", items: [
    { label: "Sushi", wiki: "Sushi" },
    { label: "Ramen", wiki: "Ramen" } ] },
  { theme: "You both spin silky webs…", items: [
    { label: "Spider", wiki: "Spider" },
    { label: "Silkworm", wiki: "Bombyx mori" } ] },
  { theme: "You're both seriously fast…", items: [
    { label: "Usain Bolt", wiki: "Usain Bolt" },
    { label: "Cheetah", wiki: "Cheetah" } ] },
  { theme: "You're both bald and shiny…", items: [
    { label: "Mr. Clean", wiki: "Mr. Clean" },
    { label: "Bowling ball", wiki: "Bowling ball" } ] },
  { theme: "You both live deep in caves…", items: [
    { label: "Bat", wiki: "Bat" },
    { label: "Cave salamander", wiki: "Olm" } ] },
  { theme: "You both buzz with a nasty sting…", items: [
    { label: "Wasp", wiki: "Wasp" },
    { label: "Hornet", wiki: "Hornet" } ] },
  { theme: "You both race on two wheels…", items: [
    { label: "Bicycle", wiki: "Bicycle" },
    { label: "Motorcycle", wiki: "Motorcycle" } ] },
  { theme: "You're both in Japan…", items: [
    { label: "Mount Fuji", wiki: "Mount Fuji" },
    { label: "Tokyo Tower", wiki: "Tokyo Tower" } ] },
  { theme: "You both wear black and white…", items: [
    { label: "Orca", wiki: "Orca" },
    { label: "Magpie", wiki: "Eurasian magpie" } ] },
  { theme: "You both float in the night sky…", items: [
    { label: "Galaxy", wiki: "Galaxy" },
    { label: "Nebula", wiki: "Nebula" } ] },
  { theme: "You're both spanish landmarks…", items: [
    { label: "The Sagrada Família", wiki: "Sagrada Família" },
    { label: "The Alhambra", wiki: "Alhambra" } ] },
  { theme: "You're both German engineering on wheels…", items: [
    { label: "The Volkswagen Beetle", wiki: "Volkswagen Beetle" },
    { label: "The Porsche 911", wiki: "Porsche 911" } ] },
  { theme: "You're both orange…", items: [
    { label: "Nemo the clownfish", wiki: "Clownfish" },
    { label: "Pumpkin", wiki: "Pumpkin" } ] },
  { theme: "You both bounce…", items: [
    { label: "Tennis Ball", wiki: "Tennis ball" },
    { label: "Trampoline", wiki: "Trampoline" } ] },
  { theme: "You both wriggle without legs…", items: [
    { label: "Eel", wiki: "Eel" },
    { label: "Caterpillar", wiki: "Caterpillar" } ] },
  { theme: "You both wobble on a plate…", items: [
    { label: "Jell-O", wiki: "Gelatin dessert" },
    { label: "Pudding", wiki: "Pudding" } ] },
  { theme: "You both grant wishes…", items: [
    { label: "Blue Fairy", wiki: "The Blue Fairy" },
    { label: "Fairy Godmother", wiki: "Fairy godmother" } ] },
  { theme: "You're both blue…", items: [
    { label: "Stitch", wiki: "Stitch (Lilo & Stitch)" },
    { label: "Blue morpho butterfly", wiki: "Menelaus blue morpho" } ] },
  { theme: "You both lay eggs in a nest…", items: [
    { label: "Robin", wiki: "American robin" },
    { label: "Sea turtle", wiki: "Sea turtle" } ] },
  { theme: "You both have strings…", items: [
    { label: "Guitar", wiki: "Guitar" },
    { label: "Kite", wiki: "Kite" } ] },
  { theme: "You're both giant statues…", items: [
    { label: "Christ the Redeemer", wiki: "Christ the Redeemer (statue)" },
    { label: "The Statue of David", wiki: "David (Michelangelo)" } ] },
  { theme: "You're both winged creatures of myth…", items: [
    { label: "Pegasus", wiki: "Pegasus" },
    { label: "The Phoenix", wiki: "Phoenix (mythology)" } ] },
  { theme: "You're both things that float on water…", items: [
    { label: "The Gondola", wiki: "Gondola" },
    { label: "The Sailboat", wiki: "Sailboat" } ] },
  { theme: "You're both shiny…", items: [
    { label: "Disco ball", wiki: "Disco ball" },
    { label: "Gold medal", wiki: "Gold medal" } ] },
  { theme: "You're both toys kids love…", items: [
    { label: "Teddy Bear", wiki: "Teddy bear" },
    { label: "Yo-Yo", wiki: "Yo-yo" } ] },
  { theme: "You're both wizards…", items: [
    { label: "Merlin", wiki: "Merlin" },
    { label: "Gandalf", wiki: "Gandalf" } ] },
  { theme: "You're both black and white…", items: [
    { label: "Panda", wiki: "Giant panda" },
    { label: "Penguin", wiki: "Penguin" } ] },
  { theme: "You both have a big bushy beard…", items: [
    { label: "Goat", wiki: "Goat" },
    { label: "Bearded dragon", wiki: "Central bearded dragon" } ] },
  { theme: "You both have a feathery crest…", items: [
    { label: "Peacock", wiki: "Peafowl" },
    { label: "Cockatoo", wiki: "Cockatoo" } ] },
  { theme: "You're both famous towers…", items: [
    { label: "The Tokyo Skytree", wiki: "Tokyo Skytree" },
    { label: "The Leaning Tower of Pisa", wiki: "Leaning Tower of Pisa" } ] },
  { theme: "You're both in China…", items: [
    { label: "The Great Wall of China", wiki: "Great Wall of China" },
    { label: "The Forbidden City", wiki: "Forbidden City" } ] },
  { theme: "You're both fairy tale wolves or wolves in disguise…", items: [
    { label: "Big Bad Wolf", wiki: "Big Bad Wolf" },
    { label: "Br'er Fox", wiki: "Br'er Fox" } ] },
  { theme: "You're both long…", items: [
    { label: "Dachshund", wiki: "Dachshund" },
    { label: "Hot dog", wiki: "Hot dog" } ] },
  { theme: "You both flow through the land…", items: [
    { label: "River", wiki: "River" },
    { label: "Waterfall", wiki: "Waterfall" } ] },
  { theme: "You're both mighty waterfalls…", items: [
    { label: "Niagara Falls", wiki: "Niagara Falls" },
    { label: "Victoria Falls", wiki: "Victoria Falls" } ] },
  { theme: "You both make a loud roar…", items: [
    { label: "Tiger", wiki: "Tiger" },
    { label: "Grizzly bear", wiki: "Grizzly bear" } ] },
  { theme: "You both blast off into space…", items: [
    { label: "Astronaut", wiki: "Astronaut" },
    { label: "Rocket", wiki: "Rocket" } ] },
  { theme: "You're both hot enough to melt anything…", items: [
    { label: "Lava", wiki: "Lava" },
    { label: "Sun", wiki: "Sun" } ] },
  { theme: "You're both very Greek…", items: [
    { label: "The Acropolis", wiki: "Acropolis of Athens" },
    { label: "Socrates", wiki: "Socrates" } ] },
  { theme: "You're both queens of pop…", items: [
    { label: "Lady Gaga", wiki: "Lady Gaga" },
    { label: "Rihanna", wiki: "Rihanna" } ] },
  { theme: "You both reflect your face…", items: [
    { label: "Mirror", wiki: "Mirror" },
    { label: "Spoon", wiki: "Spoon" } ] },
  { theme: "You both top a cupcake…", items: [
    { label: "Frosting", wiki: "Icing (food)" },
    { label: "Sprinkles", wiki: "Sprinkles" } ] },
  { theme: "You both wear a mask…", items: [
    { label: "Spider-Man", wiki: "Spider-Man" },
    { label: "Darth Vader", wiki: "Darth Vader" } ] },
  { theme: "You both shred on an electric guitar…", items: [
    { label: "Jimi Hendrix", wiki: "Jimi Hendrix" },
    { label: "Slash", wiki: "Slash (musician)" } ] },
  { theme: "You both have horns…", items: [
    { label: "Maleficent", wiki: "Maleficent" },
    { label: "Rhinoceros", wiki: "Rhinoceros" } ] },
  { theme: "You both pop…", items: [
    { label: "Popcorn", wiki: "Popcorn" },
    { label: "Balloon", wiki: "Balloon" } ] },
  { theme: "You both bring the heat of summer…", items: [
    { label: "Sunshine", wiki: "Sunlight" },
    { label: "Heat wave", wiki: "Heat wave" } ] },
  { theme: "You're both German landmarks…", items: [
    { label: "The Brandenburg Gate", wiki: "Brandenburg Gate" },
    { label: "Neuschwanstein Castle", wiki: "Neuschwanstein Castle" } ] },
  { theme: "You're both found in a classroom…", items: [
    { label: "Pencil", wiki: "Pencil" },
    { label: "Globe", wiki: "Globe" } ] },
  { theme: "You both dig underground tunnels…", items: [
    { label: "Mole", wiki: "Mole (animal)" },
    { label: "Rabbit", wiki: "Rabbit" } ] },
  { theme: "You both swim in the deep sea…", items: [
    { label: "Jellyfish", wiki: "Jellyfish" },
    { label: "Manta ray", wiki: "Manta ray" } ] },
  { theme: "You both sail the seven seas…", items: [
    { label: "Pirate", wiki: "Piracy" },
    { label: "Sailor", wiki: "Sailor" } ] },
  { theme: "You're both submarines of the deep…", items: [
    { label: "The Nautilus", wiki: "Nautilus (Verne)" },
    { label: "The Submarine", wiki: "Submarine" } ] },
  { theme: "You both spin around…", items: [
    { label: "Fidget Spinner", wiki: "Fidget spinner" },
    { label: "Ceiling Fan", wiki: "Ceiling fan" } ] },
  { theme: "You're both super strong…", items: [
    { label: "Hulk", wiki: "Hulk" },
    { label: "Mr. Incredible", wiki: "Mr. Incredible" } ] },
  { theme: "You're both found in the kitchen…", items: [
    { label: "Toaster", wiki: "Toaster" },
    { label: "Whisk", wiki: "Whisk" } ] },
  { theme: "You both blast out brass…", items: [
    { label: "Trumpet", wiki: "Trumpet" },
    { label: "Saxophone", wiki: "Saxophone" } ] },
  { theme: "You both have a brim…", items: [
    { label: "Baseball Cap", wiki: "Baseball cap" },
    { label: "Cowboy Hat", wiki: "Cowboy hat" } ] },
  { theme: "You both have stripes…", items: [
    { label: "Tigger", wiki: "Tigger" },
    { label: "Tiger", wiki: "Tiger" } ] },
  { theme: "You're both tall trees…", items: [
    { label: "Oak tree", wiki: "Oak" },
    { label: "Redwood", wiki: "Sequoia sempervirens" } ] },
  { theme: "You're both on Easter Island and beyond…", items: [
    { label: "The Moai", wiki: "Moai" },
    { label: "The Nazca Lines", wiki: "Nazca Lines" } ] },
  { theme: "You both crunch when you bite…", items: [
    { label: "Apple", wiki: "Apple" },
    { label: "Cracker", wiki: "Cracker (food)" } ] },
  { theme: "You both keep you dry in the rain…", items: [
    { label: "Rubber Boots", wiki: "Wellington boot" },
    { label: "Poncho", wiki: "Poncho" } ] },
  { theme: "You both light up the meadow…", items: [
    { label: "Sunflower", wiki: "Common sunflower" },
    { label: "Butterfly", wiki: "Butterfly" } ] },
  { theme: "You're both putting out the flames…", items: [
    { label: "Fire hydrant", wiki: "Fire hydrant" },
    { label: "Fire extinguisher", wiki: "Fire extinguisher" } ] },
  { theme: "You're both yellow…", items: [
    { label: "Corn", wiki: "Maize" },
    { label: "Pineapple", wiki: "Pineapple" } ] },
  { theme: "You're both green…", items: [
    { label: "The Grinch", wiki: "Grinch" },
    { label: "Praying mantis", wiki: "Mantis" } ] },
  { theme: "You're both red…", items: [
    { label: "Lightning McQueen", wiki: "Lightning McQueen" },
    { label: "Clifford", wiki: "Clifford the Big Red Dog" } ] },
  { theme: "You're both made of snow…", items: [
    { label: "Olaf", wiki: "Olaf (Frozen)" },
    { label: "Frosty the Snowman", wiki: "Frosty the Snowman" } ] },
  { theme: "You're both green…", items: [
    { label: "Cucumber", wiki: "Cucumber" },
    { label: "Lime", wiki: "Lime (fruit)" } ] },
  { theme: "You both wear a stethoscope to work…", items: [
    { label: "Stethoscope", wiki: "Stethoscope" },
    { label: "Veterinarian", wiki: "Veterinarian" } ] },
  { theme: "You both wear a green tunic and shoot arrows…", items: [
    { label: "Link", wiki: "Link (The Legend of Zelda)" },
    { label: "Robin Hood", wiki: "Robin Hood (Disney character)" } ] },
  { theme: "You both made science history…", items: [
    { label: "Marie Curie", wiki: "Marie Curie" },
    { label: "Charles Darwin", wiki: "Charles Darwin" } ] },
  { theme: "You're both famous ships…", items: [
    { label: "The Titanic", wiki: "Titanic" },
    { label: "The Mayflower", wiki: "Mayflower" } ] },
  { theme: "You're both the biggest planets around…", items: [
    { label: "Jupiter", wiki: "Jupiter" },
    { label: "Neptune", wiki: "Neptune" } ] },
  { theme: "You both protect a kingdom as knights…", items: [
    { label: "King Arthur", wiki: "King Arthur" },
    { label: "Sir Lancelot", wiki: "Lancelot" } ] },
  { theme: "You both light up the room with music…", items: [
    { label: "Ed Sheeran", wiki: "Ed Sheeran" },
    { label: "Bruno Mars", wiki: "Bruno Mars" } ] },
  { theme: "You're both lost cities of legend…", items: [
    { label: "Atlantis", wiki: "Atlantis" },
    { label: "El Dorado", wiki: "El Dorado" } ] },
  { theme: "You both cut things…", items: [
    { label: "Scissors", wiki: "Scissors" },
    { label: "Knife", wiki: "Knife" } ] },
  { theme: "You both are speedy little birds…", items: [
    { label: "Roadrunner", wiki: "Greater roadrunner" },
    { label: "Wren", wiki: "Wren" } ] },
  { theme: "You both belong in a sewing kit…", items: [
    { label: "Needle", wiki: "Sewing needle" },
    { label: "Thimble", wiki: "Thimble" } ] },
  { theme: "You're both sticky…", items: [
    { label: "Peanut Butter", wiki: "Peanut butter" },
    { label: "Glue", wiki: "Adhesive" } ] },
  { theme: "You both fight with a lightsaber…", items: [
    { label: "Obi-Wan Kenobi", wiki: "Obi-Wan Kenobi" },
    { label: "Darth Maul", wiki: "Darth Maul" } ] },
  { theme: "You're both rockets to space…", items: [
    { label: "The Saturn V", wiki: "Saturn V" },
    { label: "The Falcon 9", wiki: "Falcon 9" } ] },
  { theme: "You're both cold-blooded reptiles…", items: [
    { label: "Crocodile", wiki: "Crocodile" },
    { label: "Iguana", wiki: "Iguana" } ] },
  { theme: "You both have antlers on your head…", items: [
    { label: "Moose", wiki: "Moose" },
    { label: "Reindeer", wiki: "Reindeer" } ] },
  { theme: "You're both kid detectives or adventurers…", items: [
    { label: "Dora", wiki: "Dora Márquez" },
    { label: "Diego", wiki: "Go, Diego, Go!" } ] },
  { theme: "You both wear a mask…", items: [
    { label: "Kylo Ren", wiki: "Kylo Ren" },
    { label: "Deadpool", wiki: "Deadpool" } ] },
  { theme: "You both have a crust…", items: [
    { label: "Bread", wiki: "Bread" },
    { label: "Apple Pie", wiki: "Apple pie" } ] },
  { theme: "You're both jet black…", items: [
    { label: "Bagheera", wiki: "Bagheera" },
    { label: "Black panther", wiki: "Black panther" } ] },
  { theme: "You're both fierce warriors of history…", items: [
    { label: "Genghis Khan", wiki: "Genghis Khan" },
    { label: "Attila the Hun", wiki: "Attila" } ] },
  { theme: "You both tell time…", items: [
    { label: "Wristwatch", wiki: "Watch" },
    { label: "Hourglass", wiki: "Hourglass" } ] },
  { theme: "You're both keys to a melody…", items: [
    { label: "Piano", wiki: "Piano" },
    { label: "Accordion", wiki: "Accordion" } ] },
  { theme: "You both have layers…", items: [
    { label: "Onion", wiki: "Onion" },
    { label: "Lasagna", wiki: "Lasagne" } ] },
  { theme: "You're both long…", items: [
    { label: "Slinky Dog", wiki: "Slinky Dog" },
    { label: "Snake", wiki: "Snake" } ] },
  { theme: "You both belong in a toolbox…", items: [
    { label: "Screwdriver", wiki: "Screwdriver" },
    { label: "Pliers", wiki: "Pliers" } ] },
  { theme: "You both are breakfast pastries…", items: [
    { label: "Danish", wiki: "Danish pastry" },
    { label: "Cinnamon Roll", wiki: "Cinnamon roll" } ] },
  { theme: "You both crush it in the boxing world…", items: [
    { label: "Boxing glove", wiki: "Boxing glove" },
    { label: "Boxing ring", wiki: "Boxing ring" } ] },
  { theme: "You're both peering deep into space…", items: [
    { label: "Telescope", wiki: "Telescope" },
    { label: "Hubble Space Telescope", wiki: "Hubble Space Telescope" } ] },
  { theme: "You both wear a cape…", items: [
    { label: "Batman", wiki: "Batman" },
    { label: "Doctor Strange", wiki: "Doctor Strange" } ] },
  { theme: "You both hold water…", items: [
    { label: "Water Bottle", wiki: "Water bottle" },
    { label: "Bucket", wiki: "Bucket" } ] },
  { theme: "You both have wooly coats…", items: [
    { label: "Sheep", wiki: "Sheep" },
    { label: "Llama", wiki: "Llama" } ] },
  { theme: "You both have stripes…", items: [
    { label: "Where's Waldo", wiki: "Where's Wally?" },
    { label: "Watermelon", wiki: "Watermelon" } ] },
  { theme: "You both belong in an office…", items: [
    { label: "Paper Clip", wiki: "Paper clip" },
    { label: "Printer", wiki: "Printer (computing)" } ] },
  { theme: "You both melt in the sun…", items: [
    { label: "Ice Cream", wiki: "Ice cream" },
    { label: "Butter", wiki: "Butter" } ] },
  { theme: "You're both up in the sky at work…", items: [
    { label: "Pilot", wiki: "Aviator" },
    { label: "Airplane", wiki: "Airplane" } ] },
  { theme: "You're both wonders of the world…", items: [
    { label: "The Great Wall of China", wiki: "Great Wall of China" },
    { label: "Machu Picchu", wiki: "Machu Picchu" } ] },
  { theme: "You're both winter holiday helpers…", items: [
    { label: "The Reindeer", wiki: "Reindeer" },
    { label: "The Snowman", wiki: "Snowman" } ] },
  { theme: "You're both Greek temples and gods…", items: [
    { label: "The Parthenon", wiki: "Parthenon" },
    { label: "Athena", wiki: "Athena" } ] },
  { theme: "You both cut and style hair…", items: [
    { label: "Barber", wiki: "Barber" },
    { label: "Scissors", wiki: "Scissors" } ] },
  { theme: "You're both clawed mutants…", items: [
    { label: "Wolverine", wiki: "Wolverine (character)" },
    { label: "Sonic the Hedgehog", wiki: "Sonic the Hedgehog" } ] },
  { theme: "You both glide underwater…", items: [
    { label: "Dolphin", wiki: "Bottlenose dolphin" },
    { label: "Stingray", wiki: "Stingray" } ] },
  { theme: "You both belong on a pizza…", items: [
    { label: "Pepperoni", wiki: "Pepperoni" },
    { label: "Mushroom", wiki: "Edible mushroom" } ] },
  { theme: "You both have a curling chameleon tail…", items: [
    { label: "Seahorse", wiki: "Seahorse" },
    { label: "Chameleon", wiki: "Chameleon" } ] },
  { theme: "You both are loyal dogs…", items: [
    { label: "Golden retriever", wiki: "Golden Retriever" },
    { label: "Scooby-Doo", wiki: "Scooby-Doo (character)" } ] },
  { theme: "You're both ogres or trolls…", items: [
    { label: "Shrek", wiki: "Shrek (character)" },
    { label: "Grinch", wiki: "Grinch" } ] },
  { theme: "You both wave a wand…", items: [
    { label: "Harry Potter", wiki: "Harry Potter (character)" },
    { label: "Hermione Granger", wiki: "Hermione Granger" } ] },
  { theme: "You're both gods of the sun…", items: [
    { label: "Ra", wiki: "Ra" },
    { label: "Apollo", wiki: "Apollo" } ] },
  { theme: "You both swing a tennis racket…", items: [
    { label: "Roger Federer", wiki: "Roger Federer" },
    { label: "Serena Williams", wiki: "Serena Williams" } ] },
  { theme: "You're both Formula One champions…", items: [
    { label: "Lewis Hamilton", wiki: "Lewis Hamilton" },
    { label: "Max Verstappen", wiki: "Max Verstappen" } ] },
  { theme: "You both belong in the orchestra…", items: [
    { label: "Violin", wiki: "Violin" },
    { label: "Cello", wiki: "Cello" } ] },
  { theme: "You both wear black-and-white stripes…", items: [
    { label: "Zebra", wiki: "Zebra" },
    { label: "Skunk", wiki: "Skunk" } ] },
  { theme: "You're both fast food…", items: [
    { label: "Hamburger", wiki: "Hamburger" },
    { label: "French Fries", wiki: "French fries" } ] },
  { theme: "You're both incredibly fast…", items: [
    { label: "Cheetah", wiki: "Cheetah" },
    { label: "Peregrine falcon", wiki: "Peregrine falcon" } ] },
  { theme: "You both have a peel-back lid…", items: [
    { label: "Yogurt Cup", wiki: "Yogurt" },
    { label: "Canned Tuna", wiki: "Canned fish" } ] },
  { theme: "You're both made of chocolate…", items: [
    { label: "Chocolate Bar", wiki: "Chocolate bar" },
    { label: "Brownie", wiki: "Chocolate brownie" } ] },
  { theme: "You both nest high on a cliff…", items: [
    { label: "Golden eagle", wiki: "Golden eagle" },
    { label: "Mountain goat", wiki: "Mountain goat" } ] },
  { theme: "You're both soul music greats…", items: [
    { label: "Aretha Franklin", wiki: "Aretha Franklin" },
    { label: "Stevie Wonder", wiki: "Stevie Wonder" } ] },
  { theme: "You're both spiky…", items: [
    { label: "Sonic the Hedgehog", wiki: "Sonic the Hedgehog" },
    { label: "Hedgehog", wiki: "Hedgehog" } ] },
  { theme: "You're both desert travelers…", items: [
    { label: "The Camel", wiki: "Camel" },
    { label: "The Caravan", wiki: "Camel train" } ] },
  { theme: "You're both Olympic swimming legends…", items: [
    { label: "Michael Phelps", wiki: "Michael Phelps" },
    { label: "Katie Ledecky", wiki: "Katie Ledecky" } ] },
  { theme: "You're both reggae and rhythm legends…", items: [
    { label: "Bob Marley", wiki: "Bob Marley" },
    { label: "Steel drum", wiki: "Steelpan" } ] },
  { theme: "You both fall softly and cover the ground…", items: [
    { label: "Snowflake", wiki: "Snowflake" },
    { label: "Snowman", wiki: "Snowman" } ] },
  { theme: "You're both ghosts…", items: [
    { label: "Casper", wiki: "Casper the Friendly Ghost" },
    { label: "Slimer", wiki: "Slimer" } ] },
  { theme: "You both keep food fresh…", items: [
    { label: "Plastic Wrap", wiki: "Plastic wrap" },
    { label: "Mason Jar", wiki: "Mason jar" } ] },
  { theme: "You both waddle on the ice…", items: [
    { label: "Emperor penguin", wiki: "Emperor penguin" },
    { label: "Pingu", wiki: "Pingu" } ] },
  { theme: "You both have a creamy filling…", items: [
    { label: "Oreo", wiki: "Oreo" },
    { label: "Twinkie", wiki: "Twinkie" } ] },
  { theme: "You're both painting a masterpiece…", items: [
    { label: "Painter", wiki: "Painting" },
    { label: "Paintbrush", wiki: "Paintbrush" } ] },
  { theme: "You're both black and white…", items: [
    { label: "Dalmatian", wiki: "Dalmatian (dog)" },
    { label: "Cow", wiki: "Cattle" } ] },
  { theme: "You both have a hump on your back…", items: [
    { label: "Dromedary", wiki: "Dromedary" },
    { label: "Camel spider", wiki: "Solifugae" } ] },
  { theme: "You're both legendary British bands…", items: [
    { label: "The Beatles", wiki: "The Beatles" },
    { label: "Queen", wiki: "Queen (band)" } ] },
  { theme: "You both have a shell…", items: [
    { label: "Bowser", wiki: "Bowser (character)" },
    { label: "Turtle", wiki: "Turtle" } ] },
  { theme: "You both wear a hard outer shell…", items: [
    { label: "Beetle", wiki: "Beetle" },
    { label: "Hermit crab", wiki: "Hermit crab" } ] },
  { theme: "You're both hip-hop heavyweights…", items: [
    { label: "Eminem", wiki: "Eminem" },
    { label: "Jay-Z", wiki: "Jay-Z" } ] },
  { theme: "You both belong in a pencil case…", items: [
    { label: "Eraser", wiki: "Eraser" },
    { label: "Ruler", wiki: "Ruler" } ] },
  { theme: "You both go on a sandwich…", items: [
    { label: "Cheese", wiki: "Cheese" },
    { label: "Ham", wiki: "Ham" } ] },
  { theme: "You both dunk and dominate the NBA…", items: [
    { label: "Kevin Durant", wiki: "Kevin Durant" },
    { label: "Giannis Antetokounmpo", wiki: "Giannis Antetokounmpo" } ] },
  { theme: "You both keep the courtroom in order…", items: [
    { label: "Judge", wiki: "Judge" },
    { label: "Gavel", wiki: "Gavel" } ] },
  { theme: "You're both very tall…", items: [
    { label: "Groot", wiki: "Groot" },
    { label: "Redwood tree", wiki: "Sequoia sempervirens" } ] },
  { theme: "You're both princesses…", items: [
    { label: "Elsa", wiki: "Elsa (Frozen)" },
    { label: "Princess Zelda", wiki: "Princess Zelda" } ] },
  { theme: "You both have a long neck…", items: [
    { label: "Giraffe", wiki: "Giraffe" },
    { label: "Swan", wiki: "Swan" } ] },
  { theme: "You're both lighting up the night stage…", items: [
    { label: "Magician", wiki: "Magician (illusion)" },
    { label: "Top hat", wiki: "Top hat" } ] },
  { theme: "You're both in London…", items: [
    { label: "The London Eye", wiki: "London Eye" },
    { label: "Buckingham Palace", wiki: "Buckingham Palace" } ] },
  { theme: "You're both warm-blooded mammals…", items: [
    { label: "Whale", wiki: "Blue whale" },
    { label: "Bat", wiki: "Bat" } ] },
  { theme: "You both nibble on carrots…", items: [
    { label: "Bugs Bunny", wiki: "Bugs Bunny" },
    { label: "Guinea pig", wiki: "Guinea pig" } ] },
  { theme: "You both grow on trees…", items: [
    { label: "Cherry", wiki: "Cherry" },
    { label: "Coconut", wiki: "Coconut" } ] },
  { theme: "You both freeze the winter world…", items: [
    { label: "Blizzard", wiki: "Blizzard" },
    { label: "Icicle", wiki: "Icicle" } ] },
  { theme: "You're both wild rock frontmen…", items: [
    { label: "Mick Jagger", wiki: "Mick Jagger" },
    { label: "David Bowie", wiki: "David Bowie" } ] },
  { theme: "You both spark and crackle…", items: [
    { label: "Lightning", wiki: "Lightning" },
    { label: "Thunderstorm", wiki: "Thunderstorm" } ] },
  { theme: "You both fix the teeth…", items: [
    { label: "Dentist", wiki: "Dentist" },
    { label: "Toothbrush", wiki: "Toothbrush" } ] },
  { theme: "You both climb tall trees…", items: [
    { label: "Koala", wiki: "Koala" },
    { label: "Squirrel", wiki: "Squirrel" } ] },
  { theme: "You both light up the sky…", items: [
    { label: "Rainbow", wiki: "Rainbow" },
    { label: "Lightning", wiki: "Lightning" } ] },
  { theme: "You both have giant flapping ears…", items: [
    { label: "Dumbo", wiki: "Dumbo" },
    { label: "Fennec fox", wiki: "Fennec fox" } ] },
  { theme: "You're both loud roaring machines…", items: [
    { label: "Jet engine", wiki: "Jet engine" },
    { label: "Race car", wiki: "Auto racing" } ] },
  { theme: "You both wear a cape…", items: [
    { label: "Superman", wiki: "Superman" },
    { label: "Thor", wiki: "Thor (Marvel Comics)" } ] },
  { theme: "You're both bright orange and furry…", items: [
    { label: "Orangutan", wiki: "Orangutan" },
    { label: "Fozzie Bear", wiki: "Fozzie Bear" } ] },
  { theme: "You're both farming the land…", items: [
    { label: "Farmer", wiki: "Farmer" },
    { label: "Tractor", wiki: "Tractor" } ] },
  { theme: "You both fall from the sky…", items: [
    { label: "Snowflake", wiki: "Snowflake" },
    { label: "Raindrop", wiki: "Rain" } ] },
  { theme: "You're both digging for treasure underground…", items: [
    { label: "Miner", wiki: "Miner" },
    { label: "Pickaxe", wiki: "Pickaxe" } ] },
  { theme: "You're both pioneers of flight…", items: [
    { label: "The Wright Flyer", wiki: "Wright Flyer" },
    { label: "Amelia Earhart", wiki: "Amelia Earhart" } ] },
  { theme: "You both go in a hot drink…", items: [
    { label: "Tea Bag", wiki: "Tea bag" },
    { label: "Sugar Cube", wiki: "Sugar" } ] },
  { theme: "You're both salty…", items: [
    { label: "Pretzel", wiki: "Pretzel" },
    { label: "Potato Chips", wiki: "Potato chip" } ] },
  { theme: "You're both symbols of America…", items: [
    { label: "The Statue of Liberty", wiki: "Statue of Liberty" },
    { label: "Mount Rushmore", wiki: "Mount Rushmore" } ] },
  { theme: "You both live in the rainforest canopy…", items: [
    { label: "Sloth", wiki: "Sloth" },
    { label: "Howler monkey", wiki: "Howler monkey" } ] },
  { theme: "You both have a bright orange coat…", items: [
    { label: "Orangutan", wiki: "Orangutan" },
    { label: "Goldfish", wiki: "Goldfish" } ] },
  { theme: "You're both stars of the circus…", items: [
    { label: "Clown", wiki: "Clown" },
    { label: "Circus tent", wiki: "Circus" } ] },
  { theme: "You both come crashing onto shore…", items: [
    { label: "Tsunami", wiki: "Tsunami" },
    { label: "Ocean wave", wiki: "Wind wave" } ] },
  { theme: "You both glow…", items: [
    { label: "Lightning McQueen's headlights", wiki: "Lightning McQueen" },
    { label: "Light bulb", wiki: "Incandescent light bulb" } ] },
  { theme: "You both carry your home on your back…", items: [
    { label: "Turtle", wiki: "Turtle" },
    { label: "Snail", wiki: "Snail" } ] },
  { theme: "You're both blue…", items: [
    { label: "Smurf", wiki: "The Smurfs" },
    { label: "Blue jay", wiki: "Blue jay" } ] },
  { theme: "You both have a long beard…", items: [
    { label: "Geppetto", wiki: "Geppetto" },
    { label: "Hagrid", wiki: "Rubeus Hagrid" } ] },
  { theme: "You both wear armour…", items: [
    { label: "Iron Man", wiki: "Iron Man" },
    { label: "Boba Fett", wiki: "Boba Fett" } ] },
  { theme: "You both wear all black…", items: [
    { label: "Darth Vader", wiki: "Darth Vader" },
    { label: "Crow", wiki: "Crow" } ] },
  { theme: "You're both elephants…", items: [
    { label: "Dumbo", wiki: "Dumbo" },
    { label: "Horton", wiki: "Horton the Elephant" } ] },
  { theme: "You're both fish…", items: [
    { label: "Nemo", wiki: "Nemo (Finding Nemo)" },
    { label: "Dory", wiki: "Dory (Finding Nemo)" } ] },
  { theme: "You both wear a glass slipper or lose a shoe…", items: [
    { label: "Cinderella", wiki: "Cinderella (Disney character)" },
    { label: "Snow White", wiki: "Snow White (Disney character)" } ] },
  { theme: "You're both flat…", items: [
    { label: "Stingray", wiki: "Stingray" },
    { label: "Pizza", wiki: "Pizza" } ] },
  { theme: "You both belong on a picnic…", items: [
    { label: "Watermelon", wiki: "Watermelon" },
    { label: "Sandwich", wiki: "Sandwich" } ] },
  { theme: "You're both in India…", items: [
    { label: "The Taj Mahal", wiki: "Taj Mahal" },
    { label: "Mahatma Gandhi", wiki: "Mahatma Gandhi" } ] },
  { theme: "You're both ringed wonders of the sky…", items: [
    { label: "Saturn", wiki: "Saturn" },
    { label: "Uranus", wiki: "Uranus" } ] },
  { theme: "You both slither along the ground…", items: [
    { label: "Snake", wiki: "Snake" },
    { label: "Earthworm", wiki: "Earthworm" } ] },
  { theme: "You both buzz around flowers…", items: [
    { label: "Honeybee", wiki: "Honey bee" },
    { label: "Hummingbird", wiki: "Hummingbird" } ] },
  { theme: "You both belong in the laundry room…", items: [
    { label: "Washing Machine", wiki: "Washing machine" },
    { label: "Iron", wiki: "Clothes iron" } ] },
  { theme: "You're both legendary on the football pitch…", items: [
    { label: "Zinedine Zidane", wiki: "Zinedine Zidane" },
    { label: "David Beckham", wiki: "David Beckham" } ] },
  { theme: "You both wear a top hat…", items: [
    { label: "The Mad Hatter", wiki: "Hatter (Alice's Adventures in Wonderland)" },
    { label: "Willy Wonka", wiki: "Willy Wonka" } ] },
  { theme: "You both come out at night…", items: [
    { label: "Owl", wiki: "Owl" },
    { label: "Raccoon", wiki: "Raccoon" } ] },
  { theme: "You're both pirates…", items: [
    { label: "Long John Silver", wiki: "Long John Silver" },
    { label: "Captain Hook", wiki: "Captain Hook" } ] },
  { theme: "You're both mythical creatures…", items: [
    { label: "Medusa", wiki: "Medusa" },
    { label: "The Minotaur", wiki: "Minotaur" } ] },
  { theme: "You both serve up the food…", items: [
    { label: "Waiter", wiki: "Waiting staff" },
    { label: "Plate", wiki: "Plate (dishware)" } ] },
  { theme: "You're both drinks…", items: [
    { label: "Coffee", wiki: "Coffee" },
    { label: "Orange Juice", wiki: "Orange juice" } ] },
  { theme: "You both stand on one leg…", items: [
    { label: "Flamingo", wiki: "Flamingo" },
    { label: "Heron", wiki: "Heron" } ] },
  { theme: "You both belong to a marching band…", items: [
    { label: "Snare drum", wiki: "Snare drum" },
    { label: "Cymbal", wiki: "Cymbal" } ] },
  { theme: "You're both country music icons…", items: [
    { label: "Dolly Parton", wiki: "Dolly Parton" },
    { label: "Johnny Cash", wiki: "Johnny Cash" } ] },
  { theme: "You're both found in Egypt…", items: [
    { label: "The Great Sphinx", wiki: "Great Sphinx of Giza" },
    { label: "Tutankhamun", wiki: "Tutankhamun" } ] },
  { theme: "You both swing through the jungle…", items: [
    { label: "Tarzan", wiki: "Tarzan" },
    { label: "Mowgli", wiki: "Mowgli" } ] },
  { theme: "You both fight crime in a team…", items: [
    { label: "Wonder Woman", wiki: "Wonder Woman" },
    { label: "Black Widow", wiki: "Black Widow (Natasha Romanova)" } ] },
  { theme: "You both go on toast…", items: [
    { label: "Jam", wiki: "Fruit preserves" },
    { label: "Nutella", wiki: "Nutella" } ] },
  { theme: "You're both pirates…", items: [
    { label: "Jack Sparrow", wiki: "Jack Sparrow" },
    { label: "Captain Hook", wiki: "Captain Hook" } ] },
  { theme: "You both have a long sticky tongue…", items: [
    { label: "Anteater", wiki: "Anteater" },
    { label: "Giant pangolin", wiki: "Pangolin" } ] },
  { theme: "You both stand in the desert sun…", items: [
    { label: "Cactus", wiki: "Cactus" },
    { label: "Palm tree", wiki: "Arecaceae" } ] },
  { theme: "You both explore space…", items: [
    { label: "Spock", wiki: "Spock" },
    { label: "Captain Picard", wiki: "Jean-Luc Picard" } ] },
  { theme: "You both are dipped in fondue…", items: [
    { label: "Strawberry", wiki: "Strawberry" },
    { label: "Marshmallow", wiki: "Marshmallow" } ] },
  { theme: "You both keep watch over the seas…", items: [
    { label: "Lighthouse", wiki: "Lighthouse" },
    { label: "Captain", wiki: "Sea captain" } ] },
  { theme: "You're both pulling everything in…", items: [
    { label: "Black hole", wiki: "Black hole" },
    { label: "Gravity", wiki: "Gravity" } ] },
  { theme: "You're both cooking up something delicious…", items: [
    { label: "Chef", wiki: "Chef" },
    { label: "Frying pan", wiki: "Frying pan" } ] },
  { theme: "You both solve mysteries in a gang…", items: [
    { label: "Shaggy", wiki: "Shaggy Rogers" },
    { label: "Fred", wiki: "Fred Jones (Scooby-Doo)" } ] },
  { theme: "You both have a snout for sniffing…", items: [
    { label: "Anteater", wiki: "Anteater" },
    { label: "Aardvark", wiki: "Aardvark" } ] },
  { theme: "You both flutter in the garden…", items: [
    { label: "Dragonfly", wiki: "Dragonfly" },
    { label: "Moth", wiki: "Moth" } ] },
  { theme: "You both make music with your breath…", items: [
    { label: "Flute", wiki: "Western concert flute" },
    { label: "Harmonica", wiki: "Harmonica" } ] },
  { theme: "You're both legends of the tennis baseline…", items: [
    { label: "Rafael Nadal", wiki: "Rafael Nadal" },
    { label: "Novak Djokovic", wiki: "Novak Djokovic" } ] },
  { theme: "You're both gods of the underworld…", items: [
    { label: "Hades", wiki: "Hades" },
    { label: "Anubis", wiki: "Anubis" } ] },
  { theme: "You both come from the sea…", items: [
    { label: "Shrimp", wiki: "Shrimp" },
    { label: "Crab", wiki: "Crab" } ] },
  { theme: "You're both building things up…", items: [
    { label: "Construction worker", wiki: "Construction worker" },
    { label: "Hard hat", wiki: "Hard hat" } ] },
  { theme: "You both carry a wise old shell…", items: [
    { label: "Galapagos tortoise", wiki: "Galápagos tortoise" },
    { label: "Box turtle", wiki: "Box turtle" } ] },
  { theme: "You both keep the sun off…", items: [
    { label: "Sunglasses", wiki: "Sunglasses" },
    { label: "Sun Hat", wiki: "Sun hat" } ] },
  { theme: "You both sleep all winter…", items: [
    { label: "Brown bear", wiki: "Brown bear" },
    { label: "Groundhog", wiki: "Groundhog" } ] },
  { theme: "You're both icy little crystals…", items: [
    { label: "Hail", wiki: "Hail" },
    { label: "Frost", wiki: "Frost" } ] },
  { theme: "You both keep your drink cold…", items: [
    { label: "Cooler", wiki: "Cooler" },
    { label: "Ice Cube Tray", wiki: "Ice cube" } ] },
  { theme: "You both bring colors to the sky…", items: [
    { label: "Rainbow", wiki: "Rainbow" },
    { label: "Aurora", wiki: "Aurora" } ] },
  { theme: "You both belong in a tackle box…", items: [
    { label: "Fishing Hook", wiki: "Fish hook" },
    { label: "Fishing Reel", wiki: "Fishing reel" } ] },
  { theme: "You both teach the classroom…", items: [
    { label: "Teacher", wiki: "Teacher" },
    { label: "Blackboard", wiki: "Blackboard" } ] },
  { theme: "You both live underwater…", items: [
    { label: "Nemo", wiki: "Nemo (Finding Nemo)" },
    { label: "Aquaman", wiki: "Aquaman" } ] },
  { theme: "You both have super speed…", items: [
    { label: "Road Runner", wiki: "Road Runner (character)" },
    { label: "Dash", wiki: "Dash (The Incredibles)" } ] },
  { theme: "You're both at home on the farm…", items: [
    { label: "Cow", wiki: "Cattle" },
    { label: "Chicken", wiki: "Chicken" } ] },
  { theme: "You both keep things cold…", items: [
    { label: "Refrigerator", wiki: "Refrigerator" },
    { label: "Ice Cube", wiki: "Ice cube" } ] },
  { theme: "You both have a colorful beak…", items: [
    { label: "Parrot", wiki: "Parrot" },
    { label: "Puffin", wiki: "Atlantic puffin" } ] },
];
