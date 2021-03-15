module.exports = function createDreamTeam(members) {
  let a =[];
  if (!Array.isArray(members)) return false;
  for(i=0;i<members.length;i++){
    if(typeof members[i] ==='string'){
      a.push(members[i].trim().charAt(0).toUpperCase());
    }
  };
  return a.sort().join('');
};
