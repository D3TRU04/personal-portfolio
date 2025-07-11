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
        title: "Brushline",
        description: "A Cursor for photoediting.",
        count: 2,
        githubLink: "https://github.com/D3TRU04/brushline",
        websiteLink: "https://brushline.vercel.app/"
      }
    },
    {
      metadata: {
        title: "Downbad.ai",
        description: "A Solana dApp that analyzes trading wallets and generates AI-powered comments based on trading history.",
        count: 2,
        githubLink: "https://github.com/D3TRU04/downbad-ai",
        websiteLink: "https://downbad-ai-eight.vercel.app/"
      }
    },
    {
      metadata: {
        title: "Tabi (Solana Breakout Hackathon)",
        description: "A crypto payments and bill-splitting app built on Solana.",
        count: 3,
        githubLink: "https://github.com/D3TRU04/tabi",
        websiteLink: "https://tabi-eight.vercel.app/"
      }
    },
    {
      metadata: {
        title: "TAO SentimentBot (Bittensor Endgame Hackathon)",
        description: "A Telegram bot that delivers AI-generated sentiment reports for TAO users on Subnet 42.",
        count: 4,
        githubLink: "https://github.com/D3TRU04/tao-sentimentbot"
      }
    },
    {
      metadata: {
        title: "Texas PiKapp Website",
        description: "A website for the Pi Kappa Phi fraternity at the University of Texas at Austin. (Work in progress)",
        count: 5,
        githubLink: "",
        websiteLink: ""
      }
    },
    {
      metadata: {
        title: "Flappy Fish",
        description: "A fun game inspired by Flappy Bird.",
        count: 6,
        githubLink: "https://github.com/D3TRU04/flappy-fish"
      }
    }
  ];
}
