const books=[
    {title:'Book one',genre:'fiction',publish:1981,edition:2004},
    {title:'Book Two',genre:'Non-fiction',publish:2003,edition:2005},
    {title:'Book Three',genre:'History',publish:1999,edition:2008},
    {title:'Book four',genre:'Non-fictious',publish:1997,edition:2001}

];
// const userBooks=books.filter((bk)=>bk.genre==='History')
const userBooks=books.filter((bk)=>bk.publish>=2000)

console.log(userBooks);
