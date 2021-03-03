import { AllCourts } from '../../services/courtRegisterService'
import courtMapper from './courtMapper'
import type { CourtDetail } from './courtMapper'

export default class AllCourtsView {
  constructor(private readonly allCourts: AllCourts) {}

  readonly courts: CourtDetail[] = this.allCourts.courts.map(courtMapper)

  get renderArgs(): { courts: Array<CourtDetail> } {
    return { courts: this.courts }
  }
}
