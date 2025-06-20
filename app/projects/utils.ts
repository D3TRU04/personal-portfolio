// Defines the structure for project metadata
type Metadata = {
  title: string;
  description: string;
  count: number;
  githubLink?: string;
  websiteLink?: string;
};

// Returns an array of project data
export function getProjects() {
  return [
    {
      metadata: {
        title: "Downbad.ai",
        description: "A Solana dApp that analyzes trading wallets and generates AI-powered comments based on trading history.",
        count: 1,
        githubLink: "https://github.com/yourusername/downbad-ai",
        websiteLink: "https://downbad.ai"
      }
    },
    {
      metadata: {
        title: "Tabi (Solana Breakout Hackathon)",
        description: "A crypto payments and bill-splitting app built on Solana.",
        count: 2,
        githubLink: "https://github.com/yourusername/tabi",
        websiteLink: "https://tabi-app.com"
      }
    },
    {
      metadata: {
        title: "TAO SentimentBot (Bittensor Endgame Hackathon)",
        description: "A Telegram bot that delivers AI-generated sentiment reports for TAO users on Subnet 42.",
        count: 3,
        githubLink: "https://github.com/yourusername/tao-sentimentbot"
      }
    },
    {
      metadata: {
        title: "Texas PiKapp Website",
        description: "A website for the Pi Kappa Phi fraternity at the University of Texas at Austin. (Work in progress)",
        count: 4,
        githubLink: "",
        websiteLink: ""
      }
    },
    {
      metadata: {
        title: "Flappy Fish",
        description: "A fun game inspired by Flappy Bird.",
        count: 5,
        githubLink: "https://github.com/yourusername/flappy-fish"
      }
    }
  ];
}
