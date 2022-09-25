import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService) {

    }
    compute(a: number, b: number) {
        const p = this.powerService.supplyPrower(10)
        console.log(`Drawing ${p} watts of power from CpuServices`)
        return a+b
    }
}
