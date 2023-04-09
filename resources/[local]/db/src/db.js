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
};

const getUser = async (steamId, sid, steamName, ip) => {
    const req = await gqlr.request(gqlUrl, queries.getUser, {
        steamId: steamId,
    });
    if (req.getUser === null) {
        console.log(steamName);
        const res = gqlr.request(gqlUrl, mutations.saveUser, {
            steamId: steamId,
            steamName: steamName,
            ip: ip,
        });
    } else {
        emitNet("DB:gotUser", sid, req);
    }
};

onNet("DB:getUser", (steamId, sid, steamName, ip) => {
    getUser(steamId, sid, steamName, ip);
});
