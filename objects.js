var playlist = {}
playlist.Enya = 'Watermark'
playlist['Enya'] = 'Amarantine'



function updatePlaylist(playlist, artist, song) {
  playlist[artist]= song
  return playlist


}

updatePlaylist(playlist,'Queen', 'Barcelona')
console.log(playlist)



function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist


}
removeFromPlaylist(playlist,'Queen')

 var recipe = {flour: '1 cup', eggs: 2, sugar: '4 cups'}
 delete recipe.eggs
 recipe

 var sugar = 'sugar'
 delete recipe[sugar]
 recipe
