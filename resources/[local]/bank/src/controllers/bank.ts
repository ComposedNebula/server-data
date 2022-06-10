export const BanksInit = () => {
    const ped = PlayerPedId();
    const pedMoney = GetPedMoney(ped);
    console.log(pedMoney);

    RegisterCommand(
        "cash",
        () => {
            UseFakeMpCash(true);
            ChangeFakeMpCash(pedMoney, 0);
            const hudComp = setInterval(() => {
                ShowHudComponentThisFrame(4);
            }, 0);
            setTimeout(() => clearInterval(hudComp), 1000);
        },
        false
    );

    RegisterCommand(
        "deposit",
        (src: any, args: any) => {
            const amount = args[0];
            emitNet("bank:deposit", [amount]);
        },
        false
    );
};
