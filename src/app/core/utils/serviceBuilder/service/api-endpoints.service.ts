import { Injectable } from "@angular/core";
import { UrlBuilder } from "../http/url-builder";
import { environment } from "../../../../../environments/environment";
import { QueryStringParameters } from "../http/query-string-parameters";

@Injectable({
  providedIn: "root",
})
export class ApiEndpointsService {
  constructor() {}

  // Example https://api.url/endpoint
  createUrl(action: string, isMockAPI: boolean = false): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? environment.api_mock_url : environment.api_url,
      action
    );
    return urlBuilder.toString();
  }

  // Example https://api.url/endpoint/key=val&key=val
  createUrlWithQueryParameters(
    action: string,
    isMockAPI: boolean = false,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void,
    firstQuery?: string
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? environment.api_mock_url : environment.api_url,
      action
    );
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    if (
      firstQuery !== null &&
      firstQuery !== undefined &&
      firstQuery.trim() !== ""
    ) {
      urlBuilder.firstQuery = firstQuery;
    }
    return urlBuilder.toString();
  }

  // Example https://api.url/endpoint/variable1/variable2
  createUrlWithPathVariables(
    action: string,
    isMockAPI: boolean = false,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = "";
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(
          pathVariable.toString()
        )}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? environment.api_mock_url : environment.api_url,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }
}
