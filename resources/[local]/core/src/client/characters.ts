export const CharacterSystemInit = () => {
    RegisterCommand(
        "createcharacter",
        (src: any, firstName: string, lastName: string, gender: string) => {},
        false
    );
};
