const studentScores = [
    {
      name: 'Neville Longbottom',
      scores: [90, 95, 100, 95, 100]
    },
    {
      name: 'Hermione Granger',
      scores: [100, 100, 100, 100, 100]
    },
    {
      name: 'Ron Weasley',
      scores: [70, 60, 45, 80, 75]
    },
    {
      name: 'Harry Potter',
      scores: [80, 75, 70, 85, 90]
    },
    {
      name: 'Draco Malfoy',
      scores: [90, 85, 70, 85, 90]
    },
    {
      name: 'Padma Patil',
      scores: [95, 100, 100, 95, 100]
    },
    {
      name: 'Terry Boot',
      scores: [95, 90, 100, 95, 100]
    },
    {
      name: 'Ernie Macmillan',
      scores: [90, 85, 100, 85, 90]
    },
    {
      name: 'Lavender Brown',
      scores: [80, 75, 70, 85, 90]
    },
    {
      name: 'Zacharias Smith',
      scores: [80, 75, 70, 85, 90]
    },
    {
      name: 'Gregory Goyle',
      scores: [0, 45, 30, 35, 20]
    },
  ];

  //get mean average scores for each inner array
//mean for one array
  //sum up all of the inner scores
    //find the mean average by dividing each inner score by the sum of inner scores
    // if the mean average > 90, return the name
    // iterate

    function calculateAverage (array) {
      let total = 0;
      for (i= 0; i < array.length; i++) {
        total += array[i]
    }
  return total/array.length };

  function printStudents (array) {
    let total = 0;
    for (i= 0; i < array.length; i++) {
      const averageScore = calculateAverage(array[i].scores);
      console.log (averageScore);
    }
  };

  if (averageScore > 90) {
    array[i].name}

  //array [i] = specific student 
  

  //getting to appear on page:

  document.querySelector('body').innerHTML= function studentName(){ return '<div> studentName </div>'};