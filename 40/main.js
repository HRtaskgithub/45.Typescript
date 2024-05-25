function make_Album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_Album("Hassan", "album title 1");
var album2 = make_Album("Uzair", "album title 2");
var album3 = make_Album("Maaz", "album title 3", 5);
console.log(album1);
console.log(album2);
console.log(album3);
