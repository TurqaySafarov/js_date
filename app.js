
//? TASK

// 1. Her defe ferqli rengde ekrana cixmali (console.log(${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye);)

// let brithday=new Date ("03-28-2024");
// setInterval(() => {
//     let now= new Date();
//     let between=now-brithday;
//     let saniye=Math.trunc((between/1000)%60)
//     let deqiqe=Math.trunc(between/(1000*60)%60);
//     let saat =Math.trunc((between/(1000*60*60))%24);
//     let gun=Math.trunc(between/(1000*60*60*24));
//     let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//     console.log(`%c${gun} gün %c${saat} saat %c${deqiqe} deqiqe %c${saniye} saniye`, `color:${color};`, `color:${color};`, `color:${color};`, `color:${color};`);
// }, 1000);


//? #############################################################################################################################################


// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.

// let students = [
//     {
//         name: "samir",
//         Surname: "Aliyev",
//         age: 26,
//         hobbies: ["reading", "swimming", "coding"],
//         skills: [" Patience", " Positivity", "  Coaching", "Mediating"],
//     },
//     {
//         name: "Ali",
//         surname: "Hasanli",
//         age: 27,
//         hobbies: ["reading", "swimming", "coding"],
//         skills: [" Patience", " Positivity", "  Coaching", "Mediating"],

//     },
//     {
//         name: "Orxan",
//         surname: "Mammadov",
//         age: 20,
//         hobbies: ["reading", "swimming", "coding"],
//         skills: [" Patience", " Positivity", "  Coaching", "Mediating"],
//     },
//     {
//         name: "govhar",
//         surname: "Gahramanova",
//         age: 21,
//         hobbies: ["reading", "swimming", "coding"],
//         skills: [" Patience", " Positivity", "  Coaching", "Mediating"],
//     },
//     {
//         name: "ulduz",
//         surname: "Aliyeva",
//         age: 22,
//         hobbies: ["reading", "swimming", "coding"],
//         skills: [" Patience", " Positivity", "  Coaching", "Mediating"],
//     },
//     {
//         name: "Aysu",
//         surname: "Samadli",
//         age: 23,
//         hobbies: ["reading", "swimming", "coding"],
//         skills: [" Patience", " Positivity", "  Coaching", "Mediating"],
//     },
//     ]

// console.log(students);

// let studentNames = students.map(student => student.name);

// let studentName = prompt("Tələbənin adını daxil edin:");

// let index = studentNames.indexOf(studentName);

// if (index !== -1) {
//     console.log(students[index]);
// } else {
//     console.log("Belə bir tələbə tapılmadı.");
// }


//? #############################################################################################################################################


// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h

// let word = prompt("Bir söz daxil edin:");
// let length = word.length;


// for (let i = 0; i < length; i++) {
//     console.log(word.slice(0, length - i));
// }

// for (let i = 1; i < length; i++) {
//     console.log(word.slice(0, i + 1));
// }



//? #############################################################################################################################################



// 4. toLocaleDateString(); ->arashdir

// toLocaleDateString(); - metodu cihaz ayarlarına uyğun olaraq tarixi formatlayır.

// let date = new Date();
// let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// let formattedDate = date.toLocaleDateString('az', options); // Bu sətir "az" dil kodunu istifadə edir
// console.log(formattedDate); 

//? ###############################################################################################################################################
