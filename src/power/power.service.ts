import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplyPrower(watts: number) {
        console.log(`Supplying ${watts} worth of power`)
    }
}
