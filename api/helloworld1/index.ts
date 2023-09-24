import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    await sleep(180000); // 3min
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "hello world 1 v2"
    };
};

export default httpTrigger;
