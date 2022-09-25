import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) {}

    getData() {
        const p = this.powerService.supplyPrower(20)
        console.log(`Drawing ${p} watts of power from Diskservice`)
        return "data!"
    }
}
