export class RestPlaylist {
    // We'll consider a request with a json body for the "Add to playlist" – POST, “Get song from playlist” – GET and “Remove from playlist” – DELETE
    playlist(request) {
        switch (request.http.method) {
        case "GET": {
            // GET song from your playlist
            break;
        }
        case "POST": {
            // POST new song to your playlist
            break;
        }
        case "DELETE": {
            // DELETE from your playlist
            break;
        }
        default: {
            return {
                statusCode: "405",
                statusDescription: "405 Method Not Allowed " + request.method,
            }
        }
        }
        console.log(`Request received with body ${request.body}!`)
        if (!request.body.song) {
              throw Error("Missing field song")
        }

        if (!request.body.playlist) {
               throw Error("Missing field playlist")
        }

        const song = request.body.song
        const playlist = request.body.playlist

        return {
              body: {
                    response: "Song " + song + " added in playlist " + playlist
              },
              headers: { testHeader: "testHeaderValue" },
              statusCode: "201",
              statusDescription: "Ok"
        };
    }
}
