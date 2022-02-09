// document.addEventListener("click", () => {
//   let toan = parseFloat(document.getElementById("inpToan").value);
//   let ly = parseFloat(document.getElementById("inpLy").value);
//   let hoa = parseFloat(document.getElementById("inpHoa").value);

//   let dtb = (toan + ly + hoa) / 3;

//   document.getElementById("tbKhoi1").innerHTML = dtb;
// });

let tinhDTB = (...n) => {
  let tong = 0;
  for (let i = 0; i < n.length; i++) {
    tong += parseFloat(n[i]);
  }
  let dtb = tong / n.length;
  return dtb;
};
document.getElementById("btnKhoi1").onclick = () => {
  let toan = document.getElementById("inpToan").value,
    ly = document.getElementById("inpLy").value,
    hoa = document.getElementById("inpHoa").value;
  document.getElementById("tbKhoi1").innerHTML = tinhDTB(toan, ly, hoa);
};

document.getElementById("btnKhoi2").onclick = () => {
  let van = document.getElementById("inpVan").value,
    su = document.getElementById("inpSu").value,
    dia = document.getElementById("inpDia").value,
    english = document.getElementById("inpEnglish").value;
  document.getElementById("tbKhoi2").innerHTML = tinhDTB(van, su, dia, english);
};

// document.addEventListener(
//   (tinhDTB = (...e) => {
//     let n = 0;
//     return (
//       e.map((e) => {
//         n += parseFloat(e);
//       }),
//       (n / e.length).toFixed(2)
//     );
//   })
// ),
