const shareButton = document.querySelector('.share-and-options');

shareButton.addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: document.title,
        text: 'Echa un vistazo a esta empresa',
        url: window.location.href
      });
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Error al compartir:', error);
      }
    }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    } catch (error) {
      console.error('Error al copiar:', error);
      alert('No se pudo compartir. Copia manualmente: ' + window.location.href);
    }
  }
});