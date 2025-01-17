import { Court } from '../../@types/courtRegister'
import courtMapper from './courtMapper'
import type { CourtDetail } from './courtMapper'

export type Action = 'NONE' | 'ACTIVATE' | 'DEACTIVATE' | 'UPDATED'

export default class CourtDetailsView {
  constructor(private readonly court: Court, private readonly action: Action) {}

  readonly courtDetails: CourtDetail = courtMapper(this.court)

  get renderArgs(): { courtDetails: CourtDetail; action: Action } {
    return { courtDetails: this.courtDetails, action: this.action }
  }
}
