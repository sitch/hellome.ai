// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Universal Publishing Platform API
 * # Getting Started The Lulu Print API allows you to use [Lulu](https://www.lulu.com/) as your production and fulfillment network. The API provides access to the same functionality that Lulu uses internally to normalize files and send Print-Jobs to our production partners around the world.  The Lulu Print API is a **RESTful API** that communicates with JSON encoded messages. Communication is secured with **OpenID Connect** and **transport layer security** (HTTPS).  Working with the API requires intermediate level programming skills and a general understanding of web APIs. Check out Lulu\'s **[printing and fulfillment](https://www.lulu.com/sell)** options without having to do technical work upfront.   ## Registration You have to create an account to start using the Lulu Print API. Your account will automatically receive a client-key and a client-secret.  ## Sandbox Environment The API is available in a production and a sandbox environment. The sandbox can be used for development and testing purposes. Print-Jobs created on the sandbox will never be forwarded to a real production and can be paid for with test credit cards.  To access the sandbox, you have to create a separate account at https://developers.sandbox.lulu.com/. The sandbox API URL is https://api.sandbox.lulu.com/  ## Authorization The Lulu API uses [OpenID Connect](https://en.wikipedia.org/wiki/OpenID_Connect), an authentication layer built on top of [OAuth 2.0](https://en.wikipedia.org/wiki/OAuth). Instead of exchanging username and password, the API uses [JSON Web Token (JWT)](https://en.wikipedia.org/wiki/JSON_Web_Token) to authorize client requests.  To interact with the API you need a **client-key** and a **client-secret**. Open the [Client Keys & Secret](/user-profile/api-keys) page to generate them.  <img src=\"/api-docs/assets/keyAndSecretExample.png\">  ## Generate a Token To interact with the API you first have to generate an OAuth token. This requires the following parameters: * `client_key` * `client_secret` * `grant-type` must be set to `client_credentials`  You have to send a POST request to the token endpoint a special Authorization header. For your convenience, you can copy the authorization string directly from your [API Keys](https://developers.lulu.com/user-profile/api-keys) page:  ```bash curl -X POST https://api.lulu.com/auth/realms/glasstree/protocol/openid-connect/token \\   -d \'grant_type=client_credentials\' \\   -H \'Content-Type: application/x-www-form-urlencoded\' \\   -H \'Authorization: Basic ZjJjNDdmMTctOWMxZi00ZWZlLWIzYzEtMDI4YTNlZTRjM2M3OjMzOTViZGU4LTBkMjQtNGQ0Ny1hYTRjLWM4NGM3NjI0OGRiYw==\' ```  The request will return a JSON response that contains an `access_token` key:  ```json {     \"access_token\":\"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkI...\",     \"expires_in\":3600,     \"refresh_expires_in\":604800,     \"refresh_token\":\"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6...\",     \"token_type\":\"bearer\",     \"not-before-policy\":0,     \"session_state\":\"a856fb91-eafc-460e-8f6a-f09325062c88\" } ```  Store this `access_token` and use it to authorize all further requests. The token will expire after a few minutes, but you can always request a fresh token from the server as outlined above. We recommend to use an OAuth capable client lib in your favorite programming language to simplify working with client credentials and tokens. Some might even automatically refresh your token after it expired.  ## Make authenticated requests To authenticate subsequent API requests, you must provide a valid access token in the HTTP header of the request: `Authorization: Bearer {access_token}`:  ```bash curl -X GET https://api.lulu.com/{some_api_endpoint}/ \\   -H \'Authorization: Bearer {access_token}\' \\   -H \'Content-Type: application/json\' ```  ## Select a Product Lulu’s Print API offers a wide range of products. Each product is represented by a 27 character code call **pod_package_id**: > Trim Size + Color + Print Quality + Bind + Paper + PPI + Finish + Linen + Foil = **pod_package_id**  Here are a few examples:  | pod_package_id | Description | | --- | --- | | `0850X1100BWSTDLW060UW444MNG` | `0850X1100`: trim size 8.5” x 11”<br>`BW`: black-and-white<br>`STD`: standard quality <br>`LW`: linen wrap binding<br>`060UW444`: 60# uncoated white paper with a bulk of 444 pages per inch <br>`M`: matte cover coating <br>`N`: navy colored linen<br>`G`: golden foil stamping | | `0600X0900FCSTDPB080CW444GXX` | `0600X0900`: trim size 6” x 9” <br>`FC`: full color<br>`STD`: standard quality<br>`PB`: perfect binding<br>`080CW444`: 80# coated white paper with a bulk of 444 ppi<br>`G`: gloss cover coating<br>`X`: no linen<br>`X`: no foil| | `0700X1000FCPRECO060UC444MXX` | 7\" x 10\" black-and-white premium coil-bound book printed on 60# cream paper with a matte cover | | `0600X0900BWSTDPB060UW444MXX` | 6\" x 9\" black-and-white standard quality paperback book printed on 60# white paper with a matte cover |  For a full listing of Lulu SKUs and product specification, download the [Product Specification Sheet](https://assets.lulu.com/media/specs/lulu-print-api-spec-sheet.xlsx). Also, please download and review our [Production Templates](https://developers.lulu.com/products-and-shipping#production-templates) for additional guidance with formatting and file preparation. If you have general questions about which Lulu products are right for your business, please [contact one of our experts](https://help.api.lulu.com) through our Technical Support form.  ## Create a Print-Job Now you can start to create Print-Jobs. A Print-Job request consists of at least three data fields:  * `line_items` **(required)**: the list of books that shall be printed * `shipping_address` **(required)**: the (end) customer’s address where Lulu should send the books - including a phone number. * `contact_email` **(required)**: an email address for questions regarding the Print-Job - normally, you want to use the email address of a developer or shop owner, not the end customer * `shipping_level`**(required)**: Lulu offers five different quality levels for shipping:     * `MAIL` - Slowest ship method. Depending on the destination, tracking might not be available.     * `PRIORITY_MAIL` - priority mail shipping     * `GROUND` - Courier based shipping using ground transportation in the US.     * `EXPEDITED` - expedited (2nd day) delivery via air mail or equivalent     * `EXPRESS` - overnight delivery. Fastest shipping available. * `external_id` (optional): a reference number to link the Print-Job to your system (e.g. your order number)  The **shipping address must contain a phone number**. This is required by our shipping carriers. If the shipping address does not contain a phone number, the default phone number from the account will be used. If neither the account nor the shipping address contain a phone number, the Print-Job can not be created.  You can find the detailed documentation for [Creating a new Print-Job](#) below.  ## Check Print-Job Status After sending a Print-Job, you can check its status. Normally, a Print-Job goes through the following stages:  <img src=\"/api-docs/assets/print-job-stages.svg\">  * **CREATED**: Print-Job created * **UNPAID**: Print-Job can be paid * **PAYMENT_IN_PROGRESS**: Payment is in Progress * **PRODUCTION_DELAYED**: Print-Job is paid and will move to production after the mandatory production delay. * **PRODUCTION_READY**: Production delay has ended and the Print-Job will move to \"in production\" shortly. * **IN_PRODUCTION**: Print-Job submitted to printer * **SHIPPED**: Print-Job is fully shipped  There are a few more status that can occur when there is a problem with the Print-Job: * **REJECTED**: When there is a problem with the input data or the file, Lulu will reject a Print-Job with a detailed error message. Please [contact our experts](https://help.api.lulu.com) if you need help in resolving this issue. * **CANCELED**: You can cancel a Print-Job as long as it is “unpaid” using an API request to the status endpoint. In rare cases, Lulu might also cancel a Print-Job if a problem has surfaced in production and the order cannot be fulfilled.  ## Shipping Notification Once an order has been shipped, Lulu will provide tracking information in the Print-Job endpoint. 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PrintJobsList200ResponseResultsInnerCosts } from './PrintJobsList200ResponseResultsInnerCosts';
