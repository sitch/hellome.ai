// import {
//   Configuration,
//   PrintJobsApi,
//   PrintJobsCreateOperationRequest,
// } from '@/@gen/lulu'

// // printJobsCreate

// const config = new Configuration()
// const api = new PrintJobsApi(config)

// // See: https://api.lulu.com/docs/#tag/Print-Jobs/operation/Print-Jobs_create
// const run = async () => {
//   const payload: PrintJobsCreateOperationRequest = {
//     print_jobs_create_request: {
//       contact_email: 'sitch+lulu@hellome.ai',
//       external_id: 'demo-time',
//       line_items: [
//         {
//           external_id: 'item-reference-1',
//           printable_normalization: {
//             cover: {
//               source_url:
//                 'https://www.dropbox.com/s/7bv6mg2tj0h3l0r/lulu_trade_perfect_template.pdf?dl=1&raw=1',
//             },
//             interior: {
//               source_url:
//                 'https://www.dropbox.com/s/r20orb8umqjzav9/lulu_trade_interior_template-32.pdf?dl=1&raw=1',
//             },
//             pod_package_id: '0600X0900BWSTDPB060UW444MXX',
//           },
//           quantity: 30,
//           title: 'My Book',
//         },
//       ],
//       production_delay: 120,
//       shipping_address: {
//         city: 'Lübeck',
//         country_code: 'GB',
//         name: 'Hans Dampf',
//         phone_number: '844-212-0689',
//         postcode: 'PO1 3AX',
//         state_code: '',
//         street1: 'Holstenstr. 48',
//       },
//       shipping_level: 'MAIL',
//     },
//   }

//   const resp = await api.printJobsCreate(payload)

//   return resp
// }
