import prompt = require("prompt");

type RPS = "ROCK" | "PAPER" | "SCISSORS";

function getUserChoice(input: unknown): RPS | null {
  if (typeof input !== "string") return null;

  const choice = input.trim().toUpperCase();
  if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS") {
    return choice;
  }

  return null;
}

function getComputerChoice(): RPS {
  const randomValue = Math.random();

  // 0.00 - 0.34 => PAPER
  // 0.35 - 0.67 => SCISSORS
  // 0.68 - 1.00 => ROCK
  if (randomValue <= 0.34) return "PAPER";
  if (randomValue <= 0.67) return "SCISSORS";
  return "ROCK";
}

function getWinner(
  userSelection: RPS,
  computerSelection: RPS
): "User Wins" | "Computer Wins" | "It's a tie" {
  if (userSelection === computerSelection) return "It's a tie";

  if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (userSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    return "User Wins";
  }

  return "Computer Wins";
}

prompt.start();

prompt.get(
  [
    {
      name: "userSelection",
      description: "Choose ROCK, PAPER, or SCISSORS",
      required: true,
    },
  ],
  (err, result) => {
    if (err) {
      console.log("Error reading input");
      return;
    }

    const userSelection = getUserChoice(result.userSelection);
    if (!userSelection) {
      console.log('Invalid input. Please enter "ROCK", "PAPER", or "SCISSORS".');
      return;
    }

    const computerSelection = getComputerChoice();

    console.log("User Selection:", userSelection);
    console.log("Computer Selection:", computerSelection);
    console.log(getWinner(userSelection, computerSelection));
  }
);
