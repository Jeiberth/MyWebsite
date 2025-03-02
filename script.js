

function ChangeColor() {
    // Select all elements where the CSS variable is applied
    var elements = document.querySelectorAll('*');
  
    // Get the current values of the CSS variables
    var currentC1 = getComputedStyle(document.documentElement).getPropertyValue('--c1').trim();
    var currentC2 = getComputedStyle(document.documentElement).getPropertyValue('--c2').trim();
    var currentC3 = getComputedStyle(document.documentElement).getPropertyValue('--c3').trim();
    var currentC4 = getComputedStyle(document.documentElement).getPropertyValue('--c4').trim();
    var currentC5 = getComputedStyle(document.documentElement).getPropertyValue('--c5').trim();
    var currentC6 = getComputedStyle(document.documentElement).getPropertyValue('--c6').trim();
    
  
    // Define the new values for '--c5' and '--c6'
    var newC5 = currentC5 === 'rgba(255, 255, 255, 0.259)' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.259)';
    var newC6 = currentC6 === 'rgba(255, 255, 255, 0.323)' ? 'rgba(0, 0, 0, 0.19)' : 'rgba(255, 255, 255, 0.323)';
  
    // Loop through the NodeList
    elements.forEach(function(element) {
      // Swap the values of '--c1' and '--c2'
      element.style.setProperty('--c1', currentC2);
      element.style.setProperty('--c2', currentC1);
      
      // Swap the values of '--c3' and '--c4'
      element.style.setProperty('--c3', currentC4);
      element.style.setProperty('--c4', currentC3);
      
      // Toggle the values for '--c5' and '--c6'
      element.style.setProperty('--c5', newC5);
      element.style.setProperty('--c6', newC6);
    });

    const images = document.querySelectorAll('.media a img');
            images.forEach(img => {
                const currentFilter = getComputedStyle(img).getPropertyValue('--pp');
                if (currentFilter.trim() === 'invert(100%)') {
                    img.style.setProperty('--pp', 'invert(0%)');
                } else {
                    img.style.setProperty('--pp', 'invert(100%)');
                }
            });

  }


  function ChangeContent1() {     document.getElementById("myHeader").innerHTML="<b>Arduino:</b><br>Inspired by a line-following robot competition at Concordia University in 2023, I embraced the challenge of learning Arduino to bring creative hardware projects to life.";     }
  function ChangeContent2() {     document.getElementById("myHeader").innerHTML="<b>C++:</b><br> Driven by curiosity, I independently delved into C++ and honed my skills in this powerful programming language.  ";  }
  function ChangeContent3() {     document.getElementById("myHeader").innerHTML="<b>CSS:</b><br> With foundational knowledge from school, I’m enhancing my CSS expertise by crafting responsive websites for both mobile and desktop as part of my personal portfolio.  ";     }
  function ChangeContent4() {     document.getElementById("myHeader").innerHTML="<b>English:</b><br> A lifelong journey of learning English culminated in a significant improvement over two years of immersion in Canada, from Toronto in 2022 to Montreal in 2023.  ";     }
  function ChangeContent5() {     document.getElementById("myHeader").innerHTML="<b>French:</b><br> Living in Montreal, I apply my self-taught basic to intermediate French daily, continuously improving my proficiency.  ";     }
  function ChangeContent6() {     document.getElementById("myHeader").innerHTML="<b>GitHub:</b><br> My GitHub repository is a testament to my programming journey, showcasing a diverse range of projects that reflect my growth as a developer.  ";     }
  function ChangeContent7() {     document.getElementById("myHeader").innerHTML="<b>HTML:</b><br> Introduced to HTML in school, it was the gateway that led me to explore the depths of CSS and JavaScript.";     }
  function ChangeContent8() {     document.getElementById("myHeader").innerHTML="<b>Java:</b><br> Java holds a special place as my first programming language, laying the foundation for my understanding of coding principles and logic.  ";     }
  function ChangeContent9() {     document.getElementById("myHeader").innerHTML="<b>JavaScript:</b><br> Embracing JavaScript, the lingua franca of the web, has been a delightful addition to my skill set, powering the very website we’re interacting on.  ";     }
  function ChangeContent10() {     document.getElementById("myHeader").innerHTML="<b>Spanish:</b><br> As a native speaker, Spanish is the language of my heart and heritage, hailing from Colombia.  ";     }
  function ChangeContent11() {     document.getElementById("myHeader").innerHTML="<b>SQL Server:</b><br> Navigating through vast databases with SQL Server comes naturally to me, and I find it easy to adapt to other database systems due to my comprehensive understanding.";     }
  function ChangeContent12() {     document.getElementById("myHeader").innerHTML="<b>Linux:</b><br> My experience with Linux extends from managing virtual machines to executing complex commands in the console, underscoring my versatility in various computing environments.  ";     }
  function ChangeContent13() {     document.getElementById("myHeader").innerHTML="<b>React:</b><br> I’m a developer rapidly advancing my React skills, currently building a user-friendly template for small businesses.  ";     }

  function ChangeContent14() {     document.getElementById("myHeader").innerHTML="<b>Laravel:</b><br>Gained expertise through D2 projects, mastering artisan, queues, migrations, Eloquent, authentication, middleware, and scalable app development.<br>";     }
  function ChangeContent15() {     document.getElementById("myHeader").innerHTML="<b>Vue:</b><br>Built proficiency with Option and Composition API, Vuex, Pinia, Axios, broadcasting, routing, and component management for dynamic, interactive web apps.";     }
  function ChangeContent16() {     document.getElementById("myHeader").innerHTML="<b>Quasar:</b><br>Learned by developing the Trueque mobile app, leveraging Quasar for responsive UI and seamless mobile app development.";     }
  function ChangeContent17() {     document.getElementById("myHeader").innerHTML="<b>Capacitor:</b><br>Developed Trueque app, customizing splash/logo, and building app bundles for Play Store deployment.";     }
  function ChangeContent18() {     document.getElementById("myHeader").innerHTML="<b>AWS:</b><br>Worked with S3 for image storage and Amplify for smooth website deployment.";     }
  function ChangeContent19() {     document.getElementById("myHeader").innerHTML="<b>Jira:</b><br>Managed projects by utilizing task assignment, scheduling, sprint planning, backlog prioritization, progress tracking, and collaboration tools for efficient workflows.";     }


  function ChangeToOriginalContent(){
    document.getElementById("myHeader").innerHTML='<b style="font-size: 1.5em">My abilities</b>';
  }
  
  //    transform: rotateY(180deg);

  function Rotate1(){     document.getElementById("bc1").style.display = 'flex'; document.getElementById("bc2").style.display = 'none';  document.getElementById("bc3").style.display = 'none';  document.getElementById("bc4").style.display = 'none';          document.getElementById("infoc").style.transform = 'rotateY(180deg)';  }
  function Rotate2(){     document.getElementById("bc1").style.display = 'none'; document.getElementById("bc2").style.display = 'flex';  document.getElementById("bc3").style.display = 'none';  document.getElementById("bc4").style.display = 'none';          document.getElementById("infoc").style.transform = 'rotateY(180deg)';  }
  function Rotate3(){     document.getElementById("bc1").style.display = 'none'; document.getElementById("bc2").style.display = 'none';  document.getElementById("bc3").style.display = 'flex';  document.getElementById("bc4").style.display = 'none';          document.getElementById("infoc").style.transform = 'rotateY(180deg)';  }
  function Rotate4(){     document.getElementById("bc1").style.display = 'none'; document.getElementById("bc2").style.display = 'none';  document.getElementById("bc3").style.display = 'none';  document.getElementById("bc4").style.display = 'flex';          document.getElementById("infoc").style.transform = 'rotateY(180deg)';  }


function FlipInfoOriginal() {
    var infoc = document.getElementById("infoc");
    infoc.style.transform = 'none'; // Reset the transform
    // Force reflow/repaint
    infoc.offsetWidth;
    // Apply the new transformation
    infoc.style.transform = 'rotateY(9deg)';
}
