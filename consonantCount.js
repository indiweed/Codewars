function consonantCount(str) {
    let count = 0;
    let nonConsArr = 'aeiuo'
    let symb = '^$&^#0123456789_'
    
    let strSplit = str.toLowerCase().split('');
    
    let newStrSplit = strSplit.filter(function(str) {
      return /\S/.test(str);
  });
    
    for (const con of newStrSplit) {
           if (!nonConsArr.includes(con) && typeof con === 'string' && !symb.includes(con)) {
              count ++
           } 
     }
   return count
  }