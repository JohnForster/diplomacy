import startServer from "./server/server";
import chalk from "chalk";

console.log(chalk.bold("NODE_ENV:"), chalk.bold.cyan(process.env.NODE_ENV));
startServer();
