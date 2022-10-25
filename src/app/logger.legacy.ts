export const LegacyLogger = {
    prefix:'legacy root',
    log(message:string):void{
        console.log(`${this.prefix} (legacy): ${message}`)
    }
}