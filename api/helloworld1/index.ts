import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    await sleep(10000); // 10s
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "hello world"
    };
};

export default httpTrigger;
