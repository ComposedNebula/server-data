import { getPServerId, getSteamId } from "../../shared/utils/utils";

export const BanksInit = () => {
    RegisterCommand(
        "cash",
        () => {
            emitNet("bank:server:getCashAmount");
        },
        false
    );

    RegisterCommand(
        "deposit",
        (src: any, args: any) => {
            const pedServerId = GetPlayerServerId(PlayerId());
            const amount = args[0];
            emitNet("bank:server:deposit", amount, pedServerId);
        },
        false
    );

    RegisterCommand(
        "getbank",
        (src: any, args: any) => {
            const pedServerId = getPServerId();
            emitNet("bank:server:getBankAmount", pedServerId);
        },
        false
    );

    RegisterCommand(
        "bank_createAcc",
        () => {
            const pedServerId = getPServerId();
            emitNet("bank:server:createBankAccount", pedServerId);
        },
        false
    );

    RegisterCommand(
        "dbtest",
        (src: any) => {
            const sid = getPServerId();
            const steamName = GetPlayerName(PlayerId());
            setImmediate(() => {
                emitNet("playerjoined", sid, steamName);
            });
        },
        false
    );
};
