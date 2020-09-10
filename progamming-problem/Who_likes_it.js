function likes(names) {
  // TODO
  let string = "";
  if(names.length === 0){
    string = "no one likes this";
  }else if(names.length === 1){
    string = `${names[0]} likes this`;
    
  }else if(names.length === 2){
    string = `${names[0]} and ${names[1]} like this`;
  }else if(names.length === 3){
    string =`${names[0]}, ${names[1]} and ${names[2]} like this`;
  }else{
    string =`${names[0]}, ${names[1]} and ${names.length -2} others like this`;
  }
  return string;
}