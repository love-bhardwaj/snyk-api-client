export default function getRequestId(headers: any): string {
  return headers['snyk-request-id'] || null;
}
