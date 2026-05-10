window.app = new Vue({
  el: '#app',
  data: {
    score: 0,
    current: 0, /* Question index */
    questions: [
      {
        question: "What company was originally called 'Cadabra'?",
        options: ["A. Google", "B. Apple", "C. Amazon", "D. eBay"],
        answer: "C",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "What artist has the most streams on Spotify?",
        options: ["A. Drake", "B. Bad Bunny", "C. The Weeknd", "D. Taylor Swift"],
        answer: "D",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "In which country was Elon Musk born?",
        options: ["A. Australia", "B. Canada", "C. South Africa", "D. United Kingdom"],
        answer: "C",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "What year was the first iPhone released?",
        options: ["A. 2005", "B. 2006", "C. 2007", "D. 2008"],
        answer: "C",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "What is the highest-grossing film of all time?",
        options: ["A. Avengers: Endgame", "B. Avatar", "C. Titanic", "D. Star Wars: The Force Awakens"],
        answer: "B",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "What luxury brand is known for its iconic interlocking 'C' logo?",
        options: ["A. Gucci", "B. Louis Vuitton", "C. Dior", "D. Chanel"],
        answer: "D",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "What Netflix show had the most streaming views in 2021?",
        options: ["A. Bridgerton", "B. Stranger Things", "C. Squid Game", "D. The Witcher"],
        answer: "C",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "How many ghosts chase Pac-Man at the start of each game?",
        options: ["A. 2", "B. 3", "C. 5", "D. 4"],
        answer: "D",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "Who has won the most total Academy Awards?",
        options: ["A. Steven Spielberg", "B. Walt Disney", "C. Katharine Hepburn", "D. Meryl Streep"],
        answer: "B",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "Queen guitarist Brian May is also an expert in what scientific field?",
        options: ["A. Quantum Physics", "B. Marine Biology", "C. Astrophysics", "D. Geology"],
        answer: "C",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "What shoe brand makes the 'Mexico 66'?",
        options: ["A. New Balance", "B. Asics", "C. Puma", "D. Onitsuka Tiger"],
        answer: "D",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "What game studio makes the Red Dead Redemption series?",
        options: ["A. Naughty Dog", "B. Ubisoft", "C. Rockstar Games", "D. Bethesda"],
        answer: "C",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "What character have both Robert Downey Jr. and Benedict Cumberbatch played?",
        options: ["A. Iron Man", "B. Hamlet", "C. Sherlock Holmes", "D. Doctor Strange"],
        answer: "C",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "What is the highest-rated film on IMDb as of January 1, 2024?",
        options: ["A. The Godfather", "B. Schindler's List", "C. The Dark Knight", "D. The Shawshank Redemption"],
        answer: "D",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "Who is the director of the critically acclaimed film 'Parasite'?",
        options: ["A. Park Chan-wook", "B. Bong Joon-ho", "C. Lee Chang-dong", "D. Kim Jee-woon"],
        answer: "B",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "Who performs the voice of Homer Simpson?",
        options: ["A. John DiMaggio", "B. Billy West", "C. Hank Azaria", "D. Dan Castellaneta"],
        answer: "D",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "Complete the lyrics: 'I should have changed that stupid lock...'",
        options: [
        "A. I should have made you leave your key",
        "B. I should have known you'd come back for me",
        "C. I should have walked away when I could",
        "D. I should have never let you back in",
        ],
        answer: "A",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "What was the name of the record label founded by Dr. Dre, Jimmy Iovine, and Interscope Records?",
        options: ["A. Death Row Records", "B. Shady Records", "C. Aftermath Records", "D. G-Unit Records"],
        answer: "C",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "Kratos is the main character of what video game series?",
        options: ["A. Devil May Cry", "B. God of War", "C. Hades", "D. Assassin's Creed"],
        answer: "B",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "Troy Bolton and Gabriella Montez are the two main characters in what 2006 Disney movie?",
        options: ["A. Camp Rock", "B. Grease", "C. Freaky Friday", "D. High School Musical"],
        answer: "D",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "The 2002 movie '8 Mile' is a semi-biographical story of what rapper?",
        options: ["A. 50 Cent", "B. Nas", "C. Eminem", "D. Jay-Z"],
        answer: "C",
        answered: false,
        selectedAnswer: null,
      },
      {
        question: "In 'Game of Thrones,' what is the sigil of House Stark?",
        options: ["A. Lion", "B. Dragon", "C. Stag", "D. Direwolf"],
        answer: "D",
        answered: false,
        selectedAnswer: null,
      },
    ],
  },

  computed: {
    currentQ: function() {
      return this.questions[this.current];
    },
  },

  methods: {
    selectAnswer(q, option) {
      if (q.answered) return;
      const selection = option.charAt(0);
      q.selectedAnswer = selection;

      if (selection == q.answer) {
        this.score++
        q.answered = true
        alert("Correct!")
      }
      else {
        q.answered = true
        alert("Incorrect!")
      }
    },

    nextQ: function() {
      this.current++
    },
  }
})