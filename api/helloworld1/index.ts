import { CosmosClient } from "@azure/cosmos";
import { AzureFunction, Context, HttpRequest } from "@azure/functions"

// const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const client = new CosmosClient(process.env["COSMOSDB_CONNECTION_STRING"]);

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const container = client.database("TatsukoniTest").container("tatsukoni-test-1");
    const { resource: item } = await container.item("1", "1").read();

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: item
    };
};

export default httpTrigger;
