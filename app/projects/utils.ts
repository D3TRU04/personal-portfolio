// Defines the structure for project metadata
type Metadata = {
  title: string;
  description: string;
  count: number;
  githubLink?: string;
  websiteLink?: string;
  submissionLink?: string;
  badge?: string;
  articleLink?: string;
  preview?: {
    url: string;
    image: string;
    title: string;
    summary: string;
    source: string;
  };
};

// Returns an array of project data
export function getProjects() {
  return [
    {
      metadata: {
        title: "ping!",
        description: "A location-based social discovery iOS app that helps users find places and connect with others who share similar interests. (Work in progress!)",
        count: 1,
      }
    },
    {
      metadata: {
        title: "Essos (Midwest Blockchain Conference Hackathon)",
        description: "Built x402 SDK bridging crypto transactions to bank accounts with FedWire in 100ms using Circle Wallets & Increase API.",
        badge: "2nd Place, Circle/USDC Payments Bounty - $3,000 Prize",
        count: 2,
        githubLink: "https://github.com/essos-live",
        submissionLink: "https://devpost.com/software/essos",
        preview: {
          url: "https://devpost.com/software/essos",
          image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/059/936/datas/gallery.jpg",
          title: "Essos",
          summary: "An SDK bridging crypto payments through x402 with fiat settlement to bank accounts. Accept crypto payments and automatically convert them to USD deposits.",
          source: "devpost.com"
        }
      }
    },
    {
      metadata: {
        title: "noshot!! (Cypherpunk Colosseum Hackathon)",
        description: "A decentralized social prediction platform where friends create and wager on real-life events with transparent, on-chain bets.",
        count: 3,
        githubLink: "https://github.com/D3TRU04/noshot",
        websiteLink: "https://noshot-five.vercel.app/",
        submissionLink: "https://arena.colosseum.org/projects/explore/noshot!!?previous=L3Byb2plY3RzL2V4cGxvcmU_c2VlZD1iNGI0ZTYwYzViNGE0NzkwJmhhY2thdGhvbklkPTUmc2VhcmNoPW5vc2hvdCUyMQ",
        preview: {
          url: "https://arena.colosseum.org/projects/explore/noshot!!?previous=L3Byb2plY3RzL2V4cGxvcmU_c2VlZD1iNGI0ZTYwYzViNGE0NzkwJmhhY2thdGhvbklkPTUmc2VhcmNoPW5vc2hvdCUyMQ",
          image: "",
          title: "noshot!!",
          summary: "A decentralized social prediction platform where friends create and wager on real-life events with transparent, on-chain bets.",
          source: "colosseum.org"
        }
      }
    },
    {
      metadata: {
        title: "Kleo (XRPL Student Builder Residency)",
        description: "A Decentralized World Map for Real-Time Stories.",
        count: 4,
        githubLink: "https://github.com/D3TRU04/kleo",
        websiteLink: "kleo-lake.vercel.app",
        articleLink: "https://dev.to/ripplexdev/student-builders-push-xrpl-innovation-forward-at-residency-20-441p",
        preview: {
          url: "https://dev.to/ripplexdev/student-builders-push-xrpl-innovation-forward-at-residency-20-441p",
          image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fthkk46bdh9m8zqssg1yw.jpg",
          title: "Student Builders Push XRPL Innovation Forward at Residency 2.0",
          summary: "Cohort 2.0 of the XRPL Student Builder Residency concluded with a Demo Day in NYC, where 18 student builders showcased projects spanning DeFi, tokenization, identity, and financial applications.",
          source: "dev.to"
        }
      }
    },
    {
      metadata: {
        title: "Vitalize (narbhacks Hackathon)",
        description: "A full-stack application that tracks your daily locatons and features an AI-powered health coaching chatbot.",
        count: 5,
        githubLink: "https://github.com/D3TRU04/narbhacks",
        websiteLink: "https://vitalize-lovat.vercel.app/"
      }
    },
    {
      metadata: {
        title: "Brushline",
        description: "A Cursor for photoediting.",
        count: 6,
        githubLink: "https://github.com/D3TRU04/brushline",
        websiteLink: "https://brushline.vercel.app/"
      }
    },
    {
      metadata: {
        title: "Downbad.ai",
        description: "A Solana dApp that analyzes trading wallets and generates AI-powered comments based on trading history.",
        count: 7,
        githubLink: "https://github.com/D3TRU04/downbad-ai",
        websiteLink: "https://downbad-ai-eight.vercel.app/"
      }
    },
    {
      metadata: {
        title: "TAO SentimentBot (Bittensor Endgame Hackathon)",
        description: "A Telegram bot that delivers AI-generated sentiment reports for TAO users on Subnet 42.",
        count: 8,
        githubLink: "https://github.com/luquibotbol/tao-sentimentbot"
      }
    },
    {
      metadata: {
        title: "Texas PiKapp Website",
        description: "A website for the Pi Kappa Phi fraternity at the University of Texas at Austin.",
        count: 9,
        githubLink: "",
        websiteLink: "https://texas-pikapp-6idu.vercel.app/home"
      }
    },
    {
      metadata: {
        title: "Flappy Fish",
        description: "A fun game inspired by Flappy Bird.",
        count: 10,
        githubLink: "https://github.com/D3TRU04/flappy-fish"
      }
    }
  ];
}
