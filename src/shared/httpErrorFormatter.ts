export function httpErrorFormatter(error: any): string {
  const statusCode = error.response ? error.response.status : 500;
  const message = error.response ? error.response.data.error : 'Error desconocido';
  return `HttpClient(${statusCode}): ${message}`;
}