import {
    PrintJobsList200ResponseResultsInnerCostsFromJSON,
    PrintJobsList200ResponseResultsInnerCostsFromJSONTyped,
    PrintJobsList200ResponseResultsInnerCostsToJSON,
} from './PrintJobsList200ResponseResultsInnerCosts';
import type { PrintJobsList200ResponseResultsInnerEstimatedShippingDates } from './PrintJobsList200ResponseResultsInnerEstimatedShippingDates';
import {
    PrintJobsList200ResponseResultsInnerEstimatedShippingDatesFromJSON,
    PrintJobsList200ResponseResultsInnerEstimatedShippingDatesFromJSONTyped,
    PrintJobsList200ResponseResultsInnerEstimatedShippingDatesToJSON,
} from './PrintJobsList200ResponseResultsInnerEstimatedShippingDates';
import type { PrintJobsList200ResponseResultsInnerItemsInner } from './PrintJobsList200ResponseResultsInnerItemsInner';
import {
    PrintJobsList200ResponseResultsInnerItemsInnerFromJSON,
    PrintJobsList200ResponseResultsInnerItemsInnerFromJSONTyped,
    PrintJobsList200ResponseResultsInnerItemsInnerToJSON,
} from './PrintJobsList200ResponseResultsInnerItemsInner';
import type { PrintJobsList200ResponseResultsInnerShippingAddress } from './PrintJobsList200ResponseResultsInnerShippingAddress';
import {
    PrintJobsList200ResponseResultsInnerShippingAddressFromJSON,
    PrintJobsList200ResponseResultsInnerShippingAddressFromJSONTyped,
    PrintJobsList200ResponseResultsInnerShippingAddressToJSON,
} from './PrintJobsList200ResponseResultsInnerShippingAddress';

