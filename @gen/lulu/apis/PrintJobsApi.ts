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


import * as runtime from '../runtime';
import type {
  Forbidden,
  PrintJobsCosts200Response,
  PrintJobsCreateRequest,
  PrintJobsList200Response,
  PrintJobsList200ResponseResultsInner,
  PrintJobsRead200Response,
  PrintJobsReprint201Response,
  PrintJobsReprintRequest,
  PrintJobsStatistics200Response,
  PrintJobsStatusRead200Response,
  Unauthorized,
} from '../models';
import {
    ForbiddenFromJSON,
    ForbiddenToJSON,
    PrintJobsCosts200ResponseFromJSON,
    PrintJobsCosts200ResponseToJSON,
    PrintJobsCreateRequestFromJSON,
    PrintJobsCreateRequestToJSON,
    PrintJobsList200ResponseFromJSON,
    PrintJobsList200ResponseToJSON,
    PrintJobsList200ResponseResultsInnerFromJSON,
    PrintJobsList200ResponseResultsInnerToJSON,
    PrintJobsRead200ResponseFromJSON,
    PrintJobsRead200ResponseToJSON,
    PrintJobsReprint201ResponseFromJSON,
    PrintJobsReprint201ResponseToJSON,
    PrintJobsReprintRequestFromJSON,
    PrintJobsReprintRequestToJSON,
    PrintJobsStatistics200ResponseFromJSON,
    PrintJobsStatistics200ResponseToJSON,
    PrintJobsStatusRead200ResponseFromJSON,
    PrintJobsStatusRead200ResponseToJSON,
    UnauthorizedFromJSON,
    UnauthorizedToJSON,
} from '../models';

export interface PrintJobsCostsRequest {
    id: string;
}

export interface PrintJobsCreateOperationRequest {
    print_jobs_create_request?: PrintJobsCreateRequest;
}

export interface PrintJobsListRequest {
    page?: number;
    page_size?: number;
    created_after?: string;
    created_before?: string;
    modified_after?: string;
    modified_before?: string;
    id?: string;
    order_id?: string;
    exclude_line_items?: boolean;
    search?: string;
    ordering?: string;
}

export interface PrintJobsReadRequest {
    id: string;
}

export interface PrintJobsReprintOperationRequest {
    print_jobs_reprint_request?: PrintJobsReprintRequest;
}

export interface PrintJobsStatisticsRequest {
    page?: number;
    page_size?: number;
    created_after?: string;
    created_before?: string;
    modified_after?: string;
    modified_before?: string;
    id?: string;
    ordering?: string;
}

export interface PrintJobsStatusReadRequest {
    id: string;
}

/**
 * 
 */
export class PrintJobsApi extends runtime.BaseAPI {

