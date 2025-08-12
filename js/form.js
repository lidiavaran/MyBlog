document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const formData = new FormData(this);

    const nume = formData.get('nume');
    const email = formData.get('email');
    const gen = formData.get('gen') || 'Nedefinit';
    const preferinte = formData.getAll('preferinte[]');
    const nivel = formData.get('nivel');
    const comentariu = formData.get('comentariu');
    const fisier = formData.get('fisier');
  
    const numeFisier = fisier && fisier.name ? fisier.name : 'Nu a fost încărcat niciun fișier';
  

    const mesaj = `
      <h3>Datele trimise:</h3>
      <p><strong>Nume:</strong> ${nume}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Gen:</strong> ${gen}</p>
      <p><strong>Preferințe:</strong> ${preferinte.length > 0 ? preferinte.join(', ') : 'Niciuna'}</p>
      <p><strong>Experiență muzicală:</strong> ${nivel}</p>
      <p><strong>Comentariu:</strong> ${comentariu ? comentariu : 'Niciun comentariu'}</p>
      <p><strong>Fișier încărcat:</strong> ${numeFisier}</p>
    `;
  

    document.getElementById('mesajConfirmare').innerHTML = mesaj;

  });
  