// export const uploadToAws = async (signedRequest, file) => {
//     const base64 = await fs.readFile(file.uri, 'base64')
//     const buffer = Buffer.from(base64, 'base64')
//     return fetch(signedRequest, {
//       method: 'PUT',
//       headers: {
//       'Content-Type': 'image/jpeg; charset=utf-8',
//       'x-amz-acl': 'public-read',
//      },
//       body: buffer,
//     })
  







// export const makePostRequest = async (
//     url,
//     attachToken = false,
//     params = {}
//   ) => {
//     let headers = {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     };
//     if (attachToken) {
//       try {
//         const authToken = await getToken();
//         if (authToken) {
//           headers["Authorization"] = "Bearer " + authToken;
//         }
//       } catch (e) {
//         console.log("Error fetching auth token: ", e);
//       }
//     }
//     return new Promise((resolve, reject) => {
//       try {
//         fetch(url, {
//           method: "POST",
//           headers: headers,
//           body: JSON.stringify(params)
//         })
//           .then(
//             res => res.json(),
//             error => {
//               reject(error);
//             }
//           )
//           .then(
//             jsonResponse => {
//               if (jsonResponse.error === false) {
//                 resolve(jsonResponse);
//               } else {
//                 console.log(jsonResponse);
//                 reject(jsonResponse);
//               }
//             },
//             error => {
//               reject(error);
//             }
//           )
//           .catch(error => {
//             reject(error);
//           });
//       } catch (e) {
//         console.log(e);
//         reject();
//       }
//     });
//   };