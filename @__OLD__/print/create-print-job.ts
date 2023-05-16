// import request from 'request'
// import { env } from "@/config/env.mjs";

// const payload = {
//   contact_email: 'test@test.com',
//   external_id: 'demo-time',
//   line_items: [
//     {
//       external_id: 'item-reference-1',
//       printable_normalization: {
//         cover: {
//           source_url:
//             'https://www.dropbox.com/s/7bv6mg2tj0h3l0r/lulu_trade_perfect_template.pdf?dl=1&raw=1',
//         },
//         interior: {
//           source_url:
//             'https://www.dropbox.com/s/r20orb8umqjzav9/lulu_trade_interior_template-32.pdf?dl=1&raw=1',
//         },
//         pod_package_id: '0600X0900BWSTDPB060UW444MXX',
//       },
//       quantity: 30,
//       title: 'My Book',
//     },
//   ],
//   production_delay: 120,
//   shipping_address: {
//     city: 'L\u00fcbeck',
//     country_code: 'GB',
//     name: 'Hans Dampf',
//     phone_number: '844-212-0689',
//     postcode: 'PO1 3AX',
//     state_code: '',
//     street1: 'Holstenstr. 48',
//   },
//   shipping_level: 'MAIL',
// }

// export default function handler() {
//   const options = {
//     method: 'POST',
//     url: 'https://api.lulu.com/print-jobs/',
//     headers: {
//       'Cache-Control': 'no-cache',
//       Authorization: 'Check Authentication menu',
//       'Content-Type': 'application/json',
//     },
//     body: payload,
//     json: true,
//   }

//   request(options, (error, response, body) => {
//     if (error) {
//       throw new Error(error)
//     }

//     console.log(response, body)
//   })
// }

// import { LuluService } from '@ntegral/lulu'

// const lulu = new LuluService({
//   client_key: env.LULU_CLIENT_KEY,
//   client_secret: env.LULU_CLIENT_SECRET,
//   environment: 'development',
// })

// void lulu.init()

// export { lulu }

// // //list the print shipping options method //
// // lulu.shippingOptions.list({ page: 1, page_size: 100, iso_country_code: 'US' }).then((result) => {
// //     console.log('resulting shipping options', result);
// // }).catch((err) => {
// //     console.log('error occurred', err);
// // });

export const TEMP = {}
