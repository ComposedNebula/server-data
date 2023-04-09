export const UserSystemInit = () => {
    onNet("DB:gotUser", (req: any) => {
        console.log("Welcome,", req.getUser.steamName);
    });
};
