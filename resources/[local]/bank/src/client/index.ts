import { BanksInit } from "./controllers/commands";
import { BankClientEventsInit } from "./controllers/events";

function main() {
    BanksInit();
    BankClientEventsInit();
}

main();
