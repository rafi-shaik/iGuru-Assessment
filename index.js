const getData = async() => {
    try{
        const response = await fetch("http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521")
        const data = await response.json()
        console.log(data)
        const studentDetails = data.Response.ProgressList.lstStudentInfo[0]
        // console.log(studentDetails)
        // const {ClassName,FatherName,MotherName,Grade,Name,DOB,RollNumber,SchoolAddress,SchoolEmail,SchoolName,SchoolPhn} = studentDetails
    }
    catch (error) {
        console.log(error)
    }
}

getData();


const mainContainer = document.getElementById("schoolDetailsCon");

const header = document.createElement("div");
header.classList.add("header-class");
mainContainer.appendChild(header);

const logoContainer = document.createElement("div");
header.appendChild(logoContainer);

const logo = document.createElement("img");
logo.setAttribute("src", "");
logo.setAttribute("alt", "school logo");
logoContainer.appendChild(logo);

const detailsCon = document.createElement("div");
detailsCon.classList.add("details-con");
header.appendChild(detailsCon);

const schoolDetails = document.createElement("div");
detailsCon.appendChild(schoolDetails);

const schoolName = document.createElement("h1");
schoolName.textContent = "MAHARAJA INTERNATIONAL SCHOOL";
schoolName.classList.add("school-name");
schoolDetails.appendChild(schoolName);

const schoolAddress = document.createElement("p");
schoolAddress.classList.add("para");
schoolAddress.textContent = "Near Abhilash Colony, Dewas Road, Affiliated to CBSE, Affiliation No: 103131157, Ph: 9874561230";
schoolDetails.appendChild(schoolAddress);

const schoolEmail = document.createElement("p");
schoolEmail.classList.add("para");
schoolEmail.textContent = "Visit us at: www.maharajainternationalschoolujjain.com";
schoolDetails.appendChild(schoolEmail);

const footer = document.createElement("div");
detailsCon.appendChild(footer);

const heading = document.createElement("h2");
heading.textContent = "REPORT CARD";
heading.classList.add("sub-heading");
footer.appendChild(heading);

const heading2 = document.createElement("h2");
heading2.classList.add("sub-heading");
heading2.textContent = "ACADEMIC SESSION: 2022-2023";
footer.appendChild(heading2);