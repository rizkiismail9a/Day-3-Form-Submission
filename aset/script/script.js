function getData() {
  let nama = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let nomor = document.getElementById("phone").value;
  let topik = document.getElementById("subject").value;
  let pesan = document.getElementById("message").value;

  if (nama == "") {
    alert("Isi namanya, Boi.");
  } else if (email == "") {
    alert("Isi alamat emailnya, Boi.");
  } else if (nomor == "") {
    alert("Isi nomor hp-nya, Boi.");
  } else if (topik == "") {
    alert("Mau ngomongin apa?");
  } else if (pesan == "") {
    alert("Mau ngomong apa?");
  } else {
    let penerima = "muhamadrizkiismail9a@gmail.com";
    let a = document.createElement("a");
    a.href = `mailto:${penerima}?subject=${topik}&body=${pesan}`;
    a.click();
  }

  console.log(nama);
  console.log(email);
  console.log(nomor);
  console.log(topik);
  console.log(pesan);
}
