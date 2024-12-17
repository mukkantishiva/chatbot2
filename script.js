
//logo resize
document.getElementById("resize").addEventListener("click", function(){
    const image = document.getElementById("chatbotLogo");
    image.style.height='0px';
    // image.style.paddingLeft="15px";
    // image.style.paddingTop="10px";
});




// new section added to improvise chatbot
function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    const CHATBOT = document.getElementById('CHATBOT');
    chatbox.style.display = chatbox.style.display === 'none' ? 'flex' : 'flex';//none->flex
    CHATBOT.style.display = CHATBOT.style.display === 'none' ? 'flex' : 'flex';
}


//double tap to close the chat box,chatbox header, and reesize the logo
function toggleChat2() {
    const chatbox = document.getElementById('chatbox');
    const CHATBOT = document.getElementById('CHATBOT');
    const image = document.getElementById("chatbotLogo");
    image.style.height='40px';
    chatbox.style.display = chatbox.style.display === 'flex' ? 'none' : 'none';
    CHATBOT.style.display = CHATBOT.style.display === 'flex' ? 'none' : 'none';
}



function sendMessage() {
    const userInput = document.getElementById('userInput');
    const userMessage = userInput.value;
    const messages = document.getElementById('messages');

    if (userMessage.trim() === "") return;

    // Display user message
    messages.innerHTML += `<div style="margin : 0 0 4px 50px ;  text-align : right ;  background-color: rgb(218, 247, 247);" >User: ${userMessage}</div>`;
    userInput.value = '';

    // Generate bot response
    const botResponse = getBotResponse(userMessage);
    messages.innerHTML += `<div style="margin : 0 50px 4px 0 ;  text-align : left ;  background-color: rgb(218, 247, 247);" >Bot: ${botResponse}</div>`;
    messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
}



function getBotResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("courses")||lowerInput.includes("course")) {
        return " MBBS, B.Tech, M.tech, B.Sc. in Allied Health Sciences, M.Sc. in Allied Health Sciences, Ph.D. in Allied Health Sciences, B.Sc. in Agriculture, M.Sc. in Agriculture, Ph.D. in Agriculture, B.Sc. in Physiotherapy, M.Sc. in Physiotherapy, Ph.D. in Physiotherapy, B.Sc. in Nursing, M.Sc. in Nursing, Ph.D. in Nursing, B.Pharm (Bachelor of Pharmacy), M.Pharm (Master of Pharmacy), Ph.D. in Pharmacy";
    } else if (lowerInput.includes("contact")) {
        return "You can reach us at    Toll Free Number: 1800-5322-222, +91 70944 58021 | 70944 58022, enquiry@dsuniversity.ac.in, www.dsuniversity.ac.in";
    } else if (lowerInput.includes("about")) {
        return "Our college offers a variety of programs to help students achieve their academic goals.Dhanalakshmi Srinivasan University (DSU) in Tiruchirappalli, Tamil Nadu, was established under the Tamil Nadu Private Universities Act, 2019. DSU offers a wide range of multidisciplinary academic programs, including medicine, paramedical, engineering, and agricultural sciences. The university's motto, “education for the real world,” reflects its commitment to nurturing future generations. With a green campus, state-of-the-art infrastructure, and top-class faculty, DSU serves the needs of both national and international students.";
    } else if (lowerInput.includes("admissions")) {
        return "You can apply for admission through our website. The application deadline is June 30.";
    } else if (lowerInput.includes("tuition")) {
        return "Tuition fees vary by program. Please check the following link 'https://www.dsuniversity.ac.in/ad-fee-structure.php' for detailed information.";
    } else if (lowerInput.includes("scholarships")) {
        return "We offer various scholarships based on merit and need. Visit our scholarships page for more details.";
    } else if (lowerInput.includes("campus")) {
        return "Our campus is located in the heart of the city, with modern facilities and a vibrant student community.";
    } else if (lowerInput.includes("library")) {
        return "Our library is open from 8 AM to 10 PM and offers a wide range of resources for students.";
    } else if (lowerInput.includes("events")) {
        return "We host various events throughout the year, including workshops, seminars, and cultural festivals.";
    }else if (lowerInput.includes("infra") || lowerInput.includes("infrastructure") || lowerInput.includes("infrastructures")) {
        return "Our college has the following infrastructure Serene & stimulating ambience created by the appropriate use of technology 150 Acres of Campus, 80+Multimedia Classrooms, 8500+Flowering plants,1 Million sqft of built-up area";
    } 
    // Programs Offered:

    else if (lowerInput.includes("majors") || lowerInput.includes("programs")) {
        return "We offer a variety of majors including Business, Engineering, Psychology, and more.";
    }else if (lowerInput.includes("available majors")) {
        return "We offer a wide range of majors, including Business Administration, Computer Science, Engineering, Biology, Psychology, and more.";
    } else if (lowerInput.includes("course catalog")) {
        return "Our course catalog is available online and includes detailed descriptions of all our courses.";
    } else if (lowerInput.includes("online courses")) {
        return "We offer a variety of online courses across different disciplines.";
    } else if (lowerInput.includes("graduate programs")) {
        return "Our graduate programs include Master's and Ph.D. degrees in various fields.";
    } else if (lowerInput.includes("many courses") || lowerInput.includes("courses count") || lowerInput.includes("course count") || lowerInput.includes("of courses")) {
        return "We offer a variety of online courses across different disciplines.";
    } 
    
    
    // Application Process:
    
    else if (lowerInput.includes("how to apply")) {
        return "To apply, please visit our admissions page and follow the instructions provided.";
    }else if(lowerInput.includes("admissions requirements")) {
        return "Our admissions requirements include a completed application form, high school transcripts, standardized test scores, letters of recommendation, a personal statement, and proof of English proficiency for international students.";
    } else if (lowerInput.includes("application deadlines")) {
        return "Application deadlines vary by program. Please check our admissions page for the most up-to-date information.";
    } else if (lowerInput.includes("how to apply")) {
        return "To apply, complete the online application form, submit your transcripts, test scores, letters of recommendation, and personal statement. Detailed instructions are available on our admissions website.";
    }
    
   
    
    // Financial Aid:
    
    else if (lowerInput.includes("financial aid")) {
        return "Financial aid options are available.";
    }else if (lowerInput.includes("tuition fees")) {
        return "Tuition fees vary by program and residency status. Visit our tuition and fees page for detailed information.";
    } else if (lowerInput.includes("scholarships available")) {
        return "We offer a range of scholarships for both undergraduate and graduate students. Visit our scholarships page to learn about eligibility and application procedures.";
    } else if (lowerInput.includes("financial aid process")) {
        return "The financial aid process involves submitting the FAFSA form, providing necessary documentation, and meeting application deadlines. ";
    } else if (lowerInput.includes("payment plans")) {
        return "We offer flexible payment plans to help manage tuition costs. Visit our payment plans page for more information.";
    }    
    
    // Student Life:
    
    else if (lowerInput.includes("student life")) {
        return "Student life at our university includes various clubs, organizations, and activities to engage in.";
    }else if (lowerInput.includes("student organizations")) {
        return "We have a diverse range of student organizations, including academic clubs, cultural groups, and recreational clubs.";
    } else if (lowerInput.includes("hostels")) {
        return "We offer a variety of housing options, including dormitories, hostels with best infrastructures and off-campus housing seperately for girls and boys.";
    } else if (lowerInput.includes("campus events") || lowerInput.includes("culturals") || lowerInput.includes("fests")) {
        return "Our campus hosts a variety of events throughout the year, including lectures, concerts, and sports events. Check our events calendar for upcoming activities.";
    } else if (lowerInput.includes("dining services") || lowerInput.includes("mess") || lowerInput.includes("food")) {
        return "Our dining services offer a variety of meal plans and dining options to suit different tastes and dietary needs.";
    }
    
    
    // Housing,Health and Campus facilities
    
    else if (lowerInput.includes("housing") || lowerInput.includes("dorms")) {
        return "We offer on-campus housing options. Visit our housing page for more details on accommodations.";
    } else if (lowerInput.includes("health services") || lowerInput.includes("health")) {
        return "Our health services provide medical care, immunizations, and wellness programs.";
    } else if (lowerInput.includes("campus safety") || lowerInput.includes("safety")) {
        return "Campus safety is a top priority. Our campus security team provides 24/7 patrols and emergency response.";
    } else if (lowerInput.includes("emergency contacts")) {
        return "In case of an emergency, contact campus security at (123) 456-7890. Visit our emergency contacts page for additional emergency numbers.";
    }
    
    
    // Career Services:// Health Services:// support services
    
    else if (lowerInput.includes("career services")) {
        return "Our career services office provides resources for job placement, internships, and resume building.";
    }else if (lowerInput.includes("health services")) {
        return "Our health center offers medical services, counseling, and wellness programs for students.";
    }else if (lowerInput.includes("academic advising")) {
        return "Our academic advising services help students with course selection, career planning, and academic success.";
    } else if (lowerInput.includes("counseling services")) {
        return "Our counseling services offer support for mental health and well-being.";
    } else if (lowerInput.includes("career services")) {
        return "Our career services provide job search assistance, resume workshops, and career counseling.";
    } else if (lowerInput.includes("tutoring services")) {
        return "We offer tutoring services for a variety of subjects to help students succeed academically.";
    }
    
    
    // International Students:
    
    else if (lowerInput.includes("international students")) {
        return "We have dedicated services for international students, including visa assistance and orientation programs.";
    }else if (lowerInput.includes("international student services")) {
        return "Our international student services provide support for visa processing, cultural adjustment, and academic success.";
    } else if (lowerInput.includes("visa requirements")) {
        return "Visa requirements for international students vary by country. ";
    } else if (lowerInput.includes("language support")) {
        return "We offer language support services, including English language courses and conversation groups.";
    }
    
    
    
    
    // Extracurricular Activities:
    
    else if (lowerInput.includes("clubs") || lowerInput.includes("activities")) {
        return "We have a variety of clubs and extracurricular activities, including sports, arts, and academic organizations.";
    }else if (lowerInput.includes("sports teams") || lowerInput.includes("sports") || lowerInput.includes("games") ) {
        return "Our sports teams compete in various leagues and championships.";
    } else if (lowerInput.includes("clubs and societies")) {
        return "We have a wide range of clubs and societies, from academic groups to hobby clubs.";
    } else if (lowerInput.includes("volunteer opportunities")) {
        return "We offer numerous volunteer opportunities both on and off campus.";
    }
    
    
    // Technology Resources:
    
    else if (lowerInput.includes("IT support") || lowerInput.includes("technology")) {
        return "Our IT support team is available to assist with any technical issues. You can reach them at it-support@college.edu.";
    } else if (lowerInput.includes("online resources")) {
        return "We offer a variety of online resources, including databases, e-books, and academic journals.";
    } else if (lowerInput.includes("library database access")) {
        return "Our library provides access to numerous databases and digital resources. ";
    }
    
    
    // Alumni Relations:
    
    else if (lowerInput.includes("alumni")) {
        return "Our alumni network is active and offers various events and resources for graduates.";
    } else if (lowerInput.includes("alumni network")) {
        return "Our alumni network connects graduates with resources, events, and networking opportunities.";
    } else if (lowerInput.includes("alumni events")) {
        return "We host various alumni events throughout the year, including reunions and networking events.";
    }
    
    
    // Feedback and Complaints:
    
    else if (lowerInput.includes("feedback") || lowerInput.includes("complaint")) {
        return "We value your feedback. Please visit our website to submit your comments or concerns.";
    } else if (lowerInput.includes("how to give feedback")) {
        return "We welcome your feedback. Visit our feedback page to share your thoughts and suggestions.";
    } else if (lowerInput.includes("complaint process")) {
        return "If you have a complaint, please follow the steps outlined on our complaint process page to ensure it is addressed promptly.";
    }
    
    
    // Transportation:
    
    else if (lowerInput.includes("transportation") || lowerInput.includes("parking")) {
        return "We offer various transportation options, including public transit and parking facilities for students.";
    }
    
    // Study Resources and campus facilities
    
    else if (lowerInput.includes("tutoring") || lowerInput.includes("study resources")) {
        return "Tutoring services are available for many subjects. Check our academic support page for more information.";
    }else if (lowerInput.includes("library hours")) {
        return "Our library is open Monday through Friday from 8 AM to 10 PM, and on weekends from 10 AM to 6 PM. Visit our library page for more information.";
    } else if (lowerInput.includes("gym facilities")) {
        return "Our gym facilities include a fitness center, swimming pool, and sports courts. ";
    } else if (lowerInput.includes("study spaces")) {
        return "We offer a variety of study spaces, including quiet zones, group study rooms, and computer labs.";
    }
    
        
    else {
        return "I'm sorry, I didn't understand that. Can you please ask something else?";
    }
}