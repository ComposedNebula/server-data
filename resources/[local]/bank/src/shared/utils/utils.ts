export function getPServerId() {
    const pServerId = GetPlayerServerId(PlayerId());
    return pServerId;
}

export function getSteamId(pedServerId: number) {
    const identifiers = getPlayerIdentifiers(pedServerId);
    return global.exports["bank"].to_num(identifiers[0].substring(6));
}
