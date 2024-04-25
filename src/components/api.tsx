
const BASE_URL = "https://insight-backend-3gjt.onrender.com";
// const BASE_URL = "http://localhost:5001";



/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class InsightApi {

  static async request(endpoint: string, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;
    console.log(headers)
    const resp = await fetch(url, { method, body, headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();
      throw Array.isArray(error) ? error : [error];
    }

    return await resp.json();
  }

  //Individual API routes

  /** Optional filter by name for all listings. Returns [{listing}, ...]  */
  static async getListings(site:string = "", searchTerm: string = "", firstGenOnly: boolean = true) {
    const searchParam = searchTerm === '' ? {} : { name: searchTerm };

    let res;
    if (firstGenOnly){
      res = await this.request(`listings/${site}/1g`, searchParam);
    } else {
      res = await this.request(`listings/${site}`, searchParam);
    }
    console.log(res)
    return res.listings;
  }

  /** Optional filter by name for all listings. Returns [{listing}, ...]  */
  static async getParts(searchTerm: string = "") {
    const searchParam = searchTerm === '' ? {} : { name: searchTerm };

    const res = await this.request(`parts`, searchParam);
    console.log(res)
    return res.parts;
  }

  /** Wakes Up Server */
  static async wakeUp() {
    let res = await this.request(`wakeup/`);
    return res;
  }

  static async getChartData() {
    let res = await this.request(`listings/chart`);

    return res.listings;
  }
}

export default InsightApi;