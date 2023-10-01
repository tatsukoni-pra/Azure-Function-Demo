import { CosmosClient, PatchOperation } from "@azure/cosmos";
import { AzureFunction, Context } from "@azure/functions"

const client = new CosmosClient(process.env["COSMOSDB_CONNECTION_STRING"]);

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    context.log('Start timer trigger function v2');

    var timeStamp = new Date().toISOString();
    if (myTimer.isPastDue) {
        context.log('Timer function v2 is running late!');
    }

    const container = client.database("TatsukoniTest").container("tatsukoni-test-1");
    const operations: PatchOperation[] = [
        {
          op: "replace", // replace operation を使用
          path: "/text", // 更新するプロパティのパス
          value: "Timer trigger function v1 run! " + timeStamp
        }
    ];
    const { resource: updateItem } = await container.item("1", "1").patch(operations);

    context.log('Finish timer trigger function v2');
};

export default timerTrigger;
