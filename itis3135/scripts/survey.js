document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const coursesContainer = document.getElementById("courses");
  
    window.addCourse = function () {
      const courseDiv = document.createElement("div");
      courseDiv.className = "course";
      courseDiv.innerHTML = `
        <label>Course Code: <input type="text" name="course[]" required /></label>
        <label>Description: <input type="text" name="courseDesc[]" required /></label>
        <label>Reason: <input type="text" name="courseType[]" required /></label>
        <button type="button" onclick="removeCourse(this)">Delete Course</button>
      `;
      coursesContainer.appendChild(courseDiv);
    };
  
    window.removeCourse = function (button) {
      button.parentElement.remove();
    };
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
      const introDiv = document.createElement("div");
      introDiv.style.padding = "2em";
      introDiv.innerHTML = `
        <h2>${formData.get("firstName")} "${formData.get("nickname")}" ${formData.get("lastName")}</h2>
        <figure>
          <img src="${URL.createObjectURL(formData.get("img"))}" alt="${formData.get("imgAlt")}" style="width: 300px; height: auto; border: 1px solid black;">
          <figcaption>${formData.get("imgCaption")}</figcaption>
        </figure>
        <ul>
          <li><strong>Personal Background:</strong> ${formData.get("personalBackground")}</li>
          <li><strong>Professional Background:</strong> ${formData.get("professionalBackground")}</li>
          <li><strong>Academic Background:</strong> ${formData.get("academicBackground")}</li>
          <li><strong>Background in Web Development:</strong> ${formData.get("webBackground")}</li>
          <li><strong>Primary Computer Platform:</strong> ${formData.get("platform")}</li>
          <li><strong>Courses I'm Taking:</strong>
            <ul>
              ${getCourses(formData).map(course => `<li><strong>${course.code}:</strong> ${course.desc} — ${course.reason}</li>`).join("")}
            </ul>
          </li>
          <li><strong>Funny thing?</strong> ${formData.get("funnyThing")}</li>
          <li><strong>Anything else?</strong> ${formData.get("anythingElse")}</li>
        </ul>
      `;
  
      form.replaceWith(introDiv);
    });
  
    function getCourses(formData) {
      const courseCodes = formData.getAll("course[]");
      const courseDescs = formData.getAll("courseDesc[]");
      const courseReasons = formData.getAll("courseType[]");
      const courses = [];
  
      for (let i = 0; i < courseCodes.length; i++) {
        courses.push({
          code: courseCodes[i],
          desc: courseDescs[i],
          reason: courseReasons[i],
        });
      }
  
      return courses;
    }
  });
  