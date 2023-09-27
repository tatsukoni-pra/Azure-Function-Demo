import { AzureFunction, Context } from "@azure/functions"

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    context.log('Start timer trigger function v2');

    var timeStamp = new Date().toISOString();
    if (myTimer.isPastDue) {
        context.log('Timer function v2 is running late!');
    }
    context.log('Timer trigger function v2 ran!', timeStamp);

    context.log('Finish timer trigger function v2');
};

export default timerTrigger;
