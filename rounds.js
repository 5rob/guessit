// Each round: a shared theme + two things to guess (one per player).
// `wiki` is the exact English Wikipedia page title used to fetch the image.
export const ROUNDS = [
  { theme: "You both wear a bow tie…", items: [
    { label: "Jack Skellington", wiki: "The Nightmare Before Christmas" },
    { label: "The Eleventh Doctor", wiki: "Eleventh Doctor" } ] },
  { theme: "You both live in the ocean…", items: [
    { label: "Seahorse", wiki: "Seahorse" },
    { label: "Sea urchin", wiki: "Sea urchin" } ] },
  { theme: "You're both green…", items: [
    { label: "Kermit the Frog", wiki: "Kermit the Frog" },
    { label: "Shrek", wiki: "Shrek (character)" } ] },
  { theme: "You both have a famous moustache…", items: [
    { label: "Mario", wiki: "Mario" },
    { label: "Freddie Mercury", wiki: "Freddie Mercury" } ] },
  { theme: "You're both yellow…", items: [
    { label: "SpongeBob", wiki: "SpongeBob SquarePants (character)" },
    { label: "Pikachu", wiki: "Pikachu" } ] },
  { theme: "You can both fly…", items: [
    { label: "Superman", wiki: "Superman" },
    { label: "Dumbo", wiki: "Dumbo" } ] },
  { theme: "You're both robots…", items: [
    { label: "R2-D2", wiki: "R2-D2" },
    { label: "WALL-E", wiki: "WALL-E (character)" } ] },
  { theme: "You're both kings…", items: [
    { label: "Elvis Presley", wiki: "Elvis Presley" },
    { label: "King Kong", wiki: "King Kong" } ] },
  { theme: "You both have a very long neck…", items: [
    { label: "Giraffe", wiki: "Giraffe" },
    { label: "The Loch Ness Monster", wiki: "Loch Ness Monster" } ] },
  { theme: "You're both found in Egypt…", items: [
    { label: "The Great Sphinx", wiki: "Great Sphinx of Giza" },
    { label: "Tutankhamun", wiki: "Tutankhamun" } ] },
  { theme: "You both wear a cape…", items: [
    { label: "Batman", wiki: "Batman" },
    { label: "Count Dracula", wiki: "Count Dracula" } ] },
  { theme: "You're both orange…", items: [
    { label: "Garfield", wiki: "Garfield (character)" },
    { label: "A carrot", wiki: "Carrot" } ] },
  { theme: "You're both detectives…", items: [
    { label: "Sherlock Holmes", wiki: "Sherlock Holmes" },
    { label: "Scooby-Doo", wiki: "Scooby-Doo (character)" } ] },
  { theme: "You both carry a hammer…", items: [
    { label: "Thor", wiki: "Thor (Marvel Comics)" },
    { label: "Bob the Builder", wiki: "Bob the Builder" } ] },
  { theme: "You're both wizards…", items: [
    { label: "Harry Potter", wiki: "Harry Potter (character)" },
    { label: "Gandalf", wiki: "Gandalf" } ] },
  { theme: "You both have eight legs…", items: [
    { label: "Octopus", wiki: "Octopus" },
    { label: "Spider", wiki: "Spider" } ] },
  { theme: "You're both princesses…", items: [
    { label: "Cinderella", wiki: "Cinderella" },
    { label: "Princess Fiona", wiki: "Princess Fiona" } ] },
  { theme: "You're both very cold…", items: [
    { label: "Penguin", wiki: "Penguin" },
    { label: "Ice cream", wiki: "Ice cream" } ] },
  { theme: "You both have stripes…", items: [
    { label: "Zebra", wiki: "Zebra" },
    { label: "Waldo / Wally", wiki: "Where's Wally?" } ] },
  { theme: "You're both seriously fast…", items: [
    { label: "Usain Bolt", wiki: "Usain Bolt" },
    { label: "Cheetah", wiki: "Cheetah" } ] },
  { theme: "You're both British icons…", items: [
    { label: "Big Ben", wiki: "Big Ben" },
    { label: "James Bond", wiki: "James Bond" } ] },
  { theme: "You're both pirates…", items: [
    { label: "Jack Sparrow", wiki: "Jack Sparrow" },
    { label: "Captain Hook", wiki: "Captain Hook" } ] },
  { theme: "You both carry your home on your back…", items: [
    { label: "Turtle", wiki: "Turtle" },
    { label: "Snail", wiki: "Snail" } ] },
  { theme: "You're both very French…", items: [
    { label: "The Eiffel Tower", wiki: "Eiffel Tower" },
    { label: "A croissant", wiki: "Croissant" } ] },
  { theme: "You're both red and white…", items: [
    { label: "Santa Claus", wiki: "Santa Claus" },
    { label: "A candy cane", wiki: "Candy cane" } ] },
  { theme: "You're both famously bald…", items: [
    { label: "Homer Simpson", wiki: "Homer Simpson" },
    { label: "Dwayne Johnson", wiki: "Dwayne Johnson" } ] },
  { theme: "You're both famous mice…", items: [
    { label: "Mickey Mouse", wiki: "Mickey Mouse" },
    { label: "Jerry (Tom and Jerry)", wiki: "Jerry Mouse" } ] },
  { theme: "You both breathe fire…", items: [
    { label: "A dragon", wiki: "Dragon" },
    { label: "Godzilla", wiki: "Godzilla" } ] },
  { theme: "You're both small but mighty…", items: [
    { label: "An ant", wiki: "Ant" },
    { label: "Yoda", wiki: "Yoda" } ] },
  { theme: "You both live in the desert…", items: [
    { label: "Camel", wiki: "Camel" },
    { label: "Cactus", wiki: "Cactus" } ] },
  { theme: "You're both purple…", items: [
    { label: "Thanos", wiki: "Thanos" },
    { label: "An eggplant", wiki: "Eggplant" } ] },
  { theme: "You both hop…", items: [
    { label: "A frog", wiki: "Frog" },
    { label: "The Easter Bunny", wiki: "Easter Bunny" } ] },
  { theme: "You both have wheels…", items: [
    { label: "Skateboard", wiki: "Skateboard" },
    { label: "Shopping cart", wiki: "Shopping cart" } ] },
  { theme: "You're both famous ships…", items: [
    { label: "The Titanic", wiki: "Titanic" },
    { label: "Noah's Ark", wiki: "Noah's Ark" } ] },
  { theme: "You both tell people the time…", items: [
    { label: "A rooster", wiki: "Rooster" },
    { label: "A cuckoo clock", wiki: "Cuckoo clock" } ] },
  { theme: "You both spin…", items: [
    { label: "A tornado", wiki: "Tornado" },
    { label: "A ballet dancer", wiki: "Ballet dancer" } ] },
  { theme: "You're both at every birthday party…", items: [
    { label: "Birthday cake", wiki: "Birthday cake" },
    { label: "A piñata", wiki: "Piñata" } ] },
  { theme: "You both have horns…", items: [
    { label: "Rhinoceros", wiki: "Rhinoceros" },
    { label: "A viking", wiki: "Vikings" } ] },
  { theme: "You're both sweet…", items: [
    { label: "Honey", wiki: "Honey" },
    { label: "A cupcake", wiki: "Cupcake" } ] },
  { theme: "You both have an epic white beard…", items: [
    { label: "Albus Dumbledore", wiki: "Albus Dumbledore" },
    { label: "Zeus", wiki: "Zeus" } ] },
  { theme: "You both wear a crown…", items: [
    { label: "Queen Elizabeth II", wiki: "Elizabeth II" },
    { label: "The Statue of Liberty", wiki: "Statue of Liberty" } ] },
  { theme: "You both bounce…", items: [
    { label: "Kangaroo", wiki: "Kangaroo" },
    { label: "Trampoline", wiki: "Trampoline" } ] },
];
