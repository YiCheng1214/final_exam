function adjustText() {
    var studentIdElement = document.getElementById('studentId');
    var studentNameElement = document.getElementById('studentName');
  
    var currentFontFamilyId = studentIdElement.style.fontFamily;
    var currentFontFamilyName = studentNameElement.style.fontFamily;
    var currentColor = studentIdElement.style.color;
  
    var fontFamilies = ['Arial', 'Times New Roman', 'Verdana'];
    var colors = ['red', 'blue', 'green'];
  
    var currentFontIndex = fontFamilies.indexOf(currentFontFamilyId);
    var currentColorIndex = colors.indexOf(currentColor);
  
    var newFontIndex = (currentFontIndex + 1) % fontFamilies.length;
    var newColorIndex = (currentColorIndex + 1) % colors.length;
  
    studentIdElement.style.fontFamily = fontFamilies[newFontIndex];
    studentNameElement.style.fontFamily = fontFamilies[newFontIndex];
    studentIdElement.style.color = colors[newColorIndex];
    studentNameElement.style.color = colors[newColorIndex];
  }

  function adjustImage() {
    var profileImageElement = document.getElementById('profileImage');
  

    profileImageElement.classList.add('rounded');
  }

  function changeImage() {
    var profileImageElement = document.getElementById('profileImage');
  

    profileImageElement.src = '20231225_150322.jpg';
  
  
    profileImageElement.style.height = '500px'; 
    profileImageElement.style.transform = 'scale(0.5)'; 
  }