    /**
     * Sub-resource to retrieve only the costs of a Print-Job
     * Retrieve Print-Job Costs
     */
    async printJobsCostsRaw(requestParameters: PrintJobsCostsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrintJobsCosts200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling printJobsCosts.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/print-jobs/{id}/costs/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PrintJobsCosts200ResponseFromJSON(jsonValue));
    }

    /**
     * Sub-resource to retrieve only the costs of a Print-Job
     * Retrieve Print-Job Costs
     */
    async printJobsCosts(requestParameters: PrintJobsCostsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrintJobsCosts200Response> {
        const response = await this.printJobsCostsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Print-Jobs are the core resource of the Print API. A Printjob consists of line items, shipping information and some additional metadata.  ## Elements of a Print-Job ### Line Items A line item represents a book that should be printed or in short a **printable**. Printables consist of cover and interior files as well as a `pod_package_id`. The `pod_package_id` represents the manufacturing options; see the [\"Select a product\"](#section/Select-a-Product) section for details. Each printable can be identified by an immutable `printable_id`. The `printable_id` can be used for re-orders so that the files don\'t have to be transferred again.  ### Shipping Information & Metadata Print-Jobs have to contain a `shipping_address` as well as a `shipping_level`. Lulu offers five different service levels that differ in speed and traceability.  ### Additional Metadata A few additional metadata fields can be specified in the Print-Job as well: * `contact_email` for questions related to the Print-Job itself * `production_delay` allows you to specify a delay (between 60 minutes and a full day) before the Print-Job goes to production. * `external_id` allows you to link the Print-Job to an internal order number or other reference.  ## File Handling and Normalization Interior and cover files have to be specified with a URL from which Lulu can download the files. Using encoded [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication#URL_encoding) in the URL is ok. All files processed by Lulu will be validated and normalized before sending them to production. If problems with the file occur, the PrintJob will be rejected or cancelled and an error message will be displayed.  ## Automation and Payment After a Print-Job has been created successfully, it will remain in an `UNPAID` state until it is paid for through the developer portal. However, you can automate the process by putting a credit card on file. Then, the Print-Job will automatically transition to the `PRODUCTION_DELAY` status and your card will charged when the Print-Job is sent to production. 
     * Create a new Print-Job
     */
    async printJobsCreateRaw(requestParameters: PrintJobsCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrintJobsList200ResponseResultsInner>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/print-jobs/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PrintJobsCreateRequestToJSON(requestParameters.print_jobs_create_request),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PrintJobsList200ResponseResultsInnerFromJSON(jsonValue));
    }

    /**
     * Print-Jobs are the core resource of the Print API. A Printjob consists of line items, shipping information and some additional metadata.  ## Elements of a Print-Job ### Line Items A line item represents a book that should be printed or in short a **printable**. Printables consist of cover and interior files as well as a `pod_package_id`. The `pod_package_id` represents the manufacturing options; see the [\"Select a product\"](#section/Select-a-Product) section for details. Each printable can be identified by an immutable `printable_id`. The `printable_id` can be used for re-orders so that the files don\'t have to be transferred again.  ### Shipping Information & Metadata Print-Jobs have to contain a `shipping_address` as well as a `shipping_level`. Lulu offers five different service levels that differ in speed and traceability.  ### Additional Metadata A few additional metadata fields can be specified in the Print-Job as well: * `contact_email` for questions related to the Print-Job itself * `production_delay` allows you to specify a delay (between 60 minutes and a full day) before the Print-Job goes to production. * `external_id` allows you to link the Print-Job to an internal order number or other reference.  ## File Handling and Normalization Interior and cover files have to be specified with a URL from which Lulu can download the files. Using encoded [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication#URL_encoding) in the URL is ok. All files processed by Lulu will be validated and normalized before sending them to production. If problems with the file occur, the PrintJob will be rejected or cancelled and an error message will be displayed.  ## Automation and Payment After a Print-Job has been created successfully, it will remain in an `UNPAID` state until it is paid for through the developer portal. However, you can automate the process by putting a credit card on file. Then, the Print-Job will automatically transition to the `PRODUCTION_DELAY` status and your card will charged when the Print-Job is sent to production. 
     * Create a new Print-Job
     */
    async printJobsCreate(requestParameters: PrintJobsCreateOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrintJobsList200ResponseResultsInner> {
        const response = await this.printJobsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this request to show a list of Print-Jobs. The list is paginated and can be filtered by various attributes that are given as query parameters.  Timestamps like `created_after`, `created_before`, `modified_after`, and `modified_before` can be entered as [ISO8601 datetime strings](https://www.w3.org/TR/NOTE-datetime). Internally, the Lulu API uses [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). The following formats are valid:  * `2017-11-09` (date only)  * `2017-11-09T09:30` (datetime with minute precision)  * `2017-11-09T09:30:08` (datetime with second precision)  * `2017-11-09T09:30:08Z` (UTC datetime)  * `2017-11-09T09:30:08+06:00` (datetime with offset)  To filter Print-Jobs by status you can use any valid status string (`CREATED`, `REJECTED`, `UNPAID`, `PAYMENT_IN_PROGRESS`, `PRODUCTION_READY`, `PRODUCTION_DELAYED`, `IN_PRODUCTION`, `ERROR`, `SHIPPED`, `CANCELED`). `PAYMENT_IN_PROGRESS` and `PRODUCTION_READY` are rather short-lived states that exist only for a few minutes at max; filtering by these status will rarely yield any results. 
     * Retrieve a list of Print-Jobs
     */
    async printJobsListRaw(requestParameters: PrintJobsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrintJobsList200Response>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.page_size !== undefined) {
            queryParameters['page_size'] = requestParameters.page_size;
        }

        if (requestParameters.created_after !== undefined) {
            queryParameters['created_after'] = requestParameters.created_after;
        }

        if (requestParameters.created_before !== undefined) {
            queryParameters['created_before'] = requestParameters.created_before;
        }

        if (requestParameters.modified_after !== undefined) {
            queryParameters['modified_after'] = requestParameters.modified_after;
        }

        if (requestParameters.modified_before !== undefined) {
            queryParameters['modified_before'] = requestParameters.modified_before;
        }

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.order_id !== undefined) {
            queryParameters['order_id'] = requestParameters.order_id;
        }

        if (requestParameters.exclude_line_items !== undefined) {
            queryParameters['exclude_line_items'] = requestParameters.exclude_line_items;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.ordering !== undefined) {
            queryParameters['ordering'] = requestParameters.ordering;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/print-jobs/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PrintJobsList200ResponseFromJSON(jsonValue));
    }

    /**
     * Use this request to show a list of Print-Jobs. The list is paginated and can be filtered by various attributes that are given as query parameters.  Timestamps like `created_after`, `created_before`, `modified_after`, and `modified_before` can be entered as [ISO8601 datetime strings](https://www.w3.org/TR/NOTE-datetime). Internally, the Lulu API uses [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). The following formats are valid:  * `2017-11-09` (date only)  * `2017-11-09T09:30` (datetime with minute precision)  * `2017-11-09T09:30:08` (datetime with second precision)  * `2017-11-09T09:30:08Z` (UTC datetime)  * `2017-11-09T09:30:08+06:00` (datetime with offset)  To filter Print-Jobs by status you can use any valid status string (`CREATED`, `REJECTED`, `UNPAID`, `PAYMENT_IN_PROGRESS`, `PRODUCTION_READY`, `PRODUCTION_DELAYED`, `IN_PRODUCTION`, `ERROR`, `SHIPPED`, `CANCELED`). `PAYMENT_IN_PROGRESS` and `PRODUCTION_READY` are rather short-lived states that exist only for a few minutes at max; filtering by these status will rarely yield any results. 
     * Retrieve a list of Print-Jobs
     */
    async printJobsList(requestParameters: PrintJobsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrintJobsList200Response> {
        const response = await this.printJobsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a single Print-Job by id.
     * Retrieve a single Print-Job
     */
    async printJobsReadRaw(requestParameters: PrintJobsReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrintJobsRead200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling printJobsRead.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/print-jobs/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PrintJobsRead200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a single Print-Job by id.
     * Retrieve a single Print-Job
     */
    async printJobsRead(requestParameters: PrintJobsReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrintJobsRead200Response> {
        const response = await this.printJobsReadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *  ### Usage of printable_id The immutable `printable_id` can be used for re-orders so that the files don\'t have to be transferred again. Given there is an already created and validated Print-Job, you can use the `printable_id` of each line-item to create re-orders for that particular printable. As the normalized files are already on the server, you omit the complete `printable_normalization` object from the request and send a valid `printable_id` instead. ### Shipping Information & Metadata Print-Jobs have to contain a `shipping_address` as well as a `shipping_level`. Lulu offers five different service levels that differ in speed and traceability.  ### Additional Metadata A few additional metadata fields can be specified in the Print-Job as well: * `contact_email` for questions related to the Print-Job itself * `production_delay` allows you to specify a delay (between 60 minutes and a full day) before the Print-Job goes to production. * `external_id` allows you to link the Print-Job to an internal order number or other reference. ## File Handling and Normalization If there is an existing printable for the given `printable_id` the already processed and normalized files are used for production. If there are are problems with the `printable_id`, the PrintJob will be rejected or cancelled and an error message will be displayed. ## Automation and Payment After a Print-Job has been created successfully, it will remain in an `UNPAID` state until it is paid for through the developer portal. However, you can automate the process by putting a credit card on file. Then, the Print-Job will automatically transition to the `PRODUCTION_DELAY` status and your card will charged when the Print-Job is sent to production. 
     * Create a new Print-Job (as Reprint)
     */
    async printJobsReprintRaw(requestParameters: PrintJobsReprintOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrintJobsReprint201Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/print-jobs/ `,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PrintJobsReprintRequestToJSON(requestParameters.print_jobs_reprint_request),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PrintJobsReprint201ResponseFromJSON(jsonValue));
    }

    /**
     *  ### Usage of printable_id The immutable `printable_id` can be used for re-orders so that the files don\'t have to be transferred again. Given there is an already created and validated Print-Job, you can use the `printable_id` of each line-item to create re-orders for that particular printable. As the normalized files are already on the server, you omit the complete `printable_normalization` object from the request and send a valid `printable_id` instead. ### Shipping Information & Metadata Print-Jobs have to contain a `shipping_address` as well as a `shipping_level`. Lulu offers five different service levels that differ in speed and traceability.  ### Additional Metadata A few additional metadata fields can be specified in the Print-Job as well: * `contact_email` for questions related to the Print-Job itself * `production_delay` allows you to specify a delay (between 60 minutes and a full day) before the Print-Job goes to production. * `external_id` allows you to link the Print-Job to an internal order number or other reference. ## File Handling and Normalization If there is an existing printable for the given `printable_id` the already processed and normalized files are used for production. If there are are problems with the `printable_id`, the PrintJob will be rejected or cancelled and an error message will be displayed. ## Automation and Payment After a Print-Job has been created successfully, it will remain in an `UNPAID` state until it is paid for through the developer portal. However, you can automate the process by putting a credit card on file. Then, the Print-Job will automatically transition to the `PRODUCTION_DELAY` status and your card will charged when the Print-Job is sent to production. 
     * Create a new Print-Job (as Reprint)
     */
    async printJobsReprint(requestParameters: PrintJobsReprintOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrintJobsReprint201Response> {
        const response = await this.printJobsReprintRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the number of Print-Jobs in each status
     */
    async printJobsStatisticsRaw(requestParameters: PrintJobsStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrintJobsStatistics200Response>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.page_size !== undefined) {
            queryParameters['page_size'] = requestParameters.page_size;
        }

        if (requestParameters.created_after !== undefined) {
            queryParameters['created_after'] = requestParameters.created_after;
        }

        if (requestParameters.created_before !== undefined) {
            queryParameters['created_before'] = requestParameters.created_before;
        }

        if (requestParameters.modified_after !== undefined) {
            queryParameters['modified_after'] = requestParameters.modified_after;
        }

        if (requestParameters.modified_before !== undefined) {
            queryParameters['modified_before'] = requestParameters.modified_before;
        }

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.ordering !== undefined) {
            queryParameters['ordering'] = requestParameters.ordering;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/print-jobs/statistics/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PrintJobsStatistics200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve the number of Print-Jobs in each status
     */
    async printJobsStatistics(requestParameters: PrintJobsStatisticsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrintJobsStatistics200Response> {
        const response = await this.printJobsStatisticsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sub-resource that represents the status of a Print-Job
     * Retrieve Print-Job Status
     */
    async printJobsStatusReadRaw(requestParameters: PrintJobsStatusReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrintJobsStatusRead200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling printJobsStatusRead.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/print-jobs/{id}/status/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PrintJobsStatusRead200ResponseFromJSON(jsonValue));
    }

    /**
     * Sub-resource that represents the status of a Print-Job
     * Retrieve Print-Job Status
     */
    async printJobsStatusRead(requestParameters: PrintJobsStatusReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrintJobsStatusRead200Response> {
        const response = await this.printJobsStatusReadRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
