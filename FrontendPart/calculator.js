const calculateGPA = (grades) => {
  let total = grades.reduce((sum, g) => sum + g.marks, 0);
  return (total / grades.length) / 25;
};