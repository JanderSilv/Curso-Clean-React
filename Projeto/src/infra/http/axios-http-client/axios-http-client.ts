import { HttpPostClient, HttpPostParams, HttpResponse } from '@/data/protocols/http'
import axios from 'axios'

// Design Pattern: Adapter // Módulo 3: Aula 1
export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
