import { CharacterSystemInit } from "./characters";
import { CharacterCommandsInit } from "./commands";
import { UserSystemInit } from "./user";

function main() {
    CharacterSystemInit();
    UserSystemInit();
    CharacterCommandsInit();
}
main();
