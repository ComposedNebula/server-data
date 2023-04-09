export const BankClientEventsInit = () => {
    on("bank:server:accountCreated", () => {
        console.log("Bank account created.");
    });

    on("bank:server:depositSuccess", () => {
        console.log("joe");
    });

    addEventListener(
        "bank:server:gotBankAmount",
        (amount: any) => {
            console.log("got from server", amount);
        },
        true
    );

    addEventListener(
        "bank:server:gotCashAmount",
        (amount: number) => {
            console.log("got from server", amount);
        },
        true
    );
};
