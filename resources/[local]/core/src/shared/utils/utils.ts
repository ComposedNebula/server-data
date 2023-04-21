export const SharedUtils = () => {
    global.exports("getPlayerSteamId", (src: any) => {
        const ids = getPlayerIdentifiers(src);
        const steamId = ids[0];
        return steamId;
    });
};
