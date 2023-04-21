export const CharacterCommandsInit = () => {
    RegisterCommand(
        "createcharacter",
        (src: any, firstName: string, lastName: string, gender: string) => {
            src = PlayerPedId();
            emitNet("DB:createCharacter", src, firstName, lastName, gender);
        },
        false
    );

    RegisterCommand(
        "getchars",
        (src: any) => {
            src = PlayerPedId();
            emitNet("DB:getAllChars", src);
        },
        false
    );
};
