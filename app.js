const teachers = [
  { name: "Sir Romeo L. Desiar Jr.", subject: "General Math" },
  { name: "Sir Ysai Gandia", subject: "Kasaysayan" },
  { name: "Ma'am Lovely", subject: "Finite Math" },
  { name: "Ma'am Hannah", subject: "General Science" },
  { name: "Ma'am Rea", subject: "Life and Career Skills" },
  { name: "Ma'am Bethel Joi", subject: "Mabisang Komunikasyon" },
  { name: "Sir John Paul", subject: "Mabisang Komunikasyon" },
  { name: "Ma'am Brianna", subject: "Effective Communication" }
];

const teacherGrid = document.querySelector("#teacher-grid");

teachers.forEach((teacher, index) => {
  const card = document.createElement("a");
  card.className = "teacher-card";
  card.href = `messages.html?teacher=${encodeURIComponent(teacher.name)}`;
  card.setAttribute("aria-label", `Read the students' notes for ${teacher.name}, ${teacher.subject}`);

  const avatar = document.createElement("img");
  avatar.className = "teacher-avatar";
  avatar.alt = "";
  const name = document.createElement("span");
  name.className = "teacher-name";
  name.textContent = teacher.name;
  const subject = document.createElement("span");
  subject.className = "teacher-subject";
  subject.textContent = teacher.subject;
  card.append(avatar, name, subject);
  card.style.animationDelay = `${index * 35}ms`;
  teacherGrid.append(card);
});
