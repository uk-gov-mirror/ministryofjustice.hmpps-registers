import page from '../page'
import type { Page } from '../page'
import pagination from '../sections/pagination'

const row = (type: string, rowNumber: number) => cy.get(`[data-qa=${type}] tbody tr`).eq(rowNumber)
const column = (rowNumber: number, columnNumber: number) => row('courts', rowNumber).find('td').eq(columnNumber)

const allCourtsPaged = {
  courts: (rowNumber: number) => ({
    code: () => column(rowNumber, 0),
    name: () => column(rowNumber, 1),
    type: () => column(rowNumber, 2),
    status: () => column(rowNumber, 3),
  }),
  viewCourtLink: (courtId: string) => cy.get(`[href="/court-register/details?id=${courtId}"]`).first(),
  addNewCourtButton: () => cy.contains('Add a new court'),
  ...pagination,
  mojFilter: () => cy.get('div.moj-filter'),
  showFilterButton: () => cy.contains('Show filter'),
  hideFilterButton: () => cy.contains('Hide filter'),
  applyFilterButton: () => cy.contains('Apply filters'),
  activeAllFilter: () => cy.contains('label', 'All'),
  activeOpenFilter: () => cy.contains('label', 'Open'),
  activeClosedFilter: () => cy.contains('label', 'Closed'),
  courtTypeCrownFilter: () => cy.get('input[value="CRN"]'),
  courtTypeCountyFilter: () => cy.get('input[value="COU"]'),
}

const verifyOnPage = (): typeof allCourtsPaged & Page => page('Court Register Paged', allCourtsPaged)

export default { verifyOnPage }
