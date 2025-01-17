import type { AmendCourtBuildingForm } from 'forms'

export default class AmendCourtBuildingView {
  constructor(private readonly form: AmendCourtBuildingForm, private readonly errors?: Array<Record<string, string>>) {}

  get renderArgs(): {
    form: AmendCourtBuildingForm
    errors: Array<Record<string, string>>
  } {
    return {
      form: this.form,
      errors: this.errors || [],
    }
  }
}
