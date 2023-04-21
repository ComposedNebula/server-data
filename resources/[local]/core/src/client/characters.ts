export const CharacterSystemInit = () => {
    onNet("DB:gotChars", (req: any) => {
        console.log("Chars", req);
    });

    // TODO:
    // - create current character column in user database
    // - create functions to set and get current character value by user id
};
