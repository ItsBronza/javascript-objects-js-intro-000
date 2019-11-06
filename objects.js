var playlist = {}
playlist.LinkinPark = "Numb"
playlist['LinkinPark'] = "In The End"

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

updatePlaylist(playlist,'LimpBizkit', 'Behind Blue Eyes')

function removeFromPlaylist(playlist, song){
  delete playlist['LinkinPark']
  return playlist
}
