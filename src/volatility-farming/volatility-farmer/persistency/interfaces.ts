export interface IPersistenceService {
    updateAccountInfo(accountInfoCash: AccountInfoSchema): Promise<void>
    deleteOldLogs(apiKey: string): Promise<any[]>
    saveDeal(deal: DealSchema): Promise<void>
    saveLog(log: LogSchema): Promise<void>
    updateAccountInfo(accountInfoCash: AccountInfoSchema): Promise<void>
}


export interface AccountInfoSchema {
    _id: { $oid: string }
    apiKey: any
    equity: number
    avaliableBalance: number
    longPositionSize: number
    longPositionPNLInPercent: number
    shortPositionSize: number
    shortPositionPNLInPercent: number
    longShortDeltaInPercent: number
    overallUnrealizedPNL: number
    botStatus: string
}


export interface DealSchema {
    _id: { $oid: string }
    apiKey: any
    utcTime: string
    action: string
    asset: string
    reason: string
    reduceOnly: boolean
    equityBeforeThisDeal: number
}

export interface LogSchema {
    _id: { $oid: string }
    apiKey: any
    utcTime: string
    message: string
}