/**
 * The job resource that represents a print order
 * @export
 * @interface PrintJobsList200ResponseResultsInner
 */
export interface PrintJobsList200ResponseResultsInner {
    /**
     * Email address that should be contacted if questions regarding the Print-Job arise. Lulu recommends to use the email of a person who is responsible for placing the Print-Job like a developer or business owner.
     * @type {string}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    contact_email: string;
    /**
     * 
     * @type {PrintJobsList200ResponseResultsInnerCosts}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    costs?: PrintJobsList200ResponseResultsInnerCosts;
    /**
     * 
     * @type {PrintJobsList200ResponseResultsInnerEstimatedShippingDates}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    estimated_shipping_dates?: PrintJobsList200ResponseResultsInnerEstimatedShippingDates;
    /**
     * Arbitrary string to identify and connect a print job to your systems. Set it to an order number, a purchase order or whatever else works for your particular use case.
     * @type {string}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    external_id?: string;
    /**
     * 
     * @type {number}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    readonly id: number;
    /**
     * Alias for `line_items`
     * @type {Array<PrintJobsList200ResponseResultsInnerItemsInner>}
     * @memberof PrintJobsList200ResponseResultsInner
     * @deprecated
     */
    items?: Array<PrintJobsList200ResponseResultsInnerItemsInner>;
    /**
     * The line items of a Print-Job, defining it's Printables and their quantities. The property name 'items' can be used instead.
     * @type {Array<PrintJobsList200ResponseResultsInnerItemsInner>}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    line_items: Array<PrintJobsList200ResponseResultsInnerItemsInner>;
    /**
     * Reference to the order, which this PrintJob has created
     * @type {string}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    readonly order_id?: string;
    /**
     * Delay before a newly created Print-Job is sent to production. Minimum is 60 minutes, maximum is 1440 minutes (=24 hours). As most cancellation requests occur right after an order has been placed, it makes sense to wait for some time before sending an order to production. Once production has started, orders cannot be canceled anymore.
     * @type {number}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    production_delay?: number;
    /**
     * Target timestamp of when this job will move into production ([ISO 8601](https://www.w3.org/TR/NOTE-datetime))
     * @type {Date}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    readonly production_due_time?: Date;
    /**
     * 
     * @type {PrintJobsList200ResponseResultsInnerShippingAddress}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    shipping_address: PrintJobsList200ResponseResultsInnerShippingAddress;
    /**
     * The shipping level that this Print-Job is shipped with
     * @type {string}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    shipping_level: PrintJobsList200ResponseResultsInnerShippingLevelEnum;
    /**
     * Use `shipping_level` instead
     * @type {any}
     * @memberof PrintJobsList200ResponseResultsInner
     * @deprecated
     */
    shipping_option_level?: any | null;
    /**
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the tax country determined for this job
     * @type {string}
     * @memberof PrintJobsList200ResponseResultsInner
     */
    readonly tax_country?: string;
}


