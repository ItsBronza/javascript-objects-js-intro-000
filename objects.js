var playlist = {}
playlist.LinkinPark = "Numb"
playlist['LinkinPark'] = "In The End"

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
return playlist
}

function removeFromPlaylist(playlist, song){
  delete playlist.artist;
}