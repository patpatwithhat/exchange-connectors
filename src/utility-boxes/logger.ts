import { LogSchema } from "../volatility-farming/volatility-farmer/persistency/interfaces.ts";
import { MongoService } from "../volatility-farming/volatility-farmer/persistency/mongo-service.ts";
import { IPersistenceService } from "../volatility-farming/volatility-farmer/persistency/interfaces.ts";


export class VFLogger {


    public static async log(message: string, apiKey: string, mongoService: IPersistenceService | undefined): Promise<void> {
        console.log(message)

        const log: LogSchema = {
            _id: { $oid: "" },
            apiKey,
            utcTime: new Date().toISOString(),
            message,
        }

        await MongoService.saveLog(mongoService, log)
    }


}