/**
 * @export
 */
export const PrintJobsList200ResponseResultsInnerShippingLevelEnum = {
    Mail: 'MAIL',
    PriorityMail: 'PRIORITY_MAIL',
    GroundHd: 'GROUND_HD',
    GroundBus: 'GROUND_BUS',
    Ground: 'GROUND',
    Expedited: 'EXPEDITED',
    Express: 'EXPRESS'
} as const;
export type PrintJobsList200ResponseResultsInnerShippingLevelEnum = typeof PrintJobsList200ResponseResultsInnerShippingLevelEnum[keyof typeof PrintJobsList200ResponseResultsInnerShippingLevelEnum];


/**
 * Check if a given object implements the PrintJobsList200ResponseResultsInner interface.
 */
export function instanceOfPrintJobsList200ResponseResultsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contact_email" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "line_items" in value;
    isInstance = isInstance && "shipping_address" in value;
    isInstance = isInstance && "shipping_level" in value;

    return isInstance;
}

export function PrintJobsList200ResponseResultsInnerFromJSON(json: any): PrintJobsList200ResponseResultsInner {
    return PrintJobsList200ResponseResultsInnerFromJSONTyped(json, false);
}

export function PrintJobsList200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintJobsList200ResponseResultsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contact_email': json['contact_email'],
        'costs': !exists(json, 'costs') ? undefined : PrintJobsList200ResponseResultsInnerCostsFromJSON(json['costs']),
        'estimated_shipping_dates': !exists(json, 'estimated_shipping_dates') ? undefined : PrintJobsList200ResponseResultsInnerEstimatedShippingDatesFromJSON(json['estimated_shipping_dates']),
        'external_id': !exists(json, 'external_id') ? undefined : json['external_id'],
        'id': json['id'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(PrintJobsList200ResponseResultsInnerItemsInnerFromJSON)),
        'line_items': ((json['line_items'] as Array<any>).map(PrintJobsList200ResponseResultsInnerItemsInnerFromJSON)),
        'order_id': !exists(json, 'order_id') ? undefined : json['order_id'],
        'production_delay': !exists(json, 'production_delay') ? undefined : json['production_delay'],
        'production_due_time': !exists(json, 'production_due_time') ? undefined : (new Date(json['production_due_time'])),
        'shipping_address': PrintJobsList200ResponseResultsInnerShippingAddressFromJSON(json['shipping_address']),
        'shipping_level': json['shipping_level'],
        'shipping_option_level': !exists(json, 'shipping_option_level') ? undefined : json['shipping_option_level'],
        'tax_country': !exists(json, 'tax_country') ? undefined : json['tax_country'],
    };
}

export function PrintJobsList200ResponseResultsInnerToJSON(value?: PrintJobsList200ResponseResultsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contact_email': value.contact_email,
        'costs': PrintJobsList200ResponseResultsInnerCostsToJSON(value.costs),
        'estimated_shipping_dates': PrintJobsList200ResponseResultsInnerEstimatedShippingDatesToJSON(value.estimated_shipping_dates),
        'external_id': value.external_id,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(PrintJobsList200ResponseResultsInnerItemsInnerToJSON)),
        'line_items': ((value.line_items as Array<any>).map(PrintJobsList200ResponseResultsInnerItemsInnerToJSON)),
        'production_delay': value.production_delay,
        'shipping_address': PrintJobsList200ResponseResultsInnerShippingAddressToJSON(value.shipping_address),
        'shipping_level': value.shipping_level,
        'shipping_option_level': value.shipping_option_level,
    };
}

