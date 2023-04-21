const gqlr = require("graphql-request");
const gqlUrl = "http://localhost:4000/graphql";

const queries = {
    getUser: gqlr.gql`
    query ($steamId: String!) {
        getUser(steamId: $steamId){
            steamId
            steamName
            ip
        }
    }
    `,

    getUserId: gqlr.gql`
    query ($steamId: String!) {
        getUser(steamId: $steamId){
            id
        }
    }
    `,

    getAllCharacters: gqlr.gql`
    query ($ownerId: Float!) {
        getAllCharacters(ownerId: $ownerId){
            characters{
                firstName
                lastName
                gender
            }
        }
    }
    `,
};

const mutations = {
    saveUser: gqlr.gql`
    mutation saveUser ($steamId: String!, $steamName: String!, $ip: String!) {
        createUser(steamId: $steamId, steamName: $steamName, ip: $ip){
            steamId
            steamName
            ip
        }
    }
    `,

    createCharacter: gqlr.gql`
    mutation createCharacter($firstName: String!, $lastName: String!, $gender: String!, $ownerId: Float!){
        createCharacter(firstName: $firstName, lastName: $lastName, gender: $gender, ownerId: $ownerId){
            gender
            firstName
            lastName
        }
    }
    `,
};

const getUser = async (steamId, sid, steamName, ip) => {
    const req = await gqlr.request(gqlUrl, queries.getUser, {
        steamId: steamId,
    });
    if (req.getUser === null) {
        const res = gqlr.request(gqlUrl, mutations.saveUser, {
            steamId: steamId,
            steamName: steamName,
            ip: ip,
        });
    } else {
        emitNet("DB:gotUser", sid, req);
        return req;
    }
};

const getUserId = async (steamId) => {
    const req = await gqlr.request(gqlUrl, queries.getUserId, {
        steamId: steamId,
    });

    return req;
};

const getAllChars = async (steamId, src) => {
    const ownerId = await getUserId(steamId);

    const req = await gqlr.request(gqlUrl, queries.getAllCharacters, {
        ownerId: ownerId.getUser.id,
    });
    emitNet("DB:gotChars", src, req.getAllCharacters.characters);
};

const createCharacter = async (src, steamId, firstName, lastName, gender) => {
    const ownerId = await getUserId(steamId);

    const req = await gqlr.request(gqlUrl, mutations.createCharacter, {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        ownerId: ownerId.getUser.id,
    });

    emitNet("DB:createdCharacter", src, req);
};

onNet("DB:getUser", (steamId, sid, steamName, ip) => {
    getUser(steamId, sid, steamName, ip);
});

onNet("DB:getAllChars", (src) => {
    steamId = global.exports["core"].getPlayerSteamId(src);
    getAllChars(steamId, src);
});

onNet("DB:createCharacter", (src, args) => {
    steamId = global.exports["core"].getPlayerSteamId(src);

    createCharacter(src, steamId, args[0], args[1], args[2]);
});
