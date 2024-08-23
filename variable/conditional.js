let mhs = {
  nama: "fullan",
  age:20,
  major: "TRMG",
  skills: ['sysadmin', 'OOP', 'Design'],
  pooor: true, //miskin
}
//   console.log('Mahasiswa boleh daftar :' + mhs.age > 17)

// if (mhs.major == "TRMG") {
//     console.log(mhs.name + " jurusan TRMG");  
// } else if (mhs.major == "TRKJ") {
//   console.log(mhs.name + " jurusan TRKJ");  
//  } else if (mhs.major == "TRPL") {
//   console.log(mhs.name + " jurusan TRPL");
// } else {
//   console.log(mhs.name + " jurusan " + mhs.major);}

// Ternary
// console.log(mhs.major == "TRPL" ? mhs.name + "jurusan TRPL" : mhs.name + bukan "TRPL")

//Switch case
// switch (mhs.major) {
//   case "TRMG":
//     console.log(mhs.name + " jurusan TRMG");
//     break;
//   case "TRKJ":
//     console.log(mhs.name + " jurusan TRKJ");
//     break;
//   case "TRPL":
//     console.log(mhs.name + " jurusan TRPL");
//     break;
//   default:
//     console.log(mhs.major + " bukan anak IDN "); 
// }

// conditional function
//kriteria : umur kurang dari 21, miskin, skill lebih dari 2

function cekKelulusan(peserta) {
  let name = peserta.name;
  let age = peserta.age;
  let poor = peserta.poor;
  let skills = peserta.skills;
  // console.log('function jalan' , peserta)
  if (age < 21 && poor == true && skills.length > 2) {
      // Peserta Lulus
      console.log (name + " kamu lulus");
  } else if (age < 21 || poor == true || skills.length > 2) {
      // Peserta Hampir Lulus
      console.log (name + " kamu hampir lulus");
  } else {
      // Peserta Tidak Lulus
      console.log (name + " kamu tidak lulus");
  }
}
cekKelulusan(mhs)