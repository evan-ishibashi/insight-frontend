
const BASE_URL = import.meta.env.VITE_BASE_URL ? import.meta.env.VITE_BASE_URL : "http://localhost:5001";



/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
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

  /** Wakes Up Server */
  static async wakeUp() {
    let res = await this.request(`wakeup/`);
    return res;
  }

  /** Creates a new listing */
//   static async createListing(formData) {
//     console.log("token is ", this.token)

//     let res = await this.request(`listings`, formData, 'POST');
//     console.log("new listing", res);
//     return res.new_listing;
//   }

  /** Returns user object upon logging in */
//   static async login(data) {
//     let res = await this.request(`login`, data, 'POST');
//     return res;
//   }

  /** Returns user object upon signing up  */
//   static async signup(data) {
//     let res = await this.request(`signup`, data, 'POST');
//     return res;
//   }

  /** Returns user object  */
//   static async getUser() {
//     let res = await this.request(`getuser`);
//     return res;
//   }

  /** Uploads photo to AWS */
//   static async uploadPhotos(listingId, file) {
//     const url = `${BASE_URL}/listings/${listingId}/photos`;
//     const method = "POST";
    // never set header by yourself if using multiform/form-data
    // const headers = {
    //   "Authorization": `Bearer ${ShareBnbApi.token}`
    // };

//     const formData = new FormData();
//     formData.append('file', file);

//     const body = formData;

//     const resp = await fetch(url, { method, body });
//     const photoData = await resp.json();

//     return photoData;
//   }
}

export default InsightApi;