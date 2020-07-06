var course = new Object();

// course.title = "Learn JS";
// course.instructor = "MRH";
// course.level = 1;
// course.published = true;
// course.views = 1;

var course = {
  title: "Learn JS",
  instructor: "MRH",
  level: 1,
  published: true,
  views: 1,
  updateViews: function(){
    return ++course.views;
  }
}
console.log(course);
course.updateViews()
console.log(course.views)

// Object constructors : are templates for creating objects
var currentDate = new Date();
function Course(title,level,published,views){
  this.title = title;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function(){
    return ++this.views;
  };
}

var course01 = new Course("JS", 1, true, 0);
console.log(course01);
var coursesArray = [
  new Course("c1", 1, false, 0),
  new Course("c2", 2, true, 99)
];
console.log(coursesArray[1]);
console.log(coursesArray[1].updateViews());

// closue
function doSomeMath(){
  var a=4,b=5;
  function multiply(){
    return a*b;
  }
  return multiply;
}

var theResult = doSomeMath();
console.log("The result is ", theResult())
