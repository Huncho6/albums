document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:1669/albums')
    .then(response => {
      console.log('Response:', response); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data:', data);  
      const dataContainer = document.getElementById('data-container');
      data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('bg-black', 'rounded', 'shadow-md', 'p-4', 'mb-4','mr-[20px]'); 
        div.innerHTML = `
          <p class="mb-2"><img src="${item.album_Cover}" alt="${item.album_name} album cover" class="w-48 h-auto mx-auto rounded-md"></p>
          <p class="font-bold text-lg mb-1">Album Name: ${item.album_name}</p>
          <p class="text-gray-700 mb-1">Artist: ${item.artist_name}</p>
          <p class="text-gray-700 mb-1">Release Year: ${item.release_year}</p>
          <p class="text-gray-700">Best Song: ${item.best_song}</p>
        `;
        dataContainer.appendChild(